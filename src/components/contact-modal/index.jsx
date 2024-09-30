import React from "react";
import { Box, Typography, Modal, Button } from "@mui/material";

export default function CustomModal({ open, handleClose, success }) {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
          borderRadius: "8px",
        }}
      >
        <Typography id="modal-modal-title" variant="h6" component="h2">
          {success ? "Message Sent Successfully!" : "An Error Occurred!"}
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          {success
            ? "Your message has been sent. We will get back to you soon."
            : "There was an error sending your message. Please try again."}
        </Typography>
        <Button
          onClick={handleClose}
          variant="contained"
          color={success ? "success" : "error"}
          sx={{ mt: 3 }}
        >
          Close
        </Button>
      </Box>
    </Modal>
  );
}
