import React, { useContext } from 'react'
import {useHistory} from 'react-router-dom'
import { Store } from '../Store'

export default function ProtectedRoute(children) {
    const {state}=useContext(Store)
    const {userInfo}=state
  return userInfo?children:<useHistory to='/signin'/>
}
