import styled from "styled-components";
import { colors, fonts } from "../../style/constants";
import { SectionWrapper, StyledButton } from "../../style/shared";

export const HeroWrapper = styled(SectionWrapper)`
    max-width: 900px;
`

export const HeroHeading = styled.h1`
    font-family: ${fonts.mono} ;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 24px;
    color: ${colors.lightPurple}
`

export const HeroSubTitle = styled.h1`
    opacity: 70%;
`

export const HeroButton = styled(StyledButton)`
    margin-top: 30px;
    font-size: 20px;
    display: inline-block;
`