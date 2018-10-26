import { useState } from 'react'

function Counter () {
  const [count, setCount] = useState(0)
  return <div>
    <p>{count}</p>
    <button onClick={() => setCount(count + 1)}>
      inc
    </button>
    <button onClick={() => setCount(count - 1)}>
      dec
    </button>
  </div>
}

export default Counter
