import { HeaderContainer, HeaderTitle } from "src/components/layout/header";

const ArticleHeaderContainer: React.FC<{
    metaFields: {
        createdDate?: string;
        updatedDate?: string;
        readingTime?: string;
    }, 
    children: React.ReactNode
}> = ({ metaFields, children }) => {
    const formatDate = (dateStr: string) => {
        if (!dateStr) return undefined;
        const date = new Date(dateStr);
        return date.toLocaleDateString('en-us', { month: 'long', year: 'numeric' });
    }

    return (
        <HeaderContainer style={CustomStyling.headerInnerContainer}>
            {children}
            <div className="meta" style={CustomStyling.metaDiv}> 
                {metaFields.createdDate && <span>{formatDate(metaFields.createdDate)}</span>}
                {metaFields.updatedDate && <span>{metaFields.createdDate && " · "}Updated {formatDate(metaFields.updatedDate)}</span>}
                {metaFields.readingTime && <span>{(metaFields.createdDate || metaFields.updatedDate) && " · "}{metaFields.readingTime} min read</span>}
            </div> 
        </HeaderContainer>
    );
}

const ArticleHeaderTitle: React.FC<{children: React.ReactNode}> = ({ children }) => {
    return (
        <HeaderTitle style={CustomStyling.title}>{children}</HeaderTitle>
    );
}

const ArticleHeaderSubtitle: React.FC<{children: React.ReactNode}> = ({ children }) => {
    return (
        <span className="article-subtitle" style={CustomStyling.subtitle}>{children}</span>
    );
}

const ArticleHeaderMeta: React.FC<{updatedDate?: string, readingTime?: string, link?: { href: string, text: string }}> = ({ updatedDate, readingTime, link }) => {
    if (!updatedDate && !readingTime && !link) return null;

    return (
        <div className="meta" style={CustomStyling.metaDiv}> 
            {updatedDate && <span>Updated {updatedDate}</span>}
            {readingTime && <span>{(updatedDate) && " · "} {readingTime} read</span>}
            {link && <span>{(updatedDate || readingTime) && " · "}<a href={link.href}>{link.text}</a></span>}
        </div> 
    );
}

const CustomStyling: Record<string, React.CSSProperties> = {
    headerOuterContainer: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        background: "linear-gradient(135deg, var(--primary-dark), var(--primary))",
        padding: "30px 0",
        borderBottom: "3px solid var(--secondary)"
    },
    headerInnerContainer: {
        maxWidth: "1100px",
        width: "100%",
    },
    title: {
        // Add CSS Styling
    },
    metaDiv: {
        marginTop: "5px",
        color: "var(--text-light)",
        fontSize: "0.8rem",
    },
    subtitle: {
        fontSize: "1.05rem",
        fontWeight: 600,
        opacity: 0.9,
        marginTop: "5px",
        fontStyle: "italic",
        color: "var(--text)"
    },
}


export { ArticleHeaderContainer, ArticleHeaderTitle, ArticleHeaderSubtitle, ArticleHeaderMeta };