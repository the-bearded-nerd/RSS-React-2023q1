export interface IFormCard {
  name: string;
  date: string;
  imgURL: string;
  gender: string;
  option: string;
  id?: number;
}

export default function FormCard({ name, date, imgURL, gender, option }: IFormCard) {
  return (
    <div className="card" role="listitem">
      <img className="card-img" src={imgURL} alt="" />
      <p className="card-name">{name}</p>
      <p className="card-general">{date}</p>
      <p className="card-general">{option}</p>
      <p className="card-general">{gender}</p>
    </div>
  );
}
