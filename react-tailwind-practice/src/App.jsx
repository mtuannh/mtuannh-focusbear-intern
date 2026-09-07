import Counter from "./Counter";
import CounterMessage from "./CounterMessage";
import DebuggingPractice from "./DebuggingPractice";
import WelcomeMessage from "./components/WelcomeMessage";

function App() {
  return (
    <div>
      <h1>Redux Toolkit Counter</h1>
      <p>This change was made through a Pull Request.</p>
      <Counter />
      <CounterMessage />

      <DebuggingPractice />
      <WelcomeMessage />
    </div>
  );
}

export default App;
