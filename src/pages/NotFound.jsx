import React from 'react';
import Container from '../components/Container';
import NotFoundSvg from '../assets/not-found.svg?component';
import Navbar from '../components/template/Navbar';

const NotFound = () => {
  return (
    <>
      <Navbar />
      <Container>
        <section className="d-flex flex-column justify-content-center align-items-center mt-5">
          <NotFoundSvg />
          <p className="mt-3">Página não encontrada</p>
        </section>
      </Container>
    </>
  );
};

export default NotFound;
