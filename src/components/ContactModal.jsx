import React, { useState } from 'react';
import { deepMemo } from '@hooks';
import {Modal, Box, TextField} from '@mui/material'
import { makeStyles } from '@mui/styles';
import contact_modal from '@images/contact-modal.png';
import { borderRadius } from '@mui/system';

const useSytle = makeStyles(() => (
   {textField: {
    width: "80%",
    marginLeft: "auto",
    marginRight: "auto",
    paddingBottom: 0,
    marginTop: 0,
    fontWeight: 500,
  },
  input: {
    color: "blue"
  }}))

const textStyle = makeStyles(() => (
    {textField2:{
            width: "39%",
            marginLeft: "auto",
            marginRight: "auto",
            paddingBottom: 0,
            marginTop: 0,
            fontWeight: 500,
    }}))

const ContactModal = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const classes = useSytle();
    const newClass = textStyle();

    return (
        <div>
            <button className='banner-button' onClick={handleOpen}>Join the Fight</button>
            <Modal
                open = {open}
                aria-describedby = "form"
            >
                <div className='container' >
                    <div className='item-a'>
                        <Box 
                            sx ={{
                                bgcolor: "background.paper",
                                width: 427,
                                height: 636,
                                position: 'relative',
                                top: "10%",
                                left: "10%",
                            }}>            
                            <img src = {contact_modal} alt = ''/>
                        </Box> 
                    </div>
                    <div className='item-b'>
                        <Box 
                            sx ={{
                                bgcolor: "background.paper",
                                width: 648,
                                height: 636,
                                position: 'relative',
                                top: "10%",
                                left: "10%",
                            }}>   
                            <button className='btn' onClick={handleClose} style={{fontSize:24}}>X</button>
                            <Box 
                                component="form"
                                sx={{
                                '& .MuiTextField-root':{m: 1},
                                }}
                                noValidate
                                autoComplete = "off">
                                <div id = "form">   
                                    <h1 style={{color: "orangered", 
                                        fontFamily:"sans-serif" }}>It's your turn to take action</h1>
                                    <h2> Join us in our commitment to create lasting solution to poverty, hunger, and social injustice </h2>         
                                    <TextField 
                                        id= "outlined-first-name" label = "First Name*" type = "text" placeholder='First Name' className={newClass.textField2}
                                    />
                                    <TextField sx={{}}
                                        id = "outlined-last-name" label = "Last Name*" type = "text" placeholder='Last Name' className={newClass.textField2}
                                    />
                                    <TextField 
                                        id = "outlined-email" label = "Email*" type = "text" placeholder='Email' className={classes.textField}
                                    />
                                    <TextField 
                                        id = "outlined-subjects" label = "Subjects" type = "text" placeholder='Subjects' className = {classes.textField}
                                    />
                                    <TextField 
                                        id = "outlined-messages" label = "Messages" type = "text" placeholder='Messages' multiline rows={5} className={classes.textField}
                                    />
                                </div>
                                <button className='submit-btn' style={{top:'95%', left:'65%'}}>Submit</button>
                            </Box>
                        </Box>        
                    </div>
                </div>
            </Modal>
        </div>
    )
}

export default deepMemo(ContactModal);