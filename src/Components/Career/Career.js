import React from "react";
import TableComponent from "./Data_Table";
import FadeInSection from "../FadIn";
const Career =()=>{

    const data = [
        { id: 1, name: 'Software Engineer', age: 'Accounting and Finance' },
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