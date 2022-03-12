import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import List from '../components/list/List';
import api from '../core/services/api';

const Motorcycles = () => {
  const navigate = useNavigate();
  const [brands, setBrands] = React.useState([]);

  React.useEffect(() => {
    async function getBrands() {
      const { data } = await api('/brands');
      setBrands(data);
    }
    getBrands();
  }, []);

  function handleBrandClick(brand) {
    navigate(`${brand.id}/list`);
  }

  return (
    <section className="d-flex flex-column">
      <h2>Motos</h2>
      <div className="d-flex">
        <List>
          {brands?.map((brand) => (
            <List.Item key={brand.id} onClick={() => handleBrandClick(brand)}>
              {brand.name}
            </List.Item>
          ))}
        </List>
        <div className="flex-fill px-2">
          <Outlet />
        </div>
      </div>
    </section>
  );
};

export default Motorcycles;
