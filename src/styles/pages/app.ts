import { styled } from '..'

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
})

export const Header = styled('header', {
  padding: '2rem 0',
  width: '100%',
  maxWidth: 1180,
  margin: '1rem auto',

  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',

  variants: {
    isRouteSuccess: {
      true: {
        justifyContent: 'center',
      },
    },
  },
})
