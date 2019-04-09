let BASE_URL = "";
let PORTOCOL = "";

if (process.env.NODE_ENV === "development") {
  BASE_URL = "localhost/gatsby-airdrieangel";
  PORTOCOL = "http";
} else {
  BASE_URL = "database.airdrieangel.ca";
  PORTOCOL = "https";
}

module.exports = {
  siteMetadata: {
    title: `Airdrie Angel`,
    description: `A gift from the heart, a lift to the spirit. Airdrie Angel is a grassroots organization that is completely community based.`,
    author: `Trevor Rounce`,
    siteUrl: `https://airdrieangel.ca`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `airdrie-angel-theme`,
        short_name: `airdrie-angel`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/aa-favicon.png` // This path is relative to the root of the site.
      }
    },

    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-138055574-1",
        // Puts tracking script in the head instead of the body
        head: false
      }
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://airdrieangel.ca",
        sitemap: "https://airdrieangel.ca/sitemap.xml",
        policy: [{ userAgent: "*", allow: "/" }]
      }
    },
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        // your wordpress source
        baseUrl: `${BASE_URL}`,
        protocol: `${PORTOCOL}`,
        // is it hosted on wordpress.com, or self-hosted?
        hostingWPCOM: false,
        // does your site use the Advanced Custom Fields Plugin?
        useACF: true
      }
    },

    {
      resolve: `gatsby-plugin-netlify`,
      options: {}
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ]
};
