# Stacks Lending Protocol

A dual-asset lending protocol built on Stacks blockchain, allowing users to lend STX tokens to earn yield and borrow STX against sBTC collateral.

## Project Overview

This project consists of two main components:

1. **Smart Contracts** (`smart-contract/`): Clarity smart contracts for the lending protocol
2. **Frontend** (`frontend/`): Next.js web application for interacting with the protocol

## Features

### For Lenders
- Deposit STX tokens to earn yield
- Withdraw STX + earned interest
- View pending yield in real-time

### For Borrowers
- Supply sBTC as collateral
- Borrow STX against collateral (up to 70% LTV)
- Repay loans and reclaim collateral
- View current debt including interest

### For Liquidators
- Monitor borrower positions
- Liquidate undercollateralized positions
- Earn 10% bounty on liquidations

## Technology Stack

### Smart Contracts
- **Clarity**: Smart contract language
- **Clarinet**: Development and testing framework
- **Vitest**: Testing framework

### Frontend
- **Next.js 14+**: React framework
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Styling
- **Stacks.js**: Blockchain SDK

## Project Structure

```
stacks-lending-protocols/
├── smart-contract/          # Clarity smart contracts
│   ├── contracts/          # Contract source files
│   ├── tests/              # Test files
│   ├── settings/           # Network configurations
│   └── README.md           # Smart contract documentation
├── frontend/               # Next.js frontend application
│   ├── app/               # Next.js app directory
│   ├── components/        # React components
│   ├── hooks/             # Custom React hooks
│   ├── lib/               # Utility functions
│   └── README.md          # Frontend documentation
├── issues.md              # Project issues and tasks
└── README.md              # This file
```

## Getting Started

### Prerequisites

- **Node.js** (v18 or higher)
- **Clarinet** - [Installation Guide](https://docs.hiro.so/clarinet/getting-started)
- **Git**
- **Stacks Wallet** (Leather or Xverse) for testing

### Quick Start

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd stacks-lending-protocols
   ```

2. **Set up Smart Contracts**
   ```bash
   cd smart-contract
   # Follow instructions in smart-contract/README.md
   ```

3. **Set up Frontend**
   ```bash
   cd frontend
   # Follow instructions in frontend/README.md
   ```

## Documentation

- [Smart Contract README](./smart-contract/README.md) - Detailed smart contract documentation
- [Frontend README](./frontend/README.md) - Detailed frontend documentation
- [Issues](./issues.md) - Complete list of project tasks and issues

## Protocol Parameters

- **LTV Ratio**: 70% - Maximum loan-to-value
- **Interest Rate**: 10% annually
- **Liquidation Threshold**: 100%
- **Liquidator Bounty**: 10% of collateral

## Development Status

This project is currently in development. See [issues.md](./issues.md) for the complete list of tasks and their status.

## Contributing

We welcome contributions! Please see the contributing guidelines:

1. Check [issues.md](./issues.md) for available tasks
2. Create a feature branch
3. Make your changes
4. Write/update tests
5. Submit a pull request

## License

[Add your license here]

## Resources

- [Stacks Documentation](https://docs.stacks.co)
- [Clarity Documentation](https://docs.hiro.so/clarity)
- [Next.js Documentation](https://nextjs.org/docs)
- [Stacks.js Documentation](https://docs.hiro.so/stacks.js)

## Support

For questions or issues:
- Open an issue on GitHub
- Join our Discord community
- Check the documentation

---

**Note**: This project is for educational purposes. Always audit smart contracts before deploying to mainnet.
