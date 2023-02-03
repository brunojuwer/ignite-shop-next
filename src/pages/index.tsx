import { styled } from "../styles"

const Button = styled('button',{
  backgroundColor: "$rocketseat",
  border: 0,
  borderRadius: 6, 
  cursor: 'pointer'
})

export default function Home() {
  return (
   <Button>Hello World!</Button>
  )
}
