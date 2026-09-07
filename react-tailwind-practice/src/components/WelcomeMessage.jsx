import { useState } from "react";

function WelcomeMessage() {
  const [message, setMessage] = useState("Hello intern");

  return (
    <div>
      <p>{message}</p>
      <button onClick={() => setMessage("Button clicked")}>Click me</button>
    </div>
  );
}

export default WelcomeMessage;
