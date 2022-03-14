import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import List from '../components/list/List';
import PageHeader from '../components/PageHeader';
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
    <section>
      <PageHeader title="Motos" />
      <div className="row">
        <div className="col-md-3 ">
          <List>
            {brands?.map((brand) => (
              <List.Item key={brand.id} onClick={() => handleBrandClick(brand)}>
                {brand.name}
              </List.Item>
            ))}
          </List>
        </div>

        <div className="col-md-9 px-2">
          <Outlet />
        </div>
      </div>
    </section>
  );
};

export default Motorcycles;
