
import React, {useState} from 'react'
import Button from '@mui/material/Button';
import SelectSearcher from './selectSearcher';

function Modal({changedata}) {

  // const [changedata, setChanges] = useState();  
  // const handleChange = (e) => {
  //   let value = e.target.value;
  //   console.log(value);
  //   setChanges(value);
  // };


  return (
    <>
    <div style={{position: 'fixed', width: '100%', height: '100%', backgroundColor: '#FFFFFF', opacity: '0.1'}}></div>
     <div>
        <div style={{position: 'absolute', zIndex: '5', backgroundColor: 'white'}}> 
        <div style={{display: 'flex', flex: 1}}>
        <h1>Add Buletin</h1>
        {/* <Button
    style={{
      
      background: "#E8363F",
      borderColor: "#800000",
      paddingLeft: "15px",
      width: "7%",
    }}
    variant="contained"
    >
    Save
</Button> */}
</div>
<div style={{display: 'flex', flexDirection: 'column', width: "70%",}} >
<p>Client/Patient :</p>
<div style={{margin: '1%',
   paddingBottom: '15px',
    }}  >
        <input style={{height:'100%', width:'100%', paddingBottom:'15%'}} type="text" class="form-control" name="bullclipat" id="bullsearch_client_patient" placeholder="Type characters and hit search" autoComplete="off"></input>
        </div>
        <div style={{margin: '1%',
   paddingBottom: '15px', width:'150%'
    }}  >
        <textarea style={{height:'135%', width:'100%', paddingBottom:'35%'}} class="form-control" name="bullclipat" id="" placeholder="Enter Bulletin Message..." autoComplete="off"></textarea>
        </div>
       
     </div>
    <div>
      <p>Priority:</p>
      <input type="radio" name="optradio" /> <span>Low</span>
      <input type="radio" name="optradio" /> <span>Normal</span>
      <input type="radio" name="optradio" /> <span>High</span>
      </div>

    <div style={{paddingTop: '20px'}}> 
    <input type="checkbox" name="checkbox1" /> <span> Record to Encounter OTC Encounter </span>
    </div>

    <div>
        <p>Clinic :*</p>

      <SelectSearcher changedata={changedata} />

    </div>
     </div>
     </div>
    </>
   
  )
}

export default Modal