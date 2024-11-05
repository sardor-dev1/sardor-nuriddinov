// MessageModal.jsx
import React from "react";
import { Modal, Box, Typography } from "@mui/material";
import "./style.css"; 

export default function MessageModal({ open, onClose, message, isSuccess }) {
  return (
    <Modal open={open} onClose={onClose}>
      <div className="modal-overlay px-[15px]">
        <div className="modal">
          <Typography
            variant="h6"
            className="modal-title"
            style={{ color: isSuccess ? "green" : "red" }}
          >
            {isSuccess ? "Success!" : "Error"}
          </Typography>
          <Typography className="modal-message">{message}</Typography>
          <button className="modal-button" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </Modal>
  );
}
