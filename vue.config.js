const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');
const { resolve } = require('path');

module.exports = {
    devServer: {
        port: 3001,
        host: '0.0.0.0',
        allowedHosts: 'all'
    },
    chainWebpack: config => {
        config.optimization.minimize(false);
        config.module
            .rule('i18n')
            .resourceQuery(/blockType=i18n/)
            .type('javascript/auto')
            .use('i18n')
            .loader('@intlify/vue-i18n-loader')
            .end();

        config.resolve.fallback = {
            stream: require.resolve('stream-browserify')
        };

        if (process.env.NODE_ENV === 'test') {
            const scssRule = config.module.rule('scss');
            scssRule.uses.clear();
            scssRule
                .use('null-loader')
                .loader('null-loader');
        }
    },
    configureWebpack: {
        devtool: 'source-map',
        plugins: [
            new NodePolyfillPlugin()
        ],
        resolve: {
            extensions: ['.js', '.ts', '.vue', '.json'],
            alias: {
                '@pictaccio/admin-gui': resolve(__dirname, '/app/app/admin-gui'),
                '@pictaccio/shared': resolve(__dirname, '/app/lib/shared'),
            }
        },
    },
    css: {
        loaderOptions: {
            sass: {
                additionalData: `
                @use "sass:math";
                @import "@pictaccio/admin-gui/src/scss/variables.scss";
                @import "@pictaccio/admin-gui/src/scss/mixins.scss";
                @import "@pictaccio/admin-gui/src/scss/functions.scss";
                @import "@pictaccio/admin-gui/src/scss/style.scss";
                `
            }
        }
    }
}
