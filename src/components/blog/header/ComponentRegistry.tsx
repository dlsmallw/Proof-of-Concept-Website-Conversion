import type { HTMLAttributes } from "react";

import { ArticleHeaderContainer, ArticleHeaderTitle, ArticleHeaderSubtitle, ArticleHeaderMeta } from "./index";

const headerComponentRegistry = {
    headercontainer: (props: HTMLAttributes<HTMLElement>) => { 
        const { metafields, children } = props as { metafields: string, children: React.ReactNode };
        const parsedMetaFields = JSON.parse(metafields);
        return <ArticleHeaderContainer metaFields={parsedMetaFields} {...props} >{children}</ArticleHeaderContainer>; 
    },
    headertitle: (props: HTMLAttributes<HTMLElement>) => { 
        return <ArticleHeaderTitle {...props} children={props.children} />; 
    },
    headersubtitle: (props: HTMLAttributes<HTMLElement>) => { 
        return <ArticleHeaderSubtitle {...props} children={props.children} />; 
    },
    headermeta: (props: HTMLAttributes<HTMLElement>) => { 
        const { updatedDate, readingTime, link } = props as { updatedDate?: string; readingTime?: string; link?: { href: string; text: string } };
        return <ArticleHeaderMeta updatedDate={updatedDate} readingTime={readingTime} link={link} {...props} />; 
    },
}

export default headerComponentRegistry;