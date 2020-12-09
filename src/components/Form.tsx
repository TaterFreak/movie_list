import React, {useState} from 'react';
import {createUseStyles} from 'react-jss'
import {connect} from "react-redux";
import {useHistory} from "react-router-dom";
import {fetchMovies} from "../redux/actions";

import {searchMovie} from "../scripts/services/getMovies";
import {MoviePropsInterface} from "../interfaces/MoviePropsInterface";
import Input from './InputText';
import Button from "./Button";

const useStyles = createUseStyles({
    header: {
        backgroundColor: '#ae5e5e',
        padding: '20px',
        boxShadow: '0px 1px 3px 0px #8a8a8a'
    }
})

const Form = (props:MoviePropsInterface) => {
    const history = useHistory();
    //Use react state for ephemeral state instead of Redux
    const [form, setForm] = useState({
        title: ''
    });

    const handleInputChange = (event:any) => {
        const target = event.target;
        const name = target.name;
        setForm({ ...form, [name]: target.value });
    };

    const handleSubmit = (event:any) => {
        event.preventDefault()
        searchMovie(props, form.title)
            .then(() => {
                history.push('/Search');
            })
    }
    return (
        <form onSubmit={handleSubmit}>
            <Input event={handleInputChange} name={"title"} />
            <Button type={"submit"} text={"Search"} />
        </form>
    )
}

const mapStateToProps = (state:any) => {
    return {
        movies: state.movies
    }
}

const mapDispatchToProps = (dispatch:any) => {
    return {
        fetchMovies: (movies:any) => dispatch(fetchMovies(movies))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);
