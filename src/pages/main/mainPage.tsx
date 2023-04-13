import { useEffect, useState } from 'react';

import SearchBar from '../../components/searchBar/searchBar';
import CardList from '../../components/card-list/card-list';
import { ICard } from '../../components/card/card';
import CardWithMoreInfo from '../../components/card-with-more-info/card-with-more-info';
import Modal from '../../components/modal/modal';
import { useAppSelector } from '../../app/hooks';
import { selectSearchInput } from '../../features/searchInput/searchInput';
import { useGetCardsBySearchQueryQuery } from '../../services/rickAndMorty';

import './mainPage.styles.css';

export default function MainPage() {
  const searchInput = useAppSelector(selectSearchInput);
  const [isModalActive, setModalActive] = useState(false);
  const [modalCard, setModalCard] = useState<ICard>();
  const { data, isFetching } = useGetCardsBySearchQueryQuery(searchInput);

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

  return (
    <div className="mainpage-containter">
      <h2>Main page content</h2>
      <SearchBar />
      {isFetching ? (
        <p>Loading....</p>
      ) : (
        <CardList userData={data!.results} onCardClick={onCardClick} />
      )}
      <Modal isActive={isModalActive} onClose={closeModal}>
        {modalCard && <CardWithMoreInfo cardId={modalCard.id} />}
      </Modal>
    </div>
  );
}
