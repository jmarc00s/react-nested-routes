import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import api from '../../../core/services/api';
import Card from '../../card/Card';

const MotorcycleList = () => {
  const [motorcycles, setMotorcycles] = React.useState([]);
  const { brandId } = useParams();
  const navigate = useNavigate();

  React.useEffect(() => {
    async function getMotorcycles() {
      const { data } = await api(`/motorcycles?brandId=${brandId}`);
      setMotorcycles(data);
    }
    getMotorcycles();
  }, [brandId]);

  function handleMotoClick(moto) {
    navigate(`/motorcycles/${moto.id}/details`);
  }

  return (
    <section className="row justify-content-center">
      {motorcycles.map((moto) => {
        return (
          <div
            className="col-md-3 cursor-pointer"
            key={moto.id}
            onClick={() => handleMotoClick(moto)}
          >
            <Card>
              <Card.Image src={moto.imageUrl} alt={moto.name} />
              <Card.Body>
                <Card.Title>{moto.name}</Card.Title>
              </Card.Body>
            </Card>
          </div>
        );
      })}
    </section>
  );
};

export default MotorcycleList;
