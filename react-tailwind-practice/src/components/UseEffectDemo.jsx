import { useEffect, useState } from 'react'

function UseEffectDemo() {
const [data, setData] = useState(null)
const [loading, setLoading] = useState(false)

useEffect(() => {
console.log('UseEffectDemo mounted')

return () => {
    console.log('UseEffectDemo unmounted')
}
}, [])

const handleFetch = async () => {
setLoading(true)

try {
    const response = await fetch(
    'https://jsonplaceholder.typicode.com/todos/1'
    )

    const result = await response.json()
    setData(result)
} catch (error) {
    console.error('Failed to fetch data:', error)
} finally {
    setLoading(false)
}
}

return (
<div className="flex flex-col items-center gap-4">
    <button
    onClick={handleFetch}
    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 active:bg-blue-800"
    >
    Fetch Data
    </button>

    {loading && (
    <p className="text-gray-600">
        Loading...
    </p>
    )}

    {data && (
    <div className="p-4 bg-gray-100 rounded-lg">
        <p>
        <strong>ID:</strong> {data.id}
        </p>

        <p>
        <strong>Title:</strong> {data.title}
        </p>
    </div>
    )}
</div>
)
}

export default UseEffectDemo