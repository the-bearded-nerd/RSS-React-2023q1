import { useEffect, useState } from 'react';

import SearchBar from '../../components/searchBar/searchBar';
import CardList from '../../components/card-list/card-list';
import { ICard } from '../../components/card/card';

import './mainPage.styles.css';

const BASE_URL = 'https://rickandmortyapi.com/api/character/?';

export default function MainPage() {
  const [cards, setCards] = useState([] as ICard[]);
  const [fetchURL, setFetchURL] = useState(BASE_URL);
  const [isLoading, setIsLoading] = useState(false);

  const updateFetchURL = (textToSearch: string) => {
    const newURL =
      BASE_URL +
      new URLSearchParams({
        name: textToSearch,
      });
    setFetchURL(newURL);
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const response = await fetch(fetchURL);
      const json = await response.json();
      setCards(json.results || []);
      setIsLoading(false);
    };
    fetchData();
  }, [fetchURL]);

  return (
    <div className="mainpage-containter">
      <h2>Main page content</h2>
      <SearchBar onSubmit={updateFetchURL} />
      {isLoading ? <p>Loading....</p> : <CardList userData={cards} />}
    </div>
  );
}
