const myStatus = artifacts.require('MyStatus')

contract('MyStatus', async ()  => {
    
    it('should return the status', async () => {
        const ms = await myStatus.deployed()
        console.log(ms);
        const val = await ms.getStatus()
        console.log('val:\t', val)
        assert.equal(val, 'busy')
    })
    
    it('should change the status', async () => {
        const newStatus = 'HELLO!!!!'
        const ms = await myStatus.deployed()
        await ms.setStatus(newStatus)
        assert(await ms.getStatus(), newStatus)
    })
})