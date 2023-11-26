import React from 'react';
import { useRouter } from 'next/router';

const ViewTicket = () => {
  const router = useRouter();
  const { ticketId } = router.query;

  return (
    <div>
      <h1>View Ticket: {ticketId}</h1>
      {/* Add your ticket view here */}
    </div>
  );
};

export default ViewTicket;