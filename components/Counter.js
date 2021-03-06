import {useState, useEffect} from 'react'

export default function Counter() {
  const [count, setCount] = useState(0)

  useEffect(() => console.log('re-rendered'), [])

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>inc</button>
      <button onClick={() => setCount(count - 1)}>dec</button>
    </div>
  )
}
