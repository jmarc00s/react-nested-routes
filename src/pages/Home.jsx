import React from 'react';
import List from '../components/list/List';

const Home = () => {
  return (
    <section className="d-flex flex-column pt-5">
      <div className="row">
        <div className="col-sm-3 border-right">
          <List>
            <List.Item>Item 1</List.Item>
            <List.Item>Item 2</List.Item>
            <List.Item>Item 3</List.Item>
            <List.Item>Item 4</List.Item>
            <List.Item>Item 5</List.Item>
          </List>
        </div>
        <div className="col-sm-9">Details</div>
      </div>
    </section>
  );
};

export default Home;
