const path = require(`path`);
const { graphql } = require("gatsby");

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    graphql(
      `
        {
          allWordpressPage {
            edges {
              node {
                slug
                template
                wordpress_id
              }
            }
          }

          allWordpressWpStory {
            edges {
              node {
                slug
              }
            }
          }

          allWordpressPost {
            edges {
              node {
                slug
              }
            }
          }

          allWordpressWpInitiatives {
            edges {
              node {
                slug
              }
            }
          }
        }
      `
    ).then(result => {
      if (result.errors) {
        console.log(result.errors);
        reject(result.errors);
      }
      result.data.allWordpressPage.edges.forEach(edge => {
        if (edge.node.slug === "home") {
          createPage({
            path: `/`,
            component: path.resolve(`./src/pages/index.js`)
          });
        } else if (edge.node.template === "tpl-page-contact.php") {
          createPage({
            path: `/${edge.node.slug}`,
            component: path.resolve(`./src/templates/contact.js`),
            context: {
              id: edge.node.wordpress_id
            }
          });
        } else if (edge.node.template === "tpl-page-how-to-help.php") {
          createPage({
            path: `/${edge.node.slug}`,
            component: path.resolve(`./src/templates/howToHelp.js`),
            context: {
              id: edge.node.wordpress_id
            }
          });
        } else if (edge.node.template === "tpl-page-nominate.php") {
          createPage({
            path: `/${edge.node.slug}`,
            component: path.resolve(`./src/templates/nominate.js`),
            context: {
              id: edge.node.wordpress_id
            }
          });
        } else if (edge.node.template === "tpl-page-news-events.php") {
          createPage({
            path: `/${edge.node.slug}`,
            component: path.resolve(`./src/templates/news.js`),
            context: {
              id: edge.node.wordpress_id
            }
          });
        } else if (edge.node.template === "tpl-page-our-mission.php") {
          createPage({
            path: `/${edge.node.slug}`,
            component: path.resolve(`./src/templates/ourMission.js`),
            context: {
              id: edge.node.wordpress_id
            }
          });
        } else if (edge.node.template === "tpl-page-stories.php") {
          createPage({
            path: `/${edge.node.slug}`,
            component: path.resolve(`./src/templates/stories.js`),
            context: {
              id: edge.node.wordpress_id
            }
          });
        } else if (edge.node.template === "tpl-page-home.php") {
          createPage({
            path: `/${edge.node.slug}`,
            component: path.resolve(`./src/templates/hometpl.js`),
            context: {
              id: edge.node.wordpress_id
            }
          });
        }
      });

      result.data.allWordpressWpStory.edges.forEach(edge => {
        createPage({
          path: `/stories/${edge.node.slug}`,
          component: path.resolve(`./src/templates/story.js`),
          context: {
            slug: edge.node.slug
          }
        });
      });

      result.data.allWordpressPost.edges.forEach(edge => {
        createPage({
          path: `/news-events/${edge.node.slug}`,
          component: path.resolve(`./src/templates/post.js`),
          context: {
            slug: edge.node.slug
          }
        });
      });

      result.data.allWordpressWpInitiatives.edges.forEach(edge => {
        createPage({
          path: `/initiatives/${edge.node.slug}`,
          component: path.resolve(`./src/templates/Initiative.js`),
          context: {
            slug: edge.node.slug
          }
        });
      });
    });
    resolve();
  });
};
