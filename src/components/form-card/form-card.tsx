import React from 'react';

export interface IFormCard {
  name: string;
  date: string;
  imgURL: string;
  gender: string;
  option: string;
  id?: number;
}

export default class FormCard extends React.Component<IFormCard> {
  render() {
    const { name, date, imgURL, gender, option } = this.props;
    return (
      <div className="card">
        <img className="card-img" src={imgURL} alt="" />
        <p className="card-name">{name}</p>
        <p className="card-general">{date}</p>
        <p className="card-general">{option}</p>
        <p className="card-general">{gender}</p>
      </div>
    );
  }
}
