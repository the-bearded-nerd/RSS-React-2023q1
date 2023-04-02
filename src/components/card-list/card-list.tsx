import { Card, ICard } from '../card/card';

import './card-list.styles.css';

interface ICardListProps {
  userData: ICard[];
}

export default function CardList({ userData }: ICardListProps) {
  return (
    <div className="card-list">
      {userData.map((singleUserData) => (
        <Card key={singleUserData.id} cardData={singleUserData} />
      ))}
    </div>
  );
}
