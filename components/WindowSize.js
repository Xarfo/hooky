import useWindowSize from '@rehooks/window-size'

export default function WindowSize () {
  let windowSize = useWindowSize()
  return <div>
    <h1>{windowSize.innerWidth}</h1>
    <style jsx>{`

    `}</style>
  </div>
}
