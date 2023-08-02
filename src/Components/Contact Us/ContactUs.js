import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import Address from "./Addresses";
import Contact_UsSubmit from "../../Firebase_Setup/handlesubmit";
import FadeInSection from "../FadIn";
const ContactUs=()=>{

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        Contact_UsSubmit(formData);
        formData.email=formData.name=formData.phone=formData.message='';
    };

    const isFormValid = () => {
        return formData.fullName && formData.email && formData.phone && formData.message;
    };

    return(
        <FadeInSection>
            <div className="contact-us">
                <div className="addresses">
                    <h1>
                        Contact Us
                    </h1>
                    <div className="the-fields">
                        <form onSubmit={handleSubmit}>
                            <TextField
                            id="standard-basic"
                            label="Full Name"
                            variant="standard"
                            className="text-field"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            required
                            InputProps={{
                                style: { color: 'white' }
                            }}
                            />
                            <TextField
                            id="standard-basic"
                            label="Phone NO"
                            variant="standard"
                            className="text-field"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            InputProps={{
                                style: { color: 'white' }
                            }}
                            />
                            <TextField
                            id="standard-basic"
                            label="Email Address"
                            variant="standard"
                            className="text-field"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            InputProps={{
                                style: { color: 'white' }
                            }}
                            />
                            <TextField
                            id="standard-basic"
                            label="Message"
                            variant="standard"
                            className="text-field"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            multiline
                            rows={4}
                            />
                            <Button type="submit" variant="contained" className="the-button" disabled={!isFormValid()}>
                            Submit
                            </Button>
                        </form>
                    </div>
                </div>
                <Address />
            </div>
        </FadeInSection>
    );
}

export default ContactUs;