import React from 'react';
import { MDBInputGroup, MDBInput, MDBIcon, MDBBtn } from 'mdb-react-ui-kit';
import './SearchBar.css';
import Button from 'react-bootstrap/Button';
import { discoverCampaign } from '../../services/discoverServices';


export default function Search() {
    return (
        <div>
            <MDBInputGroup >
                <MDBInput placeholder='Search for a Campaign' className='Search'/>
            </MDBInputGroup>

        </div>

    );
}