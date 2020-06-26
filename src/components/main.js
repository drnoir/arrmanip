import React from 'react';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            randomNum: 0,
            arr: [],
            arr2:[],
            arr3:[]
        };
        this.generateRandNum = this.generateRandNum.bind(this);
        this.addRandomValuePush = this.addRandomValuePush.bind(this);
        this.mapArr = this.mapArr.bind(this);
        this.filter = this.filter.bind(this);
    }

    generateRandNum(){
        let i;
        let arr=[];
        for (i = 0; i < 10; i++) {
            let randomNum = Math.floor(Math.random() * 10);
            arr.push(randomNum);
        }
        this.setState({arr:arr})
    }

    addRandomValuePush(){
    let randomNum = Math.floor(Math.random() * 10);
    let newArray = this.state.arr.slice();
    newArray.push(randomNum);
    this.setState({arr:newArray});
    }

    mapArr(){
        let arr = this.state.arr.slice();
        let arr2 = arr.map(x => x*2);
        this.setState({arr2:arr2});
    }

    filter(){
        let arr = this.state.arr.slice();
        let result = arr.filter(item => item>5);
        this.setState({arr3:result});
    }

    componentDidMount() {

    }

    render() {
        return (
            <div className="shopping-list">
                <h1>React Array Manip Examples</h1>
                <div>
                <button onClick={this.generateRandNum}>Generate Random</button>
                    <p>{this.state.arr}</p>
                </div>
                <div>
                <button onClick={this.addRandomValuePush}>Add a Random Number = Push</button>
                </div>
                <div>
                    <button onClick={this.mapArr}>Map Example x 2</button>
                    <p>{this.state.arr2}</p>
                </div>
                <div>
                    <button onClick={this.filter}>Filter numbers over 5</button>
                    <p>{this.state.arr3}</p>
                </div>
                <div>
                <h2>First Value at index position 0</h2>
                    <p>{this.state.arr[0]}</p>
                </div>
                <div>
                   <h2>Length of Array</h2>
                    <p>{this.state.arr.length}</p>
                </div>


            </div>
        );
    }
}

export default Main;