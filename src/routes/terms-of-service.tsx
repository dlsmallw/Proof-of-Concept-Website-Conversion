import { HeaderContainer, HeaderTitle } from "src/components/layout/header";
import BodyContainer from "src/components/layout/body";
import { BoldText, CustomLink } from "src/components/misc/text";

const SectionHeader: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <h2 style={CustomStyling.sectionHeader}>{children}</h2>
    );
}

const SectionContent: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div style={CustomStyling.sectionContentContainer}>{children}</div>
    );
}

const SectionParagraph: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <p style={CustomStyling.bodyText}>{children}</p>
    );
}

export default function TermsOfService() {
    return (
        <div>
            <HeaderContainer style={CustomStyling.headerContainer}>
                <HeaderTitle style={CustomStyling.headerTitle}>Terms of Service</HeaderTitle>
            </HeaderContainer>
            <BodyContainer>
                <div className="inner-body-container" style={CustomStyling.bodyContentContainer}>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <p style={CustomStyling.bodyText}>Last Updated: {new Date().toLocaleDateString() /* Just a placeholder for setting up styling */}</p>
                    </div>
                    <div className="acceptance-section">
                        <SectionHeader>Acceptance of Terms</SectionHeader>
                        <SectionContent>
                            <SectionParagraph>
                                By accessing and using Mil-Multiplier (<CustomLink route="/">milmultiplier.com</CustomLink>), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                            </SectionParagraph>
                        </SectionContent>
                    </div>
                    <div className="nature-of-service-section">
                        <SectionHeader>Nature of the Service</SectionHeader>
                        <SectionContent>
                            <SectionParagraph>
                                Mil-Multiplier provides free military compensation calculators, education benefits comparison tools, career transition resources, and informational content. All tools and content are provided <BoldText>for informational and planning purposes only.</BoldText>
                            </SectionParagraph>
                        </SectionContent>
                    </div>
                    <div className="not-professional-advice-section">
                        <SectionHeader>Not Professional Advice</SectionHeader>
                        <SectionContent>
                            <SectionParagraph>
                                <BoldText>This site does not provide financial, legal, tax, or career advice. </BoldText> The calculators produce estimates based on publicly available DoD pay tables, DFAS rates, VA benefit schedules, and other government-published data. These estimates may differ from your actual entitlements due to individual circumstances, policy changes, tax situations, or data timing.
                            </SectionParagraph>

                            <SectionParagraph>
                                <BoldText>No professional relationship is created by using this site. </BoldText> Use of Mil-Multiplier's calculators, tools, or content does not establish an attorney-client relationship, financial advisor-client relationship, tax preparer-client relationship, or any other professional advisory relationship. You are solely responsible for any decisions made based on the information provided.
                            </SectionParagraph>

                            <SectionParagraph>
                                For official pay and benefits information, consult your finance office, servicing HR/personnel office, or the appropriate government agency (DFAS, VA, DoD). For financial planning decisions, consult a licensed financial advisor. For legal questions, consult a qualified attorney or your installation's legal assistance office.
                            </SectionParagraph>
                        </SectionContent>
                    </div>
                    <div className="ai-disclosure-section">
                        <SectionHeader>AI-Generated Content</SectionHeader>
                        <SectionContent>
                            <SectionParagraph>
                                The MOS to Civilian Job Translator uses artificial intelligence (Claude by Anthropic) to generate career match suggestions, salary ranges, and resume bullet points. AI-generated content is <BoldText>not guaranteed to be accurate</BoldText> and should be independently verified. Salary ranges are estimates based on national averages and may vary significantly by location, employer, and individual qualifications. Resume bullets are suggestions and should be customized to reflect your actual experience.
                            </SectionParagraph>
                            <SectionParagraph>
                                <BoldText>Mil-Multiplier does not guarantee employment.</BoldText> Career matches generated by the MOS Translator are informational suggestions, not job offers or guarantees of employment outcomes. AI-generated resume bullets must be reviewed and verified for accuracy by the user before submitting to any employer. You are solely responsible for the content of your resume and job applications.
                            </SectionParagraph>
                        </SectionContent>
                    </div>
                    <div className="data-accuracy-section">
                        <SectionHeader>Data Accuracy</SectionHeader>
                        <SectionContent>
                            <SectionParagraph>
                                We make reasonable efforts to maintain current and accurate data in our calculators. Pay tables, BAH rates, COLA rates, OHA rates, and benefit amounts are updated annually based on publicly published government sources. However, we cannot guarantee the accuracy, completeness, or timeliness of any data. Rates and policies may change between our update cycles.
                            </SectionParagraph>
                            <SectionParagraph>
                                <BoldText>Official data sources:</BoldText> Base pay tables are sourced from DFAS. BAH rates from the DoD Housing Center. COLA rates from DTMO. VA benefit rates from the Department of Veterans Affairs. Education benefit caps from the VA GI Bill website.
                            </SectionParagraph>
                        </SectionContent>
                    </div>
                    <div className="non-gov-affiliation-section">
                        <SectionHeader>No Government Affiliation</SectionHeader>
                        <SectionContent>
                            <SectionParagraph>
                                Mil-Multiplier is an independently operated website. It is <BoldText>not affiliated with, endorsed by, or connected to</BoldText> the Department of Defense, any branch of the U.S. Armed Forces, the Department of Veterans Affairs, DFAS, or any other government agency.
                            </SectionParagraph>
                        </SectionContent>
                    </div>
                    <div className="ip-section">
                        <SectionHeader>Intellectual Property</SectionHeader>
                        <SectionContent>
                            <SectionParagraph>
                                The calculators, tools, blog content, design, and code on this site are the property of Mil-Multiplier. You may use the tools freely for personal use. You may not copy, reproduce, or redistribute the site's tools or content without permission.
                            </SectionParagraph>
                        </SectionContent>
                    </div>
                    <div className="third-party-section">
                        <SectionHeader>Third-Party Links</SectionHeader>
                        <SectionContent>
                            <SectionParagraph>
                                This site may contain links to external websites (government agencies, educational institutions, financial services). We are not responsible for the content, accuracy, or privacy practices of linked sites.
                            </SectionParagraph>
                        </SectionContent>
                    </div>
                    <div className="data-analytics-section">
                        <SectionHeader>Data Analytics and Collection</SectionHeader>
                        <SectionContent>
                            <SectionParagraph>
                                By using this site, you acknowledge that we use Google Analytics 4 (GA4) to collect anonymized usage data including pages visited, time on site, device type, and calculator interactions. This data helps us improve the site and is subject to <CustomLink href="https://policies.google.com/privacy">Google's Privacy Policy</CustomLink>. No personally identifiable information is collected by our analytics. You may opt out of analytics tracking by installing the <CustomLink href="https://tools.google.com/dlpage/gaoptout">Google Analytics Opt-Out Browser Add-on</CustomLink>. For full details on data collection, see our <CustomLink route="/privacy-policy">Privacy Policy</CustomLink>.
                            </SectionParagraph>
                        </SectionContent>
                    </div>
                    <div className="ad-section">
                        <SectionHeader>Advertisements</SectionHeader>
                        <SectionContent>
                            <SectionParagraph>
                                This site displays advertisements through Google AdSense. Ad content is determined by Google and its advertising partners, not by Mil-Multiplier. The appearance of an advertisement does not constitute an endorsement of the advertised product or service.
                            </SectionParagraph>
                        </SectionContent>
                    </div>
                    <div className="liability-section">
                        <SectionHeader>Limitation of Liability</SectionHeader>
                        <SectionContent>
                            <SectionParagraph>
                                Mil-Multiplier is provided "as is" without warranties of any kind. We are not liable for any decisions made based on the information or estimates provided by our tools. Use of this site is at your own risk.
                            </SectionParagraph>
                        </SectionContent>
                    </div>
                    <div className="term-changes-section">
                        <SectionHeader>Changes to Terms</SectionHeader>
                        <SectionContent>
                            <SectionParagraph>
                                We may update these terms from time to time. Continued use of the site after changes constitutes acceptance of the updated terms.
                            </SectionParagraph>
                        </SectionContent>
                    </div>
                    <div className="contact-section">
                        <SectionHeader>Contact</SectionHeader>
                        <SectionContent>
                            <SectionParagraph>
                                Questions about these terms can be directed to <CustomLink href="mailto:milmultiplier@gmail.com">milmultiplier@gmail.com</CustomLink>.
                            </SectionParagraph>
                        </SectionContent>
                    </div>
                </div>
            </BodyContainer>
        </div>
    );
}

const CustomStyling: Record<string, React.CSSProperties> = {
    headerTitle: {
        display: "flex",
        justifyContent: "center",
    },
    bodyContentContainer: {
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        padding: "40px",
        margin: "20px auto",
        borderRadius: "8px",
        boxShadow: "0 4px 5px rgba(0, 0, 0, 0.5)",
        background: "var(--bg-alt)",
        maxWidth: "900px"
    },
    sectionHeader: {
        color: "var(--secondary)",
        fontSize: "1.3rem",
        margin: "12px 0 12px",
        paddingTop: "13px",
        borderTop: "1px solid var(--border)",
        textShadow: "1px 1px 2px rgba(0, 0, 0, 0.7)",
    },
    sectionContentContainer: {
        display: "flex",
        flexDirection: "column",
        gap: "12px",
    },
    bodyText: {
        color: "var(--text-light)",
        fontWeight: 500,
    }
}