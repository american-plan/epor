import { deepMemo } from "@hooks";
import { Modal } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import reCaptcha from "react-google-recaptcha";

const Captcha = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    <div onClick={handleOpen}>
        <Modal
            open = {open}
            onClose = {handleClose}
            aria-describedby = "form"
        >
            <Box component="form">
                <div>Hello world</div>
            </Box>
        </Modal>
    </div>
}

export default deepMemo(Captcha); 