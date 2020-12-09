import React from "react";
import {createUseStyles} from 'react-jss'

const useStyles = createUseStyles({
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(5, 1fr)",
    gridGap: 20,
    gridRows: "1fr",
  }
})

const CustomGrid = ({children}:any) => {
  const classes = useStyles();

  return (
    <section className={classes.grid}>
      {children}
    </section>
  )
}

export default CustomGrid;
