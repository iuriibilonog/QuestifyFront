import s from "./ModalNevCard.module.css";
import { useState } from "react";

import DifficultModal from "../DifficultModal";
import DeleteModule from "../modalDelete";

const ModalNewCard = () => {
  const [modal, setmodal] = useState(false);
  const [difficult, setdifficult] = useState("Normal");
  const [deleteModal, setdeleteModal] = useState(false);

  function onclick() {
    // alert("type");
    setmodal(!modal);
  }

  function change(data) {
    setdifficult(data);
    onclick();
  }

  function deleteHandler(bool) {
    if (bool) {
      alert("delete");
      onDelete();
    }
    onDelete();
  }

  function onDelete() {
    setdeleteModal(!deleteModal);
  }

  return (
    <ul className={s.cardSet}>
      <li className={s.card}>
        {modal && <DifficultModal change={change} />}
        {deleteModal && <DeleteModule change={deleteHandler} />}
        <p className={s.cardCategoryName}>
          <span
            className={
              (s.cardCategoryCircle,
              difficult === "Normal"
                ? s.secondOption
                : difficult === "Hard"
                ? s.thirdOption
                : s.firstOption)
            }
          >
            &#9679;
          </span>
          <span className={s.cartCategory} onClick={onclick}>
            {difficult}
          </span>
          <span className={s.cardCategoryStart}>&#9733;</span>
        </p>
        <p className={s.challenge}>edit challenge</p>
        <h2 className={s.cardTitle}>Todo name</h2>
        <p className={s.cardDate}>Date</p>
        <div className={s.bottomMenu}>
          <p className={s.cardType}>type</p>
          <span className={s.cross} onClick={onDelete}>
            &#10006;
          </span>
          <span className={s.start}>START</span>
        </div>
      </li>
    </ul>
  );
};

export default ModalNewCard;
