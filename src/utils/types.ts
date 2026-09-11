import type { GrayMatterFile } from "gray-matter";

interface FrontMatter {
    title: string;
    createdDate?: Date;
    updatedDate?: Date;
    readTime? : number;
    metaLink?: {
        label: string;
        href: string;
    };
    slug?: string;
    description: {
        name: string;
        content: string;
    };
    featured?: boolean;
    urgentUpdate?: boolean;
    link: {
        rel: string;
        href: string;
    };
    faq?: {
        question: string;
        answer: string;
    }[];
}

type FRONTMATTER = FrontMatter | GrayMatterFile<string>['data'];

export type { FrontMatter, FRONTMATTER };