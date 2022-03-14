import React from 'react';
import { NavLink, useParams } from 'react-router-dom';
import api from '../../../core/services/api';

const MotorcycleDetail = () => {
  const [motorcycle, setMotorcycle] = React.useState(null);
  const { motorcycleId } = useParams();

  React.useEffect(() => {
    async function getMotorcycleDetails() {
      const { data } = await api(`/motorcycles/${motorcycleId}`);
      setMotorcycle(data);
    }

    getMotorcycleDetails();
  }, []);

  return (
    <div className="row">
      <div className="col-sm-6">
        <img className="img-fluid" src={motorcycle?.imageUrl} alt="details." />
      </div>
      <div className="col-sm-6">
        <NavLink to={`/motorcycles/${motorcycle?.brandId}/list`}>
          Voltar
        </NavLink>
        <table className="table table-striped table-bordered">
          <thead className="table-dark">
            <tr>
              <th>Atributo</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Cilindrada</td>
              <td>{motorcycle?.details?.displacment}</td>
            </tr>
            <tr>
              <td>Potência</td>
              <td>{motorcycle?.details?.power}</td>
            </tr>
            <tr>
              <td>Torque</td>
              <td>{motorcycle?.details?.torque}</td>
            </tr>
            <tr>
              <td>Capacidade do tanque</td>
              <td>{motorcycle?.details?.fuelCapacity}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MotorcycleDetail;
