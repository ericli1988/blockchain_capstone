// migrating the appropriate contracts
var SquareVerifier = artifacts.require("./SquareVerifier.sol");
var SolnSquareVerifier = artifacts.require("./SolnSquareVerifier.sol");
const ERC721Mintable = artifacts.require("CustomERC721Token");
//const SquareVerifier = artifacts.require('SquareVerifier');

module.exports = function(deployer) {
  deployer.deploy(ERC721Mintable);
  deployer.deploy(SquareVerifier)
  .then(() => {
    return deployer.deploy(SolnSquareVerifier, SquareVerifier.address);
  });
};
