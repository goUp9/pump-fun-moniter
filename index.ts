
import Client, {
    CommitmentLevel,
    SubscribeRequest,
    SubscribeUpdate,
    SubscribeUpdateTransaction,
} from "@triton-one/yellowstone-grpc";
import {ClientDuplexStream} from "@grpc/grpc-js";
import {MessageAddressTableLookup, MessageHeader, PublicKey} from '@solana/web3.js';

//Interfaces
interface CompiledInstruction {
    programIdIndex: number;
    accounts: Uint8Array;
    data: Uint8Array;
}

interface Message {
    header: MessageHeader | undefined;
    accountKeys: Uint8Array[];
    recentBlockhash: Uint8Array;
    instructions: CompiledInstruction[];
    versioned: boolean;
    addressTableLookups: MessageAddressTableLookup[];
}

interface MessageHeader {
    numRequiredSignatures: number;
    numReadonlySignedAccounts: number;
    numReadonlyUnsignedAccounts: number;
}

interface MessageAddressTableLookup {
    accountkey: Uint8Array;
    writableIndexes: Uint8Array;
    readonlyIndexes: Uint8Array;
}



