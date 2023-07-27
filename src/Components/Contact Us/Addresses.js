import React, { useState } from "react";


const Address=()=>{
    const [selectedLocation, setSelectedLocation] = useState('Islamabad'); // State to store the selected location

    const locations = [
        { id: 1, name: 'Islamabad', address: '123 Islamabad Street' },
        { id: 2, name: 'Karachi', address: '456 Karachi Avenue' },
        { id: 3, name: 'Dubai', address: '789 Dubai Road' },
        { id: 4, name: 'Lahore', address: '101 Lahore Lane' },
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
                {selectedLocation && (
                    <>
                        <h2>{selectedLocation}</h2>
                        <p>{locations.find((loc) => loc.name === selectedLocation).address}</p>
                    </>
                )}
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