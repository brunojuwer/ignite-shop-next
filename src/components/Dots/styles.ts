import { styled } from "../../styles";


export const DotsContainer = styled('div', {
    
  padding: '10px 0',
  justifyContent: 'center',
  position: 'fixed',
  bottom: '15px',
  left: 'calc(100vw - 50%)',
  
  
})

export const Dot = styled('button', {
  border: 'none',
  width: '10px',
  height: '10px',
  background: '#c5c5c5',
  borderRadius: '50%',
  margin: '0 5px',
  padding: '5px',
  cursor: 'pointer',

  '&:focus': {
    outline: 'none'
  },
  
  '&.active': {
    background: '$green500'
  }

})