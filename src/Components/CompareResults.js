/* eslint-disable array-callback-return */
import React from 'react';
import ResultComponent from "./ResultComponent"

const CompareResults = (props) => {

    let youWin = false;
    let dealerWin = false;
    let draw = false;

    ////ese menak es unem combination
    if (props.myCombinations.length && !props.hisCombinations.length && props.stepThree) {
        console.log("You Win");
        youWin = true;
    };
    ////ese menak dealer@ unem combination
    if (props.hisCombinations.length && !props.myCombinations.length && props.stepThree) {
        console.log("Dealer win");
        dealerWin = true;
    };

    ////ete erkuss el unenq combination (id-neri hamematutyun)
    if (props.myCombinations.length && props.hisCombinations.length && props.stepThree) {

        let myCombIdArr = [];
        props.myCombinations.map(m => myCombIdArr.push(m.id));
        let myMaxNumOfCombIdArr = Math.max.apply(null, myCombIdArr);
        let hisCombIdArr = [];
        props.hisCombinations.map(m => hisCombIdArr.push(m.id));
        let hisMaxNumOfCombIdArr = Math.max.apply(null, hisCombIdArr);
        ////ete im combinations-i id > dealeri combinations-i id-ic    
        if (myMaxNumOfCombIdArr > hisMaxNumOfCombIdArr) {
            console.log("You Win");
            youWin = true;
        };
        ////ete im combinations-i id < dealeri combinations-i id-ic  
        if (myMaxNumOfCombIdArr < hisMaxNumOfCombIdArr) {
            console.log("Dealer win");
            dealerWin = true;
        };

        //// ete erkusis combinations-i id irar === e (ete erkuss el unenq nuyn combinations)
        //// bacarutyamb (Straight(5), Four Of a Kind(8), Straight Flush(9), Royal Flush(10))-i
        if (myMaxNumOfCombIdArr === hisMaxNumOfCombIdArr) {

            ////ete erkuss el unenq nuyn combinations (one-pair, Three Of a Kind)
            if (myMaxNumOfCombIdArr === 2 ||
                myMaxNumOfCombIdArr === 4) {
                let myArr = [];
                let myIds = [];
                let maxOfMyIds = 0;
                props.myCombinations.map(m => {
                    if (m.id === myMaxNumOfCombIdArr) {
                        myArr = m.myRecurringCards;
                        myArr.forEach(element => {
                            props.myResult.find(item => {
                                if (element === item.value) {
                                    myIds.push(item.id);
                                    maxOfMyIds = Math.max.apply(null, myIds);
                                }
                            });
                        });
                    };
                });
                let hisArr = [];
                let hisIds = [];
                let maxOfHisIds = 0;
                props.hisCombinations.map(m => {
                    if (m.id === myMaxNumOfCombIdArr) {
                        hisArr = m.hisRecurringCards;
                        hisArr.forEach(element => {
                            props.hisResult.find(item => {
                                if (element === item.value) {
                                    hisIds.push(item.id);
                                    maxOfHisIds = Math.max.apply(null, hisIds);
                                }
                            });
                        });
                    };
                });
                if (maxOfMyIds > maxOfHisIds) {
                    console.log("You Win");
                    youWin = true;
                }
                if (maxOfMyIds < maxOfHisIds) {
                    console.log("Dealer win");
                    dealerWin = true;
                }
                if (maxOfMyIds === maxOfHisIds) {
                    console.log("????????????????");
                }

            };
            //// ete erkuss el unenq (Flush(6))
            if (myMaxNumOfCombIdArr === 6) {
                let myArr = [];
                let arrForMyId = [];
                let maxIdFromMyFlush = 0;
                props.myCombinations.map(m => {
                    if (m.id === myMaxNumOfCombIdArr) {
                        myArr = m.myFlushElements;
                        let myResult = myArr.filter((v, i, a) => a.indexOf(v) === i)
                            .map(v => myArr.filter(x => x.suit === v.suit));
                        let idFromMyFlush = myResult.find(m => m.length >= 5);
                        idFromMyFlush.filter(m => arrForMyId.push(m.id))
                        maxIdFromMyFlush = Math.max.apply(null, arrForMyId);
                    };
                });

                let hisArr = [];
                let arrForHisId = [];
                let maxIdFromHisFlush = 0;
                props.hisCombinations.map(m => {
                    if (m.id === myMaxNumOfCombIdArr) {
                        hisArr = m.hisFlushElements;
                        let hisResult = hisArr.filter((v, i, a) => a.indexOf(v) === i)
                            .map(v => hisArr.filter(x => x.suit === v.suit));
                        let idFromHisFlush = hisResult.find(m => m.length >= 5);
                        idFromHisFlush.filter(m => arrForHisId.push(m.id))
                        maxIdFromHisFlush = Math.max.apply(null, arrForHisId);
                    };
                });
                if (maxIdFromMyFlush > maxIdFromHisFlush) {
                    console.log("You Win");
                    youWin = true;
                };
                if (maxIdFromMyFlush < maxIdFromHisFlush) {
                    console.log("Dealer win");
                    dealerWin = true;
                };
                if (maxIdFromMyFlush === maxIdFromHisFlush) {
                    console.log("????????????????");
                };
            };

            ////ete erkuss el unenq (Straight(5), Straight Flush(9), Royal Flush(10))
            if (myMaxNumOfCombIdArr === 5 ||
                myMaxNumOfCombIdArr === 9 ||
                myMaxNumOfCombIdArr === 10) {
                let myArr = [];
                let myIds = [];
                let maxOfMyIds = 0;
                props.myCombinations.map(m => {
                    if (m.id === myMaxNumOfCombIdArr) {
                        myArr = m.myDynamicArrays;
                        myArr.forEach(element => {
                            props.myResult.find(item => {
                                if (element === item.value) {
                                    myIds.push(item.id);
                                    maxOfMyIds = Math.max.apply(null, myIds);
                                }
                            });
                        });
                    };
                });
                let hisArr = [];
                let hisIds = [];
                let maxOfHisIds = 0;
                props.hisCombinations.map(m => {
                    if (m.id === myMaxNumOfCombIdArr) {
                        hisArr = m.hisDynamicArrays;
                        hisArr.forEach(element => {
                            props.hisResult.find(item => {
                                if (element === item.value) {
                                    hisIds.push(item.id);
                                    maxOfHisIds = Math.max.apply(null, hisIds);
                                }
                            });
                        });
                    };
                });

                if (maxOfMyIds > maxOfHisIds) {
                    console.log("You Win");
                    youWin = true;
                }
                if (maxOfMyIds < maxOfHisIds) {
                    console.log("Dealer win");
                    dealerWin = true;
                }
                if (maxOfMyIds === maxOfHisIds) {
                    console.log("????????????????");
                }
            };

            ////ete erkuss el unenq Full House
            if (myMaxNumOfCombIdArr === 7) {
                let myArr = [];
                props.myCombinations.map(m => {
                    if (m.id === myMaxNumOfCombIdArr) {
                        myArr = m.myRecurringCards;
                    };
                });
                let myNewArr = myArr.slice().sort(), myMost = [undefined, 0], myCounter = 0;
                myNewArr.reduce((old, chr) => {
                    old === chr ? ++myCounter > myMost[1] && (myMost = [chr, myCounter]) : (myCounter = 1);
                    return chr
                });
                let highCardForMyarr = [];
                props.values.filter(item => {
                    if (item.key === myMost[0]) {
                        highCardForMyarr.push(item.id)
                    }
                })
                let myHighCardFh = Math.max.apply(null, highCardForMyarr);

                let hisArr = [];
                props.hisCombinations.map(m => {
                    if (m.id === hisMaxNumOfCombIdArr) {
                        hisArr = m.hisRecurringCards;
                    };
                });
                let hisNewArr = hisArr.slice().sort(), hisMost = [undefined, 0], hisCounter = 0;
                hisNewArr.reduce((old, chr) => {
                    old === chr ? ++hisCounter > hisMost[1] && (hisMost = [chr, hisCounter]) : (hisCounter = 1);
                    return chr
                });
                let highCardForHisarr = [];
                props.values.filter(item => {
                    if (item.key === hisMost[0]) {
                        highCardForHisarr.push(item.id)
                    };
                });
                let hisHighCardFh = Math.max.apply(null, highCardForHisarr);

                if (myHighCardFh > hisHighCardFh) {
                    console.log("You Win");
                    youWin = true;
                };
                if (myHighCardFh < hisHighCardFh) {
                    console.log("Dealer win");
                    dealerWin = true;
                };

            };
            ////ete erkuss el unenq full house
            if (myMaxNumOfCombIdArr === 7) {
                let myArr = [];
                let myIds = [];
                let maxOfMyIds = 0;
                props.myCombinations.map(m => {
                    if (m.id === myMaxNumOfCombIdArr) {
                        myArr = m.myRecurringCards;
                        myArr.forEach(element => {
                            props.myResult.find(item => {
                                if (element === item.value) {
                                    myIds.push(item.id);
                                    maxOfMyIds = Math.max.apply(null, myIds);
                                }
                            });
                        });
                    };
                });

                let hisArr = [];
                let hisIds = [];
                let maxOfHisIds = 0;
                props.hisCombinations.map(m => {
                    if (m.id === myMaxNumOfCombIdArr) {
                        hisArr = m.hisRecurringCards;
                        hisArr.forEach(element => {
                            props.hisResult.find(item => {
                                if (element === item.value) {
                                    hisIds.push(item.id);
                                    maxOfHisIds = Math.max.apply(null, hisIds);
                                }
                            });
                        });
                    };
                });

                if (maxOfMyIds > maxOfHisIds) {
                    console.log("You Win");
                    youWin = true;
                };
                if (maxOfMyIds < maxOfHisIds) {
                    console.log("Dealer win");
                    dealerWin = true;
                };
                if (maxOfMyIds === maxOfHisIds) {
                    console.log("Draw");
                    draw = true;
                };    
            };
            ////ete erkuss el unenq Two Pairs
            if (myMaxNumOfCombIdArr === 3) {
                let myArr = [];
                let myIds = [];
                let maxOfMyIds = 0;
                let minOfMyIds = 0;
                props.myCombinations.map(m => {
                    if (m.id === myMaxNumOfCombIdArr) {
                        myArr = m.myRecurringCards;
                        myArr.forEach(element => {
                            props.myResult.find(item => {
                                if (element === item.value) {
                                    myIds.push(item.id);
                                    maxOfMyIds = Math.max.apply(null, myIds);
                                    minOfMyIds = Math.min.apply(null, myIds);
                                }
                            });
                        });
                    };
                });

                let hisArr = [];
                let hisIds = [];
                let maxOfHisIds = 0;
                let minOfHisIds = 0;
                props.hisCombinations.map(m => {
                    if (m.id === myMaxNumOfCombIdArr) {
                        hisArr = m.hisRecurringCards;
                        hisArr.forEach(element => {
                            props.hisResult.find(item => {
                                if (element === item.value) {
                                    hisIds.push(item.id);
                                    maxOfHisIds = Math.max.apply(null, hisIds);
                                    minOfHisIds = Math.min.apply(null, hisIds);
                                }
                            });
                        });
                    };
                });

                if (maxOfMyIds > maxOfHisIds) {
                    console.log("You Win");
                    youWin = true;
                };
                if (maxOfMyIds < maxOfHisIds) {
                    console.log("Dealer win");
                    dealerWin = true;
                };
                if (maxOfMyIds === maxOfHisIds && minOfMyIds > minOfHisIds) {
                    console.log("You Win");
                    youWin = true;
                };
                if (maxOfMyIds === maxOfHisIds && minOfMyIds < minOfHisIds) {
                    console.log("Dealer win");
                    dealerWin = true;
                };
                if (maxOfMyIds === maxOfHisIds && minOfMyIds === minOfHisIds) {
                    console.log("??????????????????");
                };
            };
        };
    };
    ////ete chunenq combinations
    if (!props.myCombinations.length && !props.hisCombinations.length) {
        let myCardsById = [];
        props.myCards.filter(item => myCardsById.push(item.id));
        let myHighCardFromMyCards = Math.max.apply(null, myCardsById);
        let myMinCardFromMyCards = Math.min.apply(null, myCardsById);
        let hisCarsById = [];
        props.hisCards.filter(item => hisCarsById.push(item.id));
        let hisHidhCardFromHisCards = Math.max.apply(null, hisCarsById);
        let hisMinCardFromHisCards = Math.min.apply(null, hisCarsById);
        // let ourCardsById = [];
        // props.ourCards.filter(item => ourCardsById.push(item.id));
        // let highCardFromOurCards = Math.max.apply(null, ourCardsById);
        // let minCardFromOurCrds = Math.min.apply(null, ourCardsById);

        ////ete im high card@ aveli mec e dealeri high cardic
        if (myHighCardFromMyCards > hisHidhCardFromHisCards &&
             typeof(myHighCardFromMyCards) === "number" &&
             myHighCardFromMyCards === !Infinity
             ) {
            console.log("You Win");
            youWin = true;
        };
        if (myHighCardFromMyCards < hisHidhCardFromHisCards &&
             typeof(myHighCardFromMyCards) === "number" &&
             myHighCardFromMyCards === !Infinity
             ) {
            console.log("Dealer win");
            dealerWin = true;
        };
        if (myHighCardFromMyCards === hisHidhCardFromHisCards &&
            myMinCardFromMyCards > hisMinCardFromHisCards &&
            typeof(myHighCardFromMyCards) === "number" &&
            myHighCardFromMyCards === !Infinity &&
            myMinCardFromMyCards === !Infinity
            ) {
            console.log("You Win");
            youWin = true;
        };
        if (myHighCardFromMyCards === hisHidhCardFromHisCards &&
            myMinCardFromMyCards < hisMinCardFromHisCards &&
            typeof(myHighCardFromMyCards) === "number" &&
            myHighCardFromMyCards === !Infinity &&
            myMinCardFromMyCards === !Infinity) {
            console.log("Dealer win");
            dealerWin = true;
        };
        if (myHighCardFromMyCards === hisHidhCardFromHisCards &&
            myMinCardFromMyCards === hisMinCardFromHisCards &&
            typeof(myHighCardFromMyCards) === "number" &&
            myHighCardFromMyCards === !Infinity &&
            myMinCardFromMyCards === !Infinity
        ) {
            console.log(myHighCardFromMyCards);
            console.log("Draw");
            draw = true;
        };
    };

    ////ete chunenq combinatin u voroshun enq ov e haxte

    return (
        <div>
            <ResultComponent youWin={youWin} dealerWin={dealerWin} draw={draw} />
        </div>
    );
}
export default CompareResults;