import React from 'react'
import { HeroHeading, HeroSubTitle, HeroWrapper, HeroButton } from './style';

export default () => (
    <HeroWrapper>
        <HeroHeading><span role="img" aria-label="waving-hand-emoji">👋</span> Hi there! My name is</HeroHeading>
        <h1>Sharmin Sultana.</h1>
        <HeroSubTitle>I build fullstack web applications.</HeroSubTitle>
        <HeroButton href="mailto:Hi@SharminSultana.com">Get In Touch</HeroButton>
    </HeroWrapper>
)