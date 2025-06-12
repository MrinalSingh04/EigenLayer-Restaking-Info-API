# 🔧 EigenLayer Restaking Info API

A backend API built with Node.js, MongoDB, and Ethers.js to fetch and expose onchain EigenLayer restaking data.

---

## 📌 Features

### ✅ REST Endpoints

- `GET /restakers`  
  Fetches list of users who restaked their stETH.  
  **Returns:** user address, stETH amount, target validator.

- `GET /validators`  
  Lists validator addresses with stake amount and status.  
  **Status:** active, jailed, slashed.

- `GET /rewards/:address`  
  Fetches total and per-validator reward info for a given wallet.

- `GET /slash`  
  Lists validator slash history (amount, reason, block/timestamp).

---

## 🛠 Tech Stack

- Node.js + Express.js
- MongoDB (via Mongoose)
- Ethers.js (fetching onchain events + contract reads)
- dotenv for secrets
- RPC via Alchemy or Infura

---

## ⚙️ Setup

1. **Clone & Install**

   ```bash
   git clone https://github.com/your-repo/eigenlayer-api.git
   cd eigenlayer-api
   npm install

   ```

2. **.env file**
   PORT=5000
   MONGO_URI=mongodb://localhost:27017/eigenlayer
   RPC_URL=https://eth-mainnet.g.alchemy.com/v2/YOUR_API_KEY

3. **Run the server**
   npm start

## Project Structure

 Project Structure

 restaking-api/
 └── src/
     ├── config/
     │   └── db.js
     ├── controllers/
     │   ├── restakersController.js
     │   ├── validatorsController.js
     │   ├── rewardsController.js
     │   └── slashController.js
     ├── models/
     │   ├── Restaker.js
     │   ├── Validator.js
     │   ├── Reward.js
     │   └── Slash.js
     ├── routes/
     │   ├── restakers.js
     │   ├── validators.js
     │   ├── rewards.js
     │   └── slash.js
     ├── services/
     │   ├── eigenlayerService.js
     └── index.js
 .env
 package.json
 README.md