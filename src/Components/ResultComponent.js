import React, { Component } from "react";

class ResultComponent extends Component {

    state = {
        youWin: false,
        dealerWin: false,
        draw: false,
        dealerPoints: 0,
        myPoints: 0,
    };

    componentDidUpdate(prevProps) {
        if (this.state.youWin !== this.props.youWin) {
            this.setState({
                youWin: this.props.youWin,
            });
            if(this.state.youWin){
                this.myPointsFunc()
            }
            
        }
        if (this.state.dealerWin !== this.props.dealerWin) {
            this.setState({
                dealerWin: this.props.dealerWin,
            });
            if(this.state.dealerWin){
                this.dealerPointsFunc()
            }
        };
        if (this.state.draw !== this.props.draw) {
            this.setState({
                draw: this.props.draw,
            });
        };
    };

    dealerPointsFunc=()=> {
        console.log("dealerPointsFunc ashxatav");
        this.setState({
            dealerPoints: this.state.dealerPoints + 1,
        });
    };

    myPointsFunc=()=> {
        console.log("myPointsFunc ashxatav");
        this.setState({
            myPoints: this.state.myPoints + 1,
        });
    };

    render() {
        let { youWin, dealerWin, draw, dealerPoints, myPoints } = this.state

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

        return (
            <div>
                {dealerWin ? <div>{dealerWinComponent}</div> : null}
                {draw ? <div>{drawComponent}</div> : null}
                {youWin ? <div>{youWinComponent}</div> : null}
                <div className="pointsBlock">
                    <div className="point">
                        <h2 className="pointTitle">Your Points</h2>
                        <p className="pointerDesc">{myPoints}</p>
                    </div>
                    <div className="line" />
                    <div className="point">
                        <h2 className="pointTitle">Dealer Points</h2>
                        <p className="pointerDesc">{dealerPoints}</p>
                    </div>
                </div>
            </div>
        )
    }
}
export default ResultComponent;