import { styled } from "..";
import Link from "next/link";

export const HomeContainer = styled('main', {
  display: 'flex',
  width: '100%',
  marginLeft: 'auto',
  minHeight: 656,
  position: 'relative'
})

export const Product = styled(Link, {
  background: '$linearGradient',
  borderRadius: 8,
  padding: '0.25rem',
  cursor: 'pointer',
  position: 'relative',
  overflow: 'hidden',
  maxWidth: '696px',
  width: '100%',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    objectFit:'cover'
  },

  '&:hover': {
    footer: {
      transform: 'translateY(0%)',
      opacity:1,
    }
  }
  
})


export const ProductInfo = styled('footer', {
    position: 'absolute',
    bottom: '0.25rem',
    left: '0.25rem',
    right: '0.25rem',
    padding: '1.5rem',

    borderRadius: 6,
    
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    backgroundColor: 'rgba(0, 0, 0, 0.6)',

    transform: 'translateY(110%)',
    opacity: 0,
    transition: 'all 0.2s ease-in-out',

    div: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.75rem'
    },

    strong: {
      fontSize: '$lg',
      color: '$gray100'
    },

    span: {
      fontSize: '$xl',
      fontWeight: 'bold',
      color: '$green300'
    },
})


export const RightArrowContainer = styled('div', {
  position: 'fixed',
  maxWidth: '100px',
  width: '100%',
  right: 0,

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  cursor: 'pointer',

  transition: 'background-color 0.3s',

  '&:hover': {
    color: '$white'
  }
})

export const LeftArrowContainer = styled('div', {
  position: 'fixed',
  maxWidth: '100px',
  width: '100%',
  left: 0,

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  cursor: 'pointer',

  transition: 'background-color 0.3s',

  '&:hover': {
    color: '$white'
  }
})