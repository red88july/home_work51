import React from "react";

interface Props {
    numeric: number;
}

const Number: React.FC<Props> = ({numeric}) => {
    return (
        <div className='main-box'>
            <div className='Numbers-box'>
                <span>{numeric}</span>
                <span>{numeric}</span>
                <span>{numeric}</span>
                <span>{numeric}</span>
                <span>{numeric}</span>
            </div>
        </div>
    )
}

export default Number;