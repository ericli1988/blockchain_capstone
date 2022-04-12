pragma solidity >=0.4.21 <0.6.0;

import { CustomERC721Token } from "./ERC721Mintable.sol";

// TODO define a contract call to the zokrates generated solidity contract <Verifier> or <renamedVerifier>



// TODO define another contract named SolnSquareVerifier that inherits from your ERC721Mintable class

contract SolnSquareVerifier is CustomERC721Token {
	SquareVerifier squareVerifier;

	constructor (address verifierAddress) public {
		squareVerifier = SquareVerifier(verifierAddress);
	}


	// TODO define a solutions struct that can hold an index & an address
	struct solution {
	   uint256 tokenId;
	   address to;
	}

	// TODO define an array of the above struct
	solution[] private solutions;

	// TODO define a mapping to store unique solutions submitted
	mapping(bytes32 => solution) private uniqueSolutions;    


	// TODO Create an event to emit when a solution is added
	event SolutionAdded(uint256 tokenId, address to, bytes32 hash);


	// TODO Create a function to add the solutions to the array and emit the event

	function addSolution(address _to, uint256 _tokenId, bytes32 solutionHash) internal {
		solution memory _sl = solution({tokenId: _tokenId, to: _to});

		solutions.push(_sl);
		uniqueSolutions[solutionHash] = _sl;

		emit SolutionAdded(_tokenId, _to, solutionHash);
	}

	// TODO Create a function to mint new NFT only after the solution has been verified
	//  - make sure the solution is unique (has not been used before)
	//  - make sure you handle metadata as well as tokenSupply
	function mintNFT(address _to, uint256 _tokenId, uint[2] memory _a, uint[2][2] memory _b, uint[2] memory _c, uint[1] memory _input) public {
		//verify the solution 
		require(squareVerifier.verifyTx(_a, _b, _c, _input), "Proof is not correct");

		//check if solution is unique
		bytes32 solutionHash = keccak256(abi.encodePacked(_a, _b, _c, _input));
		require(uniqueSolutions[solutionHash].to == address(0), "Solution has already been added");

		//add solution
		addSolution(_to, _tokenId, solutionHash);

		//mint new NFT
		super.mint(_to, _tokenId);
	}
	 
	  


}


contract SquareVerifier {
	function verifyTx( uint[2] memory a,
        uint[2][2] memory b,
        uint[2] memory c,
        uint[1] memory input) public view returns (bool r);
}





























