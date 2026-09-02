import { useMemo, useState } from 'react'

const numbers = Array.from({ length: 10000 }, (_, index) => index + 1)

function UseMemoDemo() {
const [count, setCount] = useState(0)

const expensiveCalculation = useMemo(() => {
console.log('Running expensive calculation...')

return numbers.reduce((total, number) => {
    return total + number * number
}, 0)
}, [])

return (
<div className="flex flex-col items-center gap-4">
    <p className="text-xl font-semibold">
    Count: {count}
    </p>

    <button
    onClick={() => setCount(count + 1)}
    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 active:bg-blue-800"
    >
    Increase Count
    </button>

    <p className="text-gray-700">
    Expensive calculation result: {expensiveCalculation}
    </p>

    <p className="text-sm text-gray-500">
    List contains {numbers.length} numbers.
    </p>
</div>
)
}

export default UseMemoDemo