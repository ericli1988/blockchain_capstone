var SolnSquareVerifier = artifacts.require('SolnSquareVerifier');
var SquareVerifier = artifacts.require('SquareVerifier');

var proof = {
    "a": [
      "0x1b3b2b0d5d7133ae2b1638c921a17a33fefd3e5b14fcca8a9e50bf1b80781cce",
      "0x13b81c421737a99a4c9af634ba326f7b6f3db94f6495fe39bf0d3b125af5c2bd"
    ],
    "b": [
      [
        "0x0ca793e6ec8a831070d0c3e615cb26276006e8b0f2a12da46199de27ae5e7112",
        "0x230bdc32b8295a898712aa934648a63f67c1c04f0ed0f6b61647481065beb58e"
      ],
      [
        "0x082cb6f02d65466abc19eb5a805b1a4d5c765e8a167b6584824f3912a235171f",
        "0x1b1f11be45a606f0420511dd89b9175cf1cc90e8bccb30e5e00e81ee42bcc532"
      ]
    ],
    "c": [
      "0x09a6d81f0d3128a45300c0931f6a01c1fc4db700c3dd46a9f4bac95996f5c386",
      "0x1d929a35987706b0f9f8ad0103affb542df80755c69c9a9d51a236da95c098e0"
    ]
  };

var input =  ["0x0000000000000000000000000000000000000000000000000000000000000001"];


contract('TestSolnSquareVerifier', accounts => {
	const account_one = accounts[0];

    describe('can verify', function () {
        beforeEach(async function () {
        	const squareContract = await SquareVerifier.new({from: account_one});
            this.contract = await SolnSquareVerifier.new(squareContract.address, {from: account_one});
            
        });

        // Test if a new solution can be added for contract - SolnSquareVerifier
        it('a new solution can be added for contract', async function () { 
        	await this.contract.mintNFT(account_one, 12345, proof.a, proof.b, proof.c, input, {from: account_one});
        	let ownerOf = await this.contract.ownerOf(12345);
        	assert.equal(ownerOf, account_one, "NFT has not been minted");
     	});

     	 it('same solution cannot be added for contract', async function () { 
     	 	await this.contract.mintNFT(account_one, 1234567, proof.a, proof.b, proof.c, input, {from: account_one});

        	let reverted = false;
              try 
              {
              	await this.contract.mintNFT(account_one, 1234567, proof.a, proof.b, proof.c, input, {from: account_one});
              }
              catch(e) {
                  reverted = true;
              }
              assert.equal(reverted, true, "Same solution was added");
     	});


    })
})
    


