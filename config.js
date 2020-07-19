module: {
    rules: [
        {
            test: /\.(png|jpg|svg|ico)$/,
            loader: "file-loader",
            query: {
                outputPath: "./img/",
                name: "[name].[ext]?[hash]",
            },
        },
    ];
}
