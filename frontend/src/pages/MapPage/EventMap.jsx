import { useEffect } from "react";
import { Container } from "react-bootstrap";

const EventMap = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://api-maps.yandex.ru/2.1/?lang=ru_RU";
    script.async = true;
    script.onload = () => {
      window.ymaps.ready(init);
    };
    document.body.appendChild(script);

    function init() {
      const map = new window.ymaps.Map("map", {
        center: [55.7558, 37.6173],
        zoom: 10,
      });

      const placemark = new window.ymaps.Placemark([55.7558, 37.6173], {
        hintContent: 'Центр Москвы',
        balloonContent: 'Это Москва',
      });

      map.geoObjects.add(placemark);
    }

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <Container>
    <div id="map" style={{ width: '700px', height: '800px' }}></div>
    </Container>
  );
};

export default EventMap;
