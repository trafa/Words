import React, { Component } from 'react';

class WordsRow extends Component {

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
    }

    render() {
        var row = this.props.row;
        this.shuffle(row);

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