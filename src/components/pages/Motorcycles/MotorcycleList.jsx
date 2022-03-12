import React from 'react';
import { useParams } from 'react-router-dom';
import api from '../../../core/services/api';
import Card from '../../card/Card';
import List from '../../list/List';

const MotorcycleList = () => {
  const [motorcycles, setMotorcycles] = React.useState([]);
  const { brandId } = useParams();

  React.useEffect(() => {
    async function getMotorcycles() {
      const { data } = await api(`/motorcycles?brandId=${brandId}`);
      setMotorcycles(data);
    }
    getMotorcycles();
  }, [brandId]);

  return (
    <section className="row justify-content-center">
      {motorcycles.map((moto) => {
        return (
          <div className="col-md-3" key={moto.id}>
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
