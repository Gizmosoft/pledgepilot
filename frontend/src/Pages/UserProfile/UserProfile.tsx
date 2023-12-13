import React from 'react'
import { Table } from '../../Components/Table/Table'
import { getUserInTheSession } from '../../Utils/SessionStorage'

export const UserProfile = () => {
    const currentUser = getUserInTheSession()
  return (
    <div>
        <Table user={currentUser}/>
    </div>
  )
}
