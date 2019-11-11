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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/content`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
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
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-121546163-4`,
      },
    },
    {
      resolve: 'gatsby-plugin-tinacms',
      options: {
        plugins: [
          `gatsby-tinacms-remark`,
          `gatsby-tinacms-git`,
        ],
        sidebar: {
          position: 'fixed',
          hidden: process.env.NODE_ENV === "production",
        },
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
