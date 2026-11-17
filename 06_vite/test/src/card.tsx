import { useState } from "react";
import styles from "./card.module.css";

type Props = {
  title: string;
  text: string;
  image: string;
};
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
export default function card({ title, text, image }: Props) {
  // strg - blank
  const [counter, setCounter] = useState(0);
  const randomMath = Math.floor(Math.random() * 10);
  const [imageUrl, setImageUrl] = useState(image + "?" + randomMath);

  const index = Math.floor(Math.random() * words.length);
  const randomWords = words[index];

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
      <img src={imageUrl} alt="Hero" />
      <p>{text}</p>
      <p>{randomMath}</p>
      <p>{randomWords}</p>
      <p>Amount of clicks {counter}</p>
      <button
        onClick={() => {
          setImageUrl(image + "?" + Math.random());
        }}
      >
        Change Image
      </button>
    </div>
  );
}
