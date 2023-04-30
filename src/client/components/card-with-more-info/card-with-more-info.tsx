import './card-with-more-info.styles.css';

interface ICardWithMoreInfoProps {
  cardId: number;
}

import { useGetCardByIdQuery } from '../../../services/rickAndMorty';

export default function CardWithMoreInfo({ cardId }: ICardWithMoreInfoProps) {
  const { data, isFetching } = useGetCardByIdQuery(cardId);

  if (isFetching) return <p>Loading.....</p>;
  else if (!data) {
    return <p>No data found =( </p>;
  }

  const { name, status, gender, image, species, location, origin } = data;
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
