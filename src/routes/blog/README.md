# React Markdown for Blog Data

For reducing the burden of generating HTML files for new or updated blog pages, markdown is generally the ideal choice due to the ease of generating the markdown files and the existence of well-defined libraries for parsing and rendering the markdown files themselves. 

<em><strong>This document will serve as a guide for producing new blog posts using the custom syntax created for the Mil-Multiplier project blog section. </strong></em>

# Header Metadata

```
---
title: <BLOG TITLE>
slug: <LOWERCASE TITLE DELINEATED BY DASHES>
description: 
    name="description"
    content: <DESCRIPTION OF POST>
link:
    rel: "canonical"
    href: "<THE PAGES ROUTE>"
original:
    title:
        property: "og:title"
        content: <BLOG TITLE>
    description:
        property: "og:description"
        content: <DESCRIPTION>
    url: 
        property: "og:url"
        content: "https://milmultiplier.com/"
    type: 
        property: "og:type"
        content: "website"
    siteName: 
        property: "og:site_name"
        content: "Mil-Multiplier"
twitter
    card: 
        name: "twitter:card"
        content: "summary"
    title:
        name: "twitter:title"
        content: <TWITTER TITLE>
    description:
        name: "twitter:description"
        content: <TWITTER DESCRIPTION>
---
```

Example:

```
---
title: "BRS vs High-3 Retirement | Side-by-Side Comparison"
slug: "brs-vs-high-3-retirement"
description: 
    name="description"
    content: "Compare BRS and High-3 military retirement systems side by side. See which pays more at 20, 25, and 30 years with real dollar amounts for enlisted and officers."
link:
    rel: "canonical"
    href: "https://milmultiplier.com/blog/brs-vs-high-3-retirement"
og:
    title:
        property: "og:title"
        content: "BRS vs High-3 Retirement | Side-by-Side Comparison"
    description:
        property: "og:description"
        content: "Compare BRS and High-3 military retirement systems side by side. See which pays more at 20, 25, and 30 years with real dollar amounts for enlisted and officers."
    url: 
        property: "og:url"
        content: "https://milmultiplier.com/blog/brs-vs-high-3-retirement"
    type: 
        property: "og:type"
        content: "article"
    siteName: 
        property: "og:site_name"
        content: "Mil-Multiplier"
twitter
    card: 
        name: "twitter:card"
        content: "summary"
    title:
        name: "twitter:title"
        content: "BRS vs High-3 Retirement | Side-by-Side Comparison"
    description:
        name: "twitter:description"
        content: "Compare BRS and High-3 military retirement systems side by side. See which pays more at 20, 25, and 30 years with real dollar amounts for enlisted and officers."
---
```
