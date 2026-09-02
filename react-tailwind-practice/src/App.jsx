import ListForm from './components/ListForm'

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-xl shadow-md">
        <h1 className="text-2xl font-bold mb-4">
          My List
        </h1>

        <ListForm />
      </div>
    </div>
  )
}

export default App