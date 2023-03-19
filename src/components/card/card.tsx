import React from 'react';

import getUserImg from '../../utils/userpic';

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
      <div className="card">
        <img src={userImg} alt={`${username} photo`} />
        <p>{name}</p>
        <p>{username}</p>
        <p>{email}</p>
        <p>{phone}</p>
        <p>{website}</p>
      </div>
    );
  }
}
