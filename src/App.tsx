import "./App.css";
import Number from "./Number/Number.tsx";
import {useState} from "react";


function App () {

    const [number , stateNumber] = useState([
        {numeric: 5},
        {numeric: 11},
        {numeric: 16},
        {numeric: 23},
        {numeric: 32},
    ]);

    const ChangeNumber = () => {
        stateNumber([
            {numeric: 1, },
            {numeric: 42},
            {numeric: 160},
            {numeric: 67},
            {numeric: 35},
        ]);
    };

    return (
        <div className='App'>
            <Number numeric={number[0].numeric}></Number>
            <Number numeric={number[1].numeric}></Number>
            <Number numeric={number[2].numeric}></Number>
            <Number numeric={number[3].numeric}></Number>
            <Number numeric={number[4].numeric}></Number>
            <button onClick={ChangeNumber}>Change number</button>
        </div>
    )
}
export default App
