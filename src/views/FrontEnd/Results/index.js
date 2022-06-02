// ** Invoice Add Components
import AddCard from './AddCard'

// ** Third Party Components
import { Row, Col } from 'reactstrap'

// ** Styles
import '@styles/react/libs/flatpickr/flatpickr.scss'
import '@styles/base/pages/app-invoice.scss'
import FooterPage from '../GobalFooter'


const InvoiceAdd = () => {
  return (
    <>
    <div className='invoice-add-wrapper' style={{margin: '100px 0px'}}>
      <Row className='invoice-add' style={{display:'flex', width:'100', justifyContent:"center"}}>
        <Col xl={9} md={12} sm={12}>
          <AddCard />
        </Col>
      </Row>
    </div>
    <FooterPage/>
    </>
  )
}

export default InvoiceAdd
