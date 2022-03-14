import React from 'react';
import Container from '../components/Container';
import { useSearchParams } from 'react-router-dom';

const Search = () => {
  const [searchParams] = useSearchParams();

  const query = React.useMemo(() => searchParams.get('q'), [searchParams]);

  return (
    <Container>
      <section className="mt-3">Pesquisou por {query}</section>
    </Container>
  );
};

export default Search;
