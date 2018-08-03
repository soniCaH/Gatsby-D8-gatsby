module.exports = {
  siteMetadata: {
    apiUrl: 'http://dev.gatsby.d8',
    title: 'Gatsby Default Starter',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-source-drupal',
      options: {
        baseUrl: 'http://dev.gatsby.d8/',
        apiBase: 'jsonapi',
      },
    }
  ],
}
