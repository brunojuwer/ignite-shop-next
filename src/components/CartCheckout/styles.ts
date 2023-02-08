import * as Dialog from '@radix-ui/react-dialog';
import { styled } from '../../styles';

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
  padding: '4rem 2rem',

  borderTopLeftRadius: 10,
  borderBottomLeftRadius:10,
  boxShadow: '-15px 1px 57px -19px #000000',
})

export const Title = styled(Dialog.Title, {
  fontSize: '1.25rem',
  fontWeight: 'bold'
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
    color: '$white'
  }
})