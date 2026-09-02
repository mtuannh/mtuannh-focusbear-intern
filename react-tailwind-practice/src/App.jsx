function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-xl shadow-md text-center">
        <h1 className="text-3xl font-bold text-gray-800">
          React + Tailwind CSS
        </h1>

        <p className="mt-4 text-gray-600">
          My first React project using Tailwind CSS.
        </p>

        <button className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Test Button
        </button>
      </div>
    </div>
  )
}

export default App