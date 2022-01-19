import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { UpgradeableBeacon, UpgradeableBeaconInterface } from "../UpgradeableBeacon";
export declare class UpgradeableBeacon__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(implementation_: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<UpgradeableBeacon>;
    getDeployTransaction(implementation_: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): UpgradeableBeacon;
    connect(signer: Signer): UpgradeableBeacon__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b5060405161051f38038061051f83398101604081905261002f91610148565b61003833610047565b61004181610097565b50610176565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6100aa8161014260201b61021f1760201c565b6101205760405162461bcd60e51b815260206004820152603360248201527f5570677261646561626c65426561636f6e3a20696d706c656d656e746174696f60448201527f6e206973206e6f74206120636f6e747261637400000000000000000000000000606482015260840160405180910390fd5b600180546001600160a01b0319166001600160a01b0392909216919091179055565b3b151590565b600060208284031215610159578081fd5b81516001600160a01b038116811461016f578182fd5b9392505050565b61039a806101856000396000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c80633659cfe61461005c5780635c60da1b14610071578063715018a61461009a5780638da5cb5b146100a2578063f2fde38b146100aa575b600080fd5b61006f61006a366004610301565b6100bd565b005b6001546001600160a01b03165b6040516001600160a01b03909116815260200160405180910390f35b61006f610135565b61007e610170565b61006f6100b8366004610301565b61017f565b336100c6610170565b6001600160a01b0316146100f55760405162461bcd60e51b81526004016100ec9061032f565b60405180910390fd5b6100fe81610225565b6040516001600160a01b038216907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a250565b3361013e610170565b6001600160a01b0316146101645760405162461bcd60e51b81526004016100ec9061032f565b61016e60006102b1565b565b6000546001600160a01b031690565b33610188610170565b6001600160a01b0316146101ae5760405162461bcd60e51b81526004016100ec9061032f565b6001600160a01b0381166102135760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084016100ec565b61021c816102b1565b50565b3b151590565b803b61028f5760405162461bcd60e51b815260206004820152603360248201527f5570677261646561626c65426561636f6e3a20696d706c656d656e746174696f6044820152721b881a5cc81b9bdd08184818dbdb9d1c9858dd606a1b60648201526084016100ec565b600180546001600160a01b0319166001600160a01b0392909216919091179055565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b600060208284031215610312578081fd5b81356001600160a01b0381168114610328578182fd5b9392505050565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260408201526060019056fea264697066735822122088cf6c859ef48032bfc97aaf247847d26a56f907be9e28c52f17cad064a1a78c64736f6c63430008020033";
    static readonly abi: ({
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
        name?: undefined;
        outputs?: undefined;
    } | {
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        stateMutability?: undefined;
        outputs?: undefined;
    } | {
        inputs: never[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: never[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[];
    static createInterface(): UpgradeableBeaconInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): UpgradeableBeacon;
}
