import React from 'react';
import {createUseStyles} from 'react-jss'

const useStyles = createUseStyles({
    button: {
        height: 40,
        padding: "0px 20px",
    }
})

interface PropsInterface {
    type: "submit",
    text: string
}

const Button = (props:PropsInterface) => {
    const classes = useStyles()

    return (
        <button type={props.type} className={classes.button}>{props.text}</button>
    )
}

export default Button;
