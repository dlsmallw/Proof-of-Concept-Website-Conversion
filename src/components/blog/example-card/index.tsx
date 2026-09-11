const ExampleCardHeader: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <h4 style={CustomStyling.exampleCardHeader}>{children}</h4>
    );
}

const ExampleCardContainer: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div className="example-card" style={CustomStyling.exampleCardContainer}>
            {children}
        </div>
    );
}

const ExampleCardBodyContainer: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div style={CustomStyling.exampleCardBodyContainer}>
            {children}
         </div>
    );
}

const CustomStyling: Record<string, React.CSSProperties> = {
    exampleCardContainer: {
        background: "var(--card-bg)",
        padding: "24px",
        borderRadius: "8px",
        borderLeft: "4px solid var(--secondary)",
        margin: "24px 0",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.4)"
    },
    exampleCardHeader: {
        color: "var(--secondary)",
        marginBottom: "16px",
        fontSize: "1.1rem"
    },
    exampleCardBodyContainer: {
        display: "flex",
        flexDirection: "column",
        gap: "5px",
    },
    exampleCardParagraph: {
        marginBottom: "10px",
        color: "var(--text-light)",
    },
}

export { ExampleCardContainer, ExampleCardHeader, ExampleCardBodyContainer };