//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Burnable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Pausable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/AccessControlEnumerable.sol";
import "@openzeppelin/contracts/access/IAccessControl.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Context.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract Loot is Context, AccessControlEnumerable, ERC721Enumerable, ERC721URIStorage, Ownable {
  using Counters for Counters.Counter;
  Counters.Counter public _tokenIdTracker;

  string private _baseTokenURI = "https://metaloot.herokuapp.com/api/token/";
  uint private _price;
  uint private _max;
  address private _admin;

  mapping (uint256 => address ) public creator;

  bool public saleIsActive = false;

  constructor(string memory name, string memory symbol, uint mintPrice, uint max, address admin, address admin2) ERC721(name, symbol) {
      _price = mintPrice;
      _max = max;
      _admin = admin;

      _setupRole(DEFAULT_ADMIN_ROLE, admin);
      _setupRole(DEFAULT_ADMIN_ROLE, admin2);
  }

  function _baseURI() internal view virtual override returns (string memory) {
      return _baseTokenURI;
  }

  function contractURI() public pure returns (string memory) {
		return "https://binanceloot.io";
	}

  function setBaseURI(string memory baseURI) external onlyOwner() {
    require(hasRole(DEFAULT_ADMIN_ROLE, _msgSender()), "BNBPunks: must have admin role to change base URI");
    _baseTokenURI = baseURI;
  }

  function setTokenURI(uint256 tokenId, string memory _tokenURI) external onlyOwner() {
    require(hasRole(DEFAULT_ADMIN_ROLE, _msgSender()), "BNBPunks: must have admin role to change token URI");
    _setTokenURI(tokenId, _tokenURI);
  }

  function setPrice(uint mintPrice) external onlyOwner() {
    require(hasRole(DEFAULT_ADMIN_ROLE, _msgSender()), "BNBPunks: must have admin role to change price");
    _price = mintPrice;
  }

  function setMax(uint maxSupply) external onlyOwner() {
    require(hasRole(DEFAULT_ADMIN_ROLE, _msgSender()), "BNBPunks: must have admin role to change price");
    _max = maxSupply;
  }

  function price() public view returns (uint) {
    return _price;
  }

  function mint() public payable {
    require(saleIsActive, "Sale must be active to mint");
    require(msg.value == _price, "BNBPunks: must send correct price");
    require(_tokenIdTracker.current() < _max, "BNBPunks: all BNBPunks have been minted");

    _mint(msg.sender, _tokenIdTracker.current());
    creator[_tokenIdTracker.current()] = msg.sender;

    _tokenIdTracker.increment();
    splitBalance(msg.value);
  }

  function mineReserves(uint _amount) public {
    require(hasRole(DEFAULT_ADMIN_ROLE, _msgSender()), "BNBPunks: must have admin role to mine reserves");

    for(uint x = 0; x < _amount; x++){
        reserves_mint();
    }
  }

  function flipSaleState() public onlyOwner() {
   require(hasRole(DEFAULT_ADMIN_ROLE, _msgSender()), "BNBPunks: must have admin role to flip sales");
    saleIsActive = !saleIsActive;
  }

  function reserves_mint() private {
        _safeMint(msg.sender, _tokenIdTracker.current());
        _tokenIdTracker.increment();
  }

  function punkCreator(uint256 tokenId) public view returns(address){
    return creator[tokenId];
  }

  function _burn(uint256 tokenId) internal virtual override(ERC721, ERC721URIStorage) {
    return ERC721URIStorage._burn(tokenId);
  }

  function tokenURI(uint256 tokenId) public view override(ERC721, ERC721URIStorage) returns (string memory) {
    return ERC721URIStorage.tokenURI(tokenId);
  }

  function _beforeTokenTransfer(address from, address to, uint256 tokenId) internal virtual override(ERC721, ERC721Enumerable) {
    super._beforeTokenTransfer(from, to, tokenId);
  }

  /**
    * @dev See {IERC165-supportsInterface}.
    */
  function supportsInterface(bytes4 interfaceId) public view virtual override(AccessControlEnumerable, ERC721, ERC721Enumerable) returns (bool) {
    return super.supportsInterface(interfaceId);
  }

  function splitBalance(uint256 amount) private {
      payable(_admin).transfer(amount);
  }

  function revokeRole(bytes32 role, address account) public virtual override onlyRole(getRoleAdmin(role)) onlyOwner() {
    super.revokeRole(role, account);
  }

  function grantRole(bytes32 role, address account) public virtual override onlyRole(getRoleAdmin(role)) onlyOwner() {
    super.grantRole(role, account);
  }
}
