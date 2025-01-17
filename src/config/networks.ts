import { z } from 'zod';

import { entries } from 'utils/type-utils';

import { INFURA_PROJECT_ID } from './env';

import { IKnownTokenData, INetwork, IToken } from 'types';

// TODO: This are coupled in a few places, make sure that they all
// stay compatible.
export type NetworkId = 1 | 4 | 1337;
export type KnownToken =
  | 'USDC'
  | 'yvUSDC'
  | 'DAI'
  | 'yvDAI'
  | 'YFI'
  | 'yvYFI'
  | 'SUSHI'
  | 'yvSUSHI'
  | 'ALUSD'
  | 'yvalUSD'
  | 'WETH'
  | 'yvWETH'
  | 'USDT'
  | 'yvUSDT';

export const networkIds = {
  MAINNET: 1,
  HARDHAT: 1337,
  RINKEBY: 4,
} as const;

export const zAssetEnum = z.enum([
  'DAI',
  'USDC',
  'YFI',
  'SUSHI',
  'ALUSD',
  'USDT',
  'WETH',
  'OTHER',
]);
export type TAssetEnum = z.infer<typeof zAssetEnum>;

// TODO integrate deploymentInfo.json with this
const networks: { [K in NetworkId]: INetwork } = {
  [networkIds.MAINNET]: {
    label: 'Mainnet',
    url: `https://mainnet.infura.io/v3/${INFURA_PROJECT_ID}`,
  },
  // Hardhat forked mainnet
  [networkIds.HARDHAT]: {
    label: 'Hardhat',
    url: `http://localhost:8545`,
  },
  [networkIds.RINKEBY]: {
    label: 'rinkeby',
    url: `https://rinkeby.infura.io/v3/${INFURA_PROJECT_ID}`,
  },
};

export const supportedNetworkIds = Object.keys(networks).map(
  Number
) as NetworkId[];

export const supportedNetworkURLs = entries(networks).reduce<{
  [networkId: number]: string;
}>(
  (acc, [networkId, network]) => ({
    ...acc,
    [networkId]: network.url,
  }),
  {}
);

export const knownTokens: { [name in KnownToken]: IKnownTokenData } = {
  USDC: {
    symbol: 'USDC',
    decimals: 6,
    addresses: {
      [networkIds.MAINNET]: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
      [networkIds.HARDHAT]: '0x5C040Ed0869fe13a6c5Bfb66C268F45D5666bFEc',
      [networkIds.RINKEBY]: '0x4dbcdf9b62e891a7cec5a2568c3f4faf9e8abe2b',
    },
  },
  yvUSDC: {
    symbol: 'yvUSDC',
    decimals: 6,
    addresses: {
      [networkIds.MAINNET]: '0x5f18C75AbDAe578b483E5F43f12a39cF75b973a9',
      [networkIds.HARDHAT]: '0x069cD64cC7D93b7e69130808338c0c2e561F3629',
      [networkIds.RINKEBY]: '0xc33f0a62f2c9c301b522eb4f208c0e1aa8a34677',
    },
  },
  DAI: {
    symbol: 'DAI',
    decimals: 18,
    addresses: {
      [networkIds.MAINNET]: '0x5f18C75AbDAe578b483E5F43f12a39cF75b973a9',
      [networkIds.HARDHAT]: '0x48B2838d5698E2A8d4d70e62DAAFe255223Eecd5',
      [networkIds.RINKEBY]: '0x7C38c1913A7d512437E7f97D83519C1f9B59239e',
    },
  },
  yvDAI: {
    symbol: 'yvDAI',
    decimals: 18,
    addresses: {
      [networkIds.MAINNET]: '0x5f18C75AbDAe578b483E5F43f12a39cF75b973a9',
      [networkIds.HARDHAT]: '0x7E16Ca8c3dD9eD102B80C143b564dA3D354a9Fb9',
      [networkIds.RINKEBY]: '0xc33f0a62f2c9c301b522eb4f208c0e1aa8a34677',
    },
  },
  YFI: {
    symbol: 'YFI',
    decimals: 18,
    addresses: {
      [networkIds.MAINNET]: '0x0bc529c00C6401aEF6D220BE8C6Ea1667F6Ad93e',
      [networkIds.HARDHAT]: '0x42059a28cAaAe7807dA80C4f982ddAA04f53b2C8',
      [networkIds.RINKEBY]: '0x3efb9863b9b94c200bb8adba46adc8bb9d21e1c9',
    },
  },
  yvYFI: {
    symbol: 'yvYFI',
    decimals: 18,
    addresses: {
      [networkIds.MAINNET]: '0x5f18C75AbDAe578b483E5F43f12a39cF75b973a9',
      [networkIds.HARDHAT]: '0x544fE4EB3e85C7BCF5F30421Cb0D9c768721CB90',
      [networkIds.RINKEBY]: '0xc33f0a62f2c9c301b522eb4f208c0e1aa8a34677',
    },
  },
  SUSHI: {
    symbol: 'SUSHI',
    decimals: 18,
    addresses: {
      [networkIds.MAINNET]: '0x6b3595068778dd592e39a122f4f5a5cf09c90fe2',
      [networkIds.HARDHAT]: '0x626a57CA09CA76db7967E08B0c03885c6EBf8b82',
      [networkIds.RINKEBY]: '0x0ead1160bd2ca5a653e11fae3d2b39e4948bda4d',
    },
  },
  yvSUSHI: {
    symbol: 'yvSUSHI',
    decimals: 18,
    addresses: {
      [networkIds.MAINNET]: '0x5f18C75AbDAe578b483E5F43f12a39cF75b973a9',
      [networkIds.HARDHAT]: '0x369E10564901948CDD2e831C2511b33119fd317A',
      [networkIds.RINKEBY]: '0xc33f0a62f2c9c301b522eb4f208c0e1aa8a34677',
    },
  },
  ALUSD: {
    symbol: 'ALUSD',
    decimals: 18,
    addresses: {
      [networkIds.MAINNET]: '0xbc6da0fe9ad5f3b0d58160288917aa56653660e9',
      [networkIds.HARDHAT]: '0xA2346FdA6A17D8B19c81f70AF4C93961235f3bE0',
      [networkIds.RINKEBY]: '0xc89e05ad29531c2d8b5291546e1e064d42ff65c1',
    },
  },
  yvalUSD: {
    symbol: 'yvalUSD',
    decimals: 18,
    addresses: {
      [networkIds.MAINNET]: '0x5f18C75AbDAe578b483E5F43f12a39cF75b973a9',
      [networkIds.HARDHAT]: '0x8fE0617403d6f897Ef5aa5154c3377A7D7cd82e4',
      [networkIds.RINKEBY]: '0xc33f0a62f2c9c301b522eb4f208c0e1aa8a34677',
    },
  },
  USDT: {
    symbol: 'USDT',
    decimals: 18,
    addresses: {
      [networkIds.MAINNET]: '0xdac17f958d2ee523a2206206994597c13d831ec7',
      [networkIds.HARDHAT]: '0xE881a3138226af8237557d793FC200c71BF190d5',
      [networkIds.RINKEBY]: '0x01547ef97f9140dbdf5ae50f06b77337b95cf4bb',
    },
  },
  yvUSDT: {
    symbol: 'yvUSDT',
    decimals: 18,
    addresses: {
      [networkIds.MAINNET]: '0x5f18C75AbDAe578b483E5F43f12a39cF75b973a9',
      [networkIds.HARDHAT]: '0x876CA44D5cAE45a6b9eDDf8Ce20AE395BfA24875',
      [networkIds.RINKEBY]: '0xc33f0a62f2c9c301b522eb4f208c0e1aa8a34677',
    },
  },
  WETH: {
    symbol: 'WETH',
    decimals: 18,
    addresses: {
      [networkIds.MAINNET]: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
      [networkIds.HARDHAT]: '0x438a4081dCD8de676D459A61f921803D1f0Fd18f',
      [networkIds.RINKEBY]: '0xc778417e063141139fce010982780140aa0cd5ab',
    },
  },
  yvWETH: {
    symbol: 'yvWETH',
    decimals: 18,
    addresses: {
      [networkIds.MAINNET]: '0x5f18C75AbDAe578b483E5F43f12a39cF75b973a9',
      [networkIds.HARDHAT]: '0x83b82435caD3EBAd7BAFa6071fDA5A77330B0803',
      [networkIds.RINKEBY]: '0xc33f0a62f2c9c301b522eb4f208c0e1aa8a34677',
    },
  },
};

export const validNetworkId = (networkId?: number): networkId is NetworkId => {
  return !!networkId && networks[networkId as NetworkId] !== undefined;
};

export const getToken = (networkId: number, tokenId: string): IToken => {
  if (!validNetworkId(networkId)) {
    throw new Error(`Unsupported network id: '${networkId}'`);
  }

  const token = knownTokens[tokenId as KnownToken];
  if (!token) {
    throw new Error(`Unsupported token id: '${tokenId}'`);
  }

  const address = token.addresses[networkId];

  if (!address) {
    throw new Error(`Unsupported network id: '${networkId}'`);
  }

  return {
    address,
    decimals: token.decimals,
    symbol: token.symbol,
  };
};

export const getEtherscanURL = (networkId: number): string => {
  if (!validNetworkId(networkId)) {
    throw new Error(`Unsupported network id: '${networkId}'`);
  }
  if (networkId === 1) return 'https://etherscan.io';
  return '';
};
