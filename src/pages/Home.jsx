import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import List from '../components/list/List';

const Home = () => {
  const navigate = useNavigate();

  return (
    <section className="d-flex flex-column pt-5">
      <div className="jumbotron">
        <h1 className="display-4">MotorcycleWiki</h1>
        <p className="lead">
          Wiki de motos para testar nested routes usando react-router-dom.
        </p>
        <hr />
        <button
          className="btn btn-primary"
          onClick={() => navigate('/motorcycles')}
        >
          Acessar wiki
        </button>
      </div>
    </section>
  );
};

export default Home;
