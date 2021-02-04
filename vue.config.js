module.exports = {
    pwa: {
        manifestOptions: {
            background_color: "hotpink",
            short_name: "BTC",
        },
        name: "CAPTAIN HINDSIGHT",
        themeColor: "steelblue",
        workboxOptions: {
            runtimeCaching: [{
                handler: "NetworkFirst",
                options: {
                    networkTimeoutSeconds: 5,
                },
                urlPattern: "https://api.coingecko.com/api/v3/search/trending",
            }, ],
        },
    },
};