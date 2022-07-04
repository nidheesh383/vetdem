import './App.css';
import { useState } from 'react';
import Button from '@mui/material/Button';
import Dp from './datepicker';
import SelectSearcher from './selectSearcher';
import Modal from './modal';

function App() {

  const [openModal, setOpenModal] = useState(false);


  return (
    <div>
      <div style={{ display: 'flex', flex: 1, margin: '3%', }} >
        <Button
          style={{
            background: "#E8363F",
            borderColor: "#800000",
            paddingLeft: "15px",
            width: "150px",
          }}
          onClick={() => {setOpenModal(true);}}
          variant="contained"
        > 
          Add Buletin
        </Button>

        {openModal && <Modal />}

        <Dp />
        <SelectSearcher />
        <Button className="sel-but"
          style={{
            borderRadius: "3px",
            background: '#1D2545',
            border: 'none',
          }}
          variant="contained"
        >
          Apply filters
        </Button>
      </div>

      <div class='row' >
        <div class='col-lg-12' >
          <table class="table">
            <thead class="thead-dark">
              <tr className='tbheader'>
                <th className='tbheader-title' scope="col">Client</th>
                <th className='tbheader-title' scope="col">Patient</th>
                <th className='tbheader-title' scope="col">Encounter</th>
                <th className='tbheader-title' scope="col">Created On</th>
                <th className='tbheader-title' scope="col">Provider</th>
                <th className='tbheader-title' scope="col">Message</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>nike</td>
                <td>nothing</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
                <td>mike</td>
                <td>special</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
                <td>rick</td>
                <td>migrant</td>
              </tr>
            </tbody>
          </table>

          <table class="table">
            <thead class="thead-light">

            </thead>
          </table>

        </div>
      </div>
    </div>
  );
}

export default App;
