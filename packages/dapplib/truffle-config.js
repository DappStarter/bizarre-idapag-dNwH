require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give envelope obscure top chaos note pitch method idea arctic slot gather'; 
let testAccounts = [
"0x113eb20d6838d3b7ab1e840859be9035531962118fd6b39b13f12f7755f05b20",
"0x7abedea4992d9cf757d0374803e09edd8a3d3ad35334a57e7fb61988a038c179",
"0x59534d2a6eb8461f6f97fdd552df85243116ddb188266e453a0ce7ce1dd0e3f3",
"0x56a00f7cbfc070ddc7b4ef4d71da1bb8e8c1866700fbf5982bdfec2b4326c7ec",
"0x8a4da387b46b2fae0f93d8ab95653db0eeb73a3d0c6ce4c3a7e2a335a98e0adf",
"0x0a54ab0100c5f8f29540deb0c2c649778945d36177f181bde2f9070601fa20ad",
"0xdff378e710df6f31fb9b5ac8fe2d19eda610a964b2da6035c366c24e6f69125e",
"0xc8079d587dec256f28c792e3aaa47aefa261ed5f959eb861dbe81ac46163bc9f",
"0xb97ca5683b7cae3eb34880157ed31d84a768e58b7e363ecdb6738c0d1c15d889",
"0x90f7ffcf0877131a63ce23ea5130b1089f9b8c13b9bb95b9801d70c4969c5604"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

