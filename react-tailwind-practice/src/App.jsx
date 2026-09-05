import ContactForm from './components/ContactForm'

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-xl shadow-md">
        <h1 className="text-2xl font-bold mb-6 text-center">
          Contact Form
        </h1>

        <ContactForm />
      </div>
    </div>
  )
}

export default App