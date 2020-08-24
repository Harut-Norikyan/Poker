import React from 'react';
import ResultComponent from "./ResultComponent"

const Combinations = (props) => {

    // let hisCardsbyId = [2, 3, 4, 5, 6, 13, 13].sort();
    // let hisResult = [
    //     { value: "2", suit: "clubs", id: 2, color: "black", suitLogo: "/static/media/club.da8f6c78.png" },
    //     { value: "3", suit: "clubs", id: 3, color: "black", suitLogo: "/static/media/club.da8f6c78.png" },
    //     { value: "4", suit: "clubs", id: 4, color: "black", suitLogo: "/static/media/club.da8f6c78.png" },
    //     { value: "6", suit: "clubs", id: 6, color: "black", suitLogo: "/static/media/club.da8f6c78.png" },
    //     { value: "5", suit: "clubs", id: 5, color: "black", suitLogo: "/static/media/club.da8f6c78.png" },
    //     { value: "13", suit: "clubs", id: 13, color: "black", suitLogo: "/static/media/club.da8f6c78.png" },
    //     { value: "13", suit: "clubs", id: 13, color: "black", suitLogo: "/static/media/club.da8f6c78.png" },
    // ].sort((a, b) => a.id - b.id)



    const myResult = props.data.myCardsResult.sort((a, b) => a.id - b.id);
    const hisResult = props.data.hisCardsResult.sort((a, b) => a.id - b.id);

    const myValues = myResult.map(m => m.value);
    const hisValues = hisResult.map(m => m.value);
    const mySuits = myResult.map(m => m.suit);
    const hisSuits = hisResult.map(m => m.suit);
    const myCardsbyId = myResult.map(m => m.id);
    const hisCardsbyId = hisResult.map(m => m.id);

    const combinations = [
        {
            combination: "Royal Flush",
            id: 10,
        },
        {
            combination: "Straight Flush",
            id: 9,
        },
        {
            combination: "Four Of a Kind",
            id: 8,
        },
        {
            combination: "Full House",
            id: 7,
        },
        {
            combination: "Straight",
            id: 6,
        },
        {
            combination: "Flush",
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
    let myMaxNumOfStraight = Math.max.apply(null, maxOfMyDynamicArrays);
    if (maxOfMyDynamicArrays.length >= 5) {
        console.log("I have a Straight");
        const new_comb = combinations.filter(m => m.combination === "Straight");
        myCombinations.push(...new_comb);

        let myArrforSFcards = [];
        maxOfMyDynamicArrays.forEach(item => {
            myArrforSFcards.push(hisResult.find(data => data.id === item));
        });
        let mySuitArr = [];
        if (myArrforSFcards.length) {
            let suit = myArrforSFcards[0].suit;
            mySuitArr.push(myArrforSFcards.filter(item => item.suit === suit))
        }
        if (mySuitArr[0].length < 5) {
            console.log("I have a Straight Flush");
            const new_comb = combinations.filter(m => m.combination === "Straight Flush");
            myCombinations.push(...new_comb);
        }
        console.log(mySuitArr, "mySuitArr");
        if (mySuitArr[0].length >= 5) {
            console.log("I have a Royal Flush");
            const new_comb = combinations.filter(m => m.combination === "Royal Flush");
            myCombinations.push(...new_comb);
        }
    };



    let hisDynamicArrays = [];
    let hisIndex = 0;
    for (let i = 0; i < hisCardsbyId.length; i++) {
        if (hisCardsbyId[i + 1] - hisCardsbyId[i] !== 1) {
            let sliced = hisCardsbyId.slice(hisIndex, i + 1)
            if (sliced.length > 1) {
                hisDynamicArrays.push(sliced)
            };
            hisIndex = i + 1;
        };
    };
    let maxOfHisDynamicArrays = [];
    for (let i = 0; i < hisDynamicArrays.length; i++) {
        if (hisDynamicArrays[i].length > maxOfHisDynamicArrays.length) {
            maxOfHisDynamicArrays = hisDynamicArrays[i];
        };
    };
    if (maxOfHisDynamicArrays.length >= 5) {
        maxOfHisDynamicArrays = maxOfHisDynamicArrays.reverse().splice(0, 5).sort();
    };
    let hisMaxNumOfStraight = Math.max.apply(null, maxOfHisDynamicArrays);
    if (maxOfHisDynamicArrays.length >= 5) {
        console.log("Dealer have a Straight");
        const new_comb = combinations.filter(m => m.combination === "Straight");
        hisCombinations.push(...new_comb);

        let hisArrforSFcards = [];
        maxOfHisDynamicArrays.forEach(item => {
            hisArrforSFcards.push(hisResult.find(data => data.id === item));
        });
        let hisSuitArr = [];
        if (hisArrforSFcards.length) {
            let suit = hisArrforSFcards[0].suit;
            hisSuitArr.push(hisArrforSFcards.filter(item => item.suit === suit))
        }
        if (hisSuitArr[0].length < 5) {
            console.log("Dealer have a Straight Flush");
            const new_comb = combinations.filter(m => m.combination === "Straight Flush");
            hisCombinations.push(...new_comb);
        }
        if (hisSuitArr[0].length >= 5) {
            console.log("Dealer have a Royal Flush");
            const new_comb = combinations.filter(m => m.combination === "Royal Flush");
            hisCombinations.push(...new_comb);
        }
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
                console.log("I have Four Of a Kind");
                const new_comb = combinations.filter(m => m.combination === "Four Of a Kind");
                myCombinations.push(...new_comb);
            };
        };
        if (myRecurringCards.length === 6) {
            if (myRecurringCards[0] === myRecurringCards[3] && myRecurringCards[0] !== myRecurringCards[5]) {
                console.log("I have Four Of a Kind");
                const new_comb = combinations.filter(m => m.combination === "Four Of a Kind");
                myCombinations.push(...new_comb);
            };
            if (myRecurringCards[2] === myRecurringCards[5] && myRecurringCards[0] !== myRecurringCards[2]) {
                console.log("I have Four Of a Kind");
                const new_comb = combinations.filter(m => m.combination === "Four Of a Kind");
                myCombinations.push(...new_comb);
            };
        };
        if (myRecurringCards.length === 7) {
            if (myRecurringCards[0] === myRecurringCards[3] && myRecurringCards[3] !== myRecurringCards[6]) {
                console.log("I have Four Of a Kind");
                const new_comb = combinations.filter(m => m.combination === "Four Of a Kind");
                myCombinations.push(...new_comb);
            };
            if (myRecurringCards[3] === myRecurringCards[6] && myRecurringCards[3] !== myRecurringCards[0]) {
                console.log("I have Four Of a Kind");
                const new_comb = combinations.filter(m => m.combination === "Four Of a Kind");
                myCombinations.push(...new_comb);
            };
        };
        if (myRecurringCards.length === 5) {
            if (myRecurringCards[0] === myRecurringCards[1] && myRecurringCards[2] === myRecurringCards[4]) {
                console.log("I have a Full House");
                const new_comb = combinations.filter(m => m.combination === "Full House");
                myCombinations.push(...new_comb);
            };
            if (myRecurringCards[0] === myRecurringCards[2] && myRecurringCards[3] === myRecurringCards[4]) {
                console.log("I have a Full House");
                const new_comb = combinations.filter(m => m.combination === "Full House");
                myCombinations.push(...new_comb);
            };
        };
        if (myRecurringCards.length === 6) {
            if (myRecurringCards[0] === myRecurringCards[2] && myRecurringCards[3] === myRecurringCards[5]) {
                console.log("I have a Full House");
                const new_comb = combinations.filter(m => m.combination === "Full House");
                myCombinations.push(...new_comb);
            };
        };
        if (myRecurringCards.length === 7) {
            if (myRecurringCards[2] === myRecurringCards[4] && myRecurringCards[2] !== myRecurringCards[5] && myRecurringCards[2] !== myRecurringCards[0]) {
                console.log("I have a Full House");
                const new_comb = combinations.filter(m => m.combination === "Full House");
                myCombinations.push(...new_comb);
            };
            if (myRecurringCards[0] === myRecurringCards[2] && myRecurringCards[0] !== myRecurringCards[3] && myRecurringCards[0] !== myRecurringCards[5]) {
                console.log("I have a Full House");
                const new_comb = combinations.filter(m => m.combination === "Full House");
                myCombinations.push(...new_comb);
            };
            if (myRecurringCards[4] === myRecurringCards[6] && myRecurringCards[4] !== myRecurringCards[0] && myRecurringCards[5] !== myRecurringCards[2]) {
                console.log("I have a Full House");
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
                console.log("Dealer have Four Of a Kind");
                const new_comb = combinations.filter(m => m.combination === "Four Of a Kind");
                hisCombinations.push(...new_comb);
            };
        };
        if (hisRecurringCards.length === 6) {
            if (hisRecurringCards[0] === hisRecurringCards[3] && hisRecurringCards[0] !== hisRecurringCards[5]) {
                console.log("Dealer have Four Of a Kind");
                const new_comb = combinations.filter(m => m.combination === "Four Of a Kind");
                hisCombinations.push(...new_comb);
            };
            if (hisRecurringCards[2] === hisRecurringCards[5] && hisRecurringCards[0] !== hisRecurringCards[2]) {
                console.log("Dealer have Four Of a Kind");
                const new_comb = combinations.filter(m => m.combination === "Four Of a Kind");
                hisCombinations.push(...new_comb);
            };
        };
        if (hisRecurringCards.length === 7) {
            if (hisRecurringCards[0] === hisRecurringCards[3] && hisRecurringCards[3] !== hisRecurringCards[6]) {
                console.log("Dealer have Four Of a Kind");
                const new_comb = combinations.filter(m => m.combination === "Four Of a Kind");
                hisCombinations.push(...new_comb);
            };
            if (hisRecurringCards[3] === hisRecurringCards[6] && hisRecurringCards[3] !== hisRecurringCards[0]) {
                console.log("Dealer have Four Of a Kind");
                const new_comb = combinations.filter(m => m.combination === "Four Of a Kind");
                hisCombinations.push(...new_comb);
            };
        };
        if (hisRecurringCards.length === 5) {
            if (hisRecurringCards[0] === hisRecurringCards[1] && hisRecurringCards[2] === hisRecurringCards[4]) {
                console.log("Dealer have a Full House");
                const new_comb = combinations.filter(m => m.combination === "Full House");
                hisCombinations.push(...new_comb);
            };
            if (hisRecurringCards[0] === hisRecurringCards[2] && hisRecurringCards[3] === hisRecurringCards[4]) {
                console.log("Dealer have a Full House");
                const new_comb = combinations.filter(m => m.combination === "Full House");
                hisCombinations.push(...new_comb);
            };
        };
        if (hisRecurringCards.length === 6) {
            if (hisRecurringCards[0] === hisRecurringCards[2] && hisRecurringCards[3] === hisRecurringCards[5]) {
                console.log("Dealer have a Full House");
                const new_comb = combinations.filter(m => m.combination === "Full House");
                hisCombinations.push(...new_comb);
            };
        };
        if (hisRecurringCards.length === 7) {
            if (hisRecurringCards[2] === hisRecurringCards[4] && hisRecurringCards[2] !== hisRecurringCards[5] && hisRecurringCards[2] !== hisRecurringCards[0]) {
                console.log("Dealer have a Full House");
                const new_comb = combinations.filter(m => m.combination === "Full House");
                hisCombinations.push(...new_comb);
            }
            if (hisRecurringCards[0] === hisRecurringCards[2] && hisRecurringCards[0] !== hisRecurringCards[3] && hisRecurringCards[0] !== hisRecurringCards[5]) {
                console.log("Dealer have a Full House");
                const new_comb = combinations.filter(m => m.combination === "Full House");
                hisCombinations.push(...new_comb);
            }
            if (hisRecurringCards[4] === hisRecurringCards[6] && hisRecurringCards[4] !== hisRecurringCards[0] && hisRecurringCards[5] !== hisRecurringCards[2]) {
                console.log("Dealer have a Full House");
                const new_comb = combinations.filter(m => m.combination === "Full House");
                hisCombinations.push(...new_comb);
            };
        };
    };

    ////One Pair, Two Pair, Three Of a Kind, Full House, Four Of a Kind --end


    // if (myCombinations.length && !hisCombinations.length) {
    //     console.log("I won");
    // };
    // if (hisCombinations.length && !myCombinations.length) {
    //     console.log("Dealer won");
    // };
    // if (myCombinations.length && hisCombinations.length) {
    //     let myCombIdArr = [];
    //     myCombinations.map(m => myCombIdArr.push(m.id));
    //     let myMaxNumOfCombIdArr = Math.max.apply(null, myCombIdArr);
    //     let hisCombIdArr = [];
    //     hisCombinations.map(m => hisCombIdArr.push(m.id));
    //     let hisMaxNumOfCombIdArr = Math.max.apply(null, hisCombIdArr);

    //     if (myMaxNumOfCombIdArr > hisMaxNumOfCombIdArr) {
    //         console.log("I won");
            
    //     };
    //     if (myMaxNumOfCombIdArr < hisMaxNumOfCombIdArr) {
    //         console.log("Dealer won");
    //         console.log(hisMaxNumOfCombIdArr);
    //     };
    //     if (myMaxNumOfCombIdArr === hisMaxNumOfCombIdArr) {
    //         console.log(myValues);
    //         console.log(hisValues);
    //     };
    // };


    return (
        <div>
            <ResultComponent myCombinations={myCombinations} hisCombinations={hisCombinations} />
        </div>
    );
}
export default Combinations;