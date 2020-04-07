module.exports = {
  plugins: [
    {
      resolve: 'gatsby-theme-apollo-docs',
      options: {
        root: __dirname,
        siteName: 'Hello world',
        description: "An example of how to set up Apollo's documentation theme",
        sidebarCategories: {
          null: ['index']
        }
      }
    }
  ]
};
