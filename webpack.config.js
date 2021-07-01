module.exports = {
    entry: './index.js',
    output: {
        filename: 'bundle.js',
        path: __dirname + '/dist'
    },
    module: {
        rules: [
            {
                test: /\.js%/,
                exclude: /(node_modules)/,
                use: 'babel-loader'

            }
        ]
    }
}