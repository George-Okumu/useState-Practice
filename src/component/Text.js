import React, { useState } from "react";


export default function Text() {
    const [hidden, setHidden] = useState(true);

    let text = "We all love programming, but do you know that robots are coming to program you??";
    let maxLength = 15;

    if (text.length <= maxLength) {
        return <p className="border-2 h-20 border-white tex-center shadow shadow-lg mt-4">{text}</p>

    }

    return (
        <div className="border-2 border-white text-center shadow shadow-lg mt-4">
            {/* Here is text is greater that maximum length trim it if less show the text */}
            {hidden ? <p> {text.substring(0, maxLength).trim()}....</p> : <p>{text}</p>
            }
            {
                hidden ? (
                    <div className="pt-2 pb-4">
                         <a onClick={() => setHidden(false)} class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Read more
                            <svg aria-hidden="true" class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </a>
                    </div>
                ) :
                    (
                        <div className="pt-2 pb-4">
                         <a onClick={() => setHidden(true)} class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Read Less
                            <svg aria-hidden="true" class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </a>                        </div>
                    )
            }
        </div>
    )
}