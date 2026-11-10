import React from "react";
import styles from "./card.module.css";

type Props = {
  title: string;
  text: string;
  image: string;
};

export default function card({ title, text, image }: Props) {
  const random = Math.floor(Math.random() * 10);

  return (
    <div className={styles.card}>
      <h2>{title}</h2>
      <img src={image + "?" + random} alt="Hero" />
      <p>{text}</p>
      <p>{random}</p>
    </div>
  );
}
