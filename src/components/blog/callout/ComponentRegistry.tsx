import type { HTMLAttributes } from "react";

import { CalloutContainer } from "./index";

const calloutComponentRegistry = {
    calloutcontainer: (props: HTMLAttributes<HTMLElement>) => { 
        return <CalloutContainer {...props} children={props.children} />; 
    },
}

export default calloutComponentRegistry;