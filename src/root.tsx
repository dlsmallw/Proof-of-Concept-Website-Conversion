import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";

import type { Route } from "./+types/root";
import { isRouteErrorResponse } from "react-router-dom";

import AppNavbar from './components/layout/navbar';
import KOFIBanner from './components/misc/kofibanner';
import Footer from './components/layout/footer';

import './App.css';
import BodyContainer from "./components/layout/body";
import { HeaderContainer, HeaderSubtitle, HeaderTitle } from "./components/layout/header";

// eslint-disable-next-line react-refresh/only-export-components
export const links: Route.LinksFunction = () => {
  return [
    { rel: "icon", href: "../public/favicon.ico" },
  ];
}

export function Layout({ children }: { children: React.ReactNode; }) {
  console.log("Mounted Root Layout");
  return (
    <html lang="en" className="test-html">
      <head>
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />
        <title></title>
        <Meta />
        <Links />
      </head>
      <body>
        <AppNavbar />
        {children}
        <KOFIBanner />
        <Footer />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export function ErrorBoundary({
    error,
}: Route.ErrorBoundaryProps) {
  if (isRouteErrorResponse(error)) {
    return (
      <div>
        <HeaderContainer style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <HeaderTitle style={{ margin: "0 auto", color: "var(--error)", textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)" }}>
            {error.status} {error.statusText}
          </HeaderTitle>
        </HeaderContainer>

        <BodyContainer>
          <div style={{
            paddingTop: "15px",
            margin: "0 auto",
            width: "fit-content",
            fontSize: "1.2rem", 
            fontWeight: 600,
            }}>

              <p>{error.data}</p>
            </div>
        </BodyContainer>
      </div>
      
    );
  } else if (error instanceof Error) {
    return (
      <div>
        <HeaderContainer style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <HeaderTitle style={{ margin: "0 auto", color: "var(--error)", textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)" }}>Error</HeaderTitle>
          <HeaderSubtitle style={{ margin: "0 auto" }}>{error.message}</HeaderSubtitle>
        </HeaderContainer>

        <BodyContainer>
          <div style={{
            paddingTop: "15px",
            margin: "0 auto",
            width: "fit-content",
            fontSize: "1.2rem", 
            fontWeight: 600,
            }}>
            <p>The stack trace is:</p>
            <pre>{error.stack}</pre>
          </div>
          
        </BodyContainer>
      </div>
      
    );
  } else {
    return <h1>Unknown Error</h1>;
  }
}

export default function Root() {
  return (<Outlet />);
}