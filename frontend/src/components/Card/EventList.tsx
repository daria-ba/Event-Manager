import { useEffect, useState } from "react";
import { getEvents } from "../../api/events";
import EventCard from "./EventCard";

const EventsList = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    getEvents().then(setEvents);
  }, []);

  return (
    <div className="grid grid-cols-3 gap-4">
      {events.map((event) => (
        <EventCard event={event} />
      ))}
    </div>
  );
};

export default EventsList;
