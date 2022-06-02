import React, { useState } from 'react';
import { deepMemo } from '@hooks';
import { Modal } from '@mui/material';
import {Box} from '@mui/material'
import { TextField } from '@mui/material';
import { Typography } from '@mui/material';

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
                open={open}
                onClose={handleClose}
                aria-describedby="form"
            >
                <Box 
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 3, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off">
                    <div id = "form" sx={{ mt: 3 }}>
                        <TextField
                        required
                        id="outlined-required"
                        label="Required"
                        defaultValue="Hello World"
                        />
                        <TextField
                        disabled
                        id="outlined-disabled"
                        label="Disabled"
                        defaultValue="Hello World"
                        />
                        <TextField
                        id="outlined-password-input"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        />
                        <TextField
                        id="outlined-read-only-input"
                        label="Read Only"
                        defaultValue="Hello World"
                        InputProps={{
                            readOnly: true,
                        }}
                        />
                        <TextField
                        id="outlined-number"
                        label="Number"
                        type="number"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        />
                        <TextField id="outlined-search" label="Search field" type="search" />
                        <TextField
                        id="outlined-helperText"
                        label="Helper text"
                        defaultValue="Default Value"
                        helperText="Some important text"
                        />
                    </div>
                </Box>
            </Modal>
        </div>
    )
}

export default deepMemo(ContactModal);