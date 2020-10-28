module.exports = {
  siteMetadata: {
    title: `Jordan Miller | Full Stack Developer`,
    name: `Jordan Miller`,
    siteUrl: `https://jmiller.dev`,
    description: `Jordan Miller | Full Stack Developer`,
    hero: {
      heading: `Hey, I'm Jordan Miller`,
      maxWidth: 652,
    },
    social: [
      {
        name: `github`,
        url: `https://github.com/dracco1993`,
      },
      {
        name: `twitter`,
        url: `https://twitter.com/dracco1993`,
      },
      {
        name: `linkedin`,
        url: `https://www.linkedin.com/in/jordan-miller-4a70b0148/`,
      },
    ],
  },
  plugins: [
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
        sources: {
          local: true,
          contentful: false
        },
        authorsPage: true,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "G-X1FN66241P",
      },
    },
  ],
};
