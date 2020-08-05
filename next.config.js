const path = require('path')

module.exports = {
    assetPrefix: '/next_app',
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
    exportTrailingSlash: true,
    exportPathMap: async function() {
        const paths = {
            '/': { page: '/' },
        };
        return paths;
    },
    publicRuntimeConfig: {
        // Will be available on both server and client
        basePath: '/next_app',
    },
}