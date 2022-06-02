// ** Icons Import
import { Heart } from 'react-feather'
import { Link } from 'react-router-dom'
import {
    Card,
    CardBody,
    CardText,
    Row,
    Col,
    Form,
    Input,
    InputGroup,
    InputGroupAddon,
    InputGroupText,
    FormGroup,
    Label,
    Button,
    UncontrolledTooltip,
    CustomInput
  } from 'reactstrap'
  import './footer.css'

const Footer = () => {
  return (
      <>
      <Row style={{marginBottom :'15px'}}>
          <Col md='12'>
          <div className='footer-logos'>
        
              <div>
                  <a href='https://www.trustedsite.com/verify?host=eballot.io&utm_campaign=mfes_redirect&utm_medium=referral&utm_source=mcafeesecure.com' target='_blank'>
                  <img src='https://images.scanalert.com/meter/eballot.votenet.com/13.gif'></img>
                  </a>
              </div>
              <div>
                  <a href='https://www.websecurity.digicert.com/ssl-certificate' target='_blank'> 
                  <img src='https://eballot.io/_standardcode/admin/images/secure-logo-symantec.png'></img>
                  </a>
                 
              </div>
              <div>
                  <a href='https://www.websecurity.digicert.com/ssl-certificate' target='_blank'> 
                  <img src='https://eballot.io/_standardcode/admin/images/secure-logo-symantec.png'></img>
                  </a>
                 
              </div>
              <div>
                  <a href='https://www.trustedsite.com/verify?host=eballot.io&utm_campaign=mfes_redirect&utm_medium=referral&utm_source=mcafeesecure.com' target='_blank'>
                  <img src='https://images.scanalert.com/meter/eballot.votenet.com/13.gif'></img>
                  </a>
              </div>
              <div>
                  <a href='https://www.websecurity.digicert.com/ssl-certificate' target='_blank'> 
                  <img src='https://eballot.io/_standardcode/admin/images/secure-logo-symantec.png'></img>
                  </a>
                 
              </div>

          </div>
          </Col>
      </Row>
 
      <Row style={{border: '1px solid rgba(34, 41, 47, 0.125)'}}> 
      <hr></hr>
        <Col md="1"></Col>
        <Col md="10" style={{margin:'10px 0'}}><p className='clearfix mb-0'>
      <span className='float-md-left d-block d-md-inline-block mt-25'>
        COPYRIGHT © {new Date().getFullYear()}{' '}
        <a href='https://expocontech.com/' target='_blank' rel='noopener noreferrer'>
          ExpoCon
        </a>
        <span className='d-none d-sm-inline-block'>, All rights Reserved</span>
      </span>
      <span className='float-md-right d-none d-md-block'>
      <div class="rgt"><a href="https://expocontech.com/" target="_blank">Privacy</a> | <a href="https://expocontech.com/" target="_blank">Terms of Use</a>  | <a href="https://expocontech.com/" target="_blank">Service Level Agreement</a></div>
      </span>
    </p></Col>
        <Col md="1"></Col>
      </Row>
    </>
  )
}

export default Footer