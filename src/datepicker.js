import React,{useState}from'react'
import DatePicker from'react-datepicker'
import'./App.css'
import  'react-datepicker/dist/react-datepicker.css'


function Dp(){

 const[selectedDate,setSelectedDate] = useState(null)

  return(
    <div className="column" >
    <div className='App'>
      < DatePicker
        selected={selectedDate}
        onChange={date => setSelectedDate(date)}
        dateFormat ='MM/dd/yyyy'
      />
      < DatePicker
        selected={selectedDate}
        onChange={date => setSelectedDate(date)}
        dateFormat ='dd/MM/yyyy'
      />
    </div>
    </div>
  )
}
    
    export default Dp;