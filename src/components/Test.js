import React from 'react';


// https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/ <----- React lifecycle diagram
export default class Clock extends React.Component{
    constructor(props){
        // call super or props will be undefined in constructor
        super(props);
        // this is the state, do not modify directly because react may
        // update state and props asynchronously (use setState)
        this.state = {date: new Date()};
    }

    // activates when DOM loads (render())
    componentDidMount(){
        this.timerID = setInterval(() => this.tick(), 1000);
    }

    tick(){
        // calling setStates lets react know to re-render since
        // state variable has been updated (with the new date).
        // if you had other variales inside the dictionary it's ok, will merge.
        this.setState({date: new Date()});
    }

    // when component removed from DOM, stops the interval lifecycle
    componentWillUnmount(){
        clearInterval(this.timerID);
    }

    // when component updates (new prop/state). must be enclosed in condition
    // otherwise will be infinite loop. activates right after update.
    componentDidUpdate(prevProps, prevState){
        // only activates if pre-update state is same as new one
        if(this.state === prevState){
            console.log("did update!")
        }
    }
    // activates when there are new props or state apart from initial one, just before update.
    // can compare if prop and state changed, if no, return false for do not update.
    // only used for performance improvement.
    shouldComponentUpdate(nextProp, nextState){
        if(this.prop !== nextProp && this.state !== nextState)
            return true;
    }

    render(){
        return(
            <div>
                <h1 style={{fontSize:"40px"}}>
                    It is {this.state.date.toLocaleTimeString()}
                </h1>
            </div>
        )
    }
}
