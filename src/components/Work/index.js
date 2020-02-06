import React, { useState, Fragment } from 'react'
import { SectionWrapper, SectionTitle } from '../../style/shared'
import { CompaniesWrapper, DescriptionWrapper, CompanyButton, WorkDates, ExperiencesWrapper } from './styles'

const companies = [
    "GrowthLab",
    "Freelance To Win",
    "Epic Systems"
]

const experiences = [
   [
       {
            title: "Product Developer",
            dates: "January 2019 - September 2019",
            bullets: [
                "Led the research and development of a scalable, online course on an accelerated timeline which generated $200K within 4 days of being released",
                "Conducted customer research, SME interviews, and competitive analysis to uncover insights that were utilized to position and concept the Money Mindsets product"
            ]
        }
    ],
    [
        {
            title: "Director of Marketing & Operations",
            dates: "January 2018 - November 2018",
            bullets: [
                "Managed copywriting, marketing, and customer service teams through planning, executing, and optimizing marketing campaigns",
                "Systemized the process for launching new products for reliable execution across teams"
            ]
        },
        {
            title: "Marketing Project Manager",
            dates: "May 2016 - December 2017",
            bullets: [
                "Used strategic & innovative marketing initiatives to help grow a 1-man blog into an e-commerce business with over $1MM+ in revenue",
                "Developed and executed marketing campaigns that used content marketing to capture and convert 1K new leads every month"
            ]
        },
    ],
    [
        {
            title: "Implementation Project Manager",
            dates: "November 2015 - May 2016",
            bullets: [
                "Educated and onboarded hospital staff for new enterprise medical software",
                "Partnered with leading US hospitals to customize software to their needs by leading and training their on-staff analysts"
            ]
        }
    ]
]

export default () => {
    const [jobNum, setJobNum] = useState(0)
    const job = experiences[jobNum]

    return (
        <SectionWrapper id="work">
            <SectionTitle>My Professional Experience</SectionTitle>

            <ExperiencesWrapper>
                <CompaniesWrapper>
                    {companies.map((company, i) => (
                        <CompanyButton selected={i === jobNum} onClick={() => setJobNum(i)} key={company}>
                            {company}
                        </CompanyButton>
                    ))}
                </CompaniesWrapper>

                <DescriptionWrapper>
                    {
                        job.map(position => {
                            return (
                                <Fragment key={position}>
                                    <h3>{position.title}</h3>
                                    <WorkDates>{position.dates}</WorkDates>
                                    <ul>
                                        {position.bullets.map(bullet => <li>{bullet}</li>)}
                                    </ul>
                                </Fragment>
                            )
                        })
                    }
                </DescriptionWrapper>
            </ExperiencesWrapper>
        </SectionWrapper>
    )
}
