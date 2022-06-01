const path = require('path');
require('dotenv').config({
    path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
    siteMetadata: {
        title: 'EPOR',
        description: 'EPOR (End Poverty & Overcome Racism)',
    },
    plugins: [
        {
            resolve: 'gatsby-source-prismic',
            options: {
                repositoryName: process.env.GATSBY_PRISMIC_REPO_NAME,
                linkResolver: require('./src/LinkResolver').linkResolver,
                schemas: {
                    homepage: require('./custom_types/homepage.json'),
                    navigation: require('./custom_types/navigation.json'),
                    page: require('./custom_types/page.json'),
                },
            },
        },
        'gatsby-plugin-image',
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-emotion',
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                icon: 'src/images/favicon.png',
            },
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'images',
                path: `${__dirname}/src/images`,
            },
        },
        {
            resolve: 'gatsby-plugin-google-fonts',
            options: {
                fonts: [
                    `Lato\:400,400,700,700i,900`,
                    `Amiri\:400,400,700,700i`,
                    `Montserrat\:300,300i,400,400i,500,500i,700,700i,800,800i,900,900i`,
                ],
            },
        },
        {
            resolve: `gatsby-plugin-alias-imports`,
            options: {
                alias: {
                    '@components': path.resolve(__dirname, 'src/components'),
                    '@images': path.resolve(__dirname, 'src/images'),
                    '@styles': path.resolve(__dirname, 'src/styles'),
                    '@pages': path.resolve(__dirname, 'src/pages'),
                    '@hooks': path.resolve(__dirname, 'src/hooks'),
                    '@colors': path.resolve(__dirname, 'src/colors'),
                },
                extensions: ['js', 'jsx', 'css', 'sass'],
            },
        },
    ],
};
