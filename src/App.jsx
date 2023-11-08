import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  const [tag, setTag] = useState("incremented by + 1")

  const isIncrease = () => {
    if (count >= 0 && count < 20) {
      if(tag === "decrement by - 1")
        setTag("incremented by + 1")

      setCount (count + 1);
    }
  }

  const isDecrease = () => {
    if (count > 0) {
      if(tag === "incremented by + 1")
        setTag("decrement by - 1")

      setCount (count - 1);
    }
  }
  
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {count == 0 ? (
        <div className="text-center p-4">Counter value is {count}</div>
      ) : (
        <div className="text-center p-4">
          Count value is {tag} = {count}
        </div>
      )}
      <div className="space-x-4 mt-4">
        <button
          type="button"
          className="rounded-full bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm"
          onClick={isDecrease}
        >
          Decrement
        </button>
        <button
          type="button"
          className="rounded-full bg-white px-3 py-2 text-sm font-semibold text-black shadow-sm"
          onClick={isIncrease}
        >
          Increment
        </button>
      </div>
    </div>
  )
}

export default App
