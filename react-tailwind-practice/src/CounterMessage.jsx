import { useSelector } from "react-redux";
import { selectCount } from "./redux/selectors";

function CounterMessage() {
  const count = useSelector(selectCount);

  let message;

  if (count === 0) {
    message = "The counter is at zero.";
  } else if (count > 0) {
    message = "The counter is positive.";
  } else {
    message = "The counter is negative.";
  }

  return <p>{message}</p>;
}

export default CounterMessage;
