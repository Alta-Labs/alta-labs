module.exports = {
  siteMetadata: {
    title: 'Alta Labs',
    description: 'Alta Labs is building the world’s most trusted and transparent business marketplace. We make it easy to find great services from top-rated pros and provide the guidance companies need to make a more informed purchase.',
    author: '@joinlapro'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {      
      resolve: `gatsby-plugin-typography`,      
      options: {        
        pathToConfigModule: `src/utils/typography.js`,      
      },    
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
