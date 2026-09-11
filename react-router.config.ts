import type { Config } from "@react-router/dev/config";

export default {
    ssr: false,
    appDirectory: "./src",
    prerender: async () => {
        const routeJSON = await import('./src/static/routes.json');
        const blogPaths = Object.keys(routeJSON["blog"]).map(slug => `/blog/${slug}`);
        const paths = [
            "/", 
            "/blog", 
            "/about", 
            "/privacy-policy", 
            "/terms-of-service", 
            ...blogPaths
        ];
        return paths;  
    },
} satisfies Config;