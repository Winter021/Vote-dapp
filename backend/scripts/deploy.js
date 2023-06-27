const hre = require("hardhat");

async function main() {

  const Lottery = await hre.ethers.deployContract("Lottery");
  await Lottery.waitForDeployment(); //  passing constructor parameters to this function
  console.log(` Contract successfully  deployed to :  ${Lottery.target}`);

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

//
// contract address : 0x5FbDB2315678afecb367f032d93F642f64180aa3
// on sepolia : 0xb42340fC972cb0D1E6989601fdFc2e718F579AeA