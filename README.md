# Udacity Blockchain Capstone

The capstone will build upon the knowledge you have gained in the course in order to build a decentralized housing product. 

# Run Zokrates
docker run -v $PWD/code:/home/zokrates/code -ti zokrates/zokrates /bin/bash
zokrates compute-witness -a 20 400
zokrates generate-proof



# versions
Node: v.14.19.1
Truffle: v5.5.5

# rinkeby
CustomERC721Token: 0xfBF0376c6640B5A733c2F397A99504bF47A74433
SquareVerifier: 0xE5FD5FB2bEc0DaA883F9acEb15A97998b89ABe17
SolnSquareVerifier: 0xE81016feA311b121dd1e13aF854C091B7f7C84dC

Token 1: 0xa6834d46164482f2e5615fa82cbcae544ab7a6259c84cfc2aa577de04d7cc42c [Token Id: 12345]
Token 2: 0x7bdc253c348096ddfc2e4192b35255681ae5b048b8f787120695152f7b6b9465 [Token Id: 1]
Token 3: 0x73b97104056d2439b187f3d3451ee295c741860eb4508a5e33c38c82d9637b61 [Token Id: 2]
Token 4: 0x0cb2b53807f782b030057b0d4f5f9721b4d2fa755d233e727adfeed2346f57b3 [Token Id: 3]
Token 5: 0x4e9e386a7cd32d3017ba7deb841821c0a410228de200dfcefe29339fc097f469 [Token Id: 4]
Token 6: 0xd2c364d916f2f7b149fb00b7e1e325daf80e51e252172e1e4e152847e44c061b [Token Id: 5]
Token 7: 0x7af772c9443410b1b49dfed73d59a6c72a68948fe712d0157284a1018925306b [Token Id: 6]
Token 8: 0x56f7c4c9b4f32fc0dbc236ae9a0dfa9a266227da91190bf2654d667e557f475e [Token Id: 7]
Token 9: 0x5d947ca83d74661c088037130a43aa1a77a7a91977a91b822ed52818edee9d97 [Token Id: 8]
Token 10: 0x8efbb96a0d1d50aeb30bc74c3fa2468fa9e615c5f1f2b887024bdb0a10213e57 [Token Id: 9]


# Contract ABIs

# Run Tests
cd eth-contracts
truffle test

# Project Resources

* [Remix - Solidity IDE](https://remix.ethereum.org/)
* [Visual Studio Code](https://code.visualstudio.com/)
* [Truffle Framework](https://truffleframework.com/)
* [Ganache - One Click Blockchain](https://truffleframework.com/ganache)
* [Open Zeppelin ](https://openzeppelin.org/)
* [Interactive zero knowledge 3-colorability demonstration](http://web.mit.edu/~ezyang/Public/graph/svg.html)
* [Docker](https://docs.docker.com/install/)
* [ZoKrates](https://github.com/Zokrates/ZoKrates)
