import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Navbar, Dropdown } from 'react-bootstrap';


const CustomNavbar = (props) => {
    console.log(props)
    const clickHandler = () => {
        props.history.push("/about");
    };
    const homenav = () => {
        props.history.push("/home");
    };
    const usernav = () => {
        props.history.push("/user");
    };

    return (
        <Navbar className="navbar navbar-expand-lg navbar-light bg-light rounded">
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample09" aria-controls="navbarsExample09" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarsExample09">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <button className="btn nav-link" onClick={homenav}>Home <span className="sr-only">(current)</span></button>
                    </li>
                    <li className="nav-item">
                        <button className="btn nav-link" onClick={usernav} key="riya" >User</button>
                    </li>
                    <li className="nav-item">
                        <button className="btn nav-link" onClick={clickHandler}>About</button>
                    </li>
                    <Dropdown className="nav-item dropdown">
                        <Dropdown.Toggle className="btn bg-light border-0 text-dark h-100 dropdown-toggle" id="dropdown09"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</Dropdown.Toggle>
                        <Dropdown.Menu className="dropdown-menu" aria-labelledby="dropdown09">
                            <Dropdown.Item className="btn dropdown-item" href="#">Action</Dropdown.Item>
                            <Dropdown.Item className="btn dropdown-item" href="#">Another action</Dropdown.Item>
                            <Dropdown.Item className="btn dropdown-item" href="#">Something else here</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </ul>

            </div>
        </Navbar>
    );


}

export default CustomNavbar;
