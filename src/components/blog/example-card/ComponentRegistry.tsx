import type { HTMLAttributes } from "react";

import { ExampleCardContainer, ExampleCardHeader, ExampleCardBodyContainer } from "./index";

const exampleCardComponentRegistry = {
    excardcontainer: (props: HTMLAttributes<HTMLElement>) => { 
        return <ExampleCardContainer {...props} children={props.children} />; 
    },
    excardheader: (props: HTMLAttributes<HTMLElement>) => { 
        return <ExampleCardHeader {...props} children={props.children} />; 
    },
    excardbodycontainer: (props: HTMLAttributes<HTMLElement>) => { 
        return <ExampleCardBodyContainer {...props} children={props.children} />; 
    },
}

export default exampleCardComponentRegistry;