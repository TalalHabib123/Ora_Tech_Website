import React from "react";
import '../Style.css';
import CardComponent from "./CardComponent";
import { faBusinessTime, faBullseye, faBuilding, faMoneyBillTrendUp, faClipboard} from '@fortawesome/free-solid-svg-icons';

const Insights=()=>{

    const cardList = [
    { text: 'Enhancing the business operations via process and procedures alignment.', icon: faBusinessTime },
    { text: 'Assuring that each service meets its objectives and requirements.', icon: faBullseye },
    { text: 'To establish a business operation.', icon: faBuilding },
    { text: 'Focus solely on the essential market and business success criteria.', icon: faMoneyBillTrendUp},
    { text: 'Delivering improved and effective solutions.', icon: faClipboard },
  ];
    return(
        <><div className="insights">
            <div className="com_insights">
                <h1>
                    Company Insights
                </h1>
                <p>
                    Founded by a group of Professionals with the skills and knowledge to meet market demands for services and solutions in collaboration with experts from around the world, who achieved management, leadership, and adherence to exacting quality standards while upholding our cultural values.
                </p>
            </div>
            <div className="quote">
                <p>
                    Ora-Tech System provides IT consulting services on innovation, strategy, Infrastructure solutions, ERP Solutions and business transformation to our clients. As leaders in performance excellence, our consultants partner with clients in bringing effective solutions to meet the inherent challenges of critical business activities. This translates into better decision making processes and actions that produce results, giving a distinct business advantage in the marketplace.
                </p>
            </div>
            <div className="vision">
                <h1>
                    Our Vision
                </h1>
                <hr/>
                <p>
                    "Ora-Tech facilitates every single entity to achieve their short and long term goals."
                </p>
                <hr/>
            </div>
            <div className="expect_us">
                <h1>
                    What we Help In:
                </h1>
            </div>
            <CardComponent cardList={cardList} className="card_comps"/>
        </div>
        </>
    )
}

export default Insights;