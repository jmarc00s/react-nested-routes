import React from 'react';
import Container from '../components/Container';
import { useNavigate, useSearchParams } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import Card from '../components/card/Card';
import api from '../core/services/api';

const Search = () => {
  const [result, setResult] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const query = React.useMemo(() => searchParams.get('q'), [searchParams]);
  const showNotFoundMessage = !result.length && !loading;
  const showMotorcycleList = !!result.length && !loading;

  React.useEffect(() => {
    async function findMotorcycles() {
      setLoading(true);
      const { data } = await api(`/motorcycles?name_like=${query}`);
      setResult(data);
      setLoading(false);
    }
    findMotorcycles();
  }, [query]);

  function handleMotoClick(moto) {
    navigate(`/motorcycles/${moto.id}/details`);
  }

  return (
    <Container>
      <section className="d-flex flex-column">
        <PageHeader title={`Resultados de pesquisa para '${query}'`} />
        {loading && <>Carregando...</>}
        {showNotFoundMessage && (
          <p className="text-center">Nenhum resultado encontrado.</p>
        )}
        <div className="d-grid grid-cols-3 gap-1">
          {showMotorcycleList &&
            result.map((moto) => (
              <div
                className="cursor-pointer"
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
            ))}
        </div>
      </section>
    </Container>
  );
};

export default Search;
