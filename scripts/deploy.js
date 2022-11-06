
const hre = require("hardhat");

async function main() {
  
  const bookerContract = await ethers.getContractFactory("booker");

  // here we deploy the contract
  const deployedNFTContract = await bookerContract.deploy();

  // wait for the contract to deploy
  await deployedNFTContract.deployed();

  // print the address of the deployed contract
  console.log("Booker Contract Address:", deployedNFTContract.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
