import { useState } from "react";
import { NavLinks } from "../../utils/constants";
import { useNavigate } from "react-router-dom";
import BodyContainer from "../layout/body";

const CatContainer: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div className="cat" style={CustomStyling.catContainer}>
            {children}
        </div>
    );
}

const CatHeader: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div className="cat-header" style={CustomStyling.catHeader}>
            {children}
        </div>
    );
};

const CatDivider: React.FC = () => {
    return (
        <div className="cat-line" style={CustomStyling.catDivider}></div>
    );
}

const ContentCard: React.FC<{ link: typeof NavLinks[keyof typeof NavLinks]["links"][number] }> = ({ link }) => {
    const [isHovered, setIsHovered] = useState(false);
    const navigate = useNavigate();

    return (
        <div className="tool-card"
            style={{ 
                ...CustomStyling.toolCardContainer,
                borderColor: isHovered ? "var(--secondary)" : (link.cardTag ? "var(--secondary)" : "var(--border)"),
                transform: isHovered ? "translateY(-4px)" : "translateY(0)",
                boxShadow: isHovered ? "0 12px 30px rgba(0, 0, 0, 0.4)" : "none"
             }}
            onClick={() => navigate("/blog")}
            onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            {link.cardTag && <div className="card-tag" style={CustomStyling.toolCardTag}>{link.cardTag}</div>}
            <div className="card-icon" style={CustomStyling.toolCardIcon}>{link.cardIcon}</div>
            <div className="card-title" style={CustomStyling.toolCardTitle}>{link.navLabel}</div>
            <div className="card-desc" style={CustomStyling.toolCardDesc}>{link.description}</div>
        </div>
    );
};

const ContentSection: React.FC = () => {
    return (
        <BodyContainer>
            {Object.entries(NavLinks).map(([category, catObj], index) => (
                category !== "Resources" && (
                    <CatContainer key={index}>
                        <CatHeader>
                            <h2 style={CustomStyling.catHeaderTitle}>{catObj.headerLabel}</h2>
                            <CatDivider />
                        </CatHeader>

                        <div className="card-grid" style={CustomStyling.cardGridContainer}>
                            {catObj.links.map((link, index) => (
                                <ContentCard link={link} key={index} />
                            ))}
                        </div>
                    </CatContainer>
                    
                )
            ))}
        </BodyContainer>
    );
}

const CustomStyling: Record<string, React.CSSProperties> = {
    
    catContainer: {
        margin: "40px 0",
    },
    catHeader: {
        display: "flex",
        alignItems: "center",
        gap: "12px",
        marginBottom: "20px"
    },
    catHeaderTitle: {
        color: "var(--secondary)",
        fontSize: "1.4rem"
    },
    catDivider: {
        flex: 1,
        height: "1px",
        background: "var(--border)"
    },
    cardGridContainer: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
        gap: "18px"
    },
    toolCardContainer: {
        display: "block",
        background: "var(--card-bg)",
        border: "2px solid var(--border)",
        borderRadius: "12px",
        padding: "22px",
        textDecoration: "none",
        transition: "all 0.25s",
        position: "relative",
        overflow: "hidden",
        cursor: "pointer"
    },
    toolCardIcon: {
        fontSize: "1.8rem",
        marginBottom: "8px"
    },
    toolCardTitle: {
        color: "var(--text)",
        fontSize: "1.1rem",
        fontWeight: 700,
        marginBottom: "6px"
    },
    toolCardDesc: {
        color: "var(--text-light)",
        fontSize: "0.88rem",
        lineHeight: "1.5"
    },
    toolCardTag: {
        position: "absolute",
        top: "12px",
        right: "12px",
        background: "var(--secondary)",
        color: "var(--bg)",
        fontSize: "0.7rem",
        fontWeight: 700,
        padding: "3px 10px",
        borderRadius: "10px",
        textTransform: "uppercase",
        letterSpacing: "0.5px"
    },
};

export default ContentSection;