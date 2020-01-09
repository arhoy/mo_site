// const path = require('path');
// exports.createPages = async ({ actions, graphql }) => {
//   const { createPage } = actions;
//   const { data } = await graphql(`
//     {
//       allArticles: allContentfulFashionTwoArticles {
//         nodes {
//           slug
//         }
//       }
//     }
//   `);

// create pages for Article Content Model
// data.allArticles.nodes.forEach(article => {
//   createPage({
//     path: `articles/${article.slug}`,
//     component: path.resolve('./src/templates/Article.js'),
//     context: {
//       slug: article.slug,
//     },
//   });
// });

// create page for each bag product and list them all in /bags

// create page for each amazon product and list them in /amazonproducts

// mapbox to work (needed? check?)
// exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
//   if (stage === 'build-html') {
//     actions.setWebpackConfig({
//       module: {
//         rules: [
//           {
//             test: /mapbox-gl/,
//             use: loaders.null(),
//           },
//         ],
//       },
//     });
//   }
// };

// blog template w/ pagination
// const posts = data.posts.nodes;
// const postsPerPage = 3;
// const numPages = Math.ceil(posts.length / postsPerPage);

// Array.from({ length: numPages }).forEach((_, i) => {
//   createPage({
//     path: i === 0 ? `/blogs` : `/blogs/${i + 1}`,
//     component: path.resolve('./src/templates/BlogListTemplate.js'),
//     context: {
//       limit: postsPerPage,
//       skip: i * postsPerPage,
//       numPages,
//       currentPage: i + 1,
//     },
//   });
//   // });
// };
