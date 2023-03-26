import React from 'react';

import FormCard, { IFormCard } from '../form-card/form-card';

interface IFormCardListProps {
  cards: IFormCard[];
}

export default class FormCardList extends React.Component<IFormCardListProps> {
  render() {
    const { cards } = this.props;
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
}
