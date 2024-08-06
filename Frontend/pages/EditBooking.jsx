import React,{ useEffect,useState } from "react"
import { useParams,useNavigate } from "react-router-dom"
import axios from "axios"

function EditBooking() {
  const[userForm,setUserForm]=useState({
    name: "",
    ename: "",
    dates:"",
    seatno: "",
    price: ""
  });
  let params=useParams();
  let navigate=useNavigate();
  const inputsHandler=(e)=>{
    setUserForm((prevNext)=>({
      ...prevNext,
      [e.target.name]: e.target.value,
    }))
  }
  const onUpdate=(e)=>{
    e.preventDefault();
    axios.put("http://localhost:4000/bookings/update-booking/"+params.id,{
      name:userForm.name,
      ename:userForm.ename,
      dates:userForm.dates,
      seatno:userForm.seatno,
      price:userForm.price,
    })
    .then((res)=>{
      console.log({status:res.status});
      navigate("/booking-list")
    })
  };
  useEffect(()=>{
    axios.get("http://localhost:4000/bookings/get-booking/"+params.id)
    .then((res)=>{
      setUserForm({
        name:res.data.data.name,
        ename:res.data.data.ename,
        dates:res.data.data.dates,
        seatno:res.data.data.seatno,
        price:res.data.data.price,
      })
    })
  },[])
  return (
    <div style={{padding:"30px",backgroundColor:'	#404040',color:'white',width:'1227px',height:'500px'}}>
      <h1>Edit Bookings</h1>

      <div>
        <div className="form-wrapper">
          <form onSubmit={onUpdate}>
            <div className="mb-3">
              <label className="form-label">Customer Name</label>
              <input type="text" name="name" className="form-control" id="name" value={userForm.name} onChange={inputsHandler} />
            </div>

            <div className="mb-3">
              <label className="form-label">Event Name</label>
              <input type="text" name="ename" className="form-control" id="ename" value={userForm.ename} onChange={inputsHandler} />
            </div>

            <div className="mb-3">
              <label className="form-label">Booking Date</label>
              <input type="date" name="dates" className="form-control" id="dates" value={userForm.dates} onChange={inputsHandler} />
            </div>

            <div className="mb-3">
              <label className="form-label">Seat Number</label>
              <input type="number" name="seatno" className="form-control" id="seatno" value={userForm.seatno} onChange={inputsHandler} />
            </div>

            <div className="mb-3">
              <label className="form-label">Ticket Price</label>
              <input type="number" name="price" className="form-control" id="price" value={userForm.price} onChange={inputsHandler} />
            </div>

            <div className="mb-3">
              <button type="submit" className="btn btn-primary">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
export default EditBooking