pragma solidity >= 0.5.0 <= 0.9.0;

contract MyStatus {
    string status;

    constructor() public {
        status = "busy";
    }

    function getStatus() external view returns (string memory) {
        return status;
    }

    function setStatus(string calldata _status) external {
        status = _status;
    }
}