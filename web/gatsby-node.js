const path = require('path')

exports.createPages = async ({
    graphql,
    actions,
    reporter,
}) => {
    const { createPage } = actions

    const result = await graphql(`
        {
            allSanityArticle {
                edges {
                  node {
                    slug {
                      current
                    }
                  }
                }
            }
        }
    `)

    if (result.errors) {
        reporter.panicOnBuild('Error while running GraphQL query to source blog article pages')
        return
    }

    const blogArticleTemplate = path.resolve('src/templates/blogArticle.tsx')
    result.data.allSanityArticle.edges.forEach(({ node }) => {
        const slug = node.slug.current
        createPage({
            path: `blog/${slug}`,
            component: blogArticleTemplate,
            context: {
                slug,
            },
        })
    })
}

exports.onCreateWebpackConfig = ({ stage, actions, getConfig }) => {
    if (stage === 'build-javascript') {
      const config = getConfig()
      const miniCssExtractPlugin = config.plugins.find(
        plugin => plugin.constructor.name === 'MiniCssExtractPlugin'
      )
      if (miniCssExtractPlugin) {
        miniCssExtractPlugin.options.ignoreOrder = true
      }
      actions.replaceWebpackConfig(config)
    }
  }
