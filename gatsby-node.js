/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

 // You can delete this file if you're not using it

const path = require(`path`)

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;

  const loadRecipes = new Promise((resolve, reject) => {
    graphql(`
      {
        allNodeRecipe {
          edges {
            node {
              path {
                alias
              }
            }
          }
        }
      }
    `
    ).then(result => {
        result.data.allNodeRecipe.edges.map(({ node }) => {
        createPage({
          path: `${node.path.alias}/`,
          component: path.resolve(`./src/templates/recipe.js`),
          context: {
            slug: node.path.alias,
          },
        })
      })
      resolve()
    })
  })

  return Promise.all([loadRecipes])
};
