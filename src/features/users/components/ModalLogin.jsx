import { AnimatePresence } from "framer-motion";
import { Button } from "grommet";

import Modal from "../../../components/Modal";
import Login from "../index"

function ModalLogin({ visible = false, handleClose }) {
    return (

        <AnimatePresence>
            {visible &&
                <Modal handleClose={handleClose} contentStyle={styles.contentStyle}>
                    <Login
                        onLoginSuccess={handleClose}
                    />
                </Modal>
            }
        </AnimatePresence>

    );
}

const styles = {
    contentStyle: {
        backgroundColor: "var(--white)",
        padding: 10,
        borderRadius: 10,
        justifyContent: "space-evenly",
        alignItems: "center"
    }
}

export default ModalLogin;