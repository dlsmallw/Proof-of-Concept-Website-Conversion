import { HeaderContainer, HeaderTitle, HeaderSubtitle } from "src/components/layout/header";
import BodyContainer from "src/components/layout/body";

export default function About() {

    return (
        <div>
            <HeaderContainer style={CustomStyling.headerContainer}>
                    <HeaderTitle style={CustomStyling.headerTitle}>About Mil-Multiplier</HeaderTitle>
                    <HeaderSubtitle style={CustomStyling.headerSubtitle}>Built by an active-duty NCO who got tired of bad military calculators</HeaderSubtitle>
            </HeaderContainer>
            <BodyContainer>
                <p>Mil-Multiplier is designed to provide accurate and reliable military calculations for service members.</p>
            </BodyContainer>
        </div>
    );
}

const CustomStyling: Record<string, React.CSSProperties> = {
    headerContainer: {

    },
    headerTitle: {
        display: "flex",
        justifyContent: "center",
    },
    headerSubtitle: {
        display: "flex",
        justifyContent: "center",
    },
}