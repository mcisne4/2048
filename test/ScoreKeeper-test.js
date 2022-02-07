const { expect, assert } = require('chai')
const { ethers } = require('hardhat')


describe('ScoreKeeper Contract', () => {
    // --- Global Variables ---
    let scoreKeeper
    let owner
    let acct1
    let acct2

    beforeEach(async () => {
        const ScoreKeeper = await ethers.getContractFactory('ScoreKeeper')
        scoreKeeper = await ScoreKeeper.deploy()
        await scoreKeeper.deployed()
        const signers = await ethers.getSigners()
        owner = signers[0]
        acct1 = signers[1]
        acct2 = signers[2]
    })

    describe('Initial State', () => {
        describe('getUserScores()', () => {
            let acct1_results
            let acct2_results
    
            beforeEach(async () => {
                acct1_results = await scoreKeeper
                    .connect(acct1)
                    .getUserScores(acct1.address)
                acct2_results = await scoreKeeper
                    .connect(acct2)
                    .getUserScores(acct2.address)
            })
    
            it('getUserScores(acct1): Should return an Array', () => {
                expect(acct1_results).to.be.an('array')
            })
            it('getUserScores(acct2): Should return an Array', () => {
                expect(acct2_results).to.be.an('array')
            })
    
            it('getUserScore(acct1)[0]: Should return an empty Array []', () => {
                expect(acct1_results[0]).to.be.an('array').that.is.empty
            })
            it('getUserScore(acct2)[0]: Should return an empty Array []', () => {
                expect(acct2_results[0]).to.be.an('array').that.is.empty
            })
    
            it('getUserScore(acct1)[1]: Should return 0', () => {
                expect(acct1_results[1]).to.equal(0)
            })
            it('getUserScore(acct2)[1]: Should return 0', () => {
                expect(acct2_results[1]).to.equal(0)
            })
        })

        describe('getHighScores()', () => {
            let resultHighScores

            beforeEach(async () => {
                resultHighScores = await scoreKeeper.getHighScores()
            })

            it('getHigScores(): Should return an Array', () => {
                expect(resultHighScores).to.be.an('array')
            })

            it('getHighScores()[0]: Should return an array', () => {
                expect(resultHighScores[0]).to.be.an('array')
            })
            it('getHighScores()[0]: Should return [player.1, player.2, player.3]', () => {
                expect(resultHighScores[0]).to.eql(['player.1', 'player.2', 'player.3'])
            })

            it('getHighScores()[1]: Should return an array', () => {
                expect(resultHighScores[1]).to.be.an('array')
            })
            it('getHighScores()[1]: Should return [0, 0, 0]', () => {
                expect(resultHighScores[1]).to.eql([0, 0, 0])
            })
        })
    })


    describe('acct1: Add scores [20, 10, 30, 5] with the username \'acct1.nft\'', () => {
        describe('getUserScores(acct1)', () => {
            let results

            beforeEach(async () => {
                await scoreKeeper.connect(acct1).addOneScore(20, 'acct1.nft')
                await scoreKeeper.connect(acct1).addOneScore(10, 'acct1.nft')
                await scoreKeeper.connect(acct1).addOneScore(30, 'acct1.nft')
                await scoreKeeper.connect(acct1).addOneScore(5, 'acct1.nft')
                results = await scoreKeeper.getUserScores(acct1.address)
            })

            it('getUserScores(acct1)[0]: Should return [20, 10, 30, 5]', () => {
                expect(results[0]).to.eql([20, 10, 30, 5])
            })
            it('getUserScores(acct1)[1]: Should return 30', () => {
                expect(results[1]).to.equal(30)
            })
        })

        describe('getHighScores()', () => {
            let results

            beforeEach(async () => {
                await scoreKeeper.connect(acct1).addOneScore(20, 'acct1.nft')
                await scoreKeeper.connect(acct1).addOneScore(10, 'acct1.nft')
                await scoreKeeper.connect(acct1).addOneScore(30, 'acct1.nft')
                await scoreKeeper.connect(acct1).addOneScore(5, 'acct1.nft')
                results = await scoreKeeper.getHighScores()
            })

            it('getHighScores()[0]: Should return [acct1.nft, acct1.nft, acct1.nft]', () => {
                expect(results[0]).to.eql(['acct1.nft', 'acct1.nft', 'acct1.nft'])
            })

            it('getHighScores()[1]: Should return [30, 20, 10]', () => {
                expect(results[1]).to.eql([30, 20, 10])
            })
        })
    })


    describe('acct1: [12, 20, 3] under username \'acct1.nft\' | acct2: [30, 12, 7] under username \'acct2.svg\'', () => {
        let user1
        let user2
        let highScores

        beforeEach(async () => {
            await scoreKeeper.connect(acct1).addOneScore(12, 'acct1.nft')
            await scoreKeeper.connect(acct1).addOneScore(20, 'acct1.nft')
            await scoreKeeper.connect(acct1).addOneScore(3, 'acct1.nft')

            await scoreKeeper.connect(acct2).addOneScore(30, 'acct2.svg')
            await scoreKeeper.connect(acct2).addOneScore(12, 'acct2.svg')
            await scoreKeeper.connect(acct2).addOneScore(7, 'acct2.svg')

            user1 = await scoreKeeper.getUserScores(acct1.address)
            user2 = await scoreKeeper.getUserScores(acct2.address)

            highScores = await scoreKeeper.getHighScores()
        })

        describe('getUserScores(acct1)', () => {
            it('getUserScores(acct1)[0]: Should return [12, 20, 3]', () => {
                expect(user1[0]).to.eql([12,20,3])
            })
            it('getUserScores(acct1)[1]: Should return 20', () => {
                expect(user1[1]).to.equal(20)
            })
        })

        describe('getUserScores(acct2)', () => {
            it('getUserScores(acct2)[0]: Should return [30, 12, 7]', () => {
                expect(user2[0]).to.eql([30, 12, 7])
            })
            it('getUserScores(acct2)[1]: Should return 30', () => {
                expect(user2[1]).to.equal(30)
            })
        })

        describe('getHighScores()', () => {
            it('getHighScores()[0]: Should return [acct2.svg, acct1.nft, acct1.nft]', () => {
                expect(highScores[0]).to.eql(['acct2.svg', 'acct1.nft', 'acct1.nft'])
            })
            it('getHighScores()[1]: Should return [30, 20, 12]', () => {
                expect(highScores[1]).to.eql([30, 20, 12])
            })
        })

    })
})
