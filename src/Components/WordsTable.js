import React, { Component } from 'react';
import WordsRow from './WordsRow';

class WordsTable extends Component {

    shuffleRows() {

        var iloscSort = 15;
        var lw = this.props.words.length;
        var lk = this.props.words[0].length;
        var w, k, p, i, j; //indeksy

        // wymieszanie wierszy
		for (w=0; w <= iloscSort; w++) {
		    i = Math.floor(Math.random()*lw) // losowo wybrany 1 wiersz
		 	j = Math.floor(Math.random()*lw) // losowo wybrany 2 wiersz
		 	if (i != j) { 
		 		for (k=0; k<= lk-1; k++) {
		 			p = this.props.words[i][k] 
		 			this.props.words[i][k] = this.props.words[j][k]
		 			this.props.words[j][k] = p
		 		}
		 	}
		}

    }

    render() {
        var rows = [];

        this.shuffleRows();
        this.props.words.forEach((word) => {
            rows.push(<WordsRow row={word} />);
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
                    </tbody>
                </table>
            </div>
        );
    }
}

export default WordsTable;