import React from 'react'
import { Table } from '../../Components/Table/Table'

export const UserProfile = () => {
    const currentUser = sessionStorage.getItem("user")
  return (
    <div>
        <Table user={currentUser}/>
    </div>
  )
}
