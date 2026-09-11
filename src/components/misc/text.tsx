import { useState } from "react";
import { useNavigate } from "react-router-dom";

const BoldText: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <span className="bold-text" style={CustomStyling.boldText}>{children}</span>
    );
}

const GoldText: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <span className="gold-text" style={CustomStyling.goldText}>{children}</span>
    );
}

const CustomLink: React.FC<{ href?: string, route?: string, style?: React.CSSProperties, children: React.ReactNode }> = ({ href, route, style, children }) => {
    const [isHovered, setIsHovered] = useState(false);
    const navigate = useNavigate();

    return (
        <a href={href} target="_blank" rel="noopener noreferrer" style={{ 
            ...CustomStyling.defLink,
            ...style,
            textDecoration: isHovered ? "underline" : "none",
        }}
            onClick={route ? () => { navigate(route); } : undefined}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {children}
        </a>
    );
}

const CustomStyling: Record<string, React.CSSProperties> = {
    boldText: {
        color: "var(--text)",
        fontWeight: 600
    },
    goldText: {
        color: "var(--secondary)",
    },
    defLink: {
        color: "var(--secondary)",
        textDecoration: "none",
        cursor: "pointer"
    },
}

export { BoldText, GoldText, CustomLink };