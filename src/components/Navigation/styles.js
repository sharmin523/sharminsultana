import styled from 'styled-components'
import { colors, fonts } from '../../style/constants'

export const NavWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const Logo = styled.a`
    font-style: normal;
    font-weight: bold;
    font-size: 30px;
    line-height: 36px;
    letter-spacing: 0.04em;
    color: ${colors.darkPurple};

    &:hover {
        text-decoration: none;
    }
`

export const LinksWrapper = styled.div`
    width: 60%;
    max-width: 450px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 640px) {
        width: auto;
    }
`

export const NavLink = styled.a`
    font-family: ${fonts.mono};
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 20px;
    color: ${colors.darkPurple};

    &:hover {
        text-decoration: none;
    }

    @media (max-width: 640px) {
        display: none;
    }
`

