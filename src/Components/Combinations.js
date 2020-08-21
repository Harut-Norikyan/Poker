import React, { useState } from 'react';

const Combinations = (props) => {

    const values = props.data.values;
    const suits = props.data.suits;

    const myResult = props.data.myCardsResult;
    const hisResult = props.data.hisCardsResult;

    const myCardsValues = props.data.myCardsResult;
    const myCardsSuits = props.data.myCardsResult;
    const hisCardsValues = props.data.hisCardsResult;
    const hisCardsSuits = props.data.hisCardsResult;

    const myValues = myCardsValues.map(m => m.value);
    const mySuits = myCardsSuits.map(m => m.suit);
    const hisValues = hisCardsValues.map(m => m.value);
    const hisSuits = hisCardsSuits.map(m => m.suit);

    const myCardsbyId = myCardsValues.map(m => m.id).sort((a, b) => a - b).slice(0, 5);
    const hisCardsbyId = hisCardsValues.map(m => m.id).sort((a, b) => a - b).slice(0, 5);
    // console.log(myCardsbyId)


    // let array = [
    //     { id: 7, key: "1", suit: "spades" },
    //     { id: 4, key: "3", suit: "spades" },
    //     { id: 8, key: "6", suit: "spades" },
    //     { id: 7, key: "J", suit: "clubs" },
    //     { id: 10, key: "4", suit: "spades" },
    //     { id: 6, key: "A", suit: "hearts" },
    //     { id: 5, key: "5", suit: "spades" },
    // ];
    // array = array.sort((a, b) => a.id - b.id)
    // let yyy = [];
    // for (let i = 0; i < array.length; i++) {
    //     yyy.push(array[i].id)
    // };
    // console.log(yyy.slice(0, 5))
    // yyy = yyy.slice(0, 5)
    // let num = yyy[0]+1
    // let dinamic = []
    // for (let i = 0; i < yyy.length; i++) {
    //    if (yyy[i] + 1 === num) {
    //      num++
    //      dinamic.push(yyy[i])
    //    }
    // }


    






    // let myOnePair = myValues.filter((elem, pos, arr) => {
    //     return pos !== arr.indexOf(elem) || pos !== arr.lastIndexOf(elem);
    // });
    // let hisOnePair = hisValues.filter((elem, pos, arr) => {
    //     return pos !== arr.indexOf(elem) || pos !== arr.lastIndexOf(elem);
    // });
    
    // let myDynamicArray = [];                                                         //100% Straight
    // let myNum = myCardsbyId[0] + 1;
    // for (let i = 0; i < myCardsbyId.length; i++) {
    //     if (myCardsbyId[i] + 1 === myNum) {
    //         myNum++
    //         myDynamicArray.push(myCardsbyId[i])
    //       }
    // };
    // if (myDynamicArray.length === 5) {
    //     console.log("I have a Straight");
    // };
    
    // let hisDynamicArray = [];
    // let hisNum = hisCardsbyId[0] + 1;
    // for (let i = 0; i < hisCardsbyId.length; i++) {
    //     if (hisCardsbyId[i] + 1 === hisNum) {
    //         hisNum++
    //         hisDynamicArray.push(hisCardsbyId[i])
    //       }
    // };
    // if (hisDynamicArray.length === 5) {
    //     console.log("Dealer have a Straight");
    // };                                                                               //100% Straight--end

    // let myObj = {};                                                                            
    // for (let i = 0; i < mySuits.length; i++) {
    //     if (myObj[mySuits[i]]) {
    //         myObj[mySuits[i]] += 1;
    //     } else myObj[mySuits[i]] = 1;
    // };
    // let myArr = Object.values(myObj);
    // let myMax = Math.max(...myArr);
    // if (mySuits.length && myMax >= 5) {
    //     console.log("I have a Flush");
    // };                                                                                    

    // let hisObj = {};                                                                                                       
    // for (let i = 0; i < hisSuits.length; i++) {
    //     if (hisObj[hisSuits[i]]) {
    //         hisObj[hisSuits[i]] += 1;
    //     } else hisObj[hisSuits[i]] = 1;
    // };
    // let hisArr = Object.values(hisObj);
    // let hisMax = Math.max(...hisArr);
    // if (hisSuits.length && hisMax >= 5) {
    //     console.log("Dealer have a Flush");
    // };                                                                                      

    // if (hisOnePair.length === 2) {
    //     console.log(hisOnePair.sort(), "Dealer have a One Pair");
    // };
    // if (hisOnePair.length === 3) {
    //     console.log(hisOnePair.sort(), "Dealer have a Three Of a Kind");
    // };
    // if (hisOnePair.length === 4 && hisOnePair[0] !== hisOnePair[3]) {
    //     console.log(hisOnePair.sort(), "Dealer have a Two Pair");
    // };
    // if (hisOnePair.length === 4 && hisOnePair[0] === hisOnePair[3]) {
    //     console.log(hisOnePair.sort(), "Dealer have a Four Of a Kind");
    // };
    // if (hisOnePair.length === 5) {
    //     console.log(hisOnePair.sort(), "Dealer have a Full House");
    // };
    // if (myOnePair.length === 2) {
    //     console.log(myOnePair.sort(), "I have a One Pair");
    // };
    // if (myOnePair.length === 3) {
    //     console.log(myOnePair.sort(), "I have a Three Of a Kind");
    // };
    // if (myOnePair.length === 4 && myOnePair[0] !== myOnePair[3]) {
    //     console.log(myOnePair.sort(), "I have a Two Pair");
    // };
    // if (myOnePair.length === 4 && myOnePair[0] === myOnePair[3]) {
    //     console.log(myOnePair.sort(), "I have a Four Of a Kind");
    // };
    // if (myOnePair.length === 5) {
    //     console.log(myOnePair.sort(), "I have a Full House");
    // };                                                                                          




    return (
        <div>

        </div>
    );
}
export default Combinations;