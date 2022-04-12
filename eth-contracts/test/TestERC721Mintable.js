var ERC721MintableComplete = artifacts.require('CustomERC721Token');

contract('TestERC721Mintable', accounts => {

    const account_one = accounts[0];
    const account_two = accounts[1];

    describe('match erc721 spec', function () {
        beforeEach(async function () { 
            this.contract = await ERC721MintableComplete.new({from: account_one});

            // TODO: mint multiple tokens
            await this.contract.mint(account_one, 111, {from:account_one});
            await this.contract.mint(account_one, 222, {from:account_one});
            await this.contract.mint(account_one, 333, {from:account_one});
            await this.contract.mint(account_two, 444, {from:account_one});
        })

        it('should return total supply', async function () { 
            let _totalSupply = await this.contract.totalSupply.call();
            assert.equal(Number(_totalSupply), 4, "total supply is incorrect");
        })

        it('should get token balance', async function () { 
            let _balance = await this.contract.balanceOf.call(account_one);
            assert.equal(Number(_balance), 3, 'token balance is incorrect');
        })

        // token uri should be complete i.e: https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/1
        it('should return token uri', async function () { 
            let _tokenuri = await this.contract.tokenURI.call(111);
            let uri = "https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/111";
            assert.equal(uri, _tokenuri, "Token uri is incorrect");
        })

        it('should transfer token from one owner to another', async function () { 

            let ownerOf_before = await this.contract.ownerOf.call(111);
            assert.equal(ownerOf_before, account_one, "Before transfer is incorrect");

            await this.contract.transferFrom(account_one, account_two, 111, {from:account_one});
            let ownerOf_after = await this.contract.ownerOf.call(111);
            assert.equal(ownerOf_after, account_two, "Transfer is incorrect");
        })
    });

    describe('have ownership properties', function () {
        beforeEach(async function () { 
            this.contract = await ERC721MintableComplete.new({from: account_one});
        })

        it('should fail when minting when address is not contract owner', async function () { 
              let reverted = false;
              try 
              {
                  await this.contract.mint(account_two, 555, {from:account_two});
              }
              catch(e) {
                  reverted = true;
              }
              assert.equal(reverted, true, "Address is not contract owner");      

        })

        it('should return contract owner', async function () { 
            let owner = await this.contract.getOwner.call();
            assert.equal(owner, account_one, "Contract owner is incorrect");
        })

    });
})