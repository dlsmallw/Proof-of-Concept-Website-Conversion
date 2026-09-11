const ArticleContainer: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div className="container" style={CustomStyling.articleContainer}>
            {children}
        </div>
    );
}

const ParagraphHeader: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <h2 className="article-section-title" style={CustomStyling.articleH2}>{children}</h2>
    );
}

const ParagraphContainer: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div style={CustomStyling.paragraphContainer}>
            {children}
        </div>
    );
}

const TextSpan: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <span className="article-text" style={CustomStyling.textSpan}>{children}</span>
    );
}

const CustomStyling: Record<string, React.CSSProperties> = {
    articleContainer: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        maxWidth: "1100px",
        gap: "20px",
    },
    
    articleH2: {
        fontSize: "1.5rem",
        color: "var(--secondary)",
        textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)"
    },
    articleH3: {
        fontSize: "1.2rem",
        color: "var(--text)",
        margin: "30px 0 15px"
    },
    paragraphContainer: {
        marginBottom: "20px"
    },

    textSpan: {
        fontSize: "1rem",
        lineHeight: 1.8,
        color: "var(--text-light)",
    },
}

export { ArticleContainer, ParagraphHeader, ParagraphContainer, TextSpan };