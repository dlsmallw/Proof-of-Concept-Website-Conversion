import calloutComponentRegistry from "./callout/ComponentRegistry";
import ctaBoxComponentRegistry from "./cta-box/ComponentRegistry";
import headerComponentRegistry from "./header/ComponentRegistry";
import paragraphComponentRegistry from "./paragraph/ComponentRegistry";
import exampleCardComponentRegistry from "./example-card/ComponentRegistry";
import miscComponentRegistry from "./misc/ComponentRegistry";

const ComponentRegistry = {
    ...calloutComponentRegistry,
    ...ctaBoxComponentRegistry,
    ...headerComponentRegistry,
    ...paragraphComponentRegistry,
    ...exampleCardComponentRegistry,
    ...miscComponentRegistry,
} as const;

export default ComponentRegistry;