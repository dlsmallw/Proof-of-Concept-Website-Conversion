import { HeaderContainer, HeaderTitle } from "src/components/layout/header"
import BodyContainer from "src/components/layout/body"

export default function PrivacyPolicy() {
    return (
        <div>
            <HeaderContainer style={CustomStyling.headerContainer}>
                <HeaderTitle style={CustomStyling.headerTitle}>Privacy Policy</HeaderTitle>
            </HeaderContainer>
            <BodyContainer>
                <span>PLACEHOLDER</span>
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
}