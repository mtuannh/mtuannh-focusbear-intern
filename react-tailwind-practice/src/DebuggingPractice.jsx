import { useEffect, useState } from 'react';

function DebuggingPractice() {
    const [count, setCount] = useState(0);

    useEffect(() => {
    const timer = setInterval(() => {
        setCount((previousCount) => previousCount + 1);
    }, 1000);

    return () => clearInterval(timer);
    }, []);

    return (
    <div>
        <h2>Debugging Practice</h2>
        <p>Count: {count}</p>
    </div>
    );
}

export default DebuggingPractice;