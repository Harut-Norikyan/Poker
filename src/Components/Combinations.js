import React from 'react';
import CompareResults from "./CompareResults"

const Combinations = (props) => {
    // console.log(props);
    // let hisCardsbyId = [2, 3, 4, 5, 6, 13, 13].sort();
    const myCardsbyId = [1, 2, 6, 7, 8, 9, 8].sort((a, b) => a - b);
    let myResult = [
        { value: "A", suit: "clubs", id: 14, color: "black", suitLogo: "/static/media/club.da8f6c78.png" },
        { value: "2", suit: "kjjk", id: 2, color: "black", suitLogo: "/static/media/club.da8f6c78.png" },
        { value: "3", suit: "sss", id: 3, color: "black", suitLogo: "/static/media/club.da8f6c78.png" },
        { value: "4", suit: "clubs", id: 4, color: "black", suitLogo: "/static/media/club.da8f6c78.png" },
        { value: "5", suit: "sdsd", id: 5, color: "black", suitLogo: "/static/media/club.da8f6c78.png" },
        { value: "K", suit: "jkjk", id: 13, color: "black", suitLogo: "/static/media/club.da8f6c78.png" },
        { value: "4", suit: "clubs", id: 4, color: "black", suitLogo: "/static/media/club.da8f6c78.png" },
    ].sort((a, b) => a.id - b.id)
    const mySuits = ["clubs", "xcx", "sss", "cxcx", "clubs", "xcx", "clubs"];

    const hisCardsbyId = [14, 2, 3, 4, 5, 13, 4].sort((a, b) => a - b);
    let hisResult = [
        { value: "A", suit: "bn", id: 14, color: "black", suitLogo: "/static/media/club.da8f6c78.png" },
        { value: "2", suit: "clubs", id: 2, color: "black", suitLogo: "/static/media/club.da8f6c78.png" },
        { value: "3", suit: "sss", id: 3, color: "black", suitLogo: "/static/media/club.da8f6c78.png" },
        { value: "4", suit: "clubs", id: 4, color: "black", suitLogo: "/static/media/club.da8f6c78.png" },
        { value: "5", suit: "sds", id: 5, color: "black", suitLogo: "/static/media/club.da8f6c78.png" },
        { value: "K", suit: "bnb", id: 13, color: "black", suitLogo: "/static/media/club.da8f6c78.png" },
        { value: "4", suit: "clubs", id: 4, color: "black", suitLogo: "/static/media/club.da8f6c78.png" },
    ].sort((a, b) => a.id - b.id)
    const hisSuits = ["clubs", "asas", "sss", "clubs", "clusabs", "clubs", "clubs"];


    // const myResult = props.data.myCardsResult.sort((a, b) => a.id - b.id);
    // const hisResult = props.data.hisCardsResult.sort((a, b) => a.id - b.id);
    const myValues = myResult.map(m => m.value);
    const hisValues = hisResult.map(m => m.value);
    // const mySuits = myResult.map(m => m.suit);
    // const hisSuits = hisResult.map(m => m.suit);
    // const myCardsbyId = myResult.map(m => m.id);
    // const hisCardsbyId = hisResult.map(m => m.id);

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

    //// Straight, Straight--Flush, Flush--Royal

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
            myDynamicArrays[0].pop();
            myDynamicArrays = [...myDynamicArrays[0].concat(myDynamicArrays[1])]
        };
    };
    if (myDynamicArrays.length === 3) {
        let lastNumMyDynamicArrayOne = myDynamicArrays[0][myDynamicArrays[0].length - 1];
        let firstNumMyDynamicArrayTwo = myDynamicArrays[1][0];
        let lastNumMyDynamicArrayTwo = myDynamicArrays[1][myDynamicArrays[1].length - 1];
        let firstNumMyDynamicArrayThree = myDynamicArrays[2][0];
        if (lastNumMyDynamicArrayOne === firstNumMyDynamicArrayTwo && lastNumMyDynamicArrayTwo === firstNumMyDynamicArrayThree) {
            myDynamicArrays[0].pop();
            myDynamicArrays[1].pop();
            myDynamicArrays = [...myDynamicArrays[0].concat(myDynamicArrays[1]).concat(myDynamicArrays[2])];
        };
        if(lastNumMyDynamicArrayOne === firstNumMyDynamicArrayTwo){
            myDynamicArrays[0].pop();
            myDynamicArrays = [...myDynamicArrays[0].concat(myDynamicArrays[1])];
        };
        if(lastNumMyDynamicArrayTwo === firstNumMyDynamicArrayThree){
            myDynamicArrays[1].pop();
            myDynamicArrays = [...myDynamicArrays[1].concat(myDynamicArrays[2])];
        };
    };
    let myConcatArrays = [];
    if (myDynamicArrays.length === 2 || myDynamicArrays.length === 3 || myDynamicArrays.length === 4) {
        for (let i = 0; i < myDynamicArrays.length; i++) {
            if (myDynamicArrays[i].length > myConcatArrays.length) {
                myDynamicArrays = myDynamicArrays[i]              
            };         
        };
    };
    if (myDynamicArrays.length >= 5) {
        myDynamicArrays = myDynamicArrays[0].reverse().splice(0, 5).sort();
    };  
    ////[A,1,2,3,4]Straight Flush
    let myHighCard = 0;
    myResult.map(m=>{if(m.id === 14){myHighCard = 14}});
    if (myDynamicArrays.length === 4) {
        if (myDynamicArrays[0] === 2 && myHighCard === 14) {
            console.log("I have a Straight Flush");
            const new_comb = combinations.filter(m => m.combination === "Straight Flush");
            myCombinations.push({ myDynamicArrays, id: new_comb[0].id });
        };
    };
    if (myDynamicArrays.length >= 5) {
        myDynamicArrays = myDynamicArrays[0].reverse().splice(0, 5).sort();
        console.log("I have a Straight");
        const new_comb = combinations.filter(m => m.combination === "Straight");
        myCombinations.push({ myDynamicArrays, id: new_comb[0].id });
       
        let myArrforSFcards = [];
        myDynamicArrays.forEach(item => {
            myArrforSFcards.push(myResult.filter(data => data.id === item));
        });
        let myCardsForFS = [];
        let mySuitsForSF = [];
        myArrforSFcards.map(m => myCardsForFS.push(...m));
        myCardsForFS.map(m => mySuitsForSF.push(m.suit));
        let myObjForFlush = {};
        for (let i = 0; i < mySuitsForSF.length; i++) {
            if (myObjForFlush[mySuitsForSF[i]]) {
                myObjForFlush[mySuitsForSF[i]] += 1;
            } else myObjForFlush[mySuitsForSF[i]] = 1;
        };
        let myArrForFlush = Object.values(myObjForFlush);
        let myMaxForFlush = Math.max(...myArrForFlush);
        let myMaxNumOfmyDynamicArray = Math.max.apply(null, myDynamicArrays);
        if (myMaxForFlush >= 5) {
            console.log("I have a Straight Flush");
            const new_comb = combinations.filter(m => m.combination === "Straight Flush");
            myCombinations.push({ myDynamicArrays, id: new_comb[0].id });
            if (myMaxNumOfmyDynamicArray === 14) {
                    console.log("I have a Royal Flush");
                    const new_comb = combinations.filter(m => m.combination === "Royal Flush");
                    myCombinations.push({ myDynamicArrays, id: new_comb[0].id });
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
  
    let hisObjForFlush = {};
    for (let i = 0; i < hisSuits.length; i++) {
        if (hisObjForFlush[hisSuits[i]]) {
            hisObjForFlush[hisSuits[i]] += 1;
        } else hisObjForFlush[hisSuits[i]] = 1;
    };
    let hisArrForFlush = Object.values(hisObjForFlush);
    let hisMaxForFlush = Math.max(...hisArrForFlush);
    let hisFlushElements = [];
    myResult.forEach((item) => hisFlushElements.push({ id: item.id, suit: item.suit }));
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
        myCombinations.push({myRecurringCards,id : new_comb[0].id});
    };
    if (myRecurringCards.length === 6 && myRecurringCards[0] !== myRecurringCards[2] && myRecurringCards[0] !== myRecurringCards[4]) {
        console.log(myRecurringCards.sort(), "I have a Two Pairs");
        let myArr = myRecurringCards.splice(2, 5);  
        const new_comb = combinations.filter(m => m.combination === "Two Pairs");
        myCombinations.push({myArr,id : new_comb[0].id});
    };
    if (myRecurringCards.length === 3) {
        console.log(myRecurringCards.sort(), "I have a Three Of a Kind");
        const new_comb = combinations.filter(m => m.combination === "Three Of a Kind");
        myCombinations.push({myRecurringCards,id : new_comb[0].id});
    };
    if (myRecurringCards.length === 4 && myRecurringCards[0] !== myRecurringCards[3]) {
        console.log(myRecurringCards.sort(), "I have a Two Pairs");
        const new_comb = combinations.filter(m => m.combination === "Two Pairs");
        myCombinations.push({myRecurringCards,id : new_comb[0].id});
    };
    if (myRecurringCards.length >= 4) {
        if (myRecurringCards.length === 4) {
            if (myRecurringCards[0] === myRecurringCards[3]) {
                console.log("I have Four Of a Kind");
                const new_comb = combinations.filter(m => m.combination === "Four Of a Kind");
                myCombinations.push({myRecurringCards,id : new_comb[0].id});
            };
        };
        if (myRecurringCards.length === 6) {
            if (myRecurringCards[0] === myRecurringCards[3] && myRecurringCards[0] !== myRecurringCards[5]) {
                console.log("I have Four Of a Kind");
                const new_comb = combinations.filter(m => m.combination === "Four Of a Kind");
                myCombinations.push({myRecurringCards,id : new_comb[0].id});
            };
            if (myRecurringCards[2] === myRecurringCards[5] && myRecurringCards[0] !== myRecurringCards[2]) {
                console.log("I have Four Of a Kind");
                const new_comb = combinations.filter(m => m.combination === "Four Of a Kind");
                myCombinations.push({myRecurringCards,id : new_comb[0].id});
            };
        };
        if (myRecurringCards.length === 7) {
            if (myRecurringCards[0] === myRecurringCards[3] && myRecurringCards[3] !== myRecurringCards[6]) {
                console.log("I have Four Of a Kind");
                const new_comb = combinations.filter(m => m.combination === "Four Of a Kind");
                myCombinations.push({myRecurringCards,id : new_comb[0].id});
            };
            if (myRecurringCards[3] === myRecurringCards[6] && myRecurringCards[3] !== myRecurringCards[0]) {
                console.log("I have Four Of a Kind");
                const new_comb = combinations.filter(m => m.combination === "Four Of a Kind");
                myCombinations.push({myRecurringCards,id : new_comb[0].id});
            };
        };
        if (myRecurringCards.length === 5) {
            if (myRecurringCards[0] === myRecurringCards[1] && myRecurringCards[2] === myRecurringCards[4]) {
                console.log("I have a Full House");
                const new_comb = combinations.filter(m => m.combination === "Full House");
                myCombinations.push({myRecurringCards,id : new_comb[0].id});
            };
            if (myRecurringCards[0] === myRecurringCards[2] && myRecurringCards[3] === myRecurringCards[4]) {
                console.log("I have a Full House");
                const new_comb = combinations.filter(m => m.combination === "Full House");
                myCombinations.push({myRecurringCards,id : new_comb[0].id});
            };
        };
        if (myRecurringCards.length === 6) {
            if (myRecurringCards[0] === myRecurringCards[2] && myRecurringCards[3] === myRecurringCards[5]) {
                console.log("I have a Full House");
                const new_comb = combinations.filter(m => m.combination === "Full House");
                myCombinations.push({myRecurringCards,id : new_comb[0].id});
            };
        };
        if (myRecurringCards.length === 7) {
            if (myRecurringCards[2] === myRecurringCards[4] && myRecurringCards[2] !== myRecurringCards[5] && myRecurringCards[2] !== myRecurringCards[0]) {
                console.log("I have a Full House");
                const new_comb = combinations.filter(m => m.combination === "Full House");
                myCombinations.push({myRecurringCards,id : new_comb[0].id});
            };
            if (myRecurringCards[0] === myRecurringCards[2] && myRecurringCards[0] !== myRecurringCards[3] && myRecurringCards[0] !== myRecurringCards[5]) {
                console.log("I have a Full House");
                const new_comb = combinations.filter(m => m.combination === "Full House");
                myCombinations.push({myRecurringCards,id : new_comb[0].id});
            };
            if (myRecurringCards[4] === myRecurringCards[6] && myRecurringCards[4] !== myRecurringCards[0] && myRecurringCards[5] !== myRecurringCards[2]) {
                console.log("I have a Full House");
                const new_comb = combinations.filter(m => m.combination === "Full House");
                myCombinations.push({myRecurringCards,id : new_comb[0].id});
            };
        };
    };

    if (hisRecurringCards.length === 2) {
        console.log(hisRecurringCards.sort(), "Dealer have a One Pair");
        const new_comb = combinations.filter(m => m.combination === "One Pair");
        hisCombinations.push({hisRecurringCards,id : new_comb[0].id});
    };
    if (hisRecurringCards.length === 6 && hisRecurringCards[0] !== hisRecurringCards[2] && hisRecurringCards[0] !== hisRecurringCards[4]) {
        console.log(hisRecurringCards.sort(), "Dealer have a Two Pairs");
        let hisArr = hisRecurringCards.splice(2, 5);
        const new_comb = combinations.filter(m => m.combination === "Two Pairs");
        hisCombinations.push({hisArr,id : new_comb[0].id});
    };
    if (hisRecurringCards.length === 3) {
        console.log(hisRecurringCards.sort(), "Dealer have a Three Of a Kind");
        const new_comb = combinations.filter(m => m.combination === "Three Of a Kind");
        hisCombinations.push({hisRecurringCards,id : new_comb[0].id});
    };
    if (hisRecurringCards.length === 4 && hisRecurringCards[0] !== hisRecurringCards[3]) {
        console.log(hisRecurringCards.sort(), "Dealer have a Two Pairs");
        const new_comb = combinations.filter(m => m.combination === "Two Pairs");
        hisCombinations.push({hisRecurringCards,id : new_comb[0].id});
    };
    if (hisRecurringCards.length >= 4) {
        if (hisRecurringCards.length === 4) {
            if (hisRecurringCards[0] === hisRecurringCards[3]) {
                console.log("Dealer have Four Of a Kind");
                const new_comb = combinations.filter(m => m.combination === "Four Of a Kind");
                hisCombinations.push({hisRecurringCards,id : new_comb[0].id});
            };
        };
        if (hisRecurringCards.length === 6) {
            if (hisRecurringCards[0] === hisRecurringCards[3] && hisRecurringCards[0] !== hisRecurringCards[5]) {
                console.log("Dealer have Four Of a Kind");
                const new_comb = combinations.filter(m => m.combination === "Four Of a Kind");
                hisCombinations.push({hisRecurringCards,id : new_comb[0].id});
            };
            if (hisRecurringCards[2] === hisRecurringCards[5] && hisRecurringCards[0] !== hisRecurringCards[2]) {
                console.log("Dealer have Four Of a Kind");
                const new_comb = combinations.filter(m => m.combination === "Four Of a Kind");
                hisCombinations.push({hisRecurringCards,id : new_comb[0].id});
            };
        };
        if (hisRecurringCards.length === 7) {
            if (hisRecurringCards[0] === hisRecurringCards[3] && hisRecurringCards[3] !== hisRecurringCards[6]) {
                console.log("Dealer have Four Of a Kind");
                const new_comb = combinations.filter(m => m.combination === "Four Of a Kind");
                hisCombinations.push({hisRecurringCards,id : new_comb[0].id});
            };
            if (hisRecurringCards[3] === hisRecurringCards[6] && hisRecurringCards[3] !== hisRecurringCards[0]) {
                console.log("Dealer have Four Of a Kind");
                const new_comb = combinations.filter(m => m.combination === "Four Of a Kind");
                hisCombinations.push({hisRecurringCards,id : new_comb[0].id});
            };
        };
        if (hisRecurringCards.length === 5) {
            if (hisRecurringCards[0] === hisRecurringCards[1] && hisRecurringCards[2] === hisRecurringCards[4]) {
                console.log("Dealer have a Full House");
                const new_comb = combinations.filter(m => m.combination === "Full House");
                hisCombinations.push({hisRecurringCards,id : new_comb[0].id});
            };
            if (hisRecurringCards[0] === hisRecurringCards[2] && hisRecurringCards[3] === hisRecurringCards[4]) {
                console.log("Dealer have a Full House");
                const new_comb = combinations.filter(m => m.combination === "Full House");
                hisCombinations.push({hisRecurringCards,id : new_comb[0].id});
            };
        };
        if (hisRecurringCards.length === 6) {
            if (hisRecurringCards[0] === hisRecurringCards[2] && hisRecurringCards[3] === hisRecurringCards[5]) {
                console.log("Dealer have a Full House");
                const new_comb = combinations.filter(m => m.combination === "Full House");
                hisCombinations.push({hisRecurringCards,id : new_comb[0].id});
            };
        };
        if (hisRecurringCards.length === 7) {
            if (hisRecurringCards[2] === hisRecurringCards[4] && hisRecurringCards[2] !== hisRecurringCards[5] && hisRecurringCards[2] !== hisRecurringCards[0]) {
                console.log("Dealer have a Full House");
                const new_comb = combinations.filter(m => m.combination === "Full House");
                hisCombinations.push({hisRecurringCards,id : new_comb[0].id});
            }
            if (hisRecurringCards[0] === hisRecurringCards[2] && hisRecurringCards[0] !== hisRecurringCards[3] && hisRecurringCards[0] !== hisRecurringCards[5]) {
                console.log("Dealer have a Full House");
                const new_comb = combinations.filter(m => m.combination === "Full House");
                hisCombinations.push({hisRecurringCards,id : new_comb[0].id});
            }
            if (hisRecurringCards[4] === hisRecurringCards[6] && hisRecurringCards[4] !== hisRecurringCards[0] && hisRecurringCards[5] !== hisRecurringCards[2]) {
                console.log("Dealer have a Full House");
                const new_comb = combinations.filter(m => m.combination === "Full House");
                hisCombinations.push({hisRecurringCards,id : new_comb[0].id});
            };
        };
    };

    //One Pair, Two Pair, Three Of a Kind, Full House, Four Of a Kind --end
    if (myCombinations.length) {
        console.log(myCombinations,"myCombinations");
    }
    if (hisCombinations.length) {
        console.log(hisCombinations,"hisCombinations");      
    }

    return (
        <div>
            <CompareResults myCombinations={myCombinations} hisCombinations={hisCombinations} myResult={myResult} hisResult={hisResult} values ={props.data.values}/>
        </div>
    );
}
export default Combinations;