import React, { useContext } from 'react'
import {useHistory} from 'react-router-dom'
import { Store } from '../Store'

export default function AdminRoute(children) {
    const {state}=useContext(Store)
    const {userInfo}=state
  return userInfo && userInfo.isAdmin ? children:<useHistory to='/signin'/>
}
