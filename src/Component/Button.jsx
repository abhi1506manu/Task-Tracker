import PropsTypes from 'prop-types'

const Button = ({ color, text, onClick }) => {
    return (
        <button
            className='btn'
            style={{ backgroundColor: color }}
            onClick={onClick}
        >
            {text}
        </button>
    )
}

Button.defaultProps = {
    color: 'steelblue',
}

Button.protoType = {
    text: PropsTypes.string,
    color: PropsTypes.string,
    onClick: PropsTypes.fun,
}


export default Button;