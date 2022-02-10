// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "./Mkhuetoken.sol";
contract Etherexchange {
    uint256 etherbalance;
    Mkhuetoken public token;
    address owner;
    uint256 rate = 10;
    event Tokenspurchased(
        address account,
        address Token,
        uint256 amount,
        uint256 rate
    );
    event TokensSold(
        address account,
        address Token,
        uint256 amount,
        uint256 rate
    );

    constructor(Mkhuetoken _token){
        owner = msg.sender;
        token = _token;
    }

    function purchasetoken() public payable {
        uint256 exchangeAmount = (msg.value)*rate;

        require(token.balanceOf(address(this)) >= exchangeAmount,"Insuficient Funds");

        token.transfer(msg.sender,exchangeAmount);
        emit Tokenspurchased(msg.sender,address(token),exchangeAmount,rate); 
    }

    function selltoken(uint256 _amount) public {
        uint256 amountexchange = _amount/rate;
        require(address(this).balance >= amountexchange,"Insufficient Funds");
        token.transferFrom(msg.sender,address(this),_amount);
        payable(msg.sender).transfer(amountexchange);
        emit TokensSold(msg.sender,address(token),amountexchange,rate);
    }

}