import ReactMarkdown from 'react-markdown';
import { useLoaderData, type LoaderFunctionArgs } from 'react-router-dom';
import rehypeRaw from 'rehype-raw';

import ComponentRegistry from '../../components/blog/ComponentRegistry';
import { processBlogMarkdown } from '../../utils/markdown';

import routesJSON from 'src/static/routes.json';

// const seo = {
//     title: frontMatter.title,
//     description: frontMatter.description,
//     url: frontMatter.link?.href,
//     type: "article",
//     jsonLd: {
//         "@context": "https://schema.org",
//         "@type": "Article",
//         "headline": frontMatter.title,
//         "description": frontMatter.description,
//         "url": frontMatter.link?.href,
//         "publisher": {
//             "@type": "Organization",
//             "name": "Mil-Multiplier",
//             "url": "https://milmultiplier.com"
//         },
//         "datePublished": "2026-03-19",
//         "dateModified": "2026-03-19"
//     }
// };

// eslint-disable-next-line react-refresh/only-export-components
export async function clientLoader({ params }: LoaderFunctionArgs) {
        const { slug } = params as { slug: string };
        const frontMatter = routesJSON["blog"][slug as keyof typeof routesJSON["blog"]];
        const mdRaw = (await import(`../../data/blog/articles/${slug}.md?raw`)).default;
        const markdown = await processBlogMarkdown(String(mdRaw), frontMatter);
        return { frontMatter, markdown };
};

export default function BlogArticle() {
    const { frontMatter, markdown } = useLoaderData();
    console.log("Front Matter:", frontMatter);

    return (
        <div>
            {markdown ? (
                <ReactMarkdown components={ComponentRegistry} rehypePlugins={[rehypeRaw]} >{`${markdown}`}</ReactMarkdown>
            ) : (
                <div className='container'>Loading...</div>
            )}
        </div>
    );
};
