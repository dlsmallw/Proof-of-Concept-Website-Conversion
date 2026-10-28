# React Website Migration – Proof of Concept

## Overview

This project is a proof of concept exploring the conversion of a traditional static HTML website into a modern React web application.

Built with **React 19, React Router 7, Vite, and TypeScript**, the application explores a component-based architecture that separates website content from presentation. It also uses **React Markdown** and supporting Markdown-processing libraries to load, parse, and render content from Markdown files.

The goal is to establish a more maintainable and extensible foundation for the original website, making it easier to manage content, reuse UI components, and expand functionality over time.

## Features

- **Component-Based Architecture:** Breaks website layouts and functionality into reusable React components.
- **Client-Side Routing:** Uses React Router to organize navigation and page rendering.
- **Markdown Content Rendering:** Renders Markdown content as React elements using React Markdown.
- **Markdown Processing:** Includes support for frontmatter, directives, and additional Markdown/HTML processing through the Remark and Rehype ecosystems.
- **Metadata and Structured Data:** Includes tools for managing document metadata and defining structured data.
- **Responsive UI Components:** Uses Bootstrap and React Bootstrap for styling and interface components.
- **Development and Quality Tools:** Includes ESLint and TypeScript checks to support code quality and maintainability.

## Technology Stack

### Core Technologies

- [React 19](https://react.dev/) – Component-based user interface development.
- [React Router 7](https://reactrouter.com/) – Routing and application development.
- [Vite 8](https://vite.dev/) – Development tooling and production builds.
- [TypeScript](https://www.typescriptlang.org/) – Static type checking.
- JavaScript / JSX / TSX, HTML, and CSS.

### UI and Styling

- [Bootstrap 5](https://getbootstrap.com/) – Responsive styling and layout utilities.
- [React Bootstrap](https://react-bootstrap.github.io/) – Bootstrap components implemented for React.

### Markdown and Content Processing

- [React Markdown](https://github.com/remarkjs/react-markdown) – Renders Markdown content as React elements.
- [Gray Matter](https://github.com/jonschlinkert/gray-matter) – Parses frontmatter metadata from content files.
- [Remark](https://github.com/remarkjs/remark) plugins – Support for Markdown frontmatter and directives.
- [Rehype](https://github.com/rehypejs/rehype) plugins – Support for processing HTML and formatting generated markup.
- [mdast](https://github.com/syntax-tree/mdast) – Markdown abstract syntax tree types.

### Metadata and Supporting Libraries

- [React Helmet Async](https://github.com/staylor/react-helmet-async) – Document metadata management.
- [React Schema.org](https://github.com/6h1r0/React-Component-for-Schema.org) and [Schema.org TypeScript definitions](https://github.com/google/schema-dts) – Structured data support.
- `react-gtm-module` – Google Tag Manager integration.
- `isbot` – Bot detection utilities.

### Development and Quality Assurance

- [ESLint](https://eslint.org/) – Static analysis and linting.
- [TypeScript ESLint](https://typescript-eslint.io/) – TypeScript-aware linting.
- [React Hooks ESLint Plugin](https://www.npmjs.com/package/eslint-plugin-react-hooks) – React Hooks linting rules.
- [tsx](https://github.com/privatenumber/tsx) – TypeScript execution tooling.

## Project Goals

This proof of concept explores:

- Migrating existing static HTML pages into reusable React components.
- Introducing React Router for application routing.
- Loading and rendering Markdown-based blog content separately from page layouts.
- Supporting content metadata and richer Markdown syntax.
- Improving maintainability through shared components and consistent styling.
- Establishing a foundation for future features and a broader website migration.
  
