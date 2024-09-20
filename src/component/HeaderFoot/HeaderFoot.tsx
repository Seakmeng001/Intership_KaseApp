import {  Col, Row } from 'react-bootstrap'
import './HeaderFoot.css'
import Agritech from '../../assets/Agritech.jpg'

const HeaderFoot = ()=>{
    return(
        <div>
            <div className='py-4 text-center'  id="about">
                   <h1 >Agritech</h1>
                </div>
            <Row>
                <Col md={6}>
                <div className='h_footer'>
                    <div className=' h_ftCona'>
                        <img src={Agritech} alt="header_footer" className='py-7 img-fluid'/>
                    </div>
                </div>

                </Col>
                <Col md={6}>
                
                <div className='h_ftright'> 
                    <div className=' containerBox'>
                     
                    <p className='text-secondary my-4'>Agritech, or agricultural technology, is transforming modern farming by integrating advanced technologies to enhance productivity and sustainability. It encompasses innovations like precision agriculture, drones, and smart sensors, which enable farmers to monitor and manage crops more efficiently. These technologies help optimize resources, reduce waste, and increase yields, leading to more sustainable farming practices.</p>
                   <p className='text-secondary'>In addition to improving operational efficiency, Agritech also supports data-driven decision-making. By leveraging big data, machine learning, and IoT, farmers can gain valuable insights into soil health, weather patterns, and crop performance. This allows for more precise interventions and better management of agricultural processes, ultimately contributing to increased food security and environmental stewardship.</p>
                    <div className='d-flex justify-content-between align-items-start w-50 mt-4'>
                    {/* <Button className='bg_login fw-bold border-0'>Order food</Button>
                        <Button className='contact_btn'>Contact Us Now</Button> */}
                        
                    </div>
                    
                    </div>
                    
                </div>
                </Col>

            </Row>
        </div>
    )
}
export default HeaderFoot