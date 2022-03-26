const { ethers } = require("hardhat");
const { expect } = require("chai");
describe("MyStatus", async function (){
    let myStatus;
    const newStatus = "sleeping";
    before(async function(){
        const MyStatus = await ethers.getContractFactory("MyStatus");
        myStatus = await MyStatus.deploy();
        await myStatus.deployed();
    });

    it("Should print the constract address", async function(){
        console.log(myStatus.address);
    });
    it("Should print the Status", async function() {
        const status = await myStatus.getStatus();
        expect(status).to.equal("busy");
    });
    it("Should change the Status to sleeping", async function(){
        await myStatus.setStatus(newStatus);
        expect(await myStatus.getStatus()).to.equal(newStatus);
    });
    it("Should emit the new Status", async function(){
        await myStatus.setStatus(newStatus);
        const MyStatus = await ethers.getContractFactory("MyStatus");
        expect(myStatus).to.emit(MyStatus, newStatus);
    });
});