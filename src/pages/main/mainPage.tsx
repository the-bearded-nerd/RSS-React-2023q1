import { useEffect, useState } from 'react';

import SearchBar from '../../components/searchBar/searchBar';
import CardList from '../../components/card-list/card-list';
import { ICard } from '../../components/card/card';
import CardWithMoreInfo from '../../components/card-with-more-info/card-with-more-info';
import Modal from '../../components/modal/modal';

import './mainPage.styles.css';

const BASE_URL = 'https://rickandmortyapi.com/api/character/?';

export default function MainPage() {
  const [isModalActive, setModalActive] = useState(false);
  const [modalCard, setModalCard] = useState<ICard>();
  const [cards, setCards] = useState([] as ICard[]);
  const [fetchURL, setFetchURL] = useState(BASE_URL);
  const [isLoading, setIsLoading] = useState(false);

  const openModal = () => {
    setModalActive(true);
  };
  const closeModal = () => {
    setModalActive(false);
  };

  const onCardClick = (card: ICard) => {
    setModalCard(card);
    openModal();
  };

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
      {isLoading ? <p>Loading....</p> : <CardList userData={cards} onCardClick={onCardClick} />}
      <Modal isActive={isModalActive} onClose={closeModal}>
        {modalCard ? <CardWithMoreInfo cardData={modalCard} /> : 'ничо'}
      </Modal>
    </div>
  );
}
