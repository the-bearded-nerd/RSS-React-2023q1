import React from 'react';

import getUserImg from '../../utils/userpic';

import './card.styles.css';

export interface ICardProps {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
}

export default class Card extends React.Component<ICardProps, {}> {
  render() {
    const { username, name, email, phone, website } = this.props;
    const userImg = getUserImg(username);
    return (
      <div className="card" role="card">
        <img className="card-img" src={userImg} alt={`${username} photo`} />
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
