import React, { Component } from 'react';

class WordsRow extends Component {

    shuffleValues() {
                
        var iloscSort = 15;
        var lk = this.props.row.length;
        var w, k, p, i, j; //indeksy

        // wymieszanie wyrazów w wierszu
            for (k=0; k<=iloscSort; k++) {
               	i = Math.floor(Math.random()*lk); // losowo wybrana 1 kolumna
		 		j = Math.floor(Math.random()*lk); // losowo wybrana 2 kolumna
                if (i != j) {
             	    p = this.props.row[i];
                    this.props.row[i] = this.props.row[j];
                    this.props.row[j] = p;
                }
            }
    }

    render() {
        
        this.shuffleValues();
        var row = this.props.row;

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