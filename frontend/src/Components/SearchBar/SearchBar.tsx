import React from 'react';
import { MDBInputGroup, MDBInput, MDBIcon, MDBBtn } from 'mdb-react-ui-kit';
import './SearchBar.css';

export default function Search() {
    return (
        <div>
            <MDBInputGroup >
                <MDBInput placeholder='Search for a Campaign' className='Search'/>
            </MDBInputGroup>
        </div>

    );
}