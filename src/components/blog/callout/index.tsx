const CalloutContainer: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div className="callout-container" style={CustomStyling.calloutContainer}>
            {children}
        </div>
    );
}

const CustomStyling: Record<string, React.CSSProperties> = {
    calloutContainer: {
        background: "rgba(184, 148, 31, 0.1)",
        border: "1px solid var(--secondary)",
        borderRadius: "8px",
        padding: "20px",
        margin: "25px 0",
        fontSize: "0.95rem",
    },
};

export { CalloutContainer };