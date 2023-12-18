import React from 'react'
import './style.css'

const AllToDos = (Neelam) => {
    const DeleteToDoHandler=(id)=>{
        Neelam.deleteTodo(id);
        alert(`todo ${id} Deleted`);
    }
  return (
    <>
        <section className='AllFlex'>
        <table border={'1'} width={'70%'} >
            <thead>
                <tr>
                <th>Id</th>
                <th>Title</th>
                <th>Description</th>
                <th>Status</th>
                <th>Delete</th>
                <th>Complete</th>
                </tr>
            </thead>
            <tbody>
                {
                    Neelam.ToDos.map((c,i)=>{
                        return <tr key={i} style={{backgroundColor:c.isComplete?'blue':'white'}}>
                    <td>{i+1}</td>
                    <td>{c.title}</td>
                    <td>{c.description}</td>
                    <td>{c.isComplete?'completed':'un-completed'}</td>
                    <td><button onClick={()=>{DeleteToDoHandler(c.id)}}>Delete</button></td>
                   {!c.isComplete && <td><button id='btn2' onClick={()=>Neelam.updateTodo(c.id)}>Update</button></td>}

                </tr>
                    })
                }
            </tbody>
        </table>


        </section>
    </>
  )
}

export default AllToDos