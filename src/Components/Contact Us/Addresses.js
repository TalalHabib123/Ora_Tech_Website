import React, { useState } from "react";


const Address=()=>{
    const [selectedLocation, setSelectedLocation] = useState('Islamabad'); // State to store the selected location

    const locations = [
        { id: 1, name: 'Islamabad' },
        { id: 2, name: 'Karachi' },
        { id: 3, name: 'Dubai' },
        { id: 4, name: 'Lahore' },
    ];

    const handleLocationClick = (locationName) => {
        setSelectedLocation(locationName);
    };

    const firstRowLocations = locations.slice(0, 2);
    const secondRowLocations = locations.slice(2, 4);

    return(
        <div className="contact-form">
            <div className="row1">
                {firstRowLocations.map((location) => (
                    <button
                        key={location.id}
                        className={selectedLocation === location.name ? 'highlight' : ''}
                        onClick={() => handleLocationClick(location.name)}
                    >
                        {location.name}
                    </button>
                ))}
            </div>
            <div className="theAddress">
                {(selectedLocation==='Islamabad' && (
                        <>
                            <h1>
                                Islamabad Office
                            </h1>
                            <p>
                                3rd Floor, Beverley Centre, Jinnah Avenue, F-6/1
                                Islamabad 44000-Pakistan
                                <br/>
                                Phone : (+92-51) 111-672-253 (111-ORACLE)
                                <br/>
                                Tel: (051) 2814481-89
                                <br/>
                                Fax: (+92-51) 2814481
                            </p>
                        </>
                    )) ||
                    (selectedLocation==='Karachi' && (
                        <>
                            <h1>
                                Karachi Office
                            </h1>
                            <p>
                                Head Office Four Square Plaza, 4th Floor, Building # 21A, 
                                H.H. Farooqi Road Off Tariq Road, PECHS, Block II
                                Karachi – 75400, Pakistan
                                <br/>
                                Phone : (+92-21) 111–ORACLE (111-672-253)
                                <br/>
                                Fax: (92-21) 34536441
                            </p>
                        </>
                    ))  ||
                    (selectedLocation==='Lahore' && (
                        <>
                            <h1>
                                Lahore Office
                            </h1>
                            <p>
                                58-59 Main Boulevard, 1st Floor,Cavalry Ground,
                                Lahore Cantt- Pakistan
                                <br/>
                                Phone : (+92-42) 111-672-253, (111-ORACLE)
                                <br/>
                                Fax: (+92-42) 36660598
                            </p>
                        </>
                    )) ||
                    (selectedLocation==='Dubai' && (
                        <>
                            <h1>
                                Dubai Office
                            </h1>
                            <p>
                                Ora-Tech Systems LLC Unit No. 1403, 14th Floor, Fortune Executive Tower, Cluster T, Jumeirah Lake
                                Towers, Al Thanyan, Dubai – U.A.E.
                                <br/>
                                Phone : +9714 518-6666
                                <br/>
                                Fax: +9714 227-0151
                            </p>
                        </>
                    ))
                }

            </div>
            <div className="row2">
                {secondRowLocations.map((location) => (
                    <button
                        key={location.id}
                        className={selectedLocation === location.name ? 'highlight' : ''}
                        onClick={() => handleLocationClick(location.name)}
                    >
                        {location.name}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default Address;