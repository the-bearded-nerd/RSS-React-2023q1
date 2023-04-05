import { useEffect } from 'react';

import './card.styles.css';

interface ILocation {
  name: string;
}

export interface ICard {
  id: number;
  name: string;
  status: string;
  gender: string;
  image: string;
  species: string;
  location: ILocation;
  origin: ILocation;
  url: string;
}

export interface ICardProps {
  cardData: ICard;
  onCardClick: (card: ICard) => void;
}

export function Card({ cardData, onCardClick }: ICardProps) {
  useEffect(() => {
    const fetchCardData = async () => {
      const response = await fetch(cardData.url);
      const responseJson = await response.json();
      console.log(responseJson);
      console.log('q');
    };
  }, []);

  const { name, status, gender, image, species } = cardData;
  return (
    <div
      className="card"
      role="listitem"
      onClick={() => {
        onCardClick(cardData);
      }}
      onKeyDown={() => {}}
    >
      <img className="card-img" src={image} alt={`${name}`} />
      <p className="card-name">{name}</p>
      <div className="card-info">
        <p>Status: {status}</p>
        <p>Gender: {gender}</p>
        <p>Species: {species}</p>
      </div>
    </div>
  );
}
