// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract ComputeMarketplace {

    struct Compute {
        uint id;
        address provider;
        uint pricePerHour;
        bool available;
    }

    uint public computeCount;

    mapping(uint => Compute) public computes;

    event ComputeListed(uint id, address provider, uint price);
    event ComputeRented(uint id, address renter);

    function listCompute(uint pricePerHour) public {
        computeCount++;

        computes[computeCount] = Compute(
            computeCount,
            msg.sender,
            pricePerHour,
            true
        );

        emit ComputeListed(computeCount, msg.sender, pricePerHour);
    }

    function rentCompute(uint id) public payable {

        Compute storage c = computes[id];

        require(c.available, "Not available");
        require(msg.value >= c.pricePerHour, "Insufficient payment");

        payable(c.provider).transfer(msg.value);

        c.available = false;

        emit ComputeRented(id, msg.sender);
    }
}
