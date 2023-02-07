import { Dot, DotsContainer } from "./styles";

interface DotsProps {
  instanceRef: any,
  currentSlide: number,
}

export function Dots({instanceRef, currentSlide}: DotsProps) {
    return (
        <DotsContainer>
          {[ ...Array(instanceRef.current.track.details.slides.length).keys()].map((idx) => {
          return (
              <Dot
              key={idx}
              onClick={() => {
                  instanceRef.current?.moveToIdx(idx);
              }}
              className={"dot" + (currentSlide === idx ? " active" : "")}
              ></Dot>
          );
          })}
      </DotsContainer>
    )
}