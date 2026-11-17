import { useState } from "react";
import styles from "./card.module.css";

type Props = {
  title: string;
  text: string;
  image: string;
};

export default function card({ title, text, image }: Props) {
  const randomMath = Math.floor(Math.random() * 10);

  const words = [
    "happy",
    "sad",
    "angry",
    "excited",
    "bored",
    "tired",
    "hungry",
    "thirsty",
    "confused",
    "curious",
  ];
  // strg - blank
  const [counter, setCounter] = useState(0);
  const index = Math.floor(Math.random() * words.length);
  const randomWords = words[index];
  const [random, setRandom] = useState(Math.random());
  return (
    <div
      className={styles.card}
      onClick={() => {
        let newCounter = counter + 1;
        setCounter(newCounter);
        console.log(counter);
      }}
    >
      <h2>{title}</h2>
      <img src={image + "?" + randomMath} alt="Hero" />
      <p>{text}</p>
      <p>{randomMath}</p>
      <p>{randomWords}</p>
      <p>Amount of clicks {counter}</p>
      <button
        onClick={() => {
          setRandom(Math.random());
        }}
      >
        Change Image
      </button>
    </div>
  );
}
