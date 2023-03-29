import FormCard, { IFormCard } from '../form-card/form-card';

interface IFormCardListProps {
  cards: IFormCard[];
}

export default function FormCardList({ cards }: IFormCardListProps) {
  return (
    <div className="card-list">
      {cards.map((card) => (
        <FormCard
          key={card.id}
          name={card.name}
          date={card.date}
          gender={card.gender}
          imgURL={card.imgURL}
          option={card.option}
        />
      ))}
    </div>
  );
}
