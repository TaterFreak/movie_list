import React from 'react';
import {createUseStyles} from 'react-jss'

const useStyles = createUseStyles({
    paper: {
        backgroundColor: "#ffffff",
        border: "1px solid #dbdbdb",
        padding: 10,
        borderRadius: 3,
    }
})

interface PropsInterface {
    children: any
}

const Paper = ({children}:PropsInterface) => {
    const classes = useStyles()

    return (
        <div className={classes.paper}>
            {children}
        </div>
    )
}

export default Paper;
