import React, {useState, useEffect} from "react";
import "chart.js/auto";
import { Pie } from "react-chartjs-2";

function PieChart() {
    const [state,setState] = useState({
        labels: [],
        datasets: []
    })
    
    useEffect(() => {
        setState({
            labels: ['Pawn', 'Bishop', 'Knight', 'Rook', 'Queen', 'King'],
            datasets: [{
                data: [
                    document.getElementsByClassName('pawn').length + document.getElementsByClassName('whitePawn').length, 
                    document.getElementsByClassName('bishop').length + document.getElementsByClassName('whiteBishop').length, 
                    document.getElementsByClassName('knight').length + document.getElementsByClassName('whiteKnight').length, 
                    document.getElementsByClassName('rook').length + document.getElementsByClassName('whiteRook').length, 
                    document.getElementsByClassName('queen').length + document.getElementsByClassName('whiteQueen').length,
                    document.getElementsByClassName('king').length + document.getElementsByClassName('whiteKing').length
                ],
                backgroundColor: [
                    '#008080',
                    '#00CED1',
                    '#5F9EA0',
                    '#2F4F4F',
                    '#6495ED',
                    '#7FFFD4'
                ]
            }],
        })
    
    }, []);

    return (
        <div className="mt-5">
            <Pie data={state} width="600px" height="600px" options={{maintainAspectRatio: false}}/>
        </div>
    );
}

export default PieChart;