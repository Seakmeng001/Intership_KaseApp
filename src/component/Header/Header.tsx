import { Button, Col, Container, Row } from 'react-bootstrap'
import './Header.css'
import HeaderFoot from '../HeaderFoot/HeaderFoot'
import background from '../../assets/background.png'
import house_controller from '../../assets/house_controller.png'
import sensor from '../../assets/sensor.png'
import solenoid from '../../assets/solenoid.png'
import humidity from '../../assets/humidity.png'

const Header = ()=>{
    return(
        <div className='mt-5' id="home">  
           <Container> 
            <Row>
               <Col md={6}>
                  <div className='head_left'>
                     <span className='h_subTitle'>Healthy & quality</span>
                     <div className='w-50 mt-2 h_title '>
                        <h1 style={{color:'#3D3F42'}}>Cloud-based Smart Farm Management
                        and Traceability System</h1>
                       
                     </div>
                     <p className='text-secondary'>
                     A Cloud-based Smart Farm Management and Traceability System is a comprehensive solution that leverages cloud technology to manage farm operations efficiently and track the entire lifecycle of farm produce.
                     </p>
                     {/* <div className='d-flex justify-content-between align-items-start w-50 mt-4'>
                        <Button className='bg_login fw-bold border-0'>Get Started</Button>
                        <Button className='contact_btn'>Contact Us Now</Button>
                        

                     </div> */}
                  </div>
               </Col>
               <Col md={6}>
               <div className='head_right'>
                    <div className='imageContainer d-flex justify-content-end align-items-center '>
                       <img src={background} alt="header_image" className='lipstick'/>
                    </div>
               </div>
               </Col>
            </Row>
             <Row>
                <div className='py-4 text-center'  id="about">
                   <h1 >Greenhouse & IoT Devices</h1>
                </div>
                <Col md={3}>
                <div className='box'>
                   <div className='boxContainer'>
                      <div className=''>
                        <img src={house_controller} alt="cook" className='' style={{width: '90%', height: '100%', objectFit: 'cover'}}/>
                      </div>
                      <div className='w-100'>
                       <h5 style={{color: '#3D3F42', fontWeight: 'bold'}}> House Controller</h5>
                       <p className='text-secondary'>Integrating a House Controller in a farm setting is a smart approach to managing and automating various functions within farm buildings, such as greenhouses, barns, or storage facilities. A House Controller can manage climate control, lighting, security, and other essential systems that impact farm operations.
                       </p>
                      </div>
                   </div>
                </div>
                 </Col>
                 <Col md={3}>
                <div className='box'>
                   <div className='boxContainer'>
                      <div className=''>
                        <img src={sensor} alt="delivery" className='' style={{width: '90%', height: '100%', objectFit: 'cover'}}/>
                      </div>
                      <div className='w-100'>
                       <h5 style={{color: '#3D3F42', fontWeight: 'bold'}}>Moisture, PH & Water Sensor</h5>
                       <p className='text-secondary'>A moisture, pH, and water sensor in farming helps optimize crop growth by monitoring soil conditions. It provides real-time data on moisture levels, pH balance, and water availability, enabling better irrigation and nutrient management, leading to improved crop yields and sustainable farming practices.
                       </p>
                      </div>
                   </div>
                </div>
                 </Col>
                 <Col md={3}>
                <div className='box'>
                   <div className='boxContainer'>
                      <div className=''>
                        <img src={solenoid} alt="thumbs" className='' style={{width: '90%', height: '100%', objectFit: 'cover'}}/>
                      </div>
                      <div className='w-100'>
                       <h5 style={{color: '#3D3F42', fontWeight: 'bold'}}>Solenoid </h5>
                       <p className='text-secondary'>A solenoid in a farm setting is typically used as an actuator in various automated systems, especially for controlling water flow, machinery, or even animal feeding systems. Solenoids are electromechanical devices that convert electrical energy into mechanical motion, often used to open or close valves or switches.
                       </p>
                      </div>
                   </div>
                </div>
                 </Col>
                 <Col md={3}>
                <div className='box'>
                   <div className='boxContainer'>
                      <div className=''>
                        <img src={humidity } alt="thumbs" className='' style={{width: '90%', height: '100%', objectFit: 'cover'}}/>
                      </div>
                      <div className='w-100'>
                       <h5 style={{color: '#3D3F42', fontWeight: 'bold'}}> Humidity & Temperature
                       Sensor </h5>
                       <p className='text-secondary'>A humidity and temperature sensor in farming monitors air conditions to help maintain optimal growth for crops. By providing real-time data on humidity and temperature, it helps farmers adjust practices to prevent issues and improve crop quality and productivity.
                       </p>
                      </div>
                   </div>
                </div>
                 </Col>
             </Row>
             <div className='headerFoot'>
               <HeaderFoot/>
             </div>
           </Container>
        </div>
    )
}
export default Header