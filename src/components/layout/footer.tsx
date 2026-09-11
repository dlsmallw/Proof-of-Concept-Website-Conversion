import { useState } from "react";
import { useNavigate } from "react-router-dom";

const FooterNavBar: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div className="footer-nav-bar">
            {children}
        </div>
    );
}

const KOFILink: React.FC<{ href: string, children: React.ReactNode }> = ({ href, children }) => {
    return (
        <div className="kofi-footer" style={CustomStyling.KOFIContainer}>
            <Link href={href} style={CustomStyling.KOFILink}>
                {children}
            </Link>
        </div>
    );
}

const DisclaimerContainer: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div className="disclaimer-container" style={CustomStyling.disclaimerContainer}>
            {children}
        </div>
    );
}

const Link: React.FC<{ href?: string, route?: string, style?: React.CSSProperties, children: React.ReactNode }> = ({ href, route, style, children }) => {
    const [isHovered, setIsHovered] = useState(false);
    const navigate = useNavigate();

    return (
        <a href={href} target="_blank" rel="noopener noreferrer" style={{ 
            ...CustomStyling.footerDefLink,
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

const Footer: React.FC = () => {
    return (
        <footer style={CustomStyling.outerContainer}>
            <div className="container" style={CustomStyling.innerContainer}>
                <FooterNavBar>
                    <Link href="/compensation-calculator" style={CustomStyling.footerNavLink}>Compensation</Link> · 
                    <Link href="/bah-calculator" style={CustomStyling.footerNavLink}>BAH</Link> · 
                    <Link href="/tsp-calculator" style={CustomStyling.footerNavLink}>TSP</Link> · 
                    <Link href="/education-benefits-calculator" style={CustomStyling.footerNavLink}>Education</Link> · 
                    <Link href="/va-disability-calculator" style={CustomStyling.footerNavLink}>VA Disability</Link> · 
                    <Link href="/sitemap-page" style={CustomStyling.footerNavLink}>All Tools</Link>
                </FooterNavBar>

                <KOFILink href="https://ko-fi.com/milmultiplier">☕ Support Mil-Multiplier on Ko-fi</KOFILink>

                <DisclaimerContainer>
                    <span>Not affiliated with DoD or VA. All calculations are estimates.</span>
                    <span>© 2026 Mil-Multiplier.</span>
                </DisclaimerContainer>

                <div style={CustomStyling.policyLinksContainer}>
                    <Link route="privacy-policy" style={CustomStyling.policyLink}>Privacy Policy</Link> · 
                    <Link route="terms-of-service" style={CustomStyling.policyLink}>Terms</Link> · 
                    <Link route="about" style={CustomStyling.policyLink}>About</Link>
                </div>
                <div style={CustomStyling.rateVerificationContainer}>
                    <span style={CustomStyling.rateVerification}>✓ 2026 Rates Verified</span> 
                    <span id="dataDate"></span>
                </div>
            </div>
        </footer>
    );
}

const CustomStyling: Record<string, React.CSSProperties> = {
    outerContainer: {
        background: "var(--primary-dark)",
        padding: "30px 0",
        textAlign: "center",
        borderTop: "2px solid var(--secondary)"
    },
    innerContainer: {

    },
    footerNavBarContainer: {

    },
    footerDefLink: {
        color: "var(--text-light)",
        textDecoration: "none",
        margin: "0 8px",
        fontSize: "0.85rem",
        cursor: "pointer"
    },
    footerNavLink: {
        color: "var(--secondary)",
        textDecoration: "none",
        margin: "0 8px",
        fontSize: "0.85rem"
    },
    KOFIContainer: {
        marginTop: "12px"
    },
    KOFILink: {
        textDecoration: "none",
        color: "#ff5e5b",
        fontSize: "0.85rem"
    },
    disclaimerContainer: {
        display: "flex", 
        flexDirection: "column", 
        color: "var(--text-light)", 
        fontSize: "0.75rem", 
        marginTop: "12px",
    },
    disclaimerText: {
        fontSize: "0.85rem"
    },
    policyLinksContainer: {
        display: "flex",
        justifyContent: "center",
        color: "var(--text-light)", 
        fontSize: "0.75rem", 
        margin: "15px 0px 15px 0",
        gap: "12px",
    },
    policyLink: {
        color: "var(--text-light)"
    },
    rateVerificationContainer: {
        color: "var(--text-light)", 
        fontSize: "0.7rem", 
        marginTop: "8px"
    },
    rateVerification: {
        display: "inline-block", 
        background: "rgba(107,142,90,0.2)", 
        border: "1px solid var(--success,#6b8e5a)", 
        color: "var(--success,#6b8e5a)", 
        padding: "3px 10px", borderRadius: "12px", 
        fontWeight: 600, fontSize: "0.7rem" 
    }
}

export default Footer;