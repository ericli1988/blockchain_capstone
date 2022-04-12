const HDWalletProvider = require("truffle-hdwallet-provider");
const web3 = require("web3");
const MNEMONIC = process.env.MNEMONIC;
const NODE_API_KEY = process.env.INFURA_KEY || process.env.ALCHEMY_KEY;
const isInfura = !!process.env.INFURA_KEY;
const FACTORY_CONTRACT_ADDRESS = process.env.FACTORY_CONTRACT_ADDRESS;
const NFT_CONTRACT_ADDRESS = process.env.NFT_CONTRACT_ADDRESS;
const OWNER_ADDRESS = process.env.OWNER_ADDRESS;
const NETWORK = process.env.NETWORK;
const NUM_CREATURES = 1;
const NUM_LOOTBOXES = 4;
const DEFAULT_OPTION_ID = 0;
const LOOTBOX_OPTION_ID = 2;

if (!MNEMONIC || !NODE_API_KEY || !OWNER_ADDRESS || !NETWORK) {
  console.error(
    "Please set a mnemonic, Alchemy/Infura key, owner, network, and contract address."
  );
  return;
}

const NFT_ABI = [
  {
    constant: false,
    "inputs": [
        {
          "internalType": "address",
          "name": "_to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "_tokenId",
          "type": "uint256"
        },
        {
          "internalType": "uint256[2]",
          "name": "_a",
          "type": "uint256[2]"
        },
        {
          "internalType": "uint256[2][2]",
          "name": "_b",
          "type": "uint256[2][2]"
        },
        {
          "internalType": "uint256[2]",
          "name": "_c",
          "type": "uint256[2]"
        },
        {
          "internalType": "uint256[1]",
          "name": "_input",
          "type": "uint256[1]"
        }
      ],
    name: "mintNFT",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
];

const FACTORY_ABI = [
  {
    constant: false,
    inputs: [
      {
        name: "_optionId",
        type: "uint256",
      },
      {
        name: "_toAddress",
        type: "address",
      },
    ],
    name: "mint",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
];


var proof = {
    "a": [
      "0x239dafb11f83067bfc7a91de4ea5c8ef601bd1b306fd23391bd28f8fab435d30",
      "0x13a58e5f6421f3293f266dccf473cccea00958dd989769ec5254ba0905c8de5f"
    ],
    "b": [
      [
        "0x1d788e6856041cde4c818acf3fb628c6a26e29eb1b3e285f90c250fb7218f1da",
        "0x1c2e087f263f5e49f0380828f2d72fc326e708d4a7c719764a52d123a2abce63"
      ],
      [
        "0x304d7f747adf2fbad1c855fcf0ba388df724b6e134cd7bd275c77df31df84500",
        "0x0523a486672aaf241f6edc86ad174e59bb7853a3b3e2e760fb2ee31d6e42da5f"
      ]
    ],
    "c": [
      "0x16af26d113fe7b811dc2102fa45626d79e9f78969b0e69d26866851e74fb3175",
      "0x1d1235daf80dcfaa817fa765653f06f5c945fca26dda4017b3e50f308c2948da"
    ]
  };

var proof2 = {
    "a": [
      "0x0fd677cd74e7506cd859ddf5e7e655394a9d16bff02cff64d4d810a948cd87c9",
      "0x0729f4165776144b54afff0bc43c47aaabf5ea8fe1e692af7fd32988919f241f"
    ],
    "b": [
      [
        "0x150c9293b05a3dd35baa84230d727841e05aeef20b60b9b3480c31bb0c9dd14f",
        "0x085bf0965f832f4aa577dbfd50143fc403d8bcab22650319152528fa40131b49"
      ],
      [
        "0x109792d56d7f72f1a3fcf4b63067d7f08faaa199928f27d9944b80220a652e2b",
        "0x07646caaa2a9466d166a1e88a67bb183c7663e76e05b82e004c2721bab5e373d"
      ]
    ],
    "c": [
      "0x297e59b9288c7fc4a924b0b3a1ebfb76a09b4171b062f1027b63337932bd74d0",
      "0x00a39e934615a980fba85079477628c6d8a6c036316ac1e2083ef5aeac50fed1"
    ]
  };


var proof3 = {
    "a": [
      "0x01f78784a7ad4f172c70bee7bb9b8656ce96b948a7b1f8b8f979b20e73265ec9",
      "0x0eab87d9e565d2d372499ad82e9fd3c9470a65f410e191fae8c24e30c8696657"
    ],
    "b": [
      [
        "0x2d112b96292f8f6fa1dc72ede80443e3600843da6d612f8f04bc9d09d57f211c",
        "0x1cf4f54a92dd8eb5d3d4dca893b7aab55157a380dfeda75b673a47f9f69f3407"
      ],
      [
        "0x13da92b57eeeb5a087367f746f688973deb0f79b676c59a1d9363d672078c8e8",
        "0x20852baaf6796ee3079ee052750e12cac917e50c9556ca6c7a1f62e2d67b2395"
      ]
    ],
    "c": [
      "0x0647b887183d404f3b71082bf80fcb2f9754e24e00ea9bd17527a3b2ef2b615f",
      "0x06553a745a7104565e3b5f3eb73d9f0ad766a8e35af14155ab2dec0dfd55ca20"
    ]
  };

  var proof4 = {
    "a": [
      "0x297dd86476e1ef284083a2cf6fe5be2e0263520e3aaaaad1670a871a8061a9e3",
      "0x0d31da7f3c8ca61cae20d23a40f88d00f41e99e4f08256fc6c52057d6ec36c70"
    ],
    "b": [
      [
        "0x2f8f195c8b1457246628614d12f7492a850d587fc6afd6e98a0ee1ab0a64112b",
        "0x2740e1af50452cb09653aac0b1e7e2a6cbbc409e56555ec06607f9881b5512cb"
      ],
      [
        "0x2479ee1c6a73b87ab269d460f0ca553253ff763341af801ddaec16e1d585c17d",
        "0x19e048cd7672a1f32e7a49a132b59ece131357196eb6ed26b87666f914cf6224"
      ]
    ],
    "c": [
      "0x218e309b33d1141207dc4c5cfc88484b992714a9000d5df57761ea852d3677a8",
      "0x2bb4b1510df289e364912253d381a8f914a601055fa9f03ca85ccb6a42562864"
    ]
  };

  var proof5 = {
    "a": [
      "0x1b46aa64b15ee38489e98543ea2d7610afa262673d07527fd00b927118881680",
      "0x16e1c9e9967c4a38e52cc0e56366c2ccbb8c23ecb3962a07aa523fb87fcff088"
    ],
    "b": [
      [
        "0x2ecd6b4efe48229b828d76e04763c2e4eac4e39d1bbaf16825751186b1a55690",
        "0x2fdd41550ac601a8a2ea5eb58afef53ebe4addac38b1826bfe96283dc954f6a0"
      ],
      [
        "0x16c7a6753b55e5b03f1855fc3a7df4cbb44aee4d2f5e3839375f0c96b4fc660d",
        "0x1850a602e4ae830459694934fa416482d77d0257788e28b22452bbc28db0a0f2"
      ]
    ],
    "c": [
      "0x0f2c87785d8e40bee9a4c7a684e03984cc7472e3d6c8d7bfa1ac1297ff029b04",
      "0x2903b47750bb024e03c6c3cca7c48655d6b63f0b48437bf0fbf8be802b721a29"
    ]
  };

  var proof6 = {
    "a": [
      "0x0049531a580126e11e6e0ab71b7aac6995e4658988117f9aa2413c28d37215fb",
      "0x174c35efde39bdfe22e3e6ed3ff8112f1283e65604304ebb1d6956925202a0df"
    ],
    "b": [
      [
        "0x1d04caf4431601c95241021ef8712f56d1a63fac8771ccdf11dc6829cae5ad9f",
        "0x1e68b8b368e5f750af5f7a10857a891cf36dba1f6820bcaa08dbdd7aa1e7d4d6"
      ],
      [
        "0x082fea326b4119a7ee22fc0a0ba524dd076aa6653f5a82372e288a46bb8a10b2",
        "0x21f645f9056ce2a5364ce33a175c0099de2ec10068ebc2046b5943b2bd3f64be"
      ]
    ],
    "c": [
      "0x2e3d0a3aa95f4c5731bd9fb339d6ae6ad4e01d9a9734917cf4ec80e85057ef89",
      "0x17f1f8fad79a76f45d0b2bd565edd84baedb31f412bef11d6cf82b8843b0cf4e"
    ]
  };

  var proof7 = {
    "a": [
      "0x2cdf2d470bb3e894bd4f3d4822e20fb123f07650e26ed619cdb0a5266b0401da",
      "0x2cb10cf37ca0058ffed0c84a875263fc15233fa20d47b08035c8ba011aa22568"
    ],
    "b": [
      [
        "0x2d1a52552730b4f9114e6c87f035b61089ebc01d0716d4b72ada1dc63c8fae80",
        "0x2e6c95231dc108dde418a4462603160601da6add524e9c3727287d2c74e7857a"
      ],
      [
        "0x27c2f92f49532e02ac094cd8611025cdca0c2bd4dd6463a0811c95f382c6b768",
        "0x1859c19352741a9659e0ab295d0ea7960299335a6b70ff87377c8e2bbe2507e5"
      ]
    ],
    "c": [
      "0x1c6380327b4012e04dffaf299ec6841be5431a2d30deb7f2d3622b54ae3d243f",
      "0x03079f59a625968f3beaae4d571f6231fda0c969cfcb9f60ab27e71caa73eb22"
    ]
  };

  var proof8 = {
    "a": [
      "0x117f17751fc317a17a2f703ef9d7d6a4d665a8b1b2dfa6af834630d17d9ee7c1",
      "0x15f42a08451cd9f32975438d493b85f705d991feff22d708f4704d65760b3976"
    ],
    "b": [
      [
        "0x2d0fc39433f0d37ed89efecc4306ea1ac81468f39fe8b52d619447c8f897dfea",
        "0x0ed46c6a928ddca89eb57caf569ec42343c7a703dda9914a938254008b6e0dee"
      ],
      [
        "0x0c7e4e3c1000ecf693a04ce3d650ba7e8d278983730eac6d58822ab94de201fe",
        "0x0e8b53ea19500b75d30241eba9e94ad8596b154ed6ff207981095212d949b373"
      ]
    ],
    "c": [
      "0x208d94a3de659c06ec29a1a097e72d41c7ff736d1067c02431f2cb188c8cb839",
      "0x007ce7b4d535256bec6c0880b941d94c47369638fcb312eeddd2e0c76af1b66b"
    ]
  };

  var proof9 = {
    "a": [
      "0x204c527a450ccf8bd73f443db66ff94d7f2d2648fcbffc1add77a3d538630275",
      "0x0d287d1e670da9886f1d17b386c66f7d877d2183470646f17c2a7e05e4d53ad3"
    ],
    "b": [
      [
        "0x051347c9e7b58478e67f89580d4015696bb3fcb51d4c64c23d029320c86e721f",
        "0x2ebbf15548aed7b42184dc101f8432f48ed5ba3e7bda28145b20dc3e59a5e823"
      ],
      [
        "0x06403caf14dde8d68b9376fdd61511d8ff03b30f8834a371a43c0c2c5bab40bd",
        "0x2ffaaa3013c258d22187c7ec7fed0eaddc7b0a4c24faa1fc101c482c5b7b0765"
      ]
    ],
    "c": [
      "0x13663b299975937608eb2b0b3a86a67aa43a4fbdfdb4a3e1cf99ace41b2766c2",
      "0x0bb6dc802656f2fe94a9878fb4f501362be1b4717c13f674bb3854d851caeb4e"
    ]
  };

  var proof10 = {
    "a": [
      "0x2d5b28d53f26658cc8fd5901a22377847c9f43e14f61a752a7cf0ded2194ada7",
      "0x01f5d822c333f768ecbc064088b4141caef60945d0f938637005258ed0144cc3"
    ],
    "b": [
      [
        "0x13fb4390a745a0ac9be59875fbf89b2f3c0d3ca0f1f8e1e06af6ad9cde205947",
        "0x216fcaf8e58b26ac9043c07ee41a088d42a4bf30a9bb688b296887c53bd4736d"
      ],
      [
        "0x20afb0a1ca4396f77768cb10e0ed445a5ab4221182caf7688ac312b0c975e080",
        "0x2069c0eb2af18d0b1c519e230f6f8f15e4ea8a58662d07bc8f5d4d6e16928fca"
      ]
    ],
    "c": [
      "0x08cc811ce7587bdd473e07d2d801c9f51fc5d493680448e713d54b68aa8bb544",
      "0x1b66739a3c9eda285ecb7948b489727e39cfc0eb43bef2d15ef79a21df0f11e9"
    ]
  };


var input =  ["0x0000000000000000000000000000000000000000000000000000000000000001"];




async function main() {
  const network =
    NETWORK === "mainnet" || NETWORK === "live" ? "mainnet" : "rinkeby";
  const provider = new HDWalletProvider(
    MNEMONIC,
    isInfura
      ? "https://" + network + ".infura.io/v3/" + NODE_API_KEY
      : "https://eth-" + network + ".alchemyapi.io/v2/" + NODE_API_KEY
  );
  const web3Instance = new web3(provider);

  if (FACTORY_CONTRACT_ADDRESS) {
    const factoryContract = new web3Instance.eth.Contract(
      FACTORY_ABI,
      FACTORY_CONTRACT_ADDRESS,
      { gasLimit: "1000000" }
    );

    // Creatures issued directly to the owner.
    for (var i = 0; i < NUM_CREATURES; i++) {
      const result = await factoryContract.methods
        .mint(DEFAULT_OPTION_ID, OWNER_ADDRESS)
        .send({ from: OWNER_ADDRESS });
      console.log("Minted creature. Transaction: " + result.transactionHash);
    }

    // Lootboxes issued directly to the owner.
    for (var i = 0; i < NUM_LOOTBOXES; i++) {
      const result = await factoryContract.methods
        .mint(LOOTBOX_OPTION_ID, OWNER_ADDRESS)
        .send({ from: OWNER_ADDRESS });
      console.log("Minted lootbox. Transaction: " + result.transactionHash);
    }
  } else if (NFT_CONTRACT_ADDRESS) {
    const nftContract = new web3Instance.eth.Contract(
      NFT_ABI,
      NFT_CONTRACT_ADDRESS,
      { gasLimit: "1000000" }
    );

    // Creatures issued directly to the owner.
    for (var i = 0; i < NUM_CREATURES; i++) {
      const result = await nftContract.methods
        .mintNFT(OWNER_ADDRESS, 9009, proof10.a, proof10.b, proof10.c, input)
        .send({ from: OWNER_ADDRESS });
      console.log("Minted NFT. Transaction: " + result.transactionHash);
    }
  } else {
    console.error(
      "Add NFT_CONTRACT_ADDRESS or FACTORY_CONTRACT_ADDRESS to the environment variables"
    );
  }
}

main();