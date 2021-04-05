module.exports = {
  siteMetadata: {
  title: "urzad-skarbowy-online-rewrite",
  },
  plugins: [
  `gatsby-plugin-image`,
  `gatsby-plugin-sharp`,
  `gatsby-transformer-sharp`,
  "gatsby-plugin-react-helmet",
  {
    resolve: "gatsby-plugin-manifest",
    options: {
    icon: "src/images/icon.png",
    },
  },
  ],
};
