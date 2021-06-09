import React from 'react';
import {Modal, Button} from 'react-bootstrap';

const CustomedModal = ({ modalHeader, modalBody, handleToggle, show, deleteBtn }) => {
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
                { deleteBtn !== undefined ?
                    <Button variant="danger" onClick={() => {deleteBtn.btnFunction(deleteBtn.idToDelete)}}>
                        {deleteBtn.message}
                    </Button>
                : ""}
            </Modal.Footer>
        </Modal>
    );
}

export default CustomedModal;