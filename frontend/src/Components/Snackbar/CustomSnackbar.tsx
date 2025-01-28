import React, { useEffect, useState } from "react";
import Snackbar, { SnackbarProps } from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import { Slide } from "@mui/material";

interface CustomSnackbarProps extends SnackbarProps {
  open: boolean;
  message: string;
  duration: number;
  handleClose?: () => void;
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>((props, ref) => {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export const CustomSnackbar: React.FC<CustomSnackbarProps> = ({
  open,
  message,
  duration,
  handleClose,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    setIsOpen(open);
  }, [open]);

  const handleSnackbarClose = (event?: any, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }
    setIsOpen(false);
    if (handleClose) {
      handleClose();
    }
  };
  return (
    <Snackbar
      TransitionComponent={(props) => <Slide {...props} direction="left" />}
      open={isOpen}
      autoHideDuration={duration}
      onClose={handleSnackbarClose}
    >
      <Alert onClose={handleSnackbarClose} severity="success">
        {message}
      </Alert>
    </Snackbar>
  );
};
