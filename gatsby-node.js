const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const winePage = path.resolve(`./src/templates/WineTemplate.js`);

  const resultWines = await graphql(
    `
      {
        allMarkdownRemark(
          filter: { fileAbsolutePath: { regex: "/wine/" } }
          sort: { fields: frontmatter___order }
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
              }
            }
          }
        }
      }
    `
  );

  if (resultWines.errors) {
    throw resultWines.errors;
  }

  const wines = resultWines.data.allMarkdownRemark.edges;

  wines.forEach((wine) => {
    createPage({
      path: wine.node.fields.slug,
      component: winePage,
      context: {
        slug: wine.node.fields.slug,
      },
    });
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
};

exports.onCreatePage = ({ page, actions }) => {
  const { createPage } = actions

  createPage({
    ...page,
    path: "/fr" + page.path
  })
}

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html" || stage === "develop-html") {
    const regex = [/node_modules\/leaflet/, /node_modules\\leaflet/];
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: regex,
            use: loaders.null(),
          },
        ],
      },
    });
  }
};
