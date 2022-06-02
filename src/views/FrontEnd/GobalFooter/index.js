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
      <Row>
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
                  <a href='https://privacy.truste.com/privacy-seal/validation?rid=63f082d1-b937-49c1-b830-39b38a30fb09' target='_blank'>
                  <img src='https://privacy-policy.truste.com/privacy-seal/seal?rid=63f082d1-b937-49c1-b830-39b38a30fb09'></img>
                  </a>
                 
              </div>

          </div>
          </Col>
      </Row>
      <hr></hr>
    <p className='clearfix mb-0'>
      <span className='float-md-left d-block d-md-inline-block mt-25'>
        COPYRIGHT © {new Date().getFullYear()}{' '}
        <a href='https://1.envato.market/pixinvent_portfolio' target='_blank' rel='noopener noreferrer'>
          ExpoCon
        </a>
        <span className='d-none d-sm-inline-block'>, All rights Reserved</span>
      </span>
      <span className='float-md-right d-none d-md-block'>
        Hand-crafted & Made with
        <Heart size={14} color='red' />
      </span>
    </p>
    </>
  )
}

export default Footer