interface Event {
    id: number;
    title: string;
    description: string;
    date: string;
    price: number;
    place: string;
    category: string;
  }

  const EventCard = ({ event }: { event: Event }) => {
    return (
      <div className="border p-4 rounded">
        {/* <img src={event.image} alt={event.title} className="w-full h-40 object-cover" /> */}
        <h3 className="text-lg font-semibold">{event.title}</h3>
        <p>{event.title} ₽</p>
      </div>
    );
  };
  
  export default EventCard;