import { ICard } from '../card/card';

import './card-with-more-info.styles.css';

interface ICardWithMoreInfoProps {
  cardData: ICard;
}

export default function CardWithMoreInfo({ cardData }: ICardWithMoreInfoProps) {
  const { name, status, gender, image, species, location, origin } = cardData;
  return (
    <div className="card-wmi" role="listitem">
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
