import React from "react";
import Languages from "./Languages";

function Card({student, educationLevel}) {
    // console.log(student);
    return (
        <>
            <div className="mx-auto mt-20 ml-20">
                <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">

                    <img class="rounded-t-lg" src="https://moringaschool.com/wp-content/themes/moringa/public/images/logo.png" alt="moringa" />
                    <div class="p-5">

                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{student.studentName}</h5>
                        <Languages studentLanguages={student.languages} educationLevel={educationLevel}/>
                        <p class="mb-3 font-semibold pt-8 text-gray-700 dark:text-gray-400">BootCamp: {student.bootCamp}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card;