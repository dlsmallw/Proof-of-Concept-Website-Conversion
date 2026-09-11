import { useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const CTABoxContainer: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div className="cta-box" style={CustomStyling.ctaBoxContainer}>
            {children}
        </div>
    );
}

const CTABoxButton: React.FC<{ text: string, link: string }> = ({ text, link }) => {
    const [isHovered, setIsHovered] = useState(false);
    const navigate = useNavigate();

    return (
        <div className="cta-btn-container" style={CustomStyling.ctaBtnContainer}>
            <Button 
                style={{ ...CustomStyling.ctaBoxButton, transform: isHovered ? "translateY(-2px)" : "translateY(0)" }} 
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onClick={() => navigate(link)}
            >
                {text}
            </Button>
        </div>
    );
}

const CTABoxParagraph: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <span className="cta-box-paragraph" style={CustomStyling.ctaBoxParagraph}>{children}</span>
    );
}

const CustomStyling: Record<string, React.CSSProperties> = {
    ctaBoxContainer: {
        display: "flex",
        flexDirection: "column",
        background: "linear-gradient(135deg, var(--success) 0%, var(--primary) 100%)",
        padding: "30px",
        borderRadius: "12px",
        margin: "40px 0",
        textAlign: "center"
    },
    ctaBoxParagraph: {
        color: "var(--text)",
        fontSize: "1.1rem",
        marginBottom: "15px",
        fontWeight: 600,
        textShadow: "1px 1px 2px rgba(0, 0, 0, 0.4)"
    },
    ctaBtnContainer: {
        display: "flex",
        justifyContent: "center"
    },
    ctaBoxButton: {
        display: "inline-block",
        padding: "12px 30px",
        background: "linear-gradient(135deg, var(--secondary) 0%, var(--accent) 100%)",
        border: "none",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        color: "var(--bg)",
        textDecoration: "none",
        borderRadius: "8px",
        fontWeight: 700,
        fontSize: "1rem",
        transition: "transform 0.2s",
        cursor: "pointer",
    },
}

export { CTABoxContainer, CTABoxButton, CTABoxParagraph };