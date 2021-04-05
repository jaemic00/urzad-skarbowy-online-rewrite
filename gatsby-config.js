module.exports = {
  siteMetadata: {
    title: "urzad-skarbowy-online-rewrite",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
  ],
};
