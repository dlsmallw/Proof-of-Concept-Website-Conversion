import { useState } from "react";
import { useNavigate } from "react-router-dom";

const NavCrumb: React.FC<{ label: string, href: string }> = ({ label, href }) => {
    const [isHovered, setIsHovered] = useState(false);
    const navigate = useNavigate();

    return (
        <span className="breadcrumb-item" onClick={() => navigate(href)} style={{
                ...CustomStyling.breadcrumbItemParent,
                textDecoration: isHovered ? "underline" : "none"
            }}
            onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                {label}
        </span>
    );
}

const Breadcrumbs: React.FC<{crumbs: { label: string, href: string }[]}> = ({ crumbs }) => {
    return (
        <div className="breadcrumb">
            {crumbs.map((crumb, index) => (
                <span key={index}>
                    {index < crumbs.length - 1 ? (
                        <NavCrumb label={crumb.label} href={crumb.href} />
                    ) : (
                        <span className="breadcrumb-item" style={CustomStyling.breadcrumbItemCurrent}>{crumb.label}</span>
                    )}
                    {index < crumbs.length - 1 && " > "}
                </span>
            ))}
        </div>
    );
}

const CustomStyling: Record<string, React.CSSProperties> = {
    breadcrumbContainer: {
        fontSize: "0.78rem",
        padding: "8px 0"
    },
    breadcrumbItemParent: {
        color: "var(--secondary)",
        cursor: "pointer"
    },
    breadcrumbItemCurrent: {
        color: "var(--text-light)",
    },
}

export default Breadcrumbs;