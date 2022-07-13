import React, {useState } from 'react';
import { deepMemo } from '@hooks';
import {Modal, Box, TextField} from '@mui/material'
import { makeStyles } from '@mui/styles';
import contact_modal from '@images/contact-modal.png';
import ReCAPTCHA from 'react-google-recaptcha';

const isRequired = (val) => {
    return val.length > 0 ? "" : "cannot be blank";
}

const isEmail = (val) => {
    const ai = val.indexOf("@")
    const gdi = val.split("").reduce((acc, char, i) => (char === "." ? i: acc), 0);
    return ai > -1 && gdi > ai ? "" : "must be an email";
}

const useSytle = makeStyles(() => (
   {textField: {
        fontFamily: "montserrat",
        width: "98%",
        height: "5%",
        borderRadius: '10px',
        marginLeft: "auto",
        marginRight: "auto",
        paddingBottom: 0,
        marginTop: 0,
        fontWeight: 500, 
        backgroundColor: "rgba(225, 131, 131, 0.33)", 
        borderColor: "white",
  },
    textField2:{
        fontFamily: "montserrat",
        width: "47.6%",
        marginLeft: "auto",
        marginRight: "auto",
        paddingBottom: 0,
        marginTop: 0,
        fontWeight: 500,
        backgroundColor: "rgba(225, 131, 131, 0.33)", 
        borderRadius: "10px",
    },
    reCaptcha: {
        top:"50%",
        left:"30%",
        position: "relative"
    }
    
  }))


const ContactModal = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [verified, setVerified] = useState(false);

    const [reCaptcha, setReCaptcha] = useState(false);
    const reCaptchaOpen = () => setReCaptcha(true);
    const reCaptchaClose = () => setReCaptcha(false);

    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");

    const [errors1, setErrors1] = useState([]);
    const [errors2, setErrors2] = useState([]);
    const [errors3, setErrors3] = useState([]);
    

    const handleSubmit = () => {
        if(verified === true){
            alert("you successfully join with us!");
            setOpen(false);
        }
        else {
            alert("Please verfy first!")
        }
    }

    const onChange = (response) => {
        if(response){
            setVerified(true)
        }
    }

    const validateFirstname = (validations) => {
        setErrors1(validations.map(errorsFor => errorsFor(firstname)))
    }

    const validateLastname = (validations) => {
        setErrors2(validations.map(errorsFor => errorsFor(lastname)))
    }

    const validateEmail = (validations) => {
        setErrors3(validations.map(errorsFor => errorsFor(email)))
    }
    

    const classes = useSytle();

    return (
        <div>
            <button className='banner-button' onClick={handleOpen} style={{fontSize: 24, fontWeight: 600,}}>Join the Fight</button>
            <Modal
                open = {open}
                aria-describedby = "form" 
            >
                <div className='container' >
                    <div className='item-a'>
                        <Box 
                            sx ={{
                                bgcolor: "background.paper",
                                width: "105%",
                                height: "100%",
                                position: 'relative',
                                top: "10%",
                                left: "10%",
                            }}>            
                            <img src = {contact_modal} alt = '' />
                        </Box> 
                    </div>
                    <div className='item-b'>
                        <Box 
                            sx ={{
                                bgcolor: "background.paper",
                                width: "110%",
                                height: "100%",
                                position: 'relative',
                                top: "10%",
                                left: "10%",
                            }}>   
                            <button className='btn' onClick={handleClose} style={{fontSize:30, }}>X</button>
                            <button className='submit-btn' style={{top:'87%', left:'70%', fontSize:18, fontWeight:800}} 
                                onClick={handleSubmit}>Submit</button>
                            <Box 
                                component="form"
                                sx={{
                                '& .MuiTextField-root':{m: 0.75}, 
                                }}
                                noValidate
                                autoComplete = "off">
                                <div>
                                <link href='https://fonts.googleapis.com/css?family=Karla' rel='stylesheet' />
                                <link href='https://fonts.googleapis.com/css?family=Montserrat' rel='stylesheet' />
                                    <Box sx = {{
                                        textAlign: "start",
                                        bgcolor: "background.paper",
                                        width: "80%",
                                        height: "90%",
                                        position: 'relative',
                                        top: "10%",
                                        left: "10%", 
                                    }}>
                                        <h1 style={{fontFamily: "Karla",color: "#fc0705", textAlign: "justify",}}>
                                            It's your turn to take action</h1>
                                        <h2 style={{fontFamily: "Montserrat"}}> Join us in our commitment to create lasting solution to poverty, hunger, and social injustice </h2>         
                                        <TextField 
                                            id= "outlined-first-name" label = "First Name*" type = "text" placeholder='First Name' className={classes.textField2}
                                            size = "small" value={firstname} onChange = {(e) => setFirstname(e.target.value)} onBlur = {() => validateFirstname([isRequired])}
                                            helperText = {errors1.length > 0 ? (<div className='has-error'>{errors1.join(" ")}</div>): null}
                                        />
                                        <TextField 
                                            id = "outlined-last-name" label = "Last Name*" type = "text" placeholder='Last Name' className={classes.textField2}
                                            size = "small" value={lastname} onChange = {(e) => setLastname(e.target.value)} onBlur = {() => validateLastname([isRequired])}
                                            helperText = {errors2.length > 0 ? (<div className='has-error'>{errors2.join(" ")}</div>): null}
                                        />
                                        <TextField 
                                            id = "outlined-email" label = "Email*" type = "text" placeholder='Email' className={classes.textField}
                                            size = "small" value={email} onChange = {(e) => setEmail(e.target.value)} onBlur = {() => validateEmail([isEmail])}
                                            helperText = {errors3.length > 0 ? (<div className='has-error'>{errors3.join(" ")}</div>): null}
                                        />
                                        <TextField 
                                            id = "outlined-subjects" label = "Subjects" type = "text" placeholder='Subjects' className = {classes.textField}
                                            size = "small"
                                        />
                                        <TextField 
                                            id = "outlined-messages" label = "Messages" type = "text" placeholder='Messages' multiline rows={4} className={classes.textField}
                                        />
                                    </Box>
                                    <Box sx = {{
                                        textAlign: "start",
                                        bgcolor: "background.paper",
                                        width: "50%",
                                        height: "10%",
                                        position: 'relative',
                                        top: "60%",
                                        left: "10%",
                                    }}>
                                        <a style={{fontFamily: "Montserrat", }}> The site is protected by </a>
                                        <a style={{fontWeight: 600, fontFamily: "Montserrat", color: "#fc0705", textDecorationLine: "underline" }} 
                                            href = "#reCaptcha" onClick={reCaptchaOpen}> reCAPTCHA </a> 
                                        <a style={{fontFamily: "Montserrat", }}> and the Google </a>
                                        <a style={{fontWeight: 600, fontFamily: "Montserrat", color: "#fc0705", textDecorationLine: "underline"}}
                                            href = ""> Privacy Policy </a>
                                        <a style={{fontFamily: "Montserrat", }}> and </a>
                                        <a style={{fontWeight: 600, fontFamily: "Montserrat", color: "#fc0705", textDecorationLine: "underline"}}
                                            href = ""> Term of Service </a>
                                        <a style={{fontFamily: "Montserrat", }}> apply </a>
                                    </Box>
                                </div>
                            </Box>
                        </Box>        
                    </div>
                    <Modal open = {reCaptcha}
                            onClose = {reCaptchaClose}>
                            <div className = {classes.reCaptcha} id = "reCaptcha">
                                <ReCAPTCHA 
                                    sitekey = "6LcqN-MgAAAAAM61Su3FRVzm_DxtWw9iZwuA5MzB"
                                    onChange={onChange}
                                />  
                            </div>
                    </Modal>
                </div>
            </Modal>
        </div>
    )
}

export default deepMemo(ContactModal);