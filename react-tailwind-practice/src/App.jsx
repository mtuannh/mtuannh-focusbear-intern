import HelloWorld from './components/HelloWorld'

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-xl shadow-md text-center">
        <HelloWorld name="Nick" />

        <p className="mt-4 text-gray-600">
          This is my first React component using props.
        </p>
      </div>
    </div>
  )
}

export default App