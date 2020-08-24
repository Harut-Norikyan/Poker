import React, { Component } from "react";

class ResultComponent extends Component {

    state = {
        myCombinations :[],
        hisCombinations : [],
    };


    componentDidUpdate(prevProps) {
        if (this.props.myCombinations !== prevProps.myCombinations) {
          this.setState({
            myCombinations: this.props.myCombinations,
          });
        }
        if (this.props.hisCombinations !== prevProps.hisCombinations) {
            this.setState({
                hisCombinations: this.props.hisCombinations,
            });
          }
      }

      componentDidMount(){
          console.log(this.state,"0.0");
      }



    render() {
     
        return (
            <div>
                {/* <h1> Hello </h1> */}
            </div>
        )
    }
}
export default ResultComponent;