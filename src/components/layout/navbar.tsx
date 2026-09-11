import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const DropdownLinks = {
    "Active Duty": { 
        "links": [
            { "label": "Full Compensation Calculator", "to": "/full-compensation-calculator" },
            { "label": "BAH Lookup", "to": "/bah-lookup" },
            { "label": "BAH Rates By Base", "to": "/bah-rates-by-base" },
            { "label": "CONUS COLA Calculator", "to": "/conus-cola-calculator" },
            { "label": "OCONUS COLA Calculator", "to": "/oconus-cola-calculator" },
            { "label": "OHA Calculator", "to": "/oha-calculator" },
            { "label": "2026 Pay Charts", "to": "/2026-pay-charts" },
            { "label": "Cost of Living Compare", "to": "/cost-of-living-compare" },
        ]
    },
    "Guard & Reserve": {
        "links": [
            { "label": "Guard/Reserve Pay Calculator", "to": "/guard-reserve-calculator" },
        ]
    },
    "Financial Planning": {
        "links": [
            { "label": "TSP Calculator ⭐", "to": "/tsp-calculator" },
            { "label": "PCS Move Calculator", "to": "/pcs-calculator" },
            { "label": "VA Home Loan Calculator", "to": "/va-home-loan-calculator" },
        ]
    },
    "Education": {
        "links": [
            { "label": "Education Benefits Calculator ⭐", "to": "/education-benefits-calculator" },
            { "label": "VR&E Eligibility Screener", "to": "/vre-eligibility-screener" },
            { "label": "GI Bill Transfer Calculator", "to": "/gi-bill-transfer-calculator" },
        ]
    },
    "Transitioning": {
        "links": [
            { "label": "Transition Timeline ⭐", "to": "/transition-timeline" },
            { "label": "MOS → Civilian Job Translator", "to": "/mos-to-civilian-job-translator" },
        ]
    },
    "Veterans": {
        "links": [
            { "label": "VA Rating Estimator", "to": "/va-rating-estimator" },
            { "label": "VA Comp Rates", "to": "/va-comp-rates" },
            { "label": "Retirement Calculator", "to": "/retirement-calculator" },
        ]
    },
    "Resources": {
        "links": [
            { "label": "Blog & Guides", "to": "/blog" },
            { "label": "All Tools & Guides", "to": "/all-tools-guides" },
        ]
    }
}

const NavDropdownBtn: React.FC<{ children: React.ReactNode, isHovered: boolean, onMouseEnter: () => void, onMouseLeave: () => void, show: boolean }> = ({ children, isHovered, onMouseEnter, onMouseLeave, show }) => {

    return (
        <div className="dropdown">
            <div>
                <a style={{
                        ...CustomStyling.navBtn,
                        background: isHovered ? "rgba(184, 148, 31, 0.2)" : "none",
                        color: isHovered ? "var(--secondary)" : "var(--text)"
                    }} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                    Calculators {isHovered ? "▴" : "▾"}
                </a>
            </div>
            <div style={{
                ...CustomStyling.dropdownMenuOuter,
                display: show ? "block" : "none",
            }} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}> 
                {children}
            </div>
        </div>
    )
}

const DropdownItem: React.FC<{ link: string, children: React.ReactNode }> = ({ link, children }) => {
    const [isHovered, setIsHovered] = useState(false);
    const navigate = useNavigate();

    return (
        <div className="dropdown-item"
            style={{
                ...CustomStyling.dropdownItem,
                background: isHovered ? "var(--primary-dark)" : "none",
                color: isHovered ? "var(--secondary)" : "var(--text-light)",
                paddingLeft: isHovered ? "16px" : "12px",
            }}
            onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}
            onClick={() => navigate(link)}>
                <span style={CustomStyling.dropdownItemText}>
                    {children}
                </span>
        </div>
    );
}

const DropdownSection: React.FC<{ category: string, links: { label: string, to: string }[] }> = ({ category, links }) => {
    return (
        <div className="dropdown-category"  style={CustomStyling.dropdownSection}>
            <span className="dropdown-label" style={CustomStyling.dropdownSectionLabel}>{category}</span>
                {links.map((link, index) => (
                    <DropdownItem key={index} link={link.to}>{link.label}</DropdownItem>
                ))}
        </div>
    );
}

const NavbarDropdown: React.FC = () => {
    const [navBtnHovered, setNavBtnHovered] = useState(false);
    const [dropdownMenuHovered, setDropdownMenuHovered] = useState(false);

    return (
        <NavDropdownBtn isHovered={navBtnHovered} 
            onMouseEnter={() => setNavBtnHovered(true)} onMouseLeave={() => setNavBtnHovered(false)} show={navBtnHovered || dropdownMenuHovered}>
            <div style={{
                ...CustomStyling.dropdownMenu,
            }}
                onMouseEnter={() => setDropdownMenuHovered(true)} onMouseLeave={() => setDropdownMenuHovered(false)}>
                {Object.entries(DropdownLinks).map(([key, val]) => (
                    <DropdownSection key={key} category={key} links={val.links} />
                ))}
            </div>
            
        </NavDropdownBtn>
    )
}

const Brand: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <Navbar.Brand className="brand-container" style={CustomStyling.brandContainer} as={Link} to="/" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            <span style={{ ...CustomStyling.brand, color: isHovered ? "var(--accent)" : "var(--secondary)" }}>
                {children}
            </span>
        </Navbar.Brand>
    );
}

const AppNavbar = () => {
    return (
        <Navbar className="sticky-header" style={CustomStyling.stickyHeader}>
            <Container className="header-container" style={CustomStyling.headerContainer}>
                <Brand>🎖️ Mil-Multiplier</Brand>
                <Navbar.Collapse id="basic-navbar-nav">
                    <NavbarDropdown />
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

const CustomStyling: Record<string, React.CSSProperties> = {
    stickyHeader: {
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: "70px",
        background: "linear-gradient(135deg, var(--primary-dark), var(--primary))",
        backdropFilter: "blur(10px)",
        borderBottom: "2px solid var(--secondary)",
        zIndex: 1000,
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.5)",
    },
    headerContainer: {
        maxWidth: "1400px",
        margin: "0 auto",
        padding: "0 24px",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
    },
    brandContainer: {
        fontSize: "1.4rem",
        fontWeight: 700,
        color: "var(--secondary)",
        textDecoration: "none",
        textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
    },
    brand: {
        // ADD ANY STYLING HERE
    },
    navBtn: {
        background: "none",
        border: "none",
        color: "var(--text)",
        fontSize: "1.05rem",
        fontWeight: 700,
        cursor: "pointer",
        padding: "12px 20px",
        borderRadius: "6px",
        transition: "all 0.2s",
        width: "auto",
    },
    navDropdownContainer: {
        position: "relative",
    },
    
    dropdownMenuOuter: {
        maxHeight: "calc(-76px + 100vh)",
        overflowY: "clip",
        borderRadius: "8px",
        position: "absolute",
        top: "80%",
        paddingTop: "14px",
        zIndex: 100,
        cursor: "default",
        display: "none",
    },
    dropdownMenu: {
        maxHeight: "calc(-90px + 100vh)",
        overflowY: "auto",
        borderRadius: "8px",
        background: "var(--card-bg)",
        border: "2px solid var(--secondary)",
        boxShadow: "rgba(0, 0, 0, 0.6) 0px 8px 24px",
        padding: "5px 12px",
        minWidth: "280px",
    },
    dropdownSection: {
        padding: "12px 0",
        borderBottom: "1px solid var(--border)",
        cursor: "default", 
        userSelect: "none"
    },
    dropdownSectionLabel: {
        display: "block",
        fontSize: "1rem",
        textTransform: "uppercase",
        letterSpacing: "0.5px",
        color: "var(--secondary)",
        fontWeight: 700,
        marginBottom: "8px",
        padding: "0 12px",
    },
    dropdownItem: {
        display: "block",
        padding: "6px 12px",
        borderRadius: "4px",
        transition: "all 0.2s",
        cursor: "pointer",
    },
    dropdownItemText: {
        color: "var(--text-light)",
        textDecoration: "none",
        fontSize: "0.95rem",
        fontWeight: 600,
    }

}

export default AppNavbar;