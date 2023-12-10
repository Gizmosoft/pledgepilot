import React, { useEffect, useState } from 'react'
import Snackbar, { SnackbarProps } from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';

interface CustomSnackbarProps extends SnackbarProps{
    open: boolean;
    message: string;
    handleClose?: () => void;
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>((props, ref) => {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export const CustomSnackbar: React.FC<CustomSnackbarProps> = ({ open, message, handleClose }) => {
    const [isOpen, setIsOpen] = useState(false);
    console.log(message);
    

    useEffect(() => {
        setIsOpen(open);
    }, [open]);

    const handleSnackbarClose = (event?: any, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        setIsOpen(false);
        if (handleClose) {
            handleClose();
        }
    };
    return (
        <Snackbar open={isOpen} autoHideDuration={6000} onClose={handleSnackbarClose}>
            <Alert onClose={handleSnackbarClose} severity="success">
                {message}
            </Alert>
        </Snackbar>
    )
}
