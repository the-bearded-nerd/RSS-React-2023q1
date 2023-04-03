import './card.styles.css';

export interface ICard {
  id: number;
  name: string;
  status: string;
  gender: string;
  image: string;
  species: string;
}

export interface ICardProps {
  cardData: ICard;
}

export function Card({ cardData }: ICardProps) {
  const { name, status, gender, image, species } = cardData;
  return (
    <div className="card" role="listitem">
      <img className="card-img" src={image} alt={`${name}`} />
      <p className="card-name">{name}</p>
      <p>{status}</p>
      <p>{gender}</p>
      <p>{species}</p>
    </div>
  );
}
