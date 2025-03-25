# Pump.fun Monitor

A real-time monitoring tool for new NFT mints on Pump.fun.

## Overview

This tool uses the Solana Geyser gRPC API to monitor the Solana blockchain for new Pump.fun mint transactions. When a new mint is detected, it displays the transaction details in the console.

## Features

- Real-time monitoring of Pump.fun mints
- Filtering based on program ID and instruction discriminator
- Clean console output for detected mints

## Requirements

- Node.js
- Solana gRPC API access token
- QuikNode or similar Solana RPC endpoint

## Installation

```bash
npm install
```

## Configuration

Edit the constants in `index.ts`:

```typescript
const ENDPOINT = "your-solana-rpc-endpoint";
const TOKEN = "your-api-token";
```

## Usage

```bash
npm start
```

## Dependencies

- @triton-one/yellowstone-grpc
- @grpc/grpc-js
- @solana/web3.js
- bs58 (missing import in current code)


# Contact
Need any help with this?
tech.whiz0314@gmail.com 🙌