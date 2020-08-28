////combinations stanalu block
/* eslint-disable array-callback-return */
import React, { useState } from 'react';
import CompareResults from "./CompareResults";

const Combinations = (props) => {
    // console.log(props);
    // const hisCardsbyId = [7, 3, 2, 8, 9, 10, 11].sort((a, b) => a - b);
    // let hisResult = [
    //     { value: "7", suit: "diamonds", id: 7, color: "black", suitLogo: "/static/media/club.da8f6c78.png" },
    //     { value: "3", suit: "diamonds", id: 3, color: "black", suitLogo: "/static/media/club.da8f6c78.png" },
    //     { value: "2", suit: "diamonds", id: 2, color: "black", suitLogo: "/static/media/club.da8f6c78.png" },
    //     { value: "8", suit: "diamonds", id: 8, color: "black", suitLogo: "/static/media/club.da8f6c78.png" },
    //     { value: "9", suit: "diamonds", id: 9, color: "black", suitLogo: "/static/media/club.da8f6c78.png" },
    //     { value: "10", suit: "spades", id: 10, color: "black", suitLogo: "/static/media/club.da8f6c78.png" },
    //     { value: "11", suit: "spades", id: 11, color: "black", suitLogo: "/static/media/club.da8f6c78.png" },
    // ].sort((a, b) => a.id - b.id);
    // // const hisSuits = ["diamonds", "diamonds", "diamonds", "diamonds", "diamonds", "spades", "spades"];
    // const hisSuits = ["sxs", "dfsf", "rtyrt", "rtyrty", "fhfg", "sfdf", "sdfdf"];

    // const hisCards = [{ id: 7 }, { id: 3 }].sort((a, b) => a - b);;

    // const myCardsbyId = [5, 12, 2, 8, 9, 10, 11].sort((a, b) => a - b);
    // let myResult = [
    //     { value: "5", suit: "diamonds", id: 5, color: "black", suitLogo: "/static/media/club.da8f6c78.png" },
    //     { value: "12", suit: "diamonds", id: 12, color: "black", suitLogo: "/static/media/club.da8f6c78.png" },
    //     { value: "2", suit: "diamonds", id: 2, color: "black", suitLogo: "/static/media/club.da8f6c78.png" },
    //     { value: "8", suit: "diamonds", id: 8, color: "black", suitLogo: "/static/media/club.da8f6c78.png" },
    //     { value: "9", suit: "diamonds", id: 9, color: "black", suitLogo: "/static/media/club.da8f6c78.png" },
    //     { value: "10", suit: "spades", id: 10, color: "black", suitLogo: "/static/media/club.da8f6c78.png" },
    //     { value: "J", suit: "spades", id: 11, color: "black", suitLogo: "/static/media/club.da8f6c78.png" },
    // ].sort((a, b) => a.id - b.id);
    // // const mySuits = ["diamonds", "diamonds", "diamonds", "diamonds", "diamonds", "spades", "spades"];
    // const mySuits = ["sxs", "dfsf", "rtyrt", "rtyrty", "fhfg", "sfdf", "sdfdf"];
    // const myCards = [{ id: 5 }, { id: 12 }].sort((a, b) => a - b);;

    // const ourCards = [8, 9, 11, 10, 2].sort((a, b) => a - b);


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
            combination: "Flush",
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
    const [stepThree, setStepThree] = useState(false);

    //// Straight, Straight--Flush, Flush--Royal
    //// ete unenq krknvoc qarter bayc mer combinations karox e linel === Straight, Straight--Flush, Flush--Royal
    let myDynamicArrays = [];
    let myIndex = 0;
    for (let i = 0; i < myCardsbyId.length; i++) {
        if (myCardsbyId[i + 1] - myCardsbyId[i] !== 1) {
            let sliced = myCardsbyId.slice(myIndex, i + 1);
            if (sliced.length > 1) {
                myDynamicArrays.push(sliced);
            };
            myIndex = i + 1;
        };
    };
    if (myDynamicArrays.length === 2) {
        let lastNumMyDynamicArrayOne = myDynamicArrays[0][myDynamicArrays[0].length - 1];
        let lastNumMyDynamicArrayTwo = myDynamicArrays[1][0];
        if (lastNumMyDynamicArrayOne === lastNumMyDynamicArrayTwo) {
            if (myDynamicArrays[0].length && myDynamicArrays[1].length) {
                myDynamicArrays[0].pop();
                myDynamicArrays = [...myDynamicArrays[0].concat(myDynamicArrays[1])];
            };
        };
    };

    if (myDynamicArrays.length === 3) {
        let lastNumMyDynamicArrayOne = myDynamicArrays[0][myDynamicArrays[0].length - 1];
        let firstNumMyDynamicArrayTwo = myDynamicArrays[1][0];
        let lastNumMyDynamicArrayTwo = myDynamicArrays[1][myDynamicArrays[1].length - 1];
        let firstNumMyDynamicArrayThree = myDynamicArrays[2][0];
        if (lastNumMyDynamicArrayOne === firstNumMyDynamicArrayTwo && lastNumMyDynamicArrayTwo === firstNumMyDynamicArrayThree) {
            if (myDynamicArrays[0].length && myDynamicArrays[1].length && myDynamicArrays[2].length) {
                myDynamicArrays[0].pop();
                myDynamicArrays[1].pop();
                myDynamicArrays = [...myDynamicArrays[0].concat(myDynamicArrays[1]).concat(myDynamicArrays[2])];
            };
        };
        if (lastNumMyDynamicArrayOne === firstNumMyDynamicArrayTwo) {
            if (myDynamicArrays[0].length && myDynamicArrays[1].length) {
                myDynamicArrays[0].pop();
                myDynamicArrays = [...myDynamicArrays[0].concat(myDynamicArrays[1])];
            };
        };
        if (lastNumMyDynamicArrayTwo === firstNumMyDynamicArrayThree) {
            if (myDynamicArrays[1].length && myDynamicArrays[2].length) {
                myDynamicArrays[1].pop();
                myDynamicArrays = [...myDynamicArrays[1].concat(myDynamicArrays[2])];
            };
        };
    };
    // let myConcatArrays = [];
    // if (myDynamicArrays.length === 2 || myDynamicArrays.length === 3 || myDynamicArrays.length === 4) {
    //     for (let i = 0; i < myDynamicArrays.length; i++) {
    //         if (myDynamicArrays[i].length > myConcatArrays.length) {
    //             myDynamicArrays = myDynamicArrays[i];
    //         };
    //     };
    // };

    if (myDynamicArrays.length === 2 || myDynamicArrays.length === 3 || myDynamicArrays.length === 4) {
        let lengths = myDynamicArrays.map((a)=>a.length );
        lengths = Math.max.apply(null, lengths);    
        let myDynamicFilter = [];
        myDynamicFilter.push(myDynamicArrays.filter(m=>m.length === lengths));
        myDynamicArrays = myDynamicFilter[0];
    };
    if (myDynamicArrays.length === 1) {
        myDynamicArrays = myDynamicArrays[0];
    };
    if (myDynamicArrays.length >= 5) {
        myDynamicArrays = myDynamicArrays.reverse().splice(0, 5).sort();
    };
    ////ete unenq krknvoc qarter bayc mer combinations === Straight, Straight--Flush, Flush--Royal end
    if (myDynamicArrays.length >= 4) {
        if (myDynamicArrays.length >= 5) {
            myDynamicArrays = myDynamicArrays.reverse().splice(0, 5).sort();
            console.log("I have a Straight");
            const new_comb = combinations.filter(m => m.combination === "Straight");
            myCombinations.push({ myDynamicArrays, id: new_comb[0].id });
        };
        let myArrforSFcards = [];
        myDynamicArrays.forEach(item => {
            myArrforSFcards.push(myResult.filter(data => data.id === item));
        });
        let myCardsForFS = [];
        let mySuitsForSF = [];

        myArrforSFcards.map(m => myCardsForFS.push(...m));  //[[{}],[{}],[{}]...]
        myCardsForFS.map(m => mySuitsForSF.push(m.suit));   //[{},{},{}...]

        let myObjForFlush = {};                       //krknvox suit-neri qanak end
        for (let i = 0; i < mySuitsForSF.length; i++) {
            if (myObjForFlush[mySuitsForSF[i]]) {
                myObjForFlush[mySuitsForSF[i]] += 1;
            } else myObjForFlush[mySuitsForSF[i]] = 1;
        };
        let myArrForFlush = Object.values(myObjForFlush);
        let myMaxForFlush = Math.max(...myArrForFlush); //krknvox suit-neri qanak end
        ////[A,1,2,3,4]Straight, Straight--Flush
        let myHighCard = 0;
        let myHighCardSuit = [];
        let coincidenceSuit = "";
        // eslint-disable-next-line array-callback-return
        myResult.map(m => { if (m.id === 14) { myHighCard = 14 } });
        myResult.map(m => { if (m.id === 14) { myHighCardSuit.push(m.suit) } });
        ////stugum enq mer A.suit hamnknum e mnacac qarteri suitnerin
        myHighCardSuit.some(item => {
            myCardsForFS.find(index => {
                if (item === index.suit) {
                    coincidenceSuit = index.suit
                };
            });
        });
        ////stugum enq mer A.suit hamnknum e mnacac qarteri suitnerin
        if (myDynamicArrays.length === 4) {
            if (myDynamicArrays[0] === 2 && myHighCard === 14) {
                console.log("I have a Straight");
                const new_comb = combinations.filter(m => m.combination === "Straight");
                myCombinations.push({ myDynamicArrays, id: new_comb[0].id });
                if (coincidenceSuit.length) {
                    console.log("I have a Straight Flush");
                    const new_comb = combinations.filter(m => m.combination === "Straight Flush");
                    myCombinations.push({ myDynamicArrays, id: new_comb[0].id });
                }
            };
        };
        ////[A,1,2,3,4]Straight, Straight--Flush end
        ////ete skzbnakan hertakan qarteri hertakanutyun@ >= 5
        let myMaxNumOfmyDynamicArray = Math.max.apply(null, myDynamicArrays);
        if (myMaxForFlush >= 5 && myDynamicArrays.length >= 5) {
            console.log("I have a Straight Flush");
            const new_comb = combinations.filter(m => m.combination === "Straight Flush");
            myCombinations.push({ myDynamicArrays, id: new_comb[0].id });
            if (myMaxNumOfmyDynamicArray === 14 && myDynamicArrays.length >= 5) {
                console.log("I have a Royal Flush");
                const new_comb = combinations.filter(m => m.combination === "Royal Flush");
                myCombinations.push({ myDynamicArrays, id: new_comb[0].id });
            };
        };
    };

    ////

    /// ete unenq krknvoc qarter bayc mer combinations karox e linel === Straight, Straight--Flush, Flush--Royal
    let hisDynamicArrays = [];
    let hisIndex = 0;
    for (let i = 0; i < hisCardsbyId.length; i++) {
        if (hisCardsbyId[i + 1] - hisCardsbyId[i] !== 1) {
            let sliced = hisCardsbyId.slice(hisIndex, i + 1);
            if (sliced.length > 1) {
                hisDynamicArrays.push(sliced);
            };
            hisIndex = i + 1;
        };
    };
    if (hisDynamicArrays.length === 2) {
        let lastNumMyDynamicArrayOne = hisDynamicArrays[0][hisDynamicArrays[0].length - 1];
        let lastNumMyDynamicArrayTwo = hisDynamicArrays[1][0];
        if (lastNumMyDynamicArrayOne === lastNumMyDynamicArrayTwo) {
            if (hisDynamicArrays[0].length && hisDynamicArrays[1].length) {
                hisDynamicArrays[0].pop();
                hisDynamicArrays = [...hisDynamicArrays[0].concat(hisDynamicArrays[1])];
            };
        };
    };
    if (hisDynamicArrays.length === 3) {
        let lastNumMyDynamicArrayOne = hisDynamicArrays[0][hisDynamicArrays[0].length - 1];
        let firstNumMyDynamicArrayTwo = hisDynamicArrays[1][0];
        let lastNumMyDynamicArrayTwo = hisDynamicArrays[1][hisDynamicArrays[1].length - 1];
        let firstNumMyDynamicArrayThree = hisDynamicArrays[2][0];
        if (lastNumMyDynamicArrayOne === firstNumMyDynamicArrayTwo && lastNumMyDynamicArrayTwo === firstNumMyDynamicArrayThree) {
            if (hisDynamicArrays[0].length && hisDynamicArrays[1].length && hisDynamicArrays[2].length) {
                hisDynamicArrays[0].pop();
                hisDynamicArrays[1].pop();
                hisDynamicArrays = [...hisDynamicArrays[0].concat(hisDynamicArrays[1]).concat(hisDynamicArrays[2])];
            };
        };
        if (lastNumMyDynamicArrayOne === firstNumMyDynamicArrayTwo) {
            if (hisDynamicArrays[0].length && hisDynamicArrays[1].length) {
                hisDynamicArrays[0].pop();
                hisDynamicArrays = [...hisDynamicArrays[0].concat(hisDynamicArrays[1])];
            };
        };
        if (lastNumMyDynamicArrayTwo === firstNumMyDynamicArrayThree) {
            if (hisDynamicArrays[1].length && hisDynamicArrays[2].length) {
                hisDynamicArrays[1].pop();
                hisDynamicArrays = [...hisDynamicArrays[1].concat(hisDynamicArrays[2])];
            };
        };
    };
    // if (hisDynamicArrays.length === 2 || hisDynamicArrays.length === 3 || hisDynamicArrays.length === 4) {
    //     for (let i = 0; i < hisDynamicArrays.length; i++) {
    //         if (hisDynamicArrays[i].length > hisConcatArrays.length) {
    //             hisDynamicArrays = hisDynamicArrays[i]
    //         };
    //     };
    // };

    if (hisDynamicArrays.length === 2 || hisDynamicArrays.length === 3 || hisDynamicArrays.length === 4) {
        let lengths = hisDynamicArrays.map((a)=>a.length );
        lengths = Math.max.apply(null, lengths);    
        let myDynamicFilter = [];
        myDynamicFilter.push(hisDynamicArrays.filter(m=>m.length === lengths));
        hisDynamicArrays = myDynamicFilter[0];
    };

    if (hisDynamicArrays.length === 1) {
        hisDynamicArrays = hisDynamicArrays[0];
    };
    if (hisDynamicArrays.length >= 5) {
        hisDynamicArrays = hisDynamicArrays.reverse().splice(0, 5).sort();
    };
    ////ete unenq krknvoc qarter bayc mer combinations === Straight, Straight--Flush, Flush--Royal end
    if (hisDynamicArrays.length >= 4) {
        if (hisDynamicArrays.length >= 5) {
            hisDynamicArrays = hisDynamicArrays.reverse().splice(0, 5).sort();
            console.log("Dealer have a Straight");
            const new_comb = combinations.filter(m => m.combination === "Straight");
            hisCombinations.push({ hisDynamicArrays, id: new_comb[0].id });
        };
        let hisArrforSFcards = [];
        hisDynamicArrays.forEach(item => {
            hisArrforSFcards.push(hisResult.filter(data => data.id === item));
        });

        let hisCardsForFS = [];
        let hisSuitsForSF = [];
        hisArrforSFcards.map(m => hisCardsForFS.push(...m));  //[[{}],[{}],[{}]...]
        hisCardsForFS.map(m => hisSuitsForSF.push(m.suit));   //[{},{},{}...]
        let hisObjForFlush = {};                       //krknvox suit-neri qanak end
        for (let i = 0; i < hisSuitsForSF.length; i++) {
            if (hisObjForFlush[hisSuitsForSF[i]]) {
                hisObjForFlush[hisSuitsForSF[i]] += 1;
            } else hisObjForFlush[hisSuitsForSF[i]] = 1;
        };
        let hisArrForFlush = Object.values(hisObjForFlush);
        let hisMaxForFlush = Math.max(...hisArrForFlush); //krknvox suit-neri qanak end
        ////[A,1,2,3,4]Straight, Straight--Flush
        let hisHighCard = 0;
        let hisHighCardSuit = [];
        let coincidenceSuit = "";
        hisResult.map(m => { if (m.id === 14) { hisHighCard = 14 } });
        hisResult.map(m => { if (m.id === 14) { hisHighCardSuit.push(m.suit) } })
        ////stugum enq mer A.suit hamnknum e mnacac qarteri suitnerin
        hisHighCardSuit.some(item => {
            hisCardsForFS.find(index => {
                if (item === index.suit) {
                    coincidenceSuit = index.suit
                };
            });
        });
        ////stugum enq mer A.suit hamnknum e mnacac qarteri suitnerin
        if (hisDynamicArrays.length === 4) {
            if (hisDynamicArrays[0] === 2 && hisHighCard === 14) {
                console.log("Dealer have a Straight");
                const new_comb = combinations.filter(m => m.combination === "Straight");
                hisCombinations.push({ hisDynamicArrays, id: new_comb[0].id });
                if (coincidenceSuit.length) {
                    console.log("Dealer have a Straight Flush");
                    const new_comb = combinations.filter(m => m.combination === "Straight Flush");
                    hisCombinations.push({ hisDynamicArrays, id: new_comb[0].id });
                };
            };
        };
        ////[A,1,2,3,4]Straight, Straight--Flush end
        ////ete skzbnakan hertakan qarteri hertakanutyan qanak@ >= 5
        let maxNumOfHisDynamicArray = Math.max.apply(null, hisDynamicArrays);
        if (hisMaxForFlush >= 5 && hisDynamicArrays.length >= 5) {
            console.log("Dealer have a Straight Flush");
            const new_comb = combinations.filter(m => m.combination === "Straight Flush");
            hisCombinations.push({ hisDynamicArrays, id: new_comb[0].id });
            if (maxNumOfHisDynamicArray === 14 && hisDynamicArrays.length >= 5) {
                console.log("Dealer have a Royal Flush");
                const new_comb = combinations.filter(m => m.combination === "Royal Flush");
                hisCombinations.push({ hisDynamicArrays, id: new_comb[0].id });
            };
        };
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
    let myFlushElements = [];
    myResult.forEach((item) => myFlushElements.push({ id: item.id, suit: item.suit }));
    if (myMaxForFlush >= 5) {
        console.log("I have a Flush");
        const new_comb = combinations.filter(m => m.combination === "Flush");
        myCombinations.push({ myFlushElements, id: new_comb[0].id });
    };
    //
    let hisObjForFlush = {};
    for (let i = 0; i < hisSuits.length; i++) {
        if (hisObjForFlush[hisSuits[i]]) {
            hisObjForFlush[hisSuits[i]] += 1;
        } else hisObjForFlush[hisSuits[i]] = 1;
    };
    let hisArrForFlush = Object.values(hisObjForFlush);
    let hisMaxForFlush = Math.max(...hisArrForFlush);
    let hisFlushElements = [];
    hisResult.forEach((item) => hisFlushElements.push({ id: item.id, suit: item.suit }));
    if (hisMaxForFlush >= 5) {
        console.log("Dealer have a Flush");
        const new_comb = combinations.filter(m => m.combination === "Flush");
        hisCombinations.push({ hisFlushElements, id: new_comb[0].id });
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
        myCombinations.push({ myRecurringCards, id: new_comb[0].id });
    };
    if (myRecurringCards.length === 6 && myRecurringCards[0] !== myRecurringCards[2] && myRecurringCards[0] !== myRecurringCards[4]) {
        console.log(myRecurringCards.sort(), "I have a Two Pairs");
        myRecurringCards = myRecurringCards.splice(2, 5);
        const new_comb = combinations.filter(m => m.combination === "Two Pairs");
        myCombinations.push({ myRecurringCards, id: new_comb[0].id });
    };
    if (myRecurringCards.length === 3) {
        console.log(myRecurringCards.sort(), "I have a Three Of a Kind");
        const new_comb = combinations.filter(m => m.combination === "Three Of a Kind");
        myCombinations.push({ myRecurringCards, id: new_comb[0].id });
    };
    if (myRecurringCards.length === 4 && myRecurringCards[0] !== myRecurringCards[3]) {
        console.log(myRecurringCards.sort(), "I have a Two Pairs");
        const new_comb = combinations.filter(m => m.combination === "Two Pairs");
        myCombinations.push({ myRecurringCards, id: new_comb[0].id });
    };
    if (myRecurringCards.length >= 4) {
        if (myRecurringCards.length === 4) {
            if (myRecurringCards[0] === myRecurringCards[3]) {
                console.log("I have Four Of a Kind");
                const new_comb = combinations.filter(m => m.combination === "Four Of a Kind");
                myCombinations.push({ myRecurringCards, id: new_comb[0].id });
            };
        };
        if (myRecurringCards.length === 6) {
            if (myRecurringCards[0] === myRecurringCards[3] && myRecurringCards[0] !== myRecurringCards[5]) {
                console.log("I have Four Of a Kind");
                const new_comb = combinations.filter(m => m.combination === "Four Of a Kind");
                myCombinations.push({ myRecurringCards, id: new_comb[0].id });
            };
            if (myRecurringCards[2] === myRecurringCards[5] && myRecurringCards[0] !== myRecurringCards[2]) {
                console.log("I have Four Of a Kind");
                const new_comb = combinations.filter(m => m.combination === "Four Of a Kind");
                myCombinations.push({ myRecurringCards, id: new_comb[0].id });
            };
        };
        if (myRecurringCards.length === 7) {
            if (myRecurringCards[0] === myRecurringCards[3] && myRecurringCards[3] !== myRecurringCards[6]) {
                console.log("I have Four Of a Kind");
                const new_comb = combinations.filter(m => m.combination === "Four Of a Kind");
                myCombinations.push({ myRecurringCards, id: new_comb[0].id });
            };
            if (myRecurringCards[3] === myRecurringCards[6] && myRecurringCards[3] !== myRecurringCards[0]) {
                console.log("I have Four Of a Kind");
                const new_comb = combinations.filter(m => m.combination === "Four Of a Kind");
                myCombinations.push({ myRecurringCards, id: new_comb[0].id });
            };
        };
        if (myRecurringCards.length === 5) {
            if (myRecurringCards[0] === myRecurringCards[1] && myRecurringCards[2] === myRecurringCards[4]) {
                console.log("I have a Full House");
                const new_comb = combinations.filter(m => m.combination === "Full House");
                myCombinations.push({ myRecurringCards, id: new_comb[0].id });
            };
            if (myRecurringCards[0] === myRecurringCards[2] && myRecurringCards[3] === myRecurringCards[4]) {
                console.log("I have a Full House");
                const new_comb = combinations.filter(m => m.combination === "Full House");
                myCombinations.push({ myRecurringCards, id: new_comb[0].id });
            };
        };
        if (myRecurringCards.length === 6) {
            if (myRecurringCards[0] === myRecurringCards[2] && myRecurringCards[3] === myRecurringCards[5]) {
                console.log("I have a Full House");
                const new_comb = combinations.filter(m => m.combination === "Full House");
                myCombinations.push({ myRecurringCards, id: new_comb[0].id });
            };
        };
        if (myRecurringCards.length === 7) {
            if (myRecurringCards[2] === myRecurringCards[4] && myRecurringCards[2] !== myRecurringCards[5] && myRecurringCards[2] !== myRecurringCards[0]) {
                console.log("I have a Full House");
                const new_comb = combinations.filter(m => m.combination === "Full House");
                myCombinations.push({ myRecurringCards, id: new_comb[0].id });
            };
            if (myRecurringCards[0] === myRecurringCards[2] && myRecurringCards[0] !== myRecurringCards[3] && myRecurringCards[0] !== myRecurringCards[5]) {
                console.log("I have a Full House");
                const new_comb = combinations.filter(m => m.combination === "Full House");
                myCombinations.push({ myRecurringCards, id: new_comb[0].id });
            };
            if (myRecurringCards[4] === myRecurringCards[6] && myRecurringCards[4] !== myRecurringCards[0] && myRecurringCards[5] !== myRecurringCards[2]) {
                console.log("I have a Full House");
                const new_comb = combinations.filter(m => m.combination === "Full House");
                myCombinations.push({ myRecurringCards, id: new_comb[0].id });
            };
        };
    };

    if (hisRecurringCards.length === 2) {
        console.log(hisRecurringCards.sort(), "Dealer have a One Pair");
        const new_comb = combinations.filter(m => m.combination === "One Pair");
        hisCombinations.push({ hisRecurringCards, id: new_comb[0].id });
    };
    if (hisRecurringCards.length === 6 && hisRecurringCards[0] !== hisRecurringCards[2] && hisRecurringCards[0] !== hisRecurringCards[4]) {
        console.log(hisRecurringCards.sort(), "Dealer have a Two Pairs");
        hisRecurringCards = hisRecurringCards.splice(2, 5);
        const new_comb = combinations.filter(m => m.combination === "Two Pairs");
        hisCombinations.push({ hisRecurringCards, id: new_comb[0].id });
    };
    if (hisRecurringCards.length === 3) {
        console.log(hisRecurringCards.sort(), "Dealer have a Three Of a Kind");
        const new_comb = combinations.filter(m => m.combination === "Three Of a Kind");
        hisCombinations.push({ hisRecurringCards, id: new_comb[0].id });
    };
    if (hisRecurringCards.length === 4 && hisRecurringCards[0] !== hisRecurringCards[3]) {
        console.log(hisRecurringCards.sort(), "Dealer have a Two Pairs");
        const new_comb = combinations.filter(m => m.combination === "Two Pairs");
        hisCombinations.push({ hisRecurringCards, id: new_comb[0].id });
    };
    if (hisRecurringCards.length >= 4) {
        if (hisRecurringCards.length === 4) {
            if (hisRecurringCards[0] === hisRecurringCards[3]) {
                console.log("Dealer have Four Of a Kind");
                const new_comb = combinations.filter(m => m.combination === "Four Of a Kind");
                hisCombinations.push({ hisRecurringCards, id: new_comb[0].id });
            };
        };
        if (hisRecurringCards.length === 6) {
            if (hisRecurringCards[0] === hisRecurringCards[3] && hisRecurringCards[0] !== hisRecurringCards[5]) {
                console.log("Dealer have Four Of a Kind");
                const new_comb = combinations.filter(m => m.combination === "Four Of a Kind");
                hisCombinations.push({ hisRecurringCards, id: new_comb[0].id });
            };
            if (hisRecurringCards[2] === hisRecurringCards[5] && hisRecurringCards[0] !== hisRecurringCards[2]) {
                console.log("Dealer have Four Of a Kind");
                const new_comb = combinations.filter(m => m.combination === "Four Of a Kind");
                hisCombinations.push({ hisRecurringCards, id: new_comb[0].id });
            };
        };
        if (hisRecurringCards.length === 7) {
            if (hisRecurringCards[0] === hisRecurringCards[3] && hisRecurringCards[3] !== hisRecurringCards[6]) {
                console.log("Dealer have Four Of a Kind");
                const new_comb = combinations.filter(m => m.combination === "Four Of a Kind");
                hisCombinations.push({ hisRecurringCards, id: new_comb[0].id });
            };
            if (hisRecurringCards[3] === hisRecurringCards[6] && hisRecurringCards[3] !== hisRecurringCards[0]) {
                console.log("Dealer have Four Of a Kind");
                const new_comb = combinations.filter(m => m.combination === "Four Of a Kind");
                hisCombinations.push({ hisRecurringCards, id: new_comb[0].id });
            };
        };
        if (hisRecurringCards.length === 5) {
            if (hisRecurringCards[0] === hisRecurringCards[1] && hisRecurringCards[2] === hisRecurringCards[4]) {
                console.log("Dealer have a Full House");
                const new_comb = combinations.filter(m => m.combination === "Full House");
                hisCombinations.push({ hisRecurringCards, id: new_comb[0].id });
            };
            if (hisRecurringCards[0] === hisRecurringCards[2] && hisRecurringCards[3] === hisRecurringCards[4]) {
                console.log("Dealer have a Full House");
                const new_comb = combinations.filter(m => m.combination === "Full House");
                hisCombinations.push({ hisRecurringCards, id: new_comb[0].id });
            };
        };
        if (hisRecurringCards.length === 6) {
            if (hisRecurringCards[0] === hisRecurringCards[2] && hisRecurringCards[3] === hisRecurringCards[5]) {
                console.log("Dealer have a Full House");
                const new_comb = combinations.filter(m => m.combination === "Full House");
                hisCombinations.push({ hisRecurringCards, id: new_comb[0].id });
            };
        };
        if (hisRecurringCards.length === 7) {
            if (hisRecurringCards[2] === hisRecurringCards[4] && hisRecurringCards[2] !== hisRecurringCards[5] && hisRecurringCards[2] !== hisRecurringCards[0]) {
                console.log("Dealer have a Full House");
                const new_comb = combinations.filter(m => m.combination === "Full House");
                hisCombinations.push({ hisRecurringCards, id: new_comb[0].id });
            };
            if (hisRecurringCards[0] === hisRecurringCards[2] && hisRecurringCards[0] !== hisRecurringCards[3] && hisRecurringCards[0] !== hisRecurringCards[5]) {
                console.log("Dealer have a Full House");
                const new_comb = combinations.filter(m => m.combination === "Full House");
                hisCombinations.push({ hisRecurringCards, id: new_comb[0].id });
            };
            if (hisRecurringCards[4] === hisRecurringCards[6] && hisRecurringCards[4] !== hisRecurringCards[0] && hisRecurringCards[5] !== hisRecurringCards[2]) {
                console.log("Dealer have a Full House");
                const new_comb = combinations.filter(m => m.combination === "Full House");
                hisCombinations.push({ hisRecurringCards, id: new_comb[0].id });
            };
        };
    };
    //One Pair, Two Pairs, Three Of a Kind, Full House, Four Of a Kind   --end

    ////poxancum enq haxtox combinationsi anun@
    let myCombMaxNum = 0;
    let myCombName = "";
    if (myCombinations.length) {
        myCombMaxNum = Math.max.apply(Math, myCombinations.map((m)=> m.id));
        combinations.filter(m=>{if(myCombMaxNum === m.id){myCombName = m.combination}});
    };
    let hisCombMaxNum = 0;
    let hisCombName = "";
    if (hisCombinations.length) {
        hisCombMaxNum = Math.max.apply(Math, hisCombinations.map((m)=> m.id));
        combinations.filter(m=>{if(hisCombMaxNum === m.id){hisCombName = m.combination}})
    };

    if (props.data.stepThree) {
        setTimeout(() => {
            setStepThree(true)
        }, 500)
    };

    return (
        <div>
            <CompareResults
                myCombinations={myCombinations}
                hisCombinations={hisCombinations}
                myResult={myResult} hisResult={hisResult}
                values={props.data.values}
                myCards={props.data.myCards}
                hisCards={props.data.hisCards}
                ourCards={props.data.ourCards}
                // myCards={myCards}
                // hisCards={hisCards}
                // ourCards={ourCards}
                stepThree={stepThree}
                myCombName={myCombName}
                hisCombName={hisCombName}
            />
        </div>
    );
};
export default Combinations;