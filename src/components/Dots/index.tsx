import { Dot, DotsContainer } from './styles'

interface DotsProps {
  instanceRef: any
  currentSlide: number
}

export function Dots({ instanceRef, currentSlide }: DotsProps) {
  return (
    <DotsContainer>
      {instanceRef.current.track.details.slides.map((idx, index) => {
        return (
          <Dot
            key={index}
            onClick={() => {
              instanceRef.current?.moveToIdx(index)
            }}
            className={'dot' + (currentSlide === index ? ' active' : '')}
          ></Dot>
        )
      })}
    </DotsContainer>
  )
}
