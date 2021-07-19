import logo from "./logo.svg";
import styles from "./App.module.css";
import Counter from "./Counter";

function App() {
  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <img src={logo} class={styles.logo} alt="logo" />
        <Counter />
      </header>
    </div>
  );
}

export default App;
