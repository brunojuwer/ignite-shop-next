import { styled } from "../../styles";


export const CartContainer = styled('div', {
    background: '$gray800',
    color: '$gray300',
    padding: '0.75rem',
    borderRadius: 8,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    cursor: 'pointer',
    '&:hover': {
        color: '$white',
    },


    variants: {
        color: {
            green: {
                background: '$green500',
                color: '$white',
                '&:hover':{
                    background: '$green300',
                },
                'div': {
                    display: 'none'
                }
            },
        }
    },

    'div': {
        width: '20px',
        height: '20px',
        padding: '0.25rem',
        border: '2px solid $gray900',
        borderRadius: '50%',
        background: '$green300',
        color: '$white',

        position: 'absolute',
        top: '-5px',
        right: '-5px',

        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',

        fontSize: '0.75rem',
        fontWeight: 'bold'
    }
})