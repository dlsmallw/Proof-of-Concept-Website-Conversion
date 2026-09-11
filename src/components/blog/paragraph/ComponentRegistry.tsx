import type { HTMLAttributes } from "react";

import { ArticleContainer, ParagraphHeader, TextSpan } from "./index";
import Breadcrumbs from "../../misc/breadcrumbs";

const articleParagraphComponentRegistry = {
    contentcontainer: (props: HTMLAttributes<HTMLElement>) => { 
        return <ArticleContainer {...props} >{props.children}</ArticleContainer>; 
    },
    breadcrumbs: (props: HTMLAttributes<HTMLElement>) => { 
        const { crumbs } = props as { crumbs: string };
        const parsedCrumbs = JSON.parse(crumbs);
        return <Breadcrumbs crumbs={parsedCrumbs} />; 
    },
    paragraphheader: (props: HTMLAttributes<HTMLElement>) => { 
        return <ParagraphHeader {...props} children={props.children} />; 
    },
    p: (props: HTMLAttributes<HTMLElement>) => {
        return <TextSpan {...props} children={props.children} />;
    }
}


export default articleParagraphComponentRegistry;