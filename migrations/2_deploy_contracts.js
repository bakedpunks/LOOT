const Loot = artifacts.require("./Loot.sol");

module.exports = function(deployer) {
  deployer.deploy(Loot, 'Loot', 'LOOT', 'https://binanceloot.com', '10000000000000000', '60000', '0x321145d784fb9E1a12008655238d7Ba3FA042091');
};
