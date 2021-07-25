const csvLoader = require('craco-csv-loader');

module.exports = {
    plugins: [
        {
            plugin: csvLoader,
            options: {
                dynamicTyping: true,
                header: true,
                skipEmptyLines: true,
            },
        }
    ],
    babel: {
        plugins: [
            "@babel/plugin-proposal-logical-assignment-operators"
        ]
    }
}