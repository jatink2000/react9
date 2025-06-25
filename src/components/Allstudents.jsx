import React from "react";
import { Studentdata } from "../json/Student";

function Allstudents() {
    let a=(Studentdata.studentdetails)
    return (
        <>
            <h1>Allstudents component</h1>

            <table border={1}>
                <tr>
                    <th>studentname</th>
                    <th>student rollno</th>
                    <th>student class</th>
                </tr>

                {a.map((data) => {
                    return (
                        <>
                            <tr>
                                <td>{data.studentname}</td>
                                <td>{data.rollno}</td>
                                <td>{data.class}</td>
                            </tr>
                        </>
                    )
                })}

            </table>
        </>
    )
}

export { Allstudents }