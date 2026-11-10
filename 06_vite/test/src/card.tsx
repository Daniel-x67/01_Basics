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
  const index = Math.floor(Math.random() * words.length);
  const randomWords = words[index];
  return (
    <div className={styles.card}>
      <h2>{title}</h2>
      <img src={image + "?" + randomMath} alt="Hero" />
      <p>{text}</p>
      <p>{randomMath}</p>
      <p>{randomWords}</p>
    </div>
  );
}
