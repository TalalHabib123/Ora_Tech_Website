import React from "react";
import TableComponent from "./Data_Table";
import FadeInSection from "../FadIn";
const Career =()=>{

    const data = [
        { id: 1, name: 'Software Engineer', age: 'Accounting and Finance' },
        { id: 2, name: 'Jane', age: 30 },
        { id: 3, name: 'John', age: 25 },
        { id: 4, name: 'Jane', age: 30 },
        { id: 5, name: 'John', age: 25 },
        { id: 6, name: 'Jane', age: 30 },
        { id: 7, name: 'John', age: 25 },
        { id: 8, name: 'Jane', age: 30 },
        { id: 9, name: 'John', age: 25 },
        { id: 10, name: 'Jane', age: 30 },
        { id: 11, name: 'John', age: 25 },
        { id: 12, name: 'Jane', age: 30 },
        { id: 13, name: 'John', age: 25 },
        { id: 14, name: 'Jane', age: 30 },
        { id: 15, name: 'John', age: 25 },
        { id: 16, name: 'Jane', age: 30 },
        { id: 17, name: 'John', age: 25 },
        { id: 18, name: 'Jane', age: 30 },
        { id: 19, name: 'John', age: 25 },
        { id: 20, name: 'Jane', age: 30 },
        { id: 21, name: 'John', age: 25 },
        { id: 22, name: 'Jane', age: 30 },
        { id: 230, name: 'John', age: 25 },
        { id: 240, name: 'Jane', age: 30 },
        { id: 250, name: 'John', age: 25 },
        { id: 260, name: 'Jane', age: 30 },
        { id: 270, name: 'John', age: 25 },
        { id: 280, name: 'Jane', age: 30 },
        // ... Add more data here
    ];
    return(
        <FadeInSection>
            <div className="overall-career">
                <div className="career">
                    <h1>
                        Career
                    </h1>
                </div>
                <div className="divoftable">
                    <TableComponent data={data}/>
                </div>
            </div>
        </FadeInSection>
    );
}

export default Career;