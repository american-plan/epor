import React, { useState } from 'react';
import { deepMemo } from '@hooks';
import { Modal } from '@mui/material';
import {Box} from '@mui/material'
import { TextField } from '@mui/material';
import { Typography } from '@mui/material';
import { width } from '@mui/system';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

const ContactModal = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <div>
            <button className='banner-button' onClick={handleOpen}>Join the Fight</button>
            <Modal
                open = {open}
                onClose = {handleClose}
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
                        }}></Box>
                        <Box 
                            component="form"
                            sx={{
                                '& .MuiTextField-root': { m : 3 },

                            }}
                            noValidate
                            autoComplete = "off">
                            <div id = "form">            
                                <TextField sx={{
                                    width: 230,
                                    height: 32,
                                }}
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