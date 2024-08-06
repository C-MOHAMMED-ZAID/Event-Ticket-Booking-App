import React, { useState,useEffect } from "react"
import {link} from "react-router-dom"
import axios from "axios"

function BookingList() {
  const [pageNumber,setPageNumber]=useState(0);
  const [totalPages,setTotalPages]=useState(0);
  const pages=Array.from(Array(totalPages).keys());


  const [userForm,setUserForm]=useState([]);
  const deleteBooking=(_id)=>{
    axios.delete("http://localhost:4000/bookings/delete-booking/"+_id)
    .then(()=>{
      console.log("Data successfully Deleted!");
    })
    .catch((error)=>{
      console.log(error)
    })
  }

  useEffect(()=>{
    axios.get(`http://localhost:4000/bookings?page=${pageNumber}`)
    .then((res)=>{
      setUserForm(res.data.data);
      setTotalPages(res.data.total)
    })
    .catch((error)=>{
      console.log(error);
    },[userForm]);
  })
  return (
    <div style={{padding:'30px',backgroundColor:'	#404040',color:'white',width:'1227px',height:'500px'}}> 
     <h1>Event Booking Information</h1><br />
     
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Customer Name</th>
            <th scope="col">Event Name</th>
            <th scope="col">Booking Date</th>
            <th scope="col">Seat Number</th>
            <th scope="col">Ticket Price</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {userForm.map((user,index)=>{
            return(
              <tr key={index}>
                <td>{user.name}</td>
                <td>{user.ename}</td>
                <td>{user.dates}</td>
                <td>{user.seatno}</td>
                <td>{user.price}</td>
                <td>
                  <a className="btn btn btn-primary btn-sm me-2" href={"/edit-booking/"+ user._id}>Edit</a>

                  <button className="btn btn-danger btn-sm" onClick={()=>deleteBooking(user._id)}>Delete</button>
                </td>
              </tr>
            )
          })}
        </tbody>

      </table>

      {pages.map((pageIndex)=>(
        <input type="button"
         onClick={()=>setPageNumber(pageIndex)}
        value={pageIndex+1} />
      ))}

    </div>
    </div>
  )
}
export default BookingList
