module.exports = {
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader'
                },
                exclude: /node_modules/
            }, {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                        options: {
                            minimize: true
                        }
                    }
                ],
                exclude: /node_modules/,
            }, {
                test: /\.css$/,
                use: ["style-loader", "css-loader", "postcss-loader"],
            }, {
                test: /\.(scss)$/,
                use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"],
            },
        ]
    }
}
