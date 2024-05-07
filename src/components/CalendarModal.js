import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import Calendar from './Calendar';

function CalendarModal() {
    const [show, setShow] = useState(false);  // State to control the visibility of the modal

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow}>  // Button that triggers modal open
                Schedule a Call
            </Button>

            <Modal show={show} onHide={handleClose} size="lg">  // Modal visibility controlled by 'show'
                <Modal.Header closeButton>
                    <Modal.Title>Schedule Your Call</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Calendar />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default CalendarModal;
