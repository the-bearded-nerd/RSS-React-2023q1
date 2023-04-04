import { Card, ICard } from '../card/card';

import './card-list.styles.css';

interface ICardListProps {
  userData: ICard[];
  onCardClick: (card: ICard) => void;
}

export default function CardList({ userData, onCardClick }: ICardListProps) {
  return (
    <div className="card-list">
      {userData.length === 0 ? (
        <p>No results found</p>
      ) : (
        userData.map((singleUserData) => (
          <Card key={singleUserData.id} cardData={singleUserData} onCardClick={onCardClick} />
        ))
      )}
    </div>
  );
}
