import Card from "../Card";

import "../../utils/variables.css";
import s from "./CardsToday.module.css";
import { useState } from "react";
import ChallengeCart from "../modal/ChallengeCart";
import data from "./temporaryData.json";

const CardsToday = () => {
  const [isChallenge, setChallenger] = useState(true);
  const [carts, setCarts] = useState(data);

  function takeData(cart) {
    console.log(cart);
    setChallenger(cart.isChallenge);
  }

  return (
    <section className={s.section}>
      <h2 className={s.title}>Today</h2>

      <ul className={s.cardSet}>
        {data.map((cart) => {
          return cart.isChallenge ? (
            <ChallengeCart key={cart.id} cart={cart} data={takeData} />
          ) : (
            <Card key={cart.id} cart={cart} data={takeData} />
          );
        })}
      </ul>
    </section>
  );
};

export default CardsToday;
