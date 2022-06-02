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
  Footer
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
    <>
    <Fragment>
      <Card className='invoice-preview-card mb-0' style={{ textAlign: 'justify' }}>
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
        <div className='instructions-body'>
        <h3 style={{textAlign:'center'}}>Instructions To The Candidates Before The Examination Starts</h3>
        <div>
       <div className="field-item odd">
       <ul className='ul'>
       <li>you have an <strong>active user account</strong> at UiB. Log on to webmail.uib.no, miside.uib.no or another UiB-service to see if your account is active.</li><li>you <strong>remember the password</strong> for your UiB-account. If you have forgotten your password, you can change it at sebra.uib.no.</li>
       <li>you have an <strong>active user account</strong> at UiB. Log on to webmail.uib.no, miside.uib.no or another UiB-service to see if your account is active.</li><li>you <strong>remember the password</strong> for your UiB-account. If you have forgotten your password, you can change it at sebra.uib.no.</li>
       <li>e-Voting is voting through an electronic system where members/shareholders can vote on resolutions of companies requiring members/shareholders consent. The need for e-Voting arises when a company wishes to pass a resolution by<strong> Postal Ballot/AGM/EGM </strong>which requires members/shareholders consent. Ministry of Corporate Affairs has authorised NSDL for setting up an electronic platform to facilitate members/shareholders to cast vote in electronic form. Accordingly, NSDL has set-up an electronic infrastructure to facilitate members/shareholders to cast votes in electronic form through intern</li>
       <li>The e-Voting System of NSDL facilitates voting from all shareholders i.e., shareholders holding shares in physical and demat mode with either NSDL or CDSL, as on the record date. Further NSDL e-Voting System also facilitates members of entities who wish to provide e-Voting facility for its members.(e.g. Clubs).</li>
       </ul>
            </div>
        </div>
        </div>
        </CardBody>
        {/* /Header */}
        <div className='button-div'>
       
        <Link to='/FrontEnd/login'>
        <Button.Ripple  className='instruction-button' color='primary'>Continue to Login</Button.Ripple>
        </Link>
        </div>
      </Card>
    </Fragment>

    </>
  )
}

export default AddCard
