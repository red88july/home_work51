import "./App.css";
import Number from "./Number/Number.tsx";
import {useState} from "react";

function App () {
    const [number , stateNumber] = useState([
        {numfirst: 5, numsecond: 11, numthird: 16, numfourth: 23, numfifth: 32},
    ]);

    const ChangeNumber = () => {
        stateNumber([
            {numfirst: 1, numsecond: 42, numthird: 156, numfourth: 45, numfifth: 2},
        ]);
    };

    return (
        <div className='App'>
            <Number numfirst={number[0].numfirst}
                    numsecond={number[0].numsecond}
                    numthird={number[0].numthird}
                    numfourth={number[0].numfourth}
                    numfifth={number[0].numfifth}></Number>
            <button onClick={ChangeNumber}>Change number</button>
        </div>
    )
}
export default App
