import { useState } from "react";

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

const ArticleLink: React.FC<{ href: string, children: React.ReactNode }> = ({ href, children }) => {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <a href={href} style={{ ...CustomStyling.articleLink, textDecoration: isHovered ? "underline" : "none" }} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>{children}</a>
    );
}

const ArticleDivider: React.FC = () => {
    return (
        <div style={CustomStyling.sectionDivider}/>
    );
}

const FAQElement: React.FC<{faqs: { question: string, answer: string }[]}> = ({ faqs }) => {
    return (
        <div className="FAQ-outer-container" style={CustomStyling.faqOuterContainer}>
            <div className="FAQ-container" style={CustomStyling.faqInnerContainer}>
                <h2 className="FAQ-title" style={CustomStyling.faqTitle}>Frequently Asked Questions</h2>
                {faqs.map((faq, index) => (
                    <details key={index} className="FAQ-item" style={CustomStyling.faqItem}>
                        <summary className="FAQ-question" style={CustomStyling.faqQuestion}>
                            {faq.question}
                        </summary>
                        <div className="FAQ-answer-container" style={CustomStyling.faqAnswerContainer}>
                            <span className="FAQ-answer" style={CustomStyling.faqAnswer}>{faq.answer}</span>
                        </div>
                    </details>
                ))}
            </div>
        </div>
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
    sectionDivider: {
        paddingTop: "20px",
        borderTop: "1px solid var(--border)"
    },
    articleLink: {
        color: "var(--secondary)",
        textDecoration: "none",
    },
    faqOuterContainer: {
        width: "100%",
        display: "flex",
        justifyContent: "center"
    },
    faqInnerContainer: {
        background: "var(--card-bg, #2d322e)", 
        borderRadius: "12px",
        padding: "30px",
        width: "100%",
    },
    faqTitle: {
        color: "var(--secondary, #b8941f)", 
        fontSize: "1.5rem",
        marginBottom: "15px"
    },
    faqItem: {
        borderBottom: "1px solid var(--border, #404540)",
        padding: "15px 0"
    },
    faqQuestion: {
        cursor: "pointer",
        fontWeight: 700,
        color: "var(--text, #e8e8e8)",
        fontSize: "1.05rem",
    },
    faqAnswerContainer: {
        paddingTop: "10px",
    },
    faqAnswer: {
        marginTop: "10px",
        color: "var(--text-light, #a0a0a0)"
    }
}

export { BoldText, GoldText, ArticleLink, ArticleDivider, FAQElement };