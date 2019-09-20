module.exports = {
  siteMetadata: {
    title: `Bui Quoc Khanh`,
    description: `Senior Software Engineer`,
    author: `@bkdev98`,
  },
  plugins: [
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
        name: `Bui Quoc Khanh`,
        short_name: `qckhnh`,
        start_url: `/`,
        background_color: `#EED4CD`,
        theme_color: `#EED4CD`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
