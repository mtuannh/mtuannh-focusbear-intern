import Counter from "./Counter";
import CounterMessage from "./CounterMessage";
import DebuggingPractice from "./DebuggingPractice";

function App() {
  return (
    <div>
      <h1>Redux Toolkit Counter</h1>
      <p>This change was made through a Pull Request.</p>
      <Counter />
      <CounterMessage />

      <DebuggingPractice />
    </div>
  );
}

export default App;
