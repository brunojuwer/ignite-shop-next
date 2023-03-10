import Link from 'next/link'
import { styled } from '..'

export const NavContainer = styled(Link, {
  maxWidth: 1180,
  width: '100%',
  margin: '0 auto',
  paddingBottom: '1rem',

  display: 'flex',
  alignItems: 'center',
  gap: '5px',

  cursor: 'pointer',
  color: '$gray300',
  textDecoration: 'none',

  p: {
    transition: 'all 0.2s ease-in-out',
    transform: 'translateX(110%)',
    opacity: 0,
  },

  '&:hover': {
    color: '$white',

    p: {
      opacity: 1,
      transform: 'translateX(0%)',
      transition: 'all 0.3s ease-in-out',
    },
  },
})

export const ProductContainer = styled('main', {
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  alignItems: 'stretch',
  gap: '4rem',

  maxWidth: 1180,
  margin: '0 auto',
})

export const ImageContainer = styled('div', {
  width: '100%',
  maxWidth: 576,
  height: '656px',
  background: '$linearGradient',
  borderRadius: 8,
  padding: '0.25rem',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    objectFit: 'cover',
  },
})

export const ProductDetails = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  h1: {
    fontSize: '$2xl',
    color: '$gray300',
  },

  span: {
    marginTop: '1rem',
    display: 'block',
    fontSize: '$2xl',
    color: '$green300',
  },

  p: {
    marginTop: '2.5rem',
    fontSize: '$md',
    lineHeight: 1.6,
    color: '$gray300',
  },

  button: {
    marginTop: 'auto',
    background: '$green500',
    color: 'white',
    padding: '1.25rem',
    border: 0,
    borderRadius: 8,
    fontWeight: 'bold',
    fontSize: '$md',
    cursor: 'pointer',

    '&:disabled': {
      cursor: 'not-allowed',
      opacity: '0.6',
    },

    '&:not(:disabled):hover': {
      background: '$green300',
    },
  },
})
