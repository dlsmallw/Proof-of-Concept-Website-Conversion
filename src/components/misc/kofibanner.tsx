import { useState } from "react";

const BannerContainer: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div className="container" style={CustomStyling.bannerOuterContainer}>
            <div className="kofi-bar" style={CustomStyling.bannerInnerContainer}>
                {children}
            </div>
        </div>
    );
}

const BannerButton: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <a className="kofi-btn" href={href} target="_blank" rel="noopener noreferrer" 
            style={{ 
                ...CustomStyling.bannerButton,
                transform: isHovered ? "translateY(-2px)" : "translateY(0)",
                boxShadow: isHovered ? "0 6px 20px rgba(0, 0, 0, 0.4)" : "none",
            }}
            onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                {children}
        </a>
    );
}

const KOFIBanner: React.FC = () => {
    return (
        <BannerContainer>
            <span className="kofi-bar-text" style={CustomStyling.bannerPrimaryText}>
                Found these tools helpful?
            </span>
            <BannerButton href="https://ko-fi.com/milmultiplier">☕ Buy Me a Coffee</BannerButton>
            <span className="kofi-sub" style={CustomStyling.bannerSecondaryText}>
                Your support keeps these tools free for the entire military community 🇺🇸
            </span>
        </BannerContainer>
    );
}

const CustomStyling: Record<string, React.CSSProperties> = {
    bannerOuterContainer: {

    },
    bannerInnerContainer: {
        display: "flex",
        flexDirection: "column",
        background: "linear-gradient(135deg, rgba(90, 107, 78, 0.2), rgba(61, 74, 53, 0.3))",
        border: "1px solid var(--border)",
        borderRadius: "12px",
        padding: "25px",
        textAlign: "center",
        margin: "50px 0 30px"
    },
    bannerPrimaryText: {
        color: "var(--text)", 
        fontWeight: "bold",
        marginBottom: "12px",
        fontSize: "0.95rem"
    },
    bannerSecondaryText: {
        color: "var(--text-light)",
        fontSize: "0.85rem",
        marginTop: "10px"
    },
    bannerButton: {
        display: "inline-block",
        background: "linear-gradient(135deg, #ff5e5b, #ff4757)",
        color: "white",
        padding: "12px 28px",
        borderRadius: "8px",
        textDecoration: "none",
        fontWeight: "700",
        fontSize: "1rem",
        transition: "transform 0.2s",
        width: "350px",
        minWidth: "fit-content",
        margin: "0 auto",
    }
}

export default KOFIBanner;