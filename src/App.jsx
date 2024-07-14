import toast from "react-hot-toast"

function App() {

  return (
    <>
      <h1 className="text-3xl text-athena font-bold animate-bounce text-center my-8">Welcome to Athena Design</h1>
      <div className="flex justify-center text-center">
        <button className="border border-athena bg-athena px-3 py-1 text-white font-bold text-xl font-montserrat hover:bg-transparent hover:text-athena transition-all duration-500"
          onClick={() => toast('Hi from Athena! 👋', {
            style: {
              borderRadius: '10px',
              background: '#333',
              color: '#fff',
            },
          })}>Click to Toast</button>
     </div>
    </>
  )
}

export default App
