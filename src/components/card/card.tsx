import React from 'react';

import getUserImg from '../../utils/userpic';

import './card.styles.css';

export interface ICard {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
}

export interface ICardProps {
  cardData: ICard;
}

export class Card extends React.Component<ICardProps, unknown> {
  constructor(props: ICardProps) {
    super(props);
    this.state = {};
  }

  render() {
    const { cardData } = this.props;
    const { username, name, email, phone, website } = cardData;
    const userImg = getUserImg(username);
    return (
      <div className="card" role="listitem">
        <img className="card-img" src={userImg} alt={`${username}`} />
        <p className="card-name">{name}</p>
        <p className="card-username">{username}</p>
        <a href={`mailto:${email}`} className="card-email">
          {email}
        </a>
        <a href={`tel:${phone}`} className="card-phone">
          {phone}
        </a>
        <a href={`${website}`} className="card-website">
          {website}
        </a>
      </div>
    );
  }
}
