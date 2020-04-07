module.exports = {
  // pathPrefix: '/docs/apollo-server',
  plugins: [
    {
      resolve: 'gatsby-theme-apollo-docs',
      options: {
        root: __dirname,
        siteName: 'Basic Appolo Docs',
        description: "An example of how to set up Apollo's documentation theme",
        githubRepo: 'nicopresto/gatsby-theme-apollo-docs-basic',
        sidebarCategories: {
          null: [
            'index',
            'getting-started',
            'whats-new'
          ],
          Features: [
            'features/mocking',
            'features/errors',
            'features/data-sources'
          ]
        }
      }
    }
  ]
};
