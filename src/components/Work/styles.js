import styled from "styled-components"
import { fonts, colors } from "../../style/constants"

export const ExperiencesWrapper = styled.div`
    display: flex;
`

export const CompaniesWrapper = styled.div`
    width: 25%;
    padding: 20px 10px;
`

export const CompanyButton = styled.button`
    border: none;
    border-left: 2px solid ${props => props.selected ? colors.lightPurple : colors.darkPurple};
    width: 100%;
    background: transparent;
    padding: 15px 10px;
    text-align: left;
    text-decoration: none;
    color: ${props => props.selected ? colors.lightPurple : colors.darkPurple};
    opacity: ${props => props.selected ? '100%' : '30%'};
    font-family: ${fonts.mono};
    font-size: 16px;

    &:focus{
        outline: none;
    }
`

export const DescriptionWrapper = styled.div`
    width: 75%;
    padding: 29px 20px 20px;
`

export const WorkDates = styled.p`
    font-family: ${fonts.mono} ;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 170%;
    letter-spacing: 0.02em;
    opacity: 70%;
    margin: 5px 0 10px;
`
