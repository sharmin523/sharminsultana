import styled from "styled-components";
import { colors, fonts, sizes } from "./constants";

export const SiteWrapper = styled.div`
    margin: 0 auto;
    max-width: 960px;
    padding: 1.45rem 1.0875rem 1.45rem;
`

export const SectionWrapper = styled.div`
    margin: 100px 0;
`

export const SectionTitle = styled.h2`
    display: flex;
    align-items: center;

    @media(max-width: ${sizes.mobile}) {
        flex-direction: column;
        align-items: flex-start;
    }

    ::after {
        content: "";
        display: block;
        height: 1px;
        width: 225px;
        background-color: ${colors.lightPurple} ;
        left: 0;
        top: -1px;
        border-top: 1px solid ${colors.lightPurple};
        margin-left: 10px;

        @media(max-width: ${sizes.mobile}) {
            margin: 8px 0 0;
        }
    }
`

export const StyledButton = styled.a`
    border: 2px solid ${colors.lightPurple};
    box-sizing: border-box;
    border-radius: 5px;
    background-color: transparent;
    padding: 5px 15px;
    text-align: center;
    text-decoration: none;
    color: ${colors.lightPurple};
    font-family: ${fonts.mono};
    font-size: 16px;

    &:hover {
        text-decoration: none;
    }
`