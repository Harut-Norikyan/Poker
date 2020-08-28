////nkarelu block

import React, { Component } from "react";

class ResultComponent extends Component {

    state = {
        youWin: false,
        dealerWin: false,
        draw: false,
        // dealerPoints: 0,
        // yourPoints: 0,
        yourCombName: '',
        hisCombName: "",
    };

    componentDidUpdate(prevProps) {
        if (this.state.youWin !== this.props.youWin) {
            this.setState({
                youWin: this.props.youWin,
            });
            if (this.state.youWin) {
            };
        };
        if (this.state.dealerWin !== this.props.dealerWin) {
            this.setState({
                dealerWin: this.props.dealerWin,
            });
            if (this.state.dealerWin) {
            };
        };
        if (this.state.draw !== this.props.draw) {
            this.setState({
                draw: this.props.draw,
            });
        };
        if (this.state.yourCombName !== this.props.myCombName) {
            this.setState({
                yourCombName: this.props.myCombName,
            });
        };
        if (this.state.hisCombName !== this.props.hisCombName) {
            this.setState({
                hisCombName: this.props.hisCombName,
            });
        };

        // if (this.state.dealerPoints !== this.props.dealerPoints && this.state.dealerPoints < this.props.dealerPoints) {
        //     this.setState({
        //         dealerPoints: this.state.dealerPoints + 1,
        //     });
        // };
        // if (this.state.yourPoints !== this.props.yourPoints && this.state.yourPoints < this.props.yourPoints) {
        //     this.setState({
        //         dealerPoints: this.state.dealerPoints + 1,
        //     });
        // };
    };

    render() {
        // console.log(this.props);
        let { youWin, dealerWin, draw, hisCombName, yourCombName } = this.state;

        let dealerWinComponent = <div className="dealerWinBlock">
            <div className="ourBlocks">
                <h2 className="outTitle">Dealer Win !!!</h2>
            </div>
        </div>

        let youWinComponent = <div className="youWinBlock">
            <div className="ourBlocks">
                <h2 className="outTitle">You Win !!!</h2>
            </div>
        </div>

        let drawComponent = <div className="draw">
            <div className="ourBlocks">
                <h2 className="outTitle">Draw !!!</h2>
            </div>
        </div>
        let dealerCombination = <div className="dealerCombBlock">
            <div className="combBlockItem">
                <h3 className="combTitle">
                    {this.state.hisCombName}
                </h3>
            </div>
        </div>
        let yourCombination = <div className="yourCombBlock">
            <div className="combBlockItem">
                <h3 className="combTitle">
                    {this.state.yourCombName}
                </h3>
            </div>
        </div>

        return (
            <div>
                {dealerWin ? <div>{dealerWinComponent}</div> : null}
                {draw ? <div>{drawComponent}</div> : null}
                {youWin ? <div>{youWinComponent}</div> : null}
                {hisCombName ? <div>{dealerCombination}</div> : null}
                {yourCombName ? <div>{yourCombination}</div> : null}

                {/* <div className="pointsBlock">
                    <div className="point">
                        <h2 className="pointTitle">Your Points</h2>
                        <p className="pointerDesc">{this.props.yourPoints}</p>
                    </div>
                    <div className="line" />
                    <div className="point">
                        <h2 className="pointTitle">Dealer Points</h2>
                        <p className="pointerDesc">{this.props.dealerPoints}</p>
                    </div>
                </div> */}

                
            </div>
        )
    }
}
export default ResultComponent;