// import { Component } from "react";
import { TMonster } from "../../App";

import "./card.styles.css";

type TCardProps = {
  monster: TMonster;
};

// APP FUNCTIONAL COMPONENT
const Card = ({ monster }: TCardProps) => {
  const { name, email, id } = monster;

  return (
    <div key={id} className="card-container">
      <img
        src={`https://robohash.org/${id}/?set=set2&size=180x180`}
        alt={`monster ${name}`}
      />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
};

// APP CLASS COMPONENT
// class Card extends Component {
//   render() {
//     const { name, email, id } = this.props.monster;

//     return (
//       <div key={id} className="card-container">
//         <img
//           src={`https://robohash.org/${id}/?set=set2&size=180x180`}
//           alt={`monster ${name}`}
//         />
//         <h2>{name}</h2>
//         <p>{email}</p>
//       </div>
//     );
//   }
// }

export default Card;
