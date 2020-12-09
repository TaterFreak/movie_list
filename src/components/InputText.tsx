import React from 'react';
import {createUseStyles} from 'react-jss'

const useStyles = createUseStyles({
    input: {
        height: 40,
        width: 300,
        padding: "0px 20px",
    }
})

interface PropsInterface {
    event: any,
    name: string,
}

const InputText = (props:PropsInterface) => {
    const classes = useStyles()

    return (
        <input type="text" name={props.name} placeholder={props.name} onChange={props.event} className={classes.input}/>
    )
}

export default InputText;
