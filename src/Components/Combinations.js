import React from 'react';
import ResultComponent from "./ResultComponent"

const Combinations = (props) => {

    const myResult = props.data.myCardsResult.sort((a, b) => a.id - b.id);
    const hisResult = props.data.hisCardsResult.sort((a, b) => a.id - b.id);
    const myValues = myResult.map(m => m.value);
    // const hisValues = [1, 2, 1, 2,3,3].sort()
    const mySuits = myResult.map(m => m.suit);
    const hisValues = hisResult.map(m => m.value);
    const hisSuits = hisResult.map(m => m.suit);
    const myCardsbyId = myResult.map(m => m.id);
    const hisCardsbyId = hisResult.map(m => m.id);

    const combinations = [
        {
            combination: "Royal Flush",
            id: 9,
        },
        {
            combination: "Straight Flush",
            id: 8,
        },
        {
            combination: "Four Of a Kind",
            id: 7,
        },
        {
            combination: "Full House",
            id: 6,
        },
        {
            combination: "Straight",
            id: 5,
        },
        {
            combination: "Three Of a Kind",
            id: 4,
        },
        {
            combination: "Two Pairs",
            id: 3,
        },
        {
            combination: "One Pair",
            id: 2,
        },
        {
            combination: "High Card",
            id: 1,
        },
    ];
    let myCombinations = [];
    let hisCombinations = [];



    //// Straight, Straight--Flush, Flush--Royal
    let myDynamicArrays = [];
    let myIndex = 0;
    for (let i = 0; i < myCardsbyId.length; i++) {
        if (myCardsbyId[i + 1] - myCardsbyId[i] !== 1) {
            let sliced = myCardsbyId.slice(myIndex, i + 1)
            if (sliced.length > 1) {
                myDynamicArrays.push(sliced)
            };
            myIndex = i + 1;
        };
    };
    let maxOfMyDynamicArrays = [];
    for (let i = 0; i < myDynamicArrays.length; i++) {
        if (myDynamicArrays[i].length > maxOfMyDynamicArrays.length) {
            maxOfMyDynamicArrays = myDynamicArrays[i];
        };
    };
    if (maxOfMyDynamicArrays.length >= 5) {
        maxOfMyDynamicArrays = maxOfMyDynamicArrays.reverse().splice(0, 5).sort();
    };
    let arrForMyCardsById = [];
    for (let i = 0; i < myResult.length; i++) {
        for (let j = 0; j < maxOfMyDynamicArrays.length; j++) {
            if (maxOfMyDynamicArrays[j] === myResult[i].id) {
                arrForMyCardsById.push(myResult[i]);
            };
        };
    };
    let myObj = {};
    for (let i = 0; i < arrForMyCardsById.length; i++) {
        if (myObj[arrForMyCardsById[i].suit]) {
            myObj[arrForMyCardsById[i].suit] += 1;
        } else myObj[arrForMyCardsById[i].suit] = 1;
    };
    let myArr = Object.values(myObj);
    let myMaxRecurringSuits = myArr.length ? Math.max(...myArr) : 0;
    if (arrForMyCardsById.length >= 5 &&
        myMaxRecurringSuits < 5 &&
        arrForMyCardsById[0] !== arrForMyCardsById[1] &&
        arrForMyCardsById[1] !== arrForMyCardsById[2] &&
        arrForMyCardsById[2] !== arrForMyCardsById[3] &&
        arrForMyCardsById[3] !== arrForMyCardsById[4]) {
        console.log("I have a Straight");
        const new_comb = combinations.filter(m => m.combination === "Straight");
        myCombinations.push(...new_comb);
    };
    if (myMaxRecurringSuits >= 5 && arrForMyCardsById.length >= 5 && arrForMyCardsById[0].id !== 10) {
        console.log("I have a Straight Flush");
        const new_comb = combinations.filter(m => m.combination === "Straight Flush");
        myCombinations.push(...new_comb);
    };
    if (myMaxRecurringSuits >= 5 && arrForMyCardsById.length >= 5 && arrForMyCardsById[0].id === 10) {
        console.log("I have a Royal Flush");
        const new_comb = combinations.filter(m => m.combination === "Royal Flush");
        myCombinations.push(...new_comb);
    };

    let hisDynamicArrays = [];
    let hisIndex = 0;
    for (let i = 0; i < hisCardsbyId.length; i++) {
        if (hisCardsbyId[i + 1] - hisCardsbyId[i] !== 1) {
            let sliced = hisCardsbyId.slice(hisIndex, i + 1)
            if (sliced.length > 1) {
                hisDynamicArrays.push(sliced);
            }
            hisIndex = i + 1;
        }
    }
    let maxOfHisDynamicArrays = [];
    for (let i = 0; i < hisDynamicArrays.length; i++) {
        if (hisDynamicArrays[i].length > maxOfHisDynamicArrays.length) {
            maxOfHisDynamicArrays = hisDynamicArrays[i];
        }
    }
    if (maxOfHisDynamicArrays.length >= 5) {
        maxOfHisDynamicArrays = maxOfHisDynamicArrays.reverse().splice(0, 5).sort();
    }
    let arrForHisCardsById = [];
    for (let i = 0; i < myResult.length; i++) {
        for (let j = 0; j < maxOfHisDynamicArrays.length; j++) {
            if (maxOfHisDynamicArrays[j] === myResult[i].id) {
                arrForHisCardsById.push(myResult[i]);
            }
        }
    }
    let hisObj = {};
    for (let i = 0; i < arrForHisCardsById.length; i++) {
        if (hisObj[arrForHisCardsById[i].suit]) {
            hisObj[arrForHisCardsById[i].suit] += 1;
        } else hisObj[arrForHisCardsById[i].suit] = 1;
    };
    let hisArr = Object.values(hisObj);
    let hisMaxRecurringSuits = hisArr.length ? Math.max(...hisArr) : 0;
    if (arrForHisCardsById.length >= 5 &&
        hisMaxRecurringSuits < 5 &&
        arrForHisCardsById[0] !== arrForHisCardsById[1] &&
        arrForHisCardsById[1] !== arrForHisCardsById[2] &&
        arrForHisCardsById[2] !== arrForHisCardsById[3] &&
        arrForHisCardsById[3] !== arrForHisCardsById[4]) {
        console.log("Dealer have a Straight");
        const new_comb = combinations.filter(m => m.combination === "Straight");
        hisCombinations.push(...new_comb);
    }
    if (hisMaxRecurringSuits >= 5 && arrForHisCardsById.length >= 5 && arrForHisCardsById[0].id !== 10) {
        console.log("Dealer have a Straight Flush");
        const new_comb = combinations.filter(m => m.combination === "Straight Flush");
        hisCombinations.push(...new_comb);
    };
    if (hisMaxRecurringSuits >= 5 && arrForHisCardsById.length >= 5 && arrForHisCardsById[0].id === 10) {
        console.log("Dealer have a Royal Flush");
        const new_comb = combinations.filter(m => m.combination === "Royal Flush");
        hisCombinations.push(...new_comb);
    };
    ////Straight, Straight--Flush, Flush--Royal --end  

    ////Flush
    let myObjForFlush = {};
    for (let i = 0; i < mySuits.length; i++) {
        if (myObjForFlush[mySuits[i]]) {
            myObjForFlush[mySuits[i]] += 1;
        } else myObjForFlush[mySuits[i]] = 1;
    };
    let myArrForFlush = Object.values(myObjForFlush);
    let myMaxForFlush = Math.max(...myArrForFlush);
    if (myMaxForFlush >= 5) {
        console.log("I have a Flush");
        const new_comb = combinations.filter(m => m.combination === "Flush");
        myCombinations.push(...new_comb);
    };

    let hisObjForFlush = {};
    for (let i = 0; i < hisSuits.length; i++) {
        if (hisObjForFlush[hisSuits[i]]) {
            hisObjForFlush[hisSuits[i]] += 1;
        } else hisObjForFlush[hisSuits[i]] = 1;
    };
    let hisArrForFlush = Object.values(hisObjForFlush);
    let hisMaxForFlush = Math.max(...hisArrForFlush);
    if (hisMaxForFlush >= 5) {
        console.log("Dealer have a Flush");
        const new_comb = combinations.filter(m => m.combination === "Flush");
        hisCombinations.push(...new_comb);
    };
    ////Flush --end

    ////One Pair, Two Pair, Three Of a Kind, Full House, Four Of a Kind
    let myRecurringCards = myValues.filter((elem, pos, arr) => {
        return pos !== arr.indexOf(elem) || pos !== arr.lastIndexOf(elem);
    });
    let hisRecurringCards = hisValues.filter((elem, pos, arr) => {
        return pos !== arr.indexOf(elem) || pos !== arr.lastIndexOf(elem);
    });


    if (myRecurringCards.length === 2) {
        console.log(myRecurringCards.sort(), "I have a One Pair");
        const new_comb = combinations.filter(m => m.combination === "One Pair");
        myCombinations.push(...new_comb);
    };
    if (myRecurringCards.length === 6 && myRecurringCards[0] !== myRecurringCards[2] && myRecurringCards[0] !== myRecurringCards[4]) {
        console.log(myRecurringCards.sort(), "I have a Two Pairs");
        const new_comb = combinations.filter(m => m.combination === "Two Pairs");
        myCombinations.push(...new_comb);
    };
    if (myRecurringCards.length === 3) {
        console.log(myRecurringCards.sort(), "I have a Three Of a Kind");
        const new_comb = combinations.filter(m => m.combination === "Three Of a Kind");
        myCombinations.push(...new_comb);
    };
    if (myRecurringCards.length === 4 && myRecurringCards[0] !== myRecurringCards[3]) {
        console.log(myRecurringCards.sort(), "I have a Two Pairs");
        const new_comb = combinations.filter(m => m.combination === "Two Pairs");
        myCombinations.push(...new_comb);
    };


    if (myRecurringCards.length >= 4) {
        if (myRecurringCards.length === 4) {
            if (myRecurringCards[0] === myRecurringCards[3]) {
                console.log("Four Of a Kind");
                const new_comb = combinations.filter(m => m.combination === "Four Of a Kind");
                myCombinations.push(...new_comb);
            };
        };
        if (myRecurringCards.length === 6) {
            if (myRecurringCards[0] === myRecurringCards[3] && myRecurringCards[0] !== myRecurringCards[5]) {
                console.log("Four Of a Kind");
                const new_comb = combinations.filter(m => m.combination === "Four Of a Kind");
                myCombinations.push(...new_comb);
            };
            if (myRecurringCards[2] === myRecurringCards[5] && myRecurringCards[0] !== myRecurringCards[2]) {
                console.log("Four Of a Kind");
                const new_comb = combinations.filter(m => m.combination === "Four Of a Kind");
                myCombinations.push(...new_comb);
            };
        };
        if (myRecurringCards.length === 7) {
            if (myRecurringCards[0] === myRecurringCards[3] && myRecurringCards[3] !== myRecurringCards[6]) {
                console.log("Four Of a Kind");
                const new_comb = combinations.filter(m => m.combination === "Four Of a Kind");
                myCombinations.push(...new_comb);
            };
            if (myRecurringCards[3] === myRecurringCards[6] && myRecurringCards[3] !== myRecurringCards[0]) {
                console.log("Four Of a Kind");
                const new_comb = combinations.filter(m => m.combination === "Four Of a Kind");
                myCombinations.push(...new_comb);
            };
        };
        if (myRecurringCards.length === 5) {
            if (myRecurringCards[0] === myRecurringCards[1] && myRecurringCards[2] === myRecurringCards[4]) {
                console.log("Full House");
                const new_comb = combinations.filter(m => m.combination === "Full House");
                myCombinations.push(...new_comb);
            };
            if (myRecurringCards[0] === myRecurringCards[2] && myRecurringCards[3] === myRecurringCards[4]) {
                console.log("Full House");
                const new_comb = combinations.filter(m => m.combination === "Full House");
                myCombinations.push(...new_comb);
            };
        };
        if (myRecurringCards.length === 6) {
            if (myRecurringCards[0] === myRecurringCards[2] && myRecurringCards[3] === myRecurringCards[5]) {
                console.log("Full House");
                const new_comb = combinations.filter(m => m.combination === "Full House");
                myCombinations.push(...new_comb);
            };
        };
        if (myRecurringCards.length === 7) {
            if (myRecurringCards[2] === myRecurringCards[4] && myRecurringCards[2] !== myRecurringCards[5] && myRecurringCards[2] !== myRecurringCards[0]) {
                console.log("Full House");
                const new_comb = combinations.filter(m => m.combination === "Full House");
                myCombinations.push(...new_comb);
            };
            if (myRecurringCards[0] === myRecurringCards[2] && myRecurringCards[0] !== myRecurringCards[3] && myRecurringCards[0] !== myRecurringCards[5]) {
                console.log("Full House");
                const new_comb = combinations.filter(m => m.combination === "Full House");
                myCombinations.push(...new_comb);
            };
            if (myRecurringCards[4] === myRecurringCards[6] && myRecurringCards[4] !== myRecurringCards[0] && myRecurringCards[5] !== myRecurringCards[2]) {
                console.log("Full House");
                const new_comb = combinations.filter(m => m.combination === "Full House");
                myCombinations.push(...new_comb);
            };
        };
    };

    if (hisRecurringCards.length === 2) {
        console.log(hisRecurringCards.sort(), "Dealer have a One Pair");
        const new_comb = combinations.filter(m => m.combination === "One Pair");
        hisCombinations.push(...new_comb);
    };
    if (hisRecurringCards.length === 6 && hisRecurringCards[0] !== hisRecurringCards[2] && hisRecurringCards[0] !== hisRecurringCards[4]) {
        console.log(hisRecurringCards.sort(), "Dealer have a Two Pairs");
        const new_comb = combinations.filter(m => m.combination === "Two Pairs");
        hisCombinations.push(...new_comb);
    };
    if (hisRecurringCards.length === 3) {
        console.log(hisRecurringCards.sort(), "Dealer have a Three Of a Kind");
        const new_comb = combinations.filter(m => m.combination === "Three Of a Kind");
        hisCombinations.push(...new_comb);
    };
    if (hisRecurringCards.length === 4 && hisRecurringCards[0] !== hisRecurringCards[3]) {
        console.log(hisRecurringCards.sort(), "Dealer have a Two Pairs");
        const new_comb = combinations.filter(m => m.combination === "Two Pairs");
        hisCombinations.push(...new_comb);
    };
    if (hisRecurringCards.length >= 4) {
        if (hisRecurringCards.length === 4) {
            if (hisRecurringCards[0] === hisRecurringCards[3]) {
                console.log("4 card");
                const new_comb = combinations.filter(m => m.combination === "Four Of a Kind");
                hisCombinations.push(...new_comb);
            };
        };
        if (hisRecurringCards.length === 6) {
            if (hisRecurringCards[0] === hisRecurringCards[3] && hisRecurringCards[0] !== hisRecurringCards[5]) {
                console.log("4 card");
                const new_comb = combinations.filter(m => m.combination === "Four Of a Kind");
                hisCombinations.push(...new_comb);
            };
            if (hisRecurringCards[2] === hisRecurringCards[5] && hisRecurringCards[0] !== hisRecurringCards[2]) {
                console.log("4 card");
                const new_comb = combinations.filter(m => m.combination === "Four Of a Kind");
                hisCombinations.push(...new_comb);
            };
        };
        if (hisRecurringCards.length === 7) {
            if (hisRecurringCards[0] === hisRecurringCards[3] && hisRecurringCards[3] !== hisRecurringCards[6]) {
                console.log("4 card");
                const new_comb = combinations.filter(m => m.combination === "Four Of a Kind");
                hisCombinations.push(...new_comb);
            };
            if (hisRecurringCards[3] === hisRecurringCards[6] && hisRecurringCards[3] !== hisRecurringCards[0]) {
                console.log("4 card");
                const new_comb = combinations.filter(m => m.combination === "Four Of a Kind");
                hisCombinations.push(...new_comb);
            };
        };
        if (hisRecurringCards.length === 5) {
            if (hisRecurringCards[0] === hisRecurringCards[1] && hisRecurringCards[2] === hisRecurringCards[4]) {
                console.log("Full House");
                const new_comb = combinations.filter(m => m.combination === "Full House");
                hisCombinations.push(...new_comb);
            };
            if (hisRecurringCards[0] === hisRecurringCards[2] && hisRecurringCards[3] === hisRecurringCards[4]) {
                console.log("Full House");
                const new_comb = combinations.filter(m => m.combination === "Full House");
                hisCombinations.push(...new_comb);
            };
        };
        if (hisRecurringCards.length === 6) {
            if (hisRecurringCards[0] === hisRecurringCards[2] && hisRecurringCards[3] === hisRecurringCards[5]) {
                console.log("Full House");
                const new_comb = combinations.filter(m => m.combination === "Full House");
                hisCombinations.push(...new_comb);
            };
        };
        if (hisRecurringCards.length === 7) {
            if (hisRecurringCards[2] === hisRecurringCards[4] && hisRecurringCards[2] !== hisRecurringCards[5] && hisRecurringCards[2] !== hisRecurringCards[0]) {
                console.log("Full House");
                const new_comb = combinations.filter(m => m.combination === "Full House");
                hisCombinations.push(...new_comb);
            }
            if (hisRecurringCards[0] === hisRecurringCards[2] && hisRecurringCards[0] !== hisRecurringCards[3] && hisRecurringCards[0] !== hisRecurringCards[5]) {
                console.log("Full House");
                const new_comb = combinations.filter(m => m.combination === "Full House");
                hisCombinations.push(...new_comb);
            }
            if (hisRecurringCards[4] === hisRecurringCards[6] && hisRecurringCards[4] !== hisRecurringCards[0] && hisRecurringCards[5] !== hisRecurringCards[2]) {
                console.log("Full House");
                const new_comb = combinations.filter(m => m.combination === "Full House");
                hisCombinations.push(...new_comb);
            };
        };
    };

    ////One Pair, Two Pair, Three Of a Kind, Full House, Four Of a Kind --end
    if (myCombinations.length) {
        console.log(myCombinations, "myCombinations");
    }
    if (hisCombinations.length) {
        console.log(hisCombinations, "hisCombinations");
    }

    return (
        <div>
            <ResultComponent myCombinations={myCombinations} />
        </div>
    );
}
export default Combinations;