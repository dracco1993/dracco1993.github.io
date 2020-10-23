module.exports = {
  siteMetadata: {
    title: `Novela by Narative`,
    name: `Narative`,
    siteUrl: `https://novela.narative.co`,
    description: `Jordan Miller | Senior Software Engineer at Springbuk`,
    hero: {
      heading: `Senior Software Engineer at Springbuk`,
      maxWidth: 652,
    },
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/dracco1993`,
      },
      {
        name: `github`,
        url: `https://github.com/dracco1993`,
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
