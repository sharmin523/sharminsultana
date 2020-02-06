import React from "react"
import { SiteWrapper } from "../style/shared"
import { GlobalStyle } from "../style/global"

import Navigation from "./Navigation"
import Hero from "./Hero"
import About from "./About"
import Projects from "./Projects"
import Work from "./Work"
import Contact from "./Contact"

const Layout = ({ children }) => {
  return (
    <SiteWrapper>
      {children}
      <GlobalStyle />
      <Navigation/>

      <main>
        <Hero />

        <About />

        <Projects />

        <Work />

        <Contact />

      </main>

      <footer>
        © {new Date().getFullYear()}, Sharmin Sultana
      </footer>
    </SiteWrapper>
  )
}

export default Layout
