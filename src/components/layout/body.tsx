const BodyContainer: React.FC<{ children: React.ReactNode, style?: React.CSSProperties }> = ({ children, style }) => {
    return (
        <div className="body-container" style={{ ...CustomStyling.bodyContainer, ...style }}>
            {children}
        </div>
    );
}

const CustomStyling: Record<string, React.CSSProperties> = {
    bodyContainer: {
        maxWidth: "1100px",
        width: "100%",
        margin: "0 auto",
        padding: "0 20px",
    }
}

export default BodyContainer;