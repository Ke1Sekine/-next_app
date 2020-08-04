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
            // '/chapter': { page: '/chapter' },
        };
        // const paths = {};
        // paths[`/`] = { page: '/'};
        // paths[`/chapter`] = { page: '/chapter'};
        // const chapters = ["first", "second", "third"];
        // chapters.forEach(item => {
        //     paths[`/chapter/${item}`] = { page: '/chapter'};
        // });

        return paths;
    },
    publicRuntimeConfig: {
        // Will be available on both server and client
        basePath: '/next_app',
    },
}