module.exports = {
  /* Your site config here */
  // plugins: [`gatsby-mdx`],

  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `src/posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: "gatsby-remark-images",
          },
        ],
        defaultLayouts: {
          // posts: require.resolve("./src/templates/post-template.js"),
          // default: require.resolve("./src/components/layout.js"),
        },
      },
    },
  ],
}
