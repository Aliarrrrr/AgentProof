// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

/// @notice Records content integrity, not accuracy or proof of AI authorship.
contract AgentProof {
    struct Proof { uint256 timestamp; }
    mapping(address => mapping(bytes32 => Proof)) public proofs;
    event Attested(address indexed author, bytes32 indexed digest, uint256 timestamp);
    function attest(bytes32 digest) external {
        require(digest != bytes32(0), "Empty digest");
        require(proofs[msg.sender][digest].timestamp == 0, "Already attested");
        proofs[msg.sender][digest] = Proof(block.timestamp);
        emit Attested(msg.sender, digest, block.timestamp);
    }
}
