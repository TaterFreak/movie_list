import React from 'react';
import {createUseStyles} from 'react-jss'

const useStyles = createUseStyles({
    header: {
        backgroundColor: '#ae5e5e',
        padding: '20px',
        boxShadow: '0px 1px 3px 0px #8a8a8a'
    }
})

interface PropsInterface {
    children: any
}

const AppBar = ({children}:PropsInterface) => {
    const classes = useStyles()

    return (
        <header className={classes.header}>
            {children}
        </header>
    )
}

export default AppBar;
