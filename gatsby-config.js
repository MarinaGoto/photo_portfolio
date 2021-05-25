const path = require('path');

module.exports = {
  siteMetadata: {
    title: `photo portfolio`,
    description: `Photography portfolio.`,
    author: `@marinagoto`,
    image: "/1.jpg",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        data: `$is-dev: ${true};`,
        includePaths: [
          './node_modules/normalize-scss/sass',
          './node_modules/sass-mq',
          './node_modules/foundation-sites/scss',
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-plugin-force-file-loader`,
      options: {
        rules: [
          'fonts', /* Matches Gatsby default rules for fonts */
          'images', /* Matches Gatsby default rules for images */
          'media', /* Matches Gatsby default rules for media (video/audio) */
        ],
      },
    },
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: './src/images/favicon.png'
      }
    },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          "styles": path.resolve(__dirname, 'src/styles'),
          "images": path.resolve(__dirname, 'src/images'),
          "components": path.resolve(__dirname, 'src/components'),
        },
        extensions: []
      }
    },
  ],
};
