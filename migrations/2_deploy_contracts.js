const Loot = artifacts.require("./Loot.sol");

module.exports = function(deployer) {
  deployer.deploy(Loot, 'Loot', 'LOOT', '10000000000000000', '60000', '0xeDbbf852E30D12465B75C204Ef25635b7C828EbF',  '0xeDbbf852E30D12465B75C204Ef25635b7C828EbF');
};
