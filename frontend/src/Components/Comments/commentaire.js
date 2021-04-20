import React,{useState} from 'react'
import { deleteComment} from '../../JS/Actions/actionsUser'
import {useDispatch} from 'react-redux'
import {Form,Button} from 'react-bootstrap'
import './comment.css'
export const Commentaire = ({comm}) => {
    const dispatch = useDispatch()
    const [isEdit, setIsedit] = useState(false)
    const toggle=()=>{
        setIsedit(!isEdit)
    }
    return (
        <div>
            
           { !isEdit?<><div className='comment'>
               <div className='comm'>{comm.comment} </div>  
            <Button onClick={()=>dispatch(deleteComment(comm._id))} variant='danger' >delete</Button>
            </div>
            </>
           :
            <input type='text' placeholder={comm.comment} />}
        </div>
    )
}
export default Commentaire

