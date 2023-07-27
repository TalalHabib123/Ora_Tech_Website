import React from "react";
import "../Style.css";
import { TextField } from "@mui/material";
import Address from "./Addresses";
const ContactUs=()=>{
    return(
        <div className="contact-us">
            <div className="addresses">
                <h1>
                    Contact Us
                </h1>
                <div className="the-fields">
                    <TextField id="standard-basic" label="Full Name" variant="standard" className="text-field" />
                    <TextField id="standard-basic" label="Phone NO" variant="standard" className="text-field"/>
                    <TextField id="standard-basic" label="Email Address" variant="standard" className="text-field"/>
                    <TextField id="standard-basic" label="Message" variant="standard" className="text-field"/>
                    <button className="thebutton">Submit</button>
                </div>
            </div>
            <Address />
        </div>
    );
}

export default ContactUs;