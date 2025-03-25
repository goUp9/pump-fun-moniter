
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


// Constants
const ENDPOINT = "https://example.solana-mainnet.quiknode.pro:10000";
const TOKEN = "TOKEN_ID";
const PUMP_FUN_PROGRAM_ID = '6EF8rrecthR5Dkzon8Nwu78hRvfCKubJ14M5uBEwF6P';
const PUMP_FUN_CREATE_IX_DISCRIMINATOR = Buffer.from([24, 30, 200, 40, 5, 28, 7, 119]);
const COMMITMENT = CommitmentLevel.CONFIRMED;

// Configuration
const FILTER_CONFIG = {
    programIds: [PUMP_FUN_PROGRAM_ID],
    instructionDiscriminators: [PUMP_FUN_CREATE_IX_DISCRIMINATOR]
};

const ACCOUNTS_TO_INCLUDE = [{
    name: "mint",
    index: 0
}];
