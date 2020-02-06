import React from 'react'
import { SectionWrapper, SectionTitle } from '../../style/shared'
import { ProjectWrapper, ProjectImage, ProjectDescriptionWrapper, ProjectTitle } from './styles'
import LTD from '../../images/license-to-drift.png'
import Freshly from '../../images/freshly-mobile-app.png'

export default () => (
    <SectionWrapper id="projects">
        <SectionTitle>Things I've Built</SectionTitle>

        <ProjectWrapper align="right">
            <ProjectDescriptionWrapper align="right">
                <ProjectTitle align="right">License To Drift</ProjectTitle>
                <p>A travel recommendation engine that returns destinations and events that might be of interest to you based on your travel preferences.</p>
                <p>I used React and Styled Components to create reusable, responsive components to be used on  static pages and a multi-stage onboarding flow.</p>
            
                {/* TODO add github & link */}
            </ProjectDescriptionWrapper>

            <ProjectImage src={LTD} alt="License To Drift" />
        </ProjectWrapper>

        <ProjectWrapper align="left">
            <ProjectDescriptionWrapper align="left">
                <ProjectTitle align="left">Freshly</ProjectTitle>
                <p>A mobile app that allows users to log their groceries and reduce food waste by tracking expiration dates and suggesting recipes</p>
                <p>Freshly is powered by React Native and Node.js. It also integrates with the Google Cloud Vision API to identify images of food.</p>
            </ProjectDescriptionWrapper>

            <ProjectImage src={Freshly} alt="License To Drift" />
        </ProjectWrapper>
    </SectionWrapper>
)