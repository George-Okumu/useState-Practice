import React from "react";
import { useState } from 'react';
import Text from "./Text";

export default function Languages(props) {
    const { studentLanguages, educationLevel } = props;
    // const [state, setState] = useState(initialValue);

    const [like, setLike] = useState(0);

    console.log(like);
    // function handleCounts(value){
    //     console.log(like);
    //     setLike(value)
    // }

    return (
        <>
            <h1>educationLevel: {educationLevel}</h1>
            <p class="mb-3 font-bold text-gray-900 dark:text-gray-400">{studentLanguages.join(',')}</p>
        <button className="bg-blue-600 p-4 text-white text-l" onClick={() => setLike(prev => prev + 1)}>Add 1</button>
        <button className="bg-red-600 ml-4 p-4 text-white text-l">Minus 1</button>

       <p className="bg-green-700 text-white w-1/2 text-center mt-4">{like}</p>

       <Text />
        </>
    )
}