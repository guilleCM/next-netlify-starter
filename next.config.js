module.exports = {
    async rewrites() {
      return [
        {
          source: '/estilos',
          destination: '/styles',
        },
      ]
    },
  }