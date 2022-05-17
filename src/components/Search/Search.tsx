import { useState } from 'react';
import * as Style from './Search.style';
import { SearchProps } from './Search.types';

const Search = ({ onChange }: SearchProps) => {
  const [term, setTerm] = useState('');

  const handleOnSubmit = (event: any) => {
    event.preventDefault();
    onChange(term);
  };

  const handleInputChange = (event: any) => {
    const term = event.target.value;
    setTerm(term);

    if (term.length >= 3) {
      onChange(term);
    }
  };

  const handleInputBlur = (event: any) => {
    const term = event.target.value;

    if (term.length === 0) {
      onChange(null);
    }
  };

  return (
    <Style.Form onSubmit={handleOnSubmit} data-testid="search">
      <Style.Input onChange={handleInputChange} onBlur={handleInputBlur} data-testid="search-input" />
      <button type="submit" data-testid="search-button">Buscar</button>
    </Style.Form>
  );
};

export default Search;
