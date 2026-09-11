import { useState } from "react";
import { Button } from "react-bootstrap";

// const HeroContainer: React.FC<{ children: React.ReactNode }> = ({ children }) => {
//     return (
//         <div className="hero" style={CustomStyling.heroContainer}>
//             <div className="container" style={CustomStyling.innerContainer}>
//                 {children}
//             </div>
//         </div>
//     );
// }

const HeroCTA: React.FC<{ href: string, children: React.ReactNode }> = ({ href, children }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <Button href={href} className="hero-cta" 
            style={{
                ...CustomStyling.heroCTA, 
                transform: isHovered ? "translateY(-3px)" : "translateY(0)",
                boxShadow: isHovered ? "0 4px 15px rgba(0, 0, 0, 0.1)" : "0 4px 15px rgba(0, 0, 0, 0.1)"
            }} 
            onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            {children}
        </Button>
    );
};

const HeroBanner: React.FC = () => {
    return (
        <div className="hero" style={CustomStyling.heroContainer}>
            <div className="container" style={CustomStyling.innerContainer}>
                <h1 className="hero-title" style={CustomStyling.heroTitle}>🎖️ Mil-Multiplier</h1>
                <span className="hero-subtitle" style={CustomStyling.heroSubtitle}>
                    Free calculators that show what your military service is actually worth — pay, benefits, education, retirement, and the civilian salary you'd need to match it all.
                </span>
                <HeroCTA href="compensation-calculator.html">Calculate Your Total Compensation →</HeroCTA>
                <span className="hero-bottom-text" style={CustomStyling.heroBottomText}>20+ tools · Used by thousands of service members · No account needed</span>
            </div>
        </div>
    );
}

const CustomStyling: Record<string, React.CSSProperties> = {
    heroContainer: {
        background: "linear-gradient(170deg, #0e1a0e 0%, var(--bg) 55%)",
        padding: "100px 0 72px",
        borderBottom: "1px solid rgba(201,168,76,0.2)",
        position: "relative",
        overflow: "hidden",
        minHeight: "420px",
    },
    innerContainer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    heroTitle: {
        fontSize: "2.8rem",
        color: "var(--secondary)",
        marginBottom: "15px",
        letterSpacing: "-0.5px",
        position: "relative",
        textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)"
    },
    heroSubtitle: {
        color: "var(--text)",
        fontWeight: 600,
        fontSize: "1.2rem",
        maxWidth: "700px",
        margin: "0 auto 30px",
        position: "relative",
        textShadow: "1px 1px 3px rgba(0, 0, 0, 0.5)"
    },
    heroCTA: {
        display: "inline-block",
        background: "linear-gradient(135deg, var(--secondary), var(--accent))",
        color: "var(--bg)",
        padding: "16px 36px",
        borderRadius: "10px",
        textDecoration: "none",
        fontWeight: 800,
        fontSize: "1.15rem",
        transition: "transform 0.2s",
        position: "relative",
    },
    heroBottomText: {
        color: "var(--text)",
        fontWeight: 600,
        fontSize: "0.9rem",
        marginTop: "15px",
        position: "relative",
        textShadow: "1px 1px 3px rgba(0, 0, 0, 0.5)"
    }
};

export default HeroBanner;