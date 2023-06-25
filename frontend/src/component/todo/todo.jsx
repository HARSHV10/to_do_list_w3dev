import React, { useEffect, useState } from 'react';
import server from '../server';
import { useLocation,useNavigate} from 'react-router-dom';
import Card_design from '../card_design/card';
import './todo.css'
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';


export default function Todo(){
    const location = useLocation();
    const navigate = useNavigate();
    const [data,setData]=useState();
    const [title,setTitle]=useState();
    const [heading,setHeading]=useState();
    const [subheading,setSubHeading]=useState();
    const [date,setDate]=useState();
    const [list,setlist]=useState();
    if(!location.state){
        navigate('/login')
    }

    useEffect(()=>{
        async function geting(){
            const d =await server.post('./dashboard',{
                location:location.state
            });
            setData(d.data);
            setlist(d.data.data.list)

        }
        geting();
    },[])
    return(
        <div>
        <div>

        <div className='task'>
       {
        list&& list.map((i)=>{
           return( <Card_design data={i} key={i}/>)
        })
        }
       
        </div>
<div className='dataEntry'>
<div className='entry'>
Enter the data to be inserted or deleted<br></br>
</div>
<input className='inputFeild'  placeholder='your task heading' onChange={(e)=>{
    setHeading(e.target.value)
}}>
</input>
        <input className='inputFeild' placeholder='your task subHeading' onChange={(e)=>{
            setSubHeading(e.target.value)
        }}>
        </input>
        <input className='inputFeild' placeholder='Date to be entered' onChange={(e)=>{
            setDate(e.target.value)
        }}>
        </input>
        <button className='button-prop' onClick={()=>{

            server.patch('/dashboard',{
                id : location.state,
                title:title,
                heading:heading,
                subheading:subheading,
                date:date
                
            })
        }}>{<AddIcon fontSize='large'/>}</button>
        <button className='button-prop' onClick={()=>{
            server.put('/dashboard',{
                id : location.state,
                title:title,
                heading:heading,
                subheading:subheading,
                date:Date
                
            })
        }}>{<DeleteIcon fontSize='large'/>}</button>
        </div>
        </div>
        </div>
    );
}