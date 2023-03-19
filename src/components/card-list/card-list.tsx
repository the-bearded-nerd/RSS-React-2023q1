import React from 'react';

import Card from '../card/card';
import { ICardProps } from '../card/card';

import './card-list.styles.css';

interface ICardListProps {
  userData: ICardProps[];
}

export default class CardList extends React.Component<ICardListProps, {}> {
  render() {
    const { userData } = this.props;
    return (
      <div className="card-list">
        {userData.map((singleUserData) => (
          <Card key={singleUserData.id} {...singleUserData} />
        ))}
      </div>
    );
  }
}
