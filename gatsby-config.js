module.exports = {
  siteMetadata: {
    title: `Sharmin Sultana | Software Engineer`,
    description: `Sharmin Sultana is a NYC based software engineer specializing in JavaScript and other modern web development technologies.`,
    author: `Sharmin Sultana`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Fira Sans`,
            variants: [`regular`, `bold`]
          },
          {
            family: `Fira Mono`,
          },
        ],
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Sharmin-Sultana`,
        short_name: `Sharmin-Sultana`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
