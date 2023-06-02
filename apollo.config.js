module.exports = {
    client: {
      service: {
        name: "water-service", 
        // the name of your graph in Studio
        url: 'http://localhost:5432/graphql',
      },
      includes: [
        'src/**/*.vue',
        'src/**/*.js',
      ],
    },
  };