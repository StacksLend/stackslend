import { Cl, type ClarityValue } from "@stacks/transactions";

const lendingPool = "stackslend-v1";
const oracle = "mock-oracle-v1";
const sbtcToken = "sbtc-token";

export const helpers = {
  // Mint sBTC
  mintSBTC: (amount: number, recipient: string, deployer: string) => {
    return simnet.callPublicFn(
      sbtcToken,
      "mint",
      [Cl.uint(amount), Cl.standardPrincipal(recipient)],
      deployer
    );
  },

  // Initialize Oracle
  initializeOracle: (updater: string, deployer: string) => {
    return simnet.callPublicFn(
      oracle,
      "initialize",
      [Cl.standardPrincipal(updater)],
      deployer
    );
  },

  // Update Oracle Price
  updateOraclePrice: (price: number, updater: string) => {
    return simnet.callPublicFn(
      oracle,
      "update-price",
      [Cl.uint(price)],
      updater
    );
  },

  // Get User Debt
  getUserDebt: (user: string, deployer: string) => {
    return simnet.callReadOnlyFn(
      lendingPool,
      "get-debt",
      [Cl.standardPrincipal(user)],
      deployer
    );
  },

  // Get Pending Yield
  getPendingYield: (user: string, deployer: string) => {
    return simnet.callReadOnlyFn(
      lendingPool,
      "get-pending-yield",
      [Cl.standardPrincipal(user)],
      deployer
    );
  },
  
  // Get sBTC Balance
  getSBTCBalance: (user: string, deployer: string) => {
    return simnet.callReadOnlyFn(
      sbtcToken,
      "get-balance",
      [Cl.standardPrincipal(user)],
      deployer
    );
  },
  
  // Get Total Deposits
  getTotalDeposits: () => {
    return simnet.getDataVar(lendingPool, "total-stx-deposits");
  },

  // Get Total Borrows
  getTotalBorrows: () => {
    return simnet.getDataVar(lendingPool, "total-stx-borrows");
  },

  // Get Total Collateral
  getTotalCollateral: () => {
    return simnet.getDataVar(lendingPool, "total-sbtc-collateral");
  }
};
