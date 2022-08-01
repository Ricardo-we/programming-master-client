// import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "../assets/css/components/modal.css"
import MaterialIcons from "react-google-material-icons";
import { Button } from "grommet";


const animations = {
    initial: { opacity: 0, scale: 0.5 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.5 }
}

function Modal({ children, handleClose, ...props }) {

    const onClose = e => {
        e.stopPropagation();
        handleClose && handleClose();
    }

    return (
        <motion.div {...animations} className="modal-overlay" onClick={onClose}>
            <motion.div style={props?.contentStyle} {...animations} onClick={e => e.stopPropagation()} className="modal-content">
                <Button onClick={onClose}>
                    <MaterialIcons
                        icon="close"
                    />
                </Button>
                {children}
            </motion.div>
        </motion.div>
    );
}

export default Modal;