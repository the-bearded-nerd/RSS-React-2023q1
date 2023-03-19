import React from 'react';

import Card from '../card/card';
import { ICardProps } from '../card/card';
import userData from '../../usersData.json';

export default class CardList extends React.Component {
  render() {
    return (
      <div className="card-list">
        {userData.map((singleUserData) => (
          <Card key={singleUserData.id} {...singleUserData} />
        ))}
      </div>
    );
  }
}
