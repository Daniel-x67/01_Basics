import "./App.css";
import styles from "./App.module.css";
import Card from "./card";
function App() {
  return (
    <>
      <h1>Wilkommen</h1>

      <div className={styles.cardcontainer}>
        <Card
          title="Tim"
          text="Das ist toll"
          image="https://picsum.photos/200/300"
        />
        <Card
          title="Dani"
          text="Das ist auch toll"
          image="https://picsum.photos/200/300"
        />
      </div>
    </>
  );
}

export default App;
