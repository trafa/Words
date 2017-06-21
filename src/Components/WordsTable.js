import React, { Component } from 'react';
import WordsRow from './WordsRow';

class WordsTable extends Component {

    constructor(props) {
        super(props);
        this.state = {rows: this.shuffle(this.props.words)};
        
        this.myClick = this.myClick.bind(this);
    } 

    myClick() {
        this.setState({
            rows: this.shuffle(this.props.words)
        });
    }

    shuffle(array) {
        let counter = array.length;
        while (counter > 0) {
            // pick random row
            let index = Math.floor(Math.random() * counter);
            // decrese counter by 1
            counter--;
            // and swap the last row with it
            let temp = array[counter];
            array[counter] = array[index]
            array[index] = temp;
        }
        return array;
    }

    render() {
        var rows = [];

        this.state.rows.forEach((row) => {
            rows.push(<WordsRow key={row} row={row} />);
        });

        return (
            <div>
                <h1> {this.props.title} </h1>
                <table>
                    <thead>
                        <th>1</th>
                        <th>2</th>
                        <th>3</th>
                        <th>4</th>
                        <th>5</th>
                        <th>6</th>
                    </thead>
                    <tbody>
                        {rows}
                        <tr><td colSpan="5">
                        <button onClick={this.myClick}>Refresh</button>
                        </td></tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default WordsTable;