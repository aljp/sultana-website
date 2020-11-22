/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require('path')

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        components: path.resolve(__dirname, "src/components/"),
        images: path.resolve(__dirname, "src/images/"),
        pages: path.resolve(__dirname, "src/pages/"),
        styling: path.resolve(__dirname, "src/styling/")
      }
    },
  })
}

exports.createPages = ({ actions }) => {
  const { createPage } = actions

  if (process.env.NODE_ENV !== `production`) {
    // createPage({
    //   path: `/automation`,
    //   component: require.resolve(`./src/hidden-pages/automation.jsx`),
    // });
    // createPage({
    //   path: `/optimisation`,
    //   component: require.resolve(`./src/hidden-pages/optimisation.jsx`),
    // });
    // createPage({
    //   path: `/analytics`,
    //   component: require.resolve(`./src/hidden-pages/analytics.jsx`),
    // });
  }
}