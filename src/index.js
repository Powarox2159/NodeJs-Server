const CoinGecko = require('coingecko-api')
const CoinGeckoClient = new CoinGecko();

async function fetchPrice() {
    let data = await CoinGeckoClient.simple.price({
        ids: [
            'swissborg', 'the-graph', 'ripple', 'polkadot', 'chiliz', 'matic-network', 'mimo-parallel-governance-token',
            'enjincoin', 'Uniswap', 'republic-protocol', 'utrust', 'kyber-network', 'chainlink', 'audius', 'binancecoin',
            'aave', 'compound-governance-token', 'qtum', 'lisk', 'tron', 'cosmos', 'eos', 'icon', 'ethereum-classic',
            'cardano', 'kava', 'stellar', 'vechain', 'bittorrent-2', 'ankr', 'zilliqa', 'pancakeswap-token', 'theta-token',
            'bitcoin', 'ethereum'
        ],
        vs_currencies: ['usd'],
    })
    return data
}

module.exports = fetchPrice


// export function fetchPrice = async () => {
//     let data = await CoinGeckoClient.simple.price({
//         ids: [
//             'swissborg', 'the-graph', 'ripple', 'polkadot', 'chiliz', 'matic-network', 'mimo-parallel-governance-token',
//             'enjincoin', 'Uniswap', 'republic-protocol', 'utrust', 'kyber-network', 'chainlink', 'audius', 'binancecoin',
//             'aave', 'compound-governance-token', 'qtum', 'lisk', 'tron', 'cosmos', 'eos', 'icon', 'ethereum-classic',
//             'cardano', 'kava', 'stellar', 'vechain', 'bittorrent-2', 'ankr', 'zilliqa', 'pancakeswap-token', 'theta-token',
//             'bitcoin', 'ethereum'
//         ],
//         vs_currencies: ['usd'],
//     })
//     return data
// }


// module.exports = function () {
//     this.fetchPrice = async () => {
//         let data = await CoinGeckoClient.simple.price({
//             ids: [
//                 'swissborg', 'the-graph', 'ripple', 'polkadot', 'chiliz', 'matic-network', 'mimo-parallel-governance-token',
//                 'enjincoin', 'Uniswap', 'republic-protocol', 'utrust', 'kyber-network', 'chainlink', 'audius', 'binancecoin',
//                 'aave', 'compound-governance-token', 'qtum', 'lisk', 'tron', 'cosmos', 'eos', 'icon', 'ethereum-classic',
//                 'cardano', 'kava', 'stellar', 'vechain', 'bittorrent-2', 'ankr', 'zilliqa', 'pancakeswap-token', 'theta-token',
//                 'bitcoin', 'ethereum'
//             ],
//             vs_currencies: ['usd'],
//         })
//         return data
//     }
// }