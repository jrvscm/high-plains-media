import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction'; // For clickable dates
import { Modal, Button, Form } from 'react-bootstrap';

const Calendar = () => {
    const [events, setEvents] = useState([
        { title: 'Event 1', date: '2024-05-10' },
        { title: 'Event 2', date: '2024-05-11' }
    ]);
    const [modalShow, setModalShow] = useState(false);
    const [selectedDate, setSelectedDate] = useState(null);
    const [eventTitle, setEventTitle] = useState('');

    const handleDateClick = (arg) => {
        // Set the date that was clicked
        setSelectedDate(arg.dateStr);
        setModalShow(true);
    };

    const handleEventAdd = () => {
        const newEvent = {
            title: eventTitle,
            date: selectedDate
        };
        setEvents([...events, newEvent]);
        setModalShow(false);
        setEventTitle('');
        // Here, you can also call a function to add the event to Google Calendar
    };

    return (
        <>
            <FullCalendar
                plugins={[dayGridPlugin, interactionPlugin]}
                initialView="dayGridMonth"
                events={events}
                dateClick={handleDateClick}
                selectable={true}
            />
            <Modal show={modalShow} onHide={() => setModalShow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Add New Event</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group>
                            <Form.Label>Event Title</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter the title of the event"
                                value={eventTitle}
                                onChange={(e) => setEventTitle(e.target.value)}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setModalShow(false)}>Close</Button>
                    <Button variant="primary" onClick={handleEventAdd}>Save Event</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default Calendar;
