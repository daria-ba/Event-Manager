import React from 'react';
import moment from 'moment';
import { Container } from 'react-bootstrap';

const MyCalendar = () => {
  const today = new Date();
  
  const firstDayOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
  const lastDayOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0);

  const monthName = moment(today).format('MMMM');
  const nextMonthName = moment(today).add(1, 'month').format('MMMM');
  console.log(typeof monthName)

  const daysInMonth = [];
  let currentDate = new Date(today);

  while (currentDate <= lastDayOfMonth) {
    daysInMonth.push(new Date(currentDate));
    currentDate.setDate(currentDate.getDate() + 1);
  }

  const daysToFill = 31 - daysInMonth.length;
  if (daysToFill > 0) {
    const nextMonthStart = new Date(today.getFullYear(), today.getMonth() + 1, 1);
    for (let i = 0; i < daysToFill; i++) {
      daysInMonth.push(new Date(nextMonthStart));
      nextMonthStart.setDate(nextMonthStart.getDate() + 1);
    }
  }

  return (
    <Container className="d-none d-md-block justify-content-center">
    <div style={{ padding: '0', margin: '0', display: 'flex', overflowX: 'hidden', alignItems: 'center', color: 'black' }} >
      <div style={{ padding: '0', textAlign: 'center', fontWeight: 'bold', width: 'auto' }}>
        {monthName.slice(0, 3)}
      </div>

      {daysInMonth.map((date, index) => {
        const isNextMonth = date.getMonth() !== today.getMonth();
        const isFirstDayOfNextMonth = isNextMonth && (index === 0 || daysInMonth[index - 1].getMonth() === today.getMonth());
        return (
          <React.Fragment key={index}>
          {isFirstDayOfNextMonth && (
            <div style={{ padding: '0', textAlign: 'center', fontWeight: 'bold', width: 'auto' }}>
              {nextMonthName.slice(0, 3)}
            </div>
          )}
          <div key={index} style={{
            padding: '10px',
            textAlign: 'center',
            width: '40px',
          }}>
            {date.getDate()}
          </div>
          </React.Fragment>
        );
      })}
    </div>
    </Container>
  );
};

export default MyCalendar;