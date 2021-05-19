import React, { useState} from 'react';
import {Button, Form} from "react-bootstrap";
import {useHistory} from "react-router-dom";
import {useDispatch} from "react-redux";
import {ProductSearchAction} from "../../redux/actions/ProductAction";
import './SearchBox.css'

const SearchBox = () => {
    const dispatch=useDispatch()
    const history = useHistory()
    const [name, setName] = useState('')
    const submitHandler = (e) => {
        e.preventDefault()
            dispatch(ProductSearchAction({name}))
         history.push('/search')
    }
    return(
            <Form className="input-group main-search" onSubmit={submitHandler}>
                <input className="form-control border-end-0 border rounded-pill px-4"
                       type="search" placeholder='Search Product '
                       id="example-search-input"
                       onChange={(e)=>setName(e.target.value)}
                />
                <span className="input-group-append">
              <Button className="btn btn-outline-secondary bg-white border-bottom-0 border rounded-pill ms-n5" type="submit">
                 <i className="fa fa-search" />
              </Button>
            </span>
            </Form>
    )
}
export default SearchBox;
