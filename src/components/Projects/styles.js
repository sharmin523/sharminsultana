import styled from "styled-components";
import { colors, sizes } from "../../style/constants";

export const ProjectWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: ${props => props.align === 'left' ? 'row;' : 'row-reverse;'}
    margin: 50px 0 10px;

    @media (max-width: ${sizes.tablet}) {
        flex-direction: column-reverse;
        align-items: center;
    }
`

export const ProjectImage = styled.img`
    width: 38.5%;
    object-fit: contain;

    @media (max-width: ${sizes.tablet}) {
        width: 90%;
    }
`

export const ProjectDescriptionWrapper = styled.div`
    background: rgba(93, 133, 255, 0.2);
    width: 58.5%;
    padding: 20px;
    text-align:  ${props => props.align};

    @media (max-width: ${sizes.tablet}) {
        width: 90%;
        text-align: left;
    }
`

export const ProjectTitle = styled.h3`
    display: flex;
    flex-direction: column;

    &::after {
        content: "";
        display: block;
        height: 1px;
        width: 225px;
        background-color: ${colors.lightPurple} ;
        position: relative;
        margin-top: 8px;
        align-self: ${props => props.align === "left" ? "flex-start" : "flex-end"};

        @media (max-width: ${sizes.tablet}) {
            align-self: flex-start;
        }
    }
`
