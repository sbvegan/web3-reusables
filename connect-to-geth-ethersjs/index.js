/**
 * Reusable: Connect to geth node using https://docs.ethers.io/v5/getting-started/
 */

const { ethers } = require("ethers");

// IPC
const pathToIPC = "/home/soyboy/.ethereum/geth.ipc";
const IPCprovider = new ethers.providers.IpcProvider(pathToIPC)

// RPC - todo

// WS - todo