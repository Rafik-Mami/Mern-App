import React,{useEffect,useState} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { getPlaces } from '../../JS/Actions/actionsUser'
import Myplace from '../Myplace/Myplace'
import {Button, Card} from 'react-bootstrap'
import EditPlace from '../EditPlace/EditPlace'


import './MyplaceList.css'
const MyplacesList = () => {
   
    const places = useSelector(state => state.placeReducer.places)
    const user = useSelector(state => state.userReducer.user)
    const [edit, setEdit] = useState(false)
    const [placeToEdit,setPlacetoedit]=useState({})
    
    return ( <div className='mylist'>
         {places.filter(place=>place.user_id===user._id).map(place=>
            <div className='myplace'> <Myplace place={place} key={place._id} />
             </div>
            )
         }
            
           
        </div>
    )
}

export default MyplacesList
