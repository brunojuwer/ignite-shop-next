import { styled } from '../../styles'

export const ArrowContainer = styled('div', {
  position: 'absolute',
  height: '100%',
  width: '120px',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'pointer',

  background:
    'linear-gradient(90deg, rgba(0,0,0,0.0090651260504201) 0%, rgba(0,0,0,0.7959558823529411) 89%)',
  transition: 'background-color 0.3s',

  '&:hover': {
    background:
      'linear-gradient(90deg, rgba(0,0,0,0.0090651260504201) 0%, rgba(0,0,0,0.8959558823529411) 89%)',
  },

  '&.arrow--left': {
    left: '0px',
  },

  '&.arrow--right': {
    left: 'auto',
    right: '0px',
  },

  variants: {
    color: {
      left: {
        background:
          'linear-gradient(270deg, rgba(0,0,0,0.0090651260504201) 0%, rgba(0,0,0,0.7959558823529411) 89%)',

        transition: 'background-color 0.3s',

        '&:hover': {
          background:
            'linear-gradient(270deg, rgba(0,0,0,0.0090651260504201) 0%, rgba(0,0,0,0.8959558823529411) 89%)',
        },
      },
    },
  },
})

export const Svg = styled('svg', {
  width: '30px',
  height: '30px',
  fill: '#fff',
  cursor: 'pointer',

  '&.arrow--disabled': {
    fill: 'rgba(255, 255, 255, 0.5)',
    cursor: 'not-allowed',
  },
})
