import { useEffect, useState } from 'react';

import { ICard } from '../card/card';

import './card-with-more-info.styles.css';

interface ICardWithMoreInfoProps {
  cardURL: string;
}

export default function CardWithMoreInfo({ cardURL }: ICardWithMoreInfoProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [currentCard, setCurrentCard] = useState<ICard>();

  useEffect(() => {
    const fetchCardData = async () => {
      setIsLoading(true);
      const response = await fetch(cardURL);
      const responseJson = await response.json();
      setCurrentCard(responseJson);
      setIsLoading(false);
    };
    fetchCardData();
  }, [cardURL]);

  if (!currentCard || isLoading) {
    return <p>Loading.....</p>;
  }
  const { name, status, gender, image, species, location, origin } = currentCard;
  return (
    <div className="card-wmi" role="listitem">
      {isLoading && 'Loading....'}
      <img className="card-wmi-img" src={image} alt={`${name}`} />
      <p className="card-wmi-name">{name}</p>
      <p>Status: {status}</p>
      <p>Gender: {gender}</p>
      <p>Species: {species}</p>
      <p>Origin: {origin.name}</p>
      <p>Location: {location.name}</p>
    </div>
  );
}
