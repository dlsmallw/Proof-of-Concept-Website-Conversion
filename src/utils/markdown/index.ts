import rehypeFormat from 'rehype-format';
import rehypeStringify from 'rehype-stringify';
import remarkDirective from 'remark-directive';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import type { VFile } from 'vfile';
import {unified} from 'unified';

import {visit} from 'unist-util-visit'
import {h} from 'hastscript'
import type {Root} from 'mdast';
import type { FRONTMATTER } from '../types';
import remarkFrontmatter from 'remark-frontmatter';

async function markdownToNodeTree(mdStr: string, plugin: () =>(tree: Root) => void) {
    return await unified()
        .use(remarkParse)
        .use(remarkDirective)
        .use(plugin)
        .use(remarkRehype)
        .use(rehypeFormat)
        .use(rehypeStringify)
        .use(remarkFrontmatter, ['yaml', 'toml'])
        .process(mdStr);
}

function blogDirectivePlugin(frontMatter: FRONTMATTER) {
    return () => {
        return (tree: Root) => {
            visit(tree, (node) => {
                if (node.type === 'textDirective' || node.type === 'leafDirective' || node.type === 'containerDirective') {
                    const data = node.data || (node.data = {});
                    const attr = node.attributes || {};

                    if (node.name === 'headerContainer') {
                        const metaFields = {
                            createdDate: frontMatter.createdDate,
                            updatedDate: frontMatter.updatedDate,
                            readingTime: frontMatter.readTime,
                        };
                        attr.metaFields = JSON.stringify(metaFields);
                    } else if (node.name === 'breadcrumbs') {
                        // You can use frontMatter data to customize the breadcrumbs if needed
                        // For example, you could add a "Home" link or use a specific structure based on the frontMatter
                        const crumbs = [
                            { label: "Home", href: "/" }
                        ];

                        if (frontMatter.link) {
                            const { href } = frontMatter.link;
                            const path = (new URL(href)).pathname;
                            if (path.split('/').filter(Boolean).length === 2) {
                                crumbs.push({
                                    label: "Blog",
                                    href: "/blog"
                                }, {
                                    label: frontMatter.title,
                                    href: `/blog/${path.split('/').pop()}`
                                })
                            } else {
                                let precedingSegment = "";
                                for (const segment of path.split('/').filter(Boolean)) {
                                    precedingSegment += `/${segment}`;
                                    const label = segment.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
                                    crumbs.push({ label, href: precedingSegment });
                                }
                            }
                        }

                        attr.crumbs = JSON.stringify(crumbs);
                    } else if (node.name === 'faq') {
                        const faqs = frontMatter.faq;
                        attr.faqs = JSON.stringify(faqs);
                    }

                    const hast = h(node.name, attr)

                    data.hName = hast.tagName;
                    data.hProperties = hast.properties;
                }
            });
        };
    }
}

async function processBlogMarkdown(mdStr: string, frontMatter: FRONTMATTER): Promise<VFile> {
    return await markdownToNodeTree(mdStr, blogDirectivePlugin(frontMatter));
}

export { processBlogMarkdown };