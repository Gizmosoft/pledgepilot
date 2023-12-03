import React, { FC } from 'react';
import { MDBInputGroup, MDBInput, MDBIcon, MDBBtn } from 'mdb-react-ui-kit';

const Search: FC = () => {
    return (
      
            <MDBInputGroup className='search-container'>
                <MDBInput  className='search-box'/>
                <MDBBtn rippleColor='dark' className='search-icon'>
                    <MDBIcon icon='search'/>
                </MDBBtn>
            </MDBInputGroup>
    );
}

export default Search;