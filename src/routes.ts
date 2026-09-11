import {
    index,
    prefix,
    route,
    type RouteConfig,
} from "@react-router/dev/routes";

export default [
    index("./routes/home.tsx"),
    route("about", "./routes/about.tsx"),
    route("privacy-policy", "./routes/privacy-policy.tsx"),
    route("terms-of-service", "./routes/terms-of-service.tsx"),
    ...prefix("blog", [
        index("./routes/blog/blog.tsx"),
        route(":slug", "./routes/blog/article.tsx"),
    ])
] satisfies RouteConfig;