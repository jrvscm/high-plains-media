import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';

const Calendar = () => {
    const [events, setEvents] = useState([]);
    const handleDateClick = (arg) => {
        // Example of prompt, could also be a form/modal
        const title = prompt('Enter a title for your event:');
        if (title) {
            const newEvent = { title: title, date: arg.dateStr };
            setEvents([...events, newEvent]);
        }
    };

    return (
        <FullCalendar
            plugins={[dayGridPlugin, interactionPlugin]}
            initialView="dayGridMonth"
            events={events}
            dateClick={handleDateClick}
            selectable={true}
        />
    );
};

export default Calendar;
