import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import PieChart from './components/PieChart/PieChart'
import FormBoard from './components/FormBoard/FormBoard'

function App() {
    return (
        <div className="App" style={{backgroundColor:'#312e2b'}}>
            <FormBoard/>
            <PieChart/>
        </div>
    );
}

export default App;
