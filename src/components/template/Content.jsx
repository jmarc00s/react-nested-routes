import React from 'react';
import { Outlet } from 'react-router-dom';
import Container from '../Container';

const Content = () => {
  return (
    <section>
      <Container className="pt-4">
        <Outlet />
      </Container>
    </section>
  );
};

export default Content;
