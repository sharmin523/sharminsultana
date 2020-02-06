import React from 'react'
import { SectionWrapper, SectionTitle } from '../../style/shared'
import { TextWrapper, ContentWrapper, AboutImage, BulletWrapper, AllBulletsWrapper } from './style'
import SharminSultana from '../../images/sharmin-sultana.jpg'

export default () => (
    <SectionWrapper id="about">
        <SectionTitle>About Me</SectionTitle>

        <ContentWrapper>
            <TextWrapper>
                <p>Hi there. I’m Sharmin, a NYC based software engineer specializing in modern web development technologies.</p>
                
                <p>I completed two years of a Computer Science degree at <a href="https://as.nyu.edu/psychology.html" target="blank">NYU</a> and after working in marketing and product development for 4 years, went on to round out my education in Software Development at the <a href="https://www.gracehopper.com/" target="blank">Grace Hopper Program</a>. I love tackling tough problems and creating pixel-perfect, responsive user experiences.</p>
                
                <p>When I’m not coding, I'll be hiking <span role="img" aria-label="walking-emoji">🚶‍♀️</span>, biking <span role="img" aria-label="biking-emoji">🚴‍♀️</span>, or climbing <span role="img" aria-label="climbing-emoji">🧗‍♀️</span>.</p>
                
                <p>Most recently, I’ve worked with:</p>
                
                <AllBulletsWrapper>
                    <BulletWrapper>
                        <ul>
                            <li>JavaScript</li>
                            <li>React</li>
                            <li>Redux</li>
                            <li>Styled Components</li>
                        </ul>
                    </BulletWrapper>

                    <BulletWrapper>                        
                        <ul>
                            <li>React Native</li>
                            <li>Node.js</li>
                            <li>Express</li>
                            <li>PostgreSQL</li>
                        </ul>
                    </BulletWrapper>
                </AllBulletsWrapper>

            </TextWrapper>

            <AboutImage src={SharminSultana} alt="Sharmin Sultana" />
        </ContentWrapper>

    </SectionWrapper>
)
