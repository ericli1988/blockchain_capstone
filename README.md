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

Deployment 
CustomERC721Token: 0x8CB53c46e7Fef4a3beAA11371d0DF4C408FF2647
SquareVerifier: 0x22fFB0781eF4B34f54F6ba8E74256C395b42d1a0
SolnSquareVerifier: 0xABdb4089d3893aE0C39680c84FAd1453A8ab40bb

Token 1: 0x8350c64a9020b90f11df51897ad2323f8e1154f28de8fd7478870de8b7af3e46 [Token Id: 9000]
https://rinkeby.etherscan.io/tx/0x8350c64a9020b90f11df51897ad2323f8e1154f28de8fd7478870de8b7af3e46
https://testnets.opensea.io/assets/0xABdb4089d3893aE0C39680c84FAd1453A8ab40bb/9000
Token 2: 0xc399b2ae7a01d6dcb26fcb3f1954c78df6f27e587afea87800dfef4b2dbe22ed (Token Id: 9001)
Token 3: 0x1320167653ab8615cb4415b3a5880526cb4286cb798d5bf6f7a0c2ac6d073ad2 (Token Id: 9002)
Token 4: 0x200aac363f12682c344941d3d7022f7f1edc5d1d49686b08f338eb7fcad95779 (Token Id: 9003)
Token 5: 0x095953225fb3141e1d225948d5e2ce1f689c11420ce0157d0074cd1cbebb9226 (Token Id: 9004)
Token 6: 0x4bb6f02387499c7e0b6082da588ef1e8fcb0b88fdb6279f55306765963de30a8 (Token Id: 9005)
Token 7: 0x625c706a786d52f45daed1cfd1cac69b5fddc579eeb682ff39ae3b3f937e5b57 (Token Id: 9006)
Token 8: 0x71890a694c4927b6b3a33d52a41675f9141d2434675c2fbd9f823a90b96a14f9 (Token Id: 9007)
Token 9: 0xf9245282b356397c0e27921045240eeca03fd8591a5a0f20e61dc019618facc0 (Token Id: 9008)
Token 10: 0xfd1fa3208165a11660ae5a857d0e12590e07cdfc8efec5c6643b441fb3c7006b (Token Id: 9009)


store: https://testnets.opensea.io/collection/bitland-nrm45hclp0



(Legacy)
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

store: https://testnets.opensea.io/collection/bitland-7y7r8hriur



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
