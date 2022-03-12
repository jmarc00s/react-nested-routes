import React from 'react';
import { Outlet } from 'react-router-dom';
import Container from '../Container';

const Content = () => {
  return (
    <section>
      <Container>
        <Outlet />
      </Container>
    </section>
  );
};

export default Content;
