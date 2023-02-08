import * as Dialog from '@radix-ui/react-dialog'
import { styled } from '../../styles'

export const Overlay = styled(Dialog.Overlay, {
  background: 'transparent',
})

export const Content = styled(Dialog.Content, {
  position: 'fixed',
  top: 0,
  bottom: 0,
  right: 0,
  maxWidth: '30rem',
  width: '100%',
  background: '$gray800',
  padding: '4rem 3rem',

  borderTopLeftRadius: 10,
  borderBottomLeftRadius: 10,
  boxShadow: '-15px 1px 57px -19px #000000',
})

export const Title = styled(Dialog.Title, {
  fontSize: '1.25rem',
  fontWeight: 'bold',
})

export const CloseButton = styled('button', {
  position: 'absolute',
  top: '1rem',
  right: '1rem',

  background: 'transparent',
  color: '$gray300',
  border: 0,
  width: 24,
  height: 24,

  cursor: 'pointer',

  '&:hover': {
    color: '$white',
  },
})

export const CartProducts = styled('ul', {
  marginTop: '1rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
})

export const ProductOrder = styled('li', {
  display: 'flex',
})

export const ImageContainer = styled('div', {
  background: '$linearGradient',
  borderRadius: 6,
  padding: '0.25rem',
})

export const ProductInfo = styled('div', {
  marginLeft: '1rem',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-evenly',

  h4: {
    color: '$gray300',
    fontWeight: '400',
    lineHeight: 1.6,
  },

  button: {
    alignSelf: 'flex-start',
    background: 'transparent',
    border: 0,
    color: '$green500',
    fontWeight: 'bold',
    fontSize: '1rem',

    cursor: 'pointer',
    transition: 'color 0.2s',

    '&:hover': {
      color: '$green300',
    },
  },
})

export const ReviewSection = styled('section', {
  position: 'absolute',
  bottom: '5rem',
  maxWidth: '390px',
  width: '100%',

  div: {
    padding: '0.25rem 0',
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',

    span: {
      fontSize: '1rem',
      color: '$gray300',
    },

    p: {
      fontSize: '1,25rem',
      color: '$gray300',
    },

    h3: {
      fontSize: '$xl',
    },
  },

  button: {
    marginTop: '2rem',
    width: '100%',
    padding: '1rem',
    border: 0,
    borderRadius: 6,
    color: '$white',
    background: '$green500',

    fontSize: '1rem',
    fontWeight: 'bold',

    cursor: 'pointer',

    '&:hover': {
      background: '$green300',
    },
  },
})
