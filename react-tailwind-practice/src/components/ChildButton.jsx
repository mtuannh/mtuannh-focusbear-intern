import { memo } from 'react'

function ChildButton({ onClick }) {
    console.log('ChildButton rendered')

    return (
    <button
        onClick={onClick}
        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 active:bg-blue-800"
    >
        Click Child Button
    </button>
    )
}

export default memo(ChildButton)