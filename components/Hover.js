import { useRef, useState, useEffect } from 'react'

function Hover () {
    const ref = useRef()
    const isHovered = useHover(ref)
    return <div ref={ref}>
      {isHovered ? ':)' : ':('}
    </div>
}

function useHover(ref) {
    const [isHovered, setHover] = useState(true)

    const handleMouseOver = () => setHover(true)
    const handleMouseOut = () => setHover(false)

    useEffect(() => {
	if(ref && ref.current) {
	    ref.current.addEventListener('mouseover', handleMouseOver)
	    ref.current.addEventListener('mouseout', handleMouseOut)
	}

	return () => {
	    if (ref) {
		ref.current.removeEventListener('mouseover', handleMouseOver)
		ref.current.removeEventListener('mouseout', handleMouseOut)
	    }
	}
    }, [])

    return isHovered
}

export default Hover
