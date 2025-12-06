---
title: "VerifyHub: Building a Blockchain-Based Certificate Verification System"
slug: "verifyhub-blockchain-certificates"
date: "2025-03-20"
excerpt: "How I built a decentralized certificate verification system using Solidity smart contracts, IPFS, and the MERN stack to ensure tamper-proof digital credentials."
coverImage: "/project-logos/verifyhub.svg"
tags: ["Blockchain", "Solidity", "IPFS", "Web3", "Smart Contracts", "MERN"]
readTime: "10 min read"
---

# VerifyHub: Building a Blockchain-Based Certificate Verification System

## The Problem

Traditional digital certificates face several challenges:
- **Forgery**: Easy to fake or manipulate
- **Centralization**: Single point of failure
- **Verification**: Time-consuming manual verification
- **Storage**: Centralized databases can be compromised

I wanted to build a system where certificates are:
- ✅ Tamper-proof
- ✅ Decentralized
- ✅ Instantly verifiable
- ✅ Permanently stored

## Tech Stack

- **Smart Contracts**: Solidity
- **Blockchain**: Ethereum (Ganache for local testing)
- **Development**: Truffle Suite
- **Storage**: IPFS (Pinata)
- **Backend**: Node.js + Express
- **Frontend**: React.js
- **Database**: MongoDB (for metadata)
- **Containerization**: Docker

## Architecture Overview

```
┌──────────────┐
│   Frontend   │ (React)
└──────┬───────┘
       │
       ▼
┌──────────────┐
│   Backend    │ (Express API)
└──────┬───────┘
       │
   ┌───┴────┐
   ▼        ▼
┌────────┐ ┌──────────┐
│Ethereum│ │   IPFS   │
│ Chain  │ │ (Pinata) │
└────────┘ └──────────┘
```

## Smart Contract Design

### Certificate Structure

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract CertificateVerification {
    struct Certificate {
        bytes32 certificateHash;
        string ipfsHash;
        address issuer;
        uint256 timestamp;
        bool isValid;
    }
    
    mapping(bytes32 => Certificate) public certificates;
    mapping(address => bool) public authorizedIssuers;
    
    event CertificateIssued(
        bytes32 indexed certificateHash,
        string ipfsHash,
        address indexed issuer,
        uint256 timestamp
    );
    
    event CertificateRevoked(
        bytes32 indexed certificateHash,
        address indexed revoker
    );
    
    modifier onlyAuthorized() {
        require(
            authorizedIssuers[msg.sender],
            "Not authorized to issue certificates"
        );
        _;
    }
}
```

### Issuing Certificates

```solidity
function issueCertificate(
    bytes32 _certificateHash,
    string memory _ipfsHash
) public onlyAuthorized {
    require(
        certificates[_certificateHash].timestamp == 0,
        "Certificate already exists"
    );
    
    certificates[_certificateHash] = Certificate({
        certificateHash: _certificateHash,
        ipfsHash: _ipfsHash,
        issuer: msg.sender,
        timestamp: block.timestamp,
        isValid: true
    });
    
    emit CertificateIssued(
        _certificateHash,
        _ipfsHash,
        msg.sender,
        block.timestamp
    );
}
```

### Verifying Certificates

```solidity
function verifyCertificate(
    bytes32 _certificateHash
) public view returns (
    bool exists,
    bool isValid,
    string memory ipfsHash,
    address issuer,
    uint256 timestamp
) {
    Certificate memory cert = certificates[_certificateHash];
    
    return (
        cert.timestamp != 0,
        cert.isValid,
        cert.ipfsHash,
        cert.issuer,
        cert.timestamp
    );
}
```

### Revoking Certificates

```solidity
function revokeCertificate(
    bytes32 _certificateHash
) public onlyAuthorized {
    require(
        certificates[_certificateHash].timestamp != 0,
        "Certificate does not exist"
    );
    require(
        certificates[_certificateHash].issuer == msg.sender,
        "Only issuer can revoke"
    );
    
    certificates[_certificateHash].isValid = false;
    
    emit CertificateRevoked(_certificateHash, msg.sender);
}
```

## IPFS Integration

### Storing Certificates on IPFS

```javascript
const pinataSDK = require('@pinata/sdk');
const pinata = pinataSDK(process.env.PINATA_API_KEY, process.env.PINATA_SECRET);

async function uploadToIPFS(certificateData) {
  try {
    const result = await pinata.pinJSONToIPFS({
      name: certificateData.recipientName,
      course: certificateData.courseName,
      issueDate: certificateData.issueDate,
      issuer: certificateData.issuerName,
      certificateId: certificateData.id
    });
    
    return result.IpfsHash;
  } catch (error) {
    console.error('IPFS upload error:', error);
    throw error;
  }
}
```

### Retrieving from IPFS

```javascript
async function getFromIPFS(ipfsHash) {
  try {
    const response = await fetch(`https://gateway.pinata.cloud/ipfs/${ipfsHash}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('IPFS retrieval error:', error);
    throw error;
  }
}
```

## Backend API

### Issue Certificate Endpoint

```javascript
router.post('/issue', authenticate, async (req, res) => {
  try {
    const { recipientName, courseName, issueDate } = req.body;
    
    // 1. Upload certificate data to IPFS
    const ipfsHash = await uploadToIPFS({
      recipientName,
      courseName,
      issueDate,
      issuerName: req.user.organization,
      id: generateUniqueId()
    });
    
    // 2. Generate certificate hash
    const certificateHash = web3.utils.sha3(
      recipientName + courseName + issueDate
    );
    
    // 3. Store on blockchain
    const receipt = await contract.methods
      .issueCertificate(certificateHash, ipfsHash)
      .send({ from: req.user.address, gas: 300000 });
    
    // 4. Store metadata in MongoDB
    await Certificate.create({
      certificateHash,
      ipfsHash,
      recipientName,
      courseName,
      issueDate,
      issuer: req.user.id,
      transactionHash: receipt.transactionHash
    });
    
    res.json({
      success: true,
      certificateHash,
      ipfsHash,
      transactionHash: receipt.transactionHash
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
```

### Verify Certificate Endpoint

```javascript
router.get('/verify/:hash', async (req, res) => {
  try {
    const { hash } = req.params;
    
    // 1. Check blockchain
    const result = await contract.methods
      .verifyCertificate(hash)
      .call();
    
    if (!result.exists) {
      return res.status(404).json({
        valid: false,
        message: 'Certificate not found'
      });
    }
    
    // 2. Get data from IPFS
    const certificateData = await getFromIPFS(result.ipfsHash);
    
    // 3. Get additional metadata from MongoDB
    const metadata = await Certificate.findOne({ certificateHash: hash });
    
    res.json({
      valid: result.isValid,
      data: certificateData,
      issuer: result.issuer,
      timestamp: result.timestamp,
      transactionHash: metadata.transactionHash
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
```

### QR Code Generation

```javascript
const QRCode = require('qrcode');

router.get('/qr/:hash', async (req, res) => {
  try {
    const { hash } = req.params;
    const verifyUrl = `${process.env.FRONTEND_URL}/verify/${hash}`;
    
    const qrCode = await QRCode.toDataURL(verifyUrl, {
      width: 300,
      margin: 2,
      color: {
        dark: '#000000',
        light: '#FFFFFF'
      }
    });
    
    res.json({ qrCode });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
```

## Frontend Implementation

### Certificate Verification Component

```jsx
import { useState } from 'react';
import { ethers } from 'ethers';

function VerifyCertificate() {
  const [hash, setHash] = useState('');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const verifyCertificate = async () => {
    setLoading(true);
    try {
      const response = await fetch(`/api/verify/${hash}`);
      const data = await response.json();
      setResult(data);
    } catch (error) {
      console.error('Verification error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="verify-container">
      <h2>Verify Certificate</h2>
      <input
        type="text"
        placeholder="Enter certificate hash"
        value={hash}
        onChange={(e) => setHash(e.target.value)}
      />
      <button onClick={verifyCertificate} disabled={loading}>
        {loading ? 'Verifying...' : 'Verify'}
      </button>
      
      {result && (
        <div className={`result ${result.valid ? 'valid' : 'invalid'}`}>
          <h3>{result.valid ? '✓ Valid Certificate' : '✗ Invalid Certificate'}</h3>
          {result.valid && (
            <div className="certificate-details">
              <p><strong>Recipient:</strong> {result.data.name}</p>
              <p><strong>Course:</strong> {result.data.course}</p>
              <p><strong>Issue Date:</strong> {result.data.issueDate}</p>
              <p><strong>Issuer:</strong> {result.issuer}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
```

## Local Development Setup

### Ganache Configuration

```javascript
// truffle-config.js
module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*"
    }
  },
  compilers: {
    solc: {
      version: "0.8.19"
    }
  }
};
```

### Deployment Script

```javascript
// migrations/2_deploy_contracts.js
const CertificateVerification = artifacts.require("CertificateVerification");

module.exports = async function (deployer, network, accounts) {
  await deployer.deploy(CertificateVerification);
  const instance = await CertificateVerification.deployed();
  
  // Authorize the first account as an issuer
  await instance.authorizeIssuer(accounts[0]);
  
  console.log("Contract deployed at:", instance.address);
};
```

## Docker Setup

```dockerfile
# Dockerfile
FROM node:18-alpine

WORKDIR /app

# Install Truffle globally
RUN npm install -g truffle ganache

COPY package*.json ./
RUN npm ci

COPY . .

# Compile contracts
RUN truffle compile

EXPOSE 3000 7545

CMD ["npm", "start"]
```

```yaml
# docker-compose.yml
version: '3.8'

services:
  ganache:
    image: trufflesuite/ganache:latest
    ports:
      - "7545:8545"
    command: >
      --deterministic
      --accounts 10
      --defaultBalanceEther 100

  api:
    build: .
    ports:
      - "3000:3000"
    environment:
      - BLOCKCHAIN_URL=http://ganache:8545
      - PINATA_API_KEY=${PINATA_API_KEY}
      - PINATA_SECRET=${PINATA_SECRET}
    depends_on:
      - ganache
      - mongodb

  mongodb:
    image: mongo:6
    volumes:
      - mongo-data:/data/db

volumes:
  mongo-data:
```

## Security Considerations

### 1. Hash Verification

```javascript
function verifyHash(certificateData, providedHash) {
  const computedHash = crypto
    .createHash('sha256')
    .update(JSON.stringify(certificateData))
    .digest('hex');
    
  return computedHash === providedHash;
}
```

### 2. Access Control

```solidity
mapping(address => bool) public authorizedIssuers;

function authorizeIssuer(address _issuer) public onlyOwner {
    authorizedIssuers[_issuer] = true;
}

function revokeIssuer(address _issuer) public onlyOwner {
    authorizedIssuers[_issuer] = false;
}
```

### 3. Rate Limiting

```javascript
const rateLimit = require('express-rate-limit');

const verifyLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});

router.get('/verify/:hash', verifyLimiter, async (req, res) => {
  // Verification logic
});
```

## Performance Optimizations

### 1. Caching Verification Results

```javascript
const NodeCache = require('node-cache');
const cache = new NodeCache({ stdTTL: 600 }); // 10 minutes

router.get('/verify/:hash', async (req, res) => {
  const { hash } = req.params;
  
  // Check cache first
  const cached = cache.get(hash);
  if (cached) {
    return res.json(cached);
  }
  
  // Verify and cache result
  const result = await verifyCertificate(hash);
  cache.set(hash, result);
  
  res.json(result);
});
```

### 2. Batch Processing

```javascript
async function batchIssueCertificates(certificates) {
  const batch = new web3.BatchRequest();
  
  certificates.forEach(cert => {
    batch.add(
      contract.methods.issueCertificate(
        cert.hash,
        cert.ipfsHash
      ).send.request({ from: issuerAddress }, (err, result) => {
        if (err) console.error(err);
      })
    );
  });
  
  await batch.execute();
}
```

## Results

- ✅ **Verification Time**: Reduced to a single hash comparison (~100ms)
- ✅ **Tamper-Proof**: Blockchain ensures immutability
- ✅ **Decentralized**: IPFS provides distributed storage
- ✅ **Cost-Effective**: Local blockchain for testing, minimal gas fees
- ✅ **Scalable**: Can handle thousands of certificates

## Challenges & Solutions

### Challenge 1: Gas Costs

**Problem**: High gas fees on mainnet.

**Solution**: Batch transactions and use Layer 2 solutions like Polygon.

### Challenge 2: IPFS Availability

**Problem**: IPFS nodes might go offline.

**Solution**: Use Pinata's pinning service for guaranteed availability.

### Challenge 3: Private Data

**Problem**: Sensitive information on public blockchain.

**Solution**: Store only hashes on-chain, actual data on IPFS with encryption.

## Lessons Learned

1. **Blockchain isn't always the answer**: Use it where immutability matters
2. **IPFS + Blockchain = Powerful combo**: Decentralized storage + verification
3. **Gas optimization is crucial**: Every operation costs money
4. **Testing is essential**: Use Ganache for thorough local testing
5. **User experience matters**: Abstract blockchain complexity from users

## Future Improvements

- [ ] Implement zero-knowledge proofs for privacy
- [ ] Add multi-signature verification
- [ ] Support for batch verification
- [ ] Mobile app with QR scanner
- [ ] Integration with educational institutions

## Conclusion

VerifyHub demonstrates how blockchain technology can solve real-world problems. By combining Solidity smart contracts with IPFS storage, we created a system that's secure, decentralized, and efficient.

The project is open-source and available on [GitHub](https://github.com/ChinmayOnGithub/verifyhub-backend).

---

**Tech Stack Summary**: Solidity, Truffle, Ganache, IPFS (Pinata), MERN Stack, Docker

**GitHub**: [github.com/ChinmayOnGithub/verifyhub-backend](https://github.com/ChinmayOnGithub/verifyhub-backend)
