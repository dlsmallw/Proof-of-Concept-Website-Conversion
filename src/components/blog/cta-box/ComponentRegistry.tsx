import type { HTMLAttributes } from "react";

import { CTABoxContainer, CTABoxParagraph, CTABoxButton } from "./index";

const ctaBoxComponentRegistry = {
    ctabox: (props: HTMLAttributes<HTMLElement>) => { 
        return <CTABoxContainer {...props} children={props.children} />; 
    },
    ctaboxparagraph: (props: HTMLAttributes<HTMLElement>) => { 
        return <CTABoxParagraph {...props} children={props.children} />; 
    },
    ctabtn: (props: HTMLAttributes<HTMLElement>) => { 
        const { text, link } = props as { text: string; link: string };
        return <CTABoxButton text={text} link={link} {...props} />; 
    },
}

export default ctaBoxComponentRegistry;