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
        }
      `
    ).then(result => {
      if (result.errors) {
        console.log(result.errors);
        reject(result.errors);
      }
      result.data.allWordpressPage.edges.forEach(edge => {
        if (edge.node.slug === "home") {
          console.log("HOME PAGE! because the slug matches!!");
          createPage({
            path: `/`,
            component: path.resolve(`./src/pages/home.js`),
            context: {
              id: edge.node.wordpress_id
            }
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
          console.log("using the home page template!!!");
          createPage({
            path: `/${edge.node.slug}`,
            component: path.resolve(`./src/templates/stories.js`),
            context: {
              id: edge.node.wordpress_id
            }
          });
        }
      });
    });
    resolve();
  });
};
