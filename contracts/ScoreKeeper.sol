// SPDX-License-Identifier: MIT
pragma solidity ^0.8.2;

import "hardhat/console.sol";

contract ScoreKeeper {
    // --- User States ---
    struct Player {
        uint24 highScore;
        uint24[] scores;
    }
    mapping(address => Player) ledger;

    // --- Global States ---
    struct HighScore {
        string username;
        uint24 highScore;
    }
    HighScore public globalHighScore1;
    HighScore public globalHighScore2;
    HighScore public globalHighScore3;

    // --- Constructor ---
    constructor(){
        globalHighScore1 = HighScore("user_1", 0);
        globalHighScore2 = HighScore("user_2", 0);
        globalHighScore3 = HighScore("user_3", 0);
    }


    // --- Add Score ---
    function addOneScore(uint24 _score, string memory _username) public {
        // -- User Scores --
        ledger[msg.sender].scores.push(_score);
        if(_score > ledger[msg.sender].highScore){
            ledger[msg.sender].highScore = _score;
        }
        // -- Global Scores --
        if(_score > globalHighScore1.highScore){
            // console.log("Overwrittint High Score 1");
            // console.log(globalHighScore1.highScore, globalHighScore2.highScore, globalHighScore3.highScore);
            globalHighScore3 = globalHighScore2;
            globalHighScore2 = globalHighScore1;
            globalHighScore1.username = _username;
            globalHighScore1.highScore = _score;
            // console.log(globalHighScore1.highScore, globalHighScore2.highScore, globalHighScore3.highScore);
        }
        else if(_score > globalHighScore2.highScore){
            // console.log("Overwrittint High Score 2");
            // console.log(globalHighScore1.highScore, globalHighScore2.highScore, globalHighScore3.highScore);
            globalHighScore3 = globalHighScore2;
            globalHighScore2.username = _username;
            globalHighScore2.highScore = _score;
            // console.log(globalHighScore1.highScore, globalHighScore2.highScore, globalHighScore3.highScore);
        }
        else if(_score > globalHighScore3.highScore){
            // console.log("Overwrittint High Score 3");
            // console.log(globalHighScore1.highScore, globalHighScore2.highScore, globalHighScore3.highScore);
            globalHighScore3.username = _username;
            globalHighScore3.highScore = _score;
            // console.log(globalHighScore1.highScore, globalHighScore2.highScore, globalHighScore3.highScore);
        }
        // else {
        //     console.log("No Global High Score Change");
        // }
    }

    function getUserScores(address _address) public view returns(uint24[] memory, uint24){
        return (
            ledger[_address].scores,
            ledger[_address].highScore);
    }
    
    function getHighScores() public view returns (
        string[3] memory usernames,
        uint24[3] memory scores
    ){
        return (
            [
                globalHighScore1.username,
                globalHighScore2.username,
                globalHighScore3.username
            ],
            [
                globalHighScore1.highScore,
                globalHighScore2.highScore,
                globalHighScore3.highScore
            ]
        );
    }
}
