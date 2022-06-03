import React, { useState } from 'react';
import { deepMemo } from '@hooks';
import { Modal } from '@mui/material';
import {Box} from '@mui/material'
import { TextField } from '@mui/material';
import contactImg from './images/contat-modal.png'

const styles = theme => ({
    textField: {
        width: '90%',
        marginLeft: 'auto',
        marginRight: 'auto',
        color: 'white',
        paddingBottom: 0,
        marginTop: 0,
        fontWeight: 500
    },
});

const ContactModal = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <div>
            <button className='banner-button' onClick={handleOpen}>Join the Fight</button>
            <Modal
                open = {open}
                aria-describedby = "form"
            >
                <Box 
                    sx ={{
                        bgcolor: "background.paper",
                        width: 1075,
                        height: 636,
                        position: 'relative',
                        top: "10%",
                        left: "15%",
                    }}>
                        <img src={contactImg}/>
                        <button className='btn' onClick={handleClose} style={{fontSize:24}}>X</button>
                        <Box 
                            component="form"
                            sx={{
                                '& .MuiTextField-root':{m: 3},

                            }}
                            noValidate
                            autoComplete = "off">
                            <div id = "form">   
                                <h1 style={{color: "orangered", 
                                        fontFamily:"sans-serif" }}>It's your turn to take action</h1>         
                                <TextField 
                                    id= "outlined-first-name" label = "First Name*" type = "text" placeholder='First Name'
                                />
                                <TextField sx={{}}
                                    id = "outlined-last-name" label = "Last Name*" type = "text" placeholder='Last Name'
                                />
                                <TextField 
                                    id = "outlined-email" label = "Email*" type = "text" placeholder='Email'
                                />
                                <TextField 
                                    id = "outlined-subjects" label = "Subjects" type = "text" placeholder='Subjects'
                                />
                                <TextField 
                                    id = "outlined-messages" label = "Messages" type = "text" placeholder='Messages' multiline rows={5}
                                />
                            </div>
                        </Box>
                    </Box>
            </Modal>
        </div>
    )
}

export default deepMemo(ContactModal);