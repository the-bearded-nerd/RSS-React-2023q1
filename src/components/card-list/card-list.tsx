import React from 'react';

import { Card, ICard } from '../card/card';

import './card-list.styles.css';

interface ICardListProps {
  userData: ICard[];
}

export default class CardList extends React.Component<ICardListProps, unknown> {
  constructor(props: ICardListProps) {
    super(props);
    this.state = {};
  }

  render() {
    const { userData } = this.props;
    return (
      <div className="card-list">
        {userData.map((singleUserData) => (
          <Card key={singleUserData.id} cardData={singleUserData} />
        ))}
      </div>
    );
  }
}
