// ** React Imports
import { Fragment, useState, useEffect } from 'react'

// ** Custom Components
import Sidebar from '@components/sidebar'
import Repeater from '@components/repeater'

// ** Third Party Components
import axios from 'axios'
import Flatpickr from 'react-flatpickr'
import { SlideDown } from 'react-slidedown'
import { X, Plus, Hash } from 'react-feather'
import Select, { components } from 'react-select'
import { selectThemeColors } from '@utils'
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

// ** Styles
import 'react-slidedown/lib/slidedown.css'
import '@styles/react/libs/react-select/_react-select.scss'
import '@styles/react/libs/flatpickr/flatpickr.scss'
import '@styles/base/pages/app-invoice.scss'
import './instruction.css'
import { Link } from 'react-router-dom'

const AddCard = () => {
  // ** States
  const [count, setCount] = useState(1)
  const [value, setValue] = useState({})
  const [open, setOpen] = useState(false)
  const [clients, setClients] = useState(null)
  const [selected, setSelected] = useState(null)
  const [picker, setPicker] = useState(new Date())
  const [invoiceNumber, setInvoiceNumber] = useState(false)
  const [dueDatepicker, setDueDatePicker] = useState(new Date())
  const [options, setOptions] = useState([
    {
      value: 'add-new',
      label: 'Add New Customer',
      type: 'button',
      color: 'flat-success'
    }
  ])

  useEffect(() => {
    // ** Get Clients
    axios.get('/api/invoice/clients').then(response => {
      const arr = options
      response.data.map(item => arr.push({ value: item.name, label: item.name }))
      setOptions([...arr])
      setClients(response.data)
    })

    // ** Get Invoices & Set Invoice Number
    axios
      .get('/apps/invoice/invoices', {
        page: 1,
        perPage: 10,
        status: '',
        q: ''
      })
      .then(response => {
        const lastInvoiceNumber = Math.max.apply(
          Math,
          response.data.allData.map(i => i.id)
        )
        setInvoiceNumber(lastInvoiceNumber + 1)
      })
  }, [])

  // ** Deletes form
  const deleteForm = e => {
    e.preventDefault()
    e.target.closest('.repeater-wrapper').remove()
  }

  // ** Function to toggle sidebar
  const toggleSidebar = () => setOpen(!open)

  // ** Vars
  const countryOptions = [
    { value: 'australia', label: 'Australia' },
    { value: 'canada', label: 'Canada' },
    { value: 'russia', label: 'Russia' },
    { value: 'saudi-arabia', label: 'Saudi Arabia' },
    { value: 'singapore', label: 'Singapore' },
    { value: 'sweden', label: 'Sweden' },
    { value: 'switzerland', label: 'Switzerland' },
    { value: 'united-kingdom', label: 'United Kingdom' },
    { value: 'united-arab-emirates', label: 'United Arab Emirates' },
    { value: 'united-states-of-america', label: 'United States of America' }
  ]

  // ** Custom Options Component
  const OptionComponent = ({ data, ...props }) => {
    if (data.type === 'button') {
      return (
        <Button className='text-left rounded-0' color={data.color} block onClick={() => setOpen(true)}>
          <Plus size={14} /> <span className='align-middle ml-50'>{data.label}</span>
        </Button>
      )
    } else {
      return <components.Option {...props}> {data.label} </components.Option>
    }
  }

  // ** Invoice To OnChange
  const handleInvoiceToChange = data => {
    setValue(data)
    setSelected(clients.filter(i => i.name === data.value)[0])
  }

  const note =
    'It was a pleasure working with you and your team. We hope you will keep us in mind for future freelance projects. Thank You!'

  return (
    <Fragment>
      <Card className='invoice-preview-card mb-0' style={{ textAlign: 'justify'}}>
      <div>
                <img style={{display:'block', margin:'auto'}}  src='https://expoconevents.com/images/expocon.png' width='400' height={130} alt='expocon logo'></img>
              </div>
              <div className='header-title'>
              <h1>ExpoCon Group's Election 2020</h1>
              <h2>5<sup>th</sup>May 2022 (11:00AM) to 28<sup>th</sup> May 2022 (05:PM)</h2>
              </div>
              <hr className='invoice-spacing' />
        {/* Header */}
        <CardBody>
        <Row>

        <Col md='4'></Col>
          <Col md='6'><Form>
          <h6 style={{fontWeight:'bold'}}>Membership Number <span>*</span></h6>
          <FormGroup row>
            {/* <Label sm='3'>
            Membership Number
            </Label> */}
            <Col sm='9'>
              <Input type='text' placeholder='Expo-031' />
            </Col>
          </FormGroup>
            <h6 style={{fontWeight:'bold'}}>Enter your mobile number we will sent you OTP to verify<span>*</span></h6>

          <FormGroup row>
            {/* <Label sm='3' for='Email'>
              Mobile
            </Label> */}
            <Col sm='9'>
              <Input type='text' name='Email' id='Email' placeholder='mobile' />
            </Col>
          </FormGroup>
          <h6 style={{fontWeight:'bold'}}>Enter your  Email we will sent you Link to verify<span>*</span></h6>
          <FormGroup row>
            {/* <Label sm='3' for='Email'>
              Mobile
            </Label> */}
            <Col sm='9'>
              <Input type='text' name='Email' id='Email' placeholder='mobile' />
            </Col>
          </FormGroup>
        </Form></Col>
        <Col md='2'></Col>
        </Row>
        </CardBody>
        {/* /Header */}
        <div className='button-div'>
        <Link to='/FrontEnd/otp'>
        <Button.Ripple  className='instruction-button' color='primary'>continue</Button.Ripple>
        </Link>
        </div>
      </Card>
      
    </Fragment>
  )
}

export default AddCard
