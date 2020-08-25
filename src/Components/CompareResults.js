import React, { useState } from 'react';

function CompareResults(props) {

    if (props.myCombinations.length && !props.hisCombinations.length) {
        console.log("I won");
    };
    if (props.hisCombinations.length && !props.myCombinations.length) {
        console.log("Dealer won");
    };
    ////ete erkuss el unenq combination (id-neri hamematutyun)
    if (props.myCombinations.length && props.hisCombinations.length) {
        let myCombIdArr = [];
        props.myCombinations.map(m => myCombIdArr.push(m.id));
        let myMaxNumOfCombIdArr = Math.max.apply(null, myCombIdArr);
        let hisCombIdArr = [];
        props.hisCombinations.map(m => hisCombIdArr.push(m.id));
        let hisMaxNumOfCombIdArr = Math.max.apply(null, hisCombIdArr);
        ////ete im combinations-i id > dealeri combinations-i id-ic    
        if (myMaxNumOfCombIdArr > hisMaxNumOfCombIdArr) {
            console.log("I won");
        };
        ////ete im combinations-i id < dealeri combinations-i id-ic  
        if (myMaxNumOfCombIdArr < hisMaxNumOfCombIdArr) {
            console.log("Dealer won");
        };

        //// ete erkusis combinations-i id irar === e (ete erkuss el unenq nuyn combinations)
        //// bacarutyamb (Flush(6), Four Of a Kind(8), Straight Flush(9), Royal Flush(10))-i
        if (myMaxNumOfCombIdArr === hisMaxNumOfCombIdArr) {

            ////ete erkuss el unenq nuyn combinations baci(Full House && Two Pairs)-ic
            if (
                myMaxNumOfCombIdArr === 2 ||
                myMaxNumOfCombIdArr === 4 ||
                myMaxNumOfCombIdArr === 5 ){
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
                    console.log("I won");
                }
                if (maxOfMyIds < maxOfHisIds) {
                    console.log("Dealer won");
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
                    }
                })
                let hisHighCardFh = Math.max.apply(null, highCardForHisarr);

                if (myHighCardFh > hisHighCardFh) {
                    console.log("I won");
                }
                if (myHighCardFh < hisHighCardFh) {
                    console.log("Dealer won");
                }

            }
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
                    console.log("I won");
                };
                if (maxOfMyIds < maxOfHisIds) {
                    console.log("Dealer won");
                };
                if (maxOfMyIds === maxOfHisIds && minOfMyIds > minOfHisIds) {
                    console.log("I won");
                };
                if (maxOfMyIds === maxOfHisIds && minOfMyIds < minOfHisIds) {
                    console.log("Dealer won");
                };
                if (maxOfMyIds === maxOfHisIds && minOfMyIds === minOfHisIds) {
                    console.log("??????????????????");
                };
            };


        };




    };
    return (
        <div>

        </div>
    );
}
export default CompareResults;