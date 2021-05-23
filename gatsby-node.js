/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
//
exports.onCreateWebpackConfig = ({ actions, stage }) => {
  if (stage === 'build-javascript') {
    // turn off source-maps
    actions.setWebpackConfig({
      devtool: false
    })
  }
};

exports.createPages = ({ graphql, actions }) => {
  const { createRedirect } = actions;
  createRedirect({ fromPath: '/services',  toPath: '/', redirectInBrowser: true, isPermanent: true });
  createRedirect({ fromPath: '/portfolio', toPath: '/', redirectInBrowser: true, isPermanent: true });
  createRedirect({ fromPath: '/about',     toPath: '/', redirectInBrowser: true, isPermanent: true });
  createRedirect({ fromPath: '/contact',   toPath: '/', redirectInBrowser: true, isPermanent: true });
  createRedirect({ fromPath: '/imprint',   toPath: '/', redirectInBrowser: true, isPermanent: true });
}
