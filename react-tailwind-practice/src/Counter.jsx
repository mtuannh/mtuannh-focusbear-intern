import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './redux/counterSlice';
import { selectCount } from './redux/selectors';

function Counter() {
    const count = useSelector(selectCount);
    const dispatch = useDispatch();

    return (
    <div>
        <h2>Counter: {count}</h2>

        <button onClick={() => dispatch(increment())}>
        +
        </button>

        <button onClick={() => dispatch(decrement())}>
        -
        </button>
    </div>
    );
}

export default Counter;