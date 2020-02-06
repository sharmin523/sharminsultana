import React from 'react'
import { Logo, NavLink, NavWrapper, LinksWrapper } from './styles'
import { StyledButton } from '../../style/shared'

export default () => (
    <header>
        <NavWrapper>
            <Logo href="/">Sharmin.</Logo>
        
            <LinksWrapper>
                <NavLink href="#about">About</NavLink>
                <NavLink href="#projects">Projects</NavLink>
                <NavLink href="#work">Work</NavLink>
                <NavLink href="#contact">Contact</NavLink>
                <StyledButton href="/resume.pdf" target="blank">Resume</StyledButton>
            </LinksWrapper>
    
        </NavWrapper>
    </header>
    
)
