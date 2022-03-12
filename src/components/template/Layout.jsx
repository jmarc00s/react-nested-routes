import React from 'react';
import Container from '../Container';
import Navbar from './Navbar';
import Content from './Content';

const Layout = () => {
  return (
    <section className="min-h-screen">
      <Navbar />
      <Content />
    </section>
  );
};

export default Layout;
