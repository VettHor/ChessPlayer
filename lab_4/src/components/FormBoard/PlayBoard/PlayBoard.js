import './PlayBoard.css';
import Navigation from '../PlayBoard/Navigation/Navigation'

function PlayBoard() {
    const tableRows = [];
    const verticalHeaders = {
        1: 8,
        9: 7,
        17: 6,
        25: 5,
        33: 4,
        41: 3,
        49: 2,
        57: 1
    };

    const horizontalHeaders = {
        57: 'a',
        58: 'b',
        59: 'c',
        60: 'd',
        61: 'e',
        62: 'f',
        63: 'g',
        64: 'h'
    };

    const pieces = {
        4: ['https://images.chesscomfiles.com/chess-themes/pieces/neo/150/bk.png', 'king'],
        11: ['https://images.chesscomfiles.com/chess-themes/pieces/neo/150/bp.png', 'pawn'],
        16: ['https://images.chesscomfiles.com/chess-themes/pieces/neo/150/bp.png', 'pawn'],
        17: ['https://images.chesscomfiles.com/chess-themes/pieces/neo/150/bp.png', 'pawn'],
        19: ['https://images.chesscomfiles.com/chess-themes/pieces/neo/150/wp.png', 'whitePawn'],
        26: ['https://images.chesscomfiles.com/chess-themes/pieces/neo/150/bp.png', 'pawn'],
        36: ['https://images.chesscomfiles.com/chess-themes/pieces/neo/150/bb.png', 'bishop'],
        45: ['https://images.chesscomfiles.com/chess-themes/pieces/neo/150/wn.png', 'whiteKnight'],
        46: ['https://images.chesscomfiles.com/chess-themes/pieces/neo/150/wp.png', 'whitePawn'],
        49: ['https://images.chesscomfiles.com/chess-themes/pieces/neo/150/wp.png', 'whitePawn'],
        52: ['https://images.chesscomfiles.com/chess-themes/pieces/neo/150/wk.png', 'whiteKing'],
        55: ['https://images.chesscomfiles.com/chess-themes/pieces/neo/150/wp.png', 'whitePawn']
    };

    var colorChange = false;
    var bgColor = '';
    var color = '';

    for(var i = 1; i <= 64; ++i) {
        var image = '';
        var vertNumber = '';
        var horLetter = '';
        if(i in pieces) {
            image = <img className={pieces[i][1]} src={pieces[i][0]} alt={pieces[i][1]} style={{height:'85px', width:'85px'}}/>;
        }
        if(i in verticalHeaders) {
            vertNumber = verticalHeaders[i];
            colorChange = colorChange ? false : true;
        }
        if(i in horizontalHeaders) {
            horLetter = horizontalHeaders[i];
        }
        changeColor();
        bgColor += " d-flex position-relative justify-content-center " + color;
        tableRows.push(
            <div className={bgColor} key={i}>
                <span className="vertical-headers">
                    {vertNumber}
                </span>
                {image}
                <span className="horizontal-headers">
                    {horLetter}
                </span>
            </div>
        );
    }
    
    function changeColor() {
        if(i % 2 === 0) {
            if(colorChange) {
                bgColor = 'bg-boardBlack';
                color = 'boardWhite'
            } else {
                bgColor = 'bg-boardWhite';
                color = 'boardBlack'
            }
        } else {
            if(colorChange) {
                bgColor = 'bg-boardWhite';
                color = 'boardBlack';
            } else {
                bgColor = 'bg-boardBlack';
                color = 'boardWhite';
            }
        }
    }

    return (
        <div className='mt-4'>
            <div className='row justify-content-center playBoard'>
                {tableRows}
            </div>
            <div className='row justify-content-center'>
                <Navigation/>
            </div>
        </div>
    );
}

export default PlayBoard;