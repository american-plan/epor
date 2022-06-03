import React, { useState } from 'react';
import { deepMemo } from '@hooks';
import { Modal } from '@mui/material';
import {Box} from '@mui/material'
import { TextField } from '@mui/material';
import { Typography } from '@mui/material';
import { width } from '@mui/system';

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
                        <Box sx={{
                            width: 427,
                            heigth: 636,
                        }}>
                        </Box>
                        <button className='btn' onClick={handleClose} style={{fontSize:24}}>X</button>
                        <Box 
                            component="form"
                            sx={{
                                '& .MuiTextField-root':{m: 3},

                            }}
                            noValidate
                            autoComplete = "off">
                            <div id = "form">            
                                <TextField 
                                    id= "outlined-first-name" label = "First Name*" type = "text" 
                                />
                                <TextField sx={{}}
                                    id = "outlined-last-name" label = "Last Name*" type = "text" 
                                />
                                <TextField 
                                    id = "outlined-email" label = "Email*" type = "text" 
                                />
                                <TextField 
                                    id = "outlined-subjects" label = "Subjects" type = "text" 
                                />
                                <TextField 
                                    id = "outlined-messages" label = "Messages" type = "text" 
                                />
                            </div>
                        </Box>
                    </Box>
            </Modal>
        </div>
    )
}

export default deepMemo(ContactModal);