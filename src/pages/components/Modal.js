import React from 'react';
import {Modal, Button} from 'react-bootstrap';

const CustomedModal = ({ modalHeader, modalBody, handleToggle, show }) => {
    return (
        <Modal
            show={show}
            onHide={handleToggle}
            backdrop="static"
            keyboard={false}
            centered
        >
            <Modal.Header>
                <Modal.Title>{modalHeader}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {modalBody}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="warning" onClick={handleToggle}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default CustomedModal;