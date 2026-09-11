const HeaderContainer: React.FC<{ children: React.ReactNode, style?: React.CSSProperties}> = ({ children, style }) => {
    return (
        <div style={{ ...CustomStyling.headerOuterContainer }}>
            <div className="container" style={{ ...CustomStyling.headerInnerContainer, ...style }}>
                {children}
            </div>
        </div>
    );
}

const HeaderTitle: React.FC<{ children: React.ReactNode, style?: React.CSSProperties }> = ({ children, style }) => {
    return (
        <h1 style={{ ...CustomStyling.title, ...style }}>{children}</h1>
    );
}

const HeaderSubtitle: React.FC<{children: React.ReactNode, style?: React.CSSProperties}> = ({ children, style }) => {
    return (
        <span className="article-subtitle" style={{ ...CustomStyling.subtitle, ...style }}>{children}</span>
    );
}

const HeaderMeta: React.FC<{updatedDate?: string, readingTime?: string, link?: { href: string, text: string }, style?: React.CSSProperties }> = ({ updatedDate, readingTime, link, style }) => {
    if (!updatedDate && !readingTime && !link) return null;

    return (
        <div className="meta" style={{ ...CustomStyling.metaDiv, ...style }}> 
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
        padding: "35px 0",
        borderBottom: "3px solid var(--secondary)"
    },
    headerInnerContainer: {
        display: "flex",
        flexDirection: "column",
        maxWidth: "1100px",
        width: "100%",
        gap: "10px"
    },
    title: {
        fontSize: "2rem",
        color: "var(--secondary)",
        lineHeight: 1.3,
        textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
        fontWeight: 800
    },
    metaDiv: {
        color: "var(--text)",
        fontSize: "0.9rem"
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

export { HeaderContainer, HeaderTitle, HeaderSubtitle, HeaderMeta };