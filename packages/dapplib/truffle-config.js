require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hockey slide olympic short bitter birth night exchange hope gloom swap genre'; 
let testAccounts = [
"0x50a68651e02f70b3fa568eef5f5b43cb7967fbb573f1f08f15db2697bd943eb7",
"0xed075d872f693f005eb70c5a1566913909d3387b041501d70ad82455d791768d",
"0x95e07366c4d63cf64f8c18e80e0331af62ac83f471b0113ceafc4b48fb651461",
"0x38b7db26dcd10877650e38bd60915ed6fe1aa551b10970574420baebe7f21340",
"0xb7a5086fe71c4adbf13f21d47752358a0e74180a54de0fc5815c31f9e63776be",
"0x0382197453b08afb5d60fb30ca4784a4662375c5779ad8fd8d1c532f45222ae6",
"0x2aafada2722416fe225da68c80c17ba1ad9580992e76c25995d9898c1b353ef3",
"0xa606f7125ac03a2d8ce77cc569f8aa9bdbefeb31b10d3a3010b4085605d4ad52",
"0xa68ad8646009cd48bc5e5a02e1990bcf7defa031a301788ef25cc8cbfd8499f4",
"0x021911ebe1bcb492fd6d6b0b44eda4c021b4ebcd622c29db204a12b99d1f74f5"
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
            version: '^0.5.11'
        }
    }
};
