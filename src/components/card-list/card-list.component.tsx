// import { Component } from "react";
import { TMonster } from "../../App";

import Card from "../card/card.component";

import "./card-list.styles.css";

type TCardListProps = {
  monsters: TMonster[];
};

// APP FUNCTIONAL COMPONENT
const CardList = ({
  monsters,
}: TCardListProps) => (
  <div className="card-list">
    {monsters.map((monster) => {
      return (
        <Card
          key={monster.id}
          monster={monster}
        />
      );
    })}
  </div>
);

// APP CLASS COMPONENT
// class CardList extends Component {
//   render() {
//     const { monsters } = this.props;

//     return (
//       <div className="card-list">
//         {monsters.map((monster) => {
//           return <Card monster={monster} />;
//         })}
//       </div>
//     );
//   }
// }

export default CardList;
