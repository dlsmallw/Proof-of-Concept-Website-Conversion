/* eslint-disable @typescript-eslint/no-explicit-any */

import { defineConfig } from 'vite'
import { reactRouter } from "@react-router/dev/vite";
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    tsconfigPaths: true,
  },
  plugins: [
    reactRouter(),
    {
      name: 'data-route-mapping-plugin',
      buildStart() {
        const recursiveRead = (dirFP: string): Record<string, any> => {
          const dirItems = fs.readdirSync(dirFP);
          const result: Record<string, any> = {};

          for (const entry of dirItems) {
            const entryPath = path.join(dirFP, entry);

            if (fs.statSync(entryPath).isDirectory()) {
              result[entry] = recursiveRead(entryPath);
            } else if (entry.endsWith('.md')) {
              const fileContent = fs.readFileSync(entryPath, 'utf-8');
              const { data } = matter(fileContent);

              if (data && data.title) {
                const { title } = data;
                const slug = title.toLowerCase().replace(/\s+/g, '-');
                result[slug] = data;
              }
            }
          }

          return result;
        }
        
        try {
          const staticMDDir = path.resolve(__dirname, 'src/static');
          let routeMappings: Record<string, any>;

          if (fs.existsSync(staticMDDir)) {
            routeMappings = recursiveRead(staticMDDir);
            // Write the route mappings to a JSON file in the src directory
            const writePath = path.resolve(__dirname, 'src/static/routes.json');
            fs.writeFileSync(writePath, JSON.stringify(routeMappings, null, 2), 'utf-8');
          }
        } catch (error) {
          console.error('Error generating blog article markdown file route mappings:', error);
        }
      }
    }
  ],
})
