import React, { Component } from 'react';

class WordsRow extends Component {

    constructor(props) {
        super(props);
        this.state = {row: this.shuffle(this.props.row)};
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
        var row = this.shuffle(this.state.row);

        return (
            <tr>
               <td>{row[0]}</td> 
               <td>{row[1]}</td>
               <td>{row[2]}</td>
               <td>{row[3]}</td>
               <td>{row[4]}</td>
               <td>{row[5]}</td>
            </tr>
        );
    }
}

export default WordsRow;