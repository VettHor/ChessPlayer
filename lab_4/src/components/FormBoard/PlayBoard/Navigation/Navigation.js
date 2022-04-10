import { Nav } from 'react-bootstrap';

function Header() {
    return (
        <div style={{maxWidth:'365px'}}>
            <Nav className='justify-content-center mt-2' style={{background:'#769656'}}>
                <Nav.Link className='fs-5' style={{color:'#eeeed2'}} href="https://www.chess.com/learn-how-to-play-chess" target="_blank">
                    Take a look at the rules!
                </Nav.Link>
            </Nav>
            <Nav className='justify-content-center' style={{background:'#eeeed2'}}>
                <Nav.Link className='fs-5' style={{color:'#769656'}} href="https://www.chess.com/puzzles/problem/111714" target="_blank">
                    Here is a puzzle!
                </Nav.Link>
            </Nav>
        </div>
    );
}

export default Header;