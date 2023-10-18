import React from "react";

interface Props {
    numfirst: number;
    numsecond: number;
    numthird: number;
    numfourth: number;
    numfifth: number;
}

const Number: React.FC<Props> = ({numfirst, numsecond,numthird,numfourth, numfifth}) => {
    return (
        <div className='main-box'>
            <div className='numbers-box'>
                <span className='numbers'>{numfirst}</span>
                <span className='numbers'>{numsecond}</span>
                <span className='numbers'>{numthird}</span>
                <span className='numbers'>{numfourth}</span>
                <span className='numbers'>{numfifth}</span>
            </div>
        </div>
    )
}

export default Number;