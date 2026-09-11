import type { HTMLAttributes } from "react";

import { ArticleLink, ArticleDivider, FAQElement } from "./index";
import { BoldText, GoldText } from "../../misc/text";

const miscComponentRegistry = {
    strong: (props: HTMLAttributes<HTMLElement>) => { 
        return <BoldText {...props} children={props.children} />; 
    },
    goldtext: (props: HTMLAttributes<HTMLElement>) => { 
        return <GoldText {...props} children={props.children} />; 
    },
    a: (props: HTMLAttributes<HTMLAnchorElement>) => {
        const { href } = props as { href: string };
        return <ArticleLink href={href || ''} {...props} children={props.children} />;
    },
    faq: (props: HTMLAttributes<HTMLElement>) => {
        const { faqs } = props as { faqs: string };
        const parsedFaqs = JSON.parse(faqs);
        return (
            <FAQElement faqs={parsedFaqs} />
        );
    },
    articledivider: (props: HTMLAttributes<HTMLElement>) => { 
        return <ArticleDivider {...props} />
    }
}

export default miscComponentRegistry;