import styled from "styled-components";
import { sizes } from "../../style/constants";

export const ContentWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    @media (max-width: ${sizes.tablet}) {
        flex-direction: column;
        align-items: center;
        & > div {
            width: 100%
        }
    }

    &:last-child p {
        margin-bottom: 0px;
    }
`

export const TextWrapper = styled.div`
    width: 58.5%;
`

export const AboutImage = styled.img`
    width: 38.5%;
    object-fit: contain;
    margin-top: 23px;

    @media (max-width: ${sizes.tablet}) {
        width: 60%;
        margin-top: 20px;
    }
`

export const AllBulletsWrapper = styled.div`
    display: flex;
`

export const BulletWrapper = styled.div`
    width: 50%;
`
