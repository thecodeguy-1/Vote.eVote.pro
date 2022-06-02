import { useState } from "react"
import {
  CardHeader,
  Card,
  CardTitle,
  CardBody,
  CardText,
  Badge,
  Button,
  Alert,
  Media,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  Form,
  FormGroup,
  Label
} from "reactstrap"
import { Star, Paperclip, User, AlertCircle } from "react-feather"
import Cadidate from "@src/assets/images/portrait/small/avatar-s-9.jpg"
import { Link } from "react-router-dom"

const CardAppDesign = () => {
  const [openModal, setOpenModal] = useState(false)
  const avatarArr = [
    {
      img: require("@src/assets/images/portrait/small/avatar-s-9.jpg").default,
      imgHeight: 75,
      imgWidth: 75
    }
  ]

  const designPlanningArr = [
    {
      title: "Due Date",
      subtitle: "12 Apr, 21"
    },
    {
      title: "Budget",
      subtitle: "$49251.91"
    },
    {
      title: "Cost",
      subtitle: "$840.99"
    }
  ]

  return (
    <>
      <Card className="card-app-design">
        <CardBody>
          <CardTitle style={{background:'#7367f0', color:'white', padding:'10px', textAlign:'center'}}>  VICE PRICEDENT</CardTitle>
          <div>
          <h6 className="section-label" style={{display:'flex', justifyContent:'center', alignItems:'center', width:'100'}}>Instrctions</h6>
          <p style={{textAlign:'center'}}>Select any Two (2) candidate for the post of Vice President</p>
          </div>
          <div className="design-group mb-2 pt-50">
            <div className="demo-spacing-0">
              <Alert color="primary">
                <div className="alert-body">
                  <div className="numbersection">
                    <div className="left">
                      <span class="Reddot">0</span>
                      <p>Members Out of</p>
                      <span class="Greendot">2</span>
                      <p>to be elected</p>
                    </div>
                    <div className="right">
                      <p> No. of Posts</p>
                      <span class="yellowdot">2</span>
                    </div>
                  </div>
                </div>
              </Alert>
            </div>
            <div className="userdiv">
              <div className="profilenamebio">
                <img
                  className="cadidateimg"
                  src={Cadidate}
                  width="80"
                  height="80"
                ></img>
                <div className="profilesnames">
                  <div>
                    <CardTitle className="mb-25" tag="h4">
                      Srikanth Thallapally
                    </CardTitle>
                    <CardText>3+ years of MERN Stack devlopment</CardText>
                    <Badge color='primary'   onClick={() => setOpenModal(!openModal)} style={{cursor: 'pointer'}}>
        <AlertCircle size={12} className='align-middle'  />
        <span className='align-middle ml-25'>CV</span>
      </Badge>
                  </div>
                </div>
              </div>
              <div className="mycheckbox">
                <label class="checkbox">
                  <input type="checkbox" class="checkbox__input" />
                  <span class="checkbox__inner"></span>
                </label>
              </div>
            </div>
            <div className="userdiv">
              <div className="profilenamebio">
                <img
                  className="cadidateimg"
                  src={Cadidate}
                  width="80"
                  height="80"
                ></img>
                <div className="profilesnames">
                  <div>
                    <CardTitle className="mb-25" tag="h4">
                      Srikanth Thallapally
                    </CardTitle>
                    <CardText>3+ years of MERN Stack devlopment</CardText>
                    <Badge color='primary'   onClick={() => setOpenModal(!openModal)} style={{cursor: 'pointer'}}>
        <AlertCircle size={12} className='align-middle'  />
        <span className='align-middle ml-25'>CV</span>
      </Badge>
                  </div>
                </div>
              </div>
              <div className="mycheckbox">
                <label class="checkbox">
                  <input type="checkbox" class="checkbox__input" />
                  <span class="checkbox__inner"></span>
                </label>
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
      {/* vicepresident */}
      <Card className="card-app-design">
        <CardBody>
          <CardTitle style={{background:'#7367f0', color:'white', padding:'10px', textAlign:'center'}}>  VICE PRICEDENT</CardTitle>
          <div>
          <h6 className="section-label" style={{display:'flex', justifyContent:'center', alignItems:'center', width:'100'}}>Instrctions</h6>
          <p style={{textAlign:'center'}}>Select any Two (2) candidate for the post of Vice President</p>
          </div>
          <div className="design-group mb-2 pt-50">
            <div className="demo-spacing-0">
              <Alert color="primary">
                <div className="alert-body">
                  <div className="numbersection">
                    <div className="left">
                      <span class="Reddot">0</span>
                      <p>Members Out of</p>
                      <span class="Greendot">2</span>
                      <p>to be elected</p>
                    </div>
                    <div className="right">
                      <p> No. of Posts</p>
                      <span class="yellowdot">2</span>
                    </div>
                  </div>
                </div>
              </Alert>
            </div>
            <div className="userdiv">
              <div className="profilenamebio">
                <img
                  className="cadidateimg"
                  src={Cadidate}
                  width="80"
                  height="80"
                ></img>
                <div className="profilesnames">
                  <div>
                    <CardTitle className="mb-25" tag="h4">
                      Srikanth Thallapally
                    </CardTitle>
                    <CardText>3+ years of MERN Stack devlopment</CardText>
                    <Badge color='primary'   onClick={() => setOpenModal(!openModal)} style={{cursor: 'pointer'}}>
        <AlertCircle size={12} className='align-middle'  />
        <span className='align-middle ml-25'>CV</span>
      </Badge>
                  </div>
                </div>
              </div>
              <div className="mycheckbox">
                <label class="checkbox">
                  <input type="checkbox" class="checkbox__input" />
                  <span class="checkbox__inner"></span>
                </label>
              </div>
            </div>
            <div className="userdiv">
              <div className="profilenamebio">
                <img
                  className="cadidateimg"
                  src={Cadidate}
                  width="80"
                  height="80"
                ></img>
                <div className="profilesnames">
                  <div>
                    <CardTitle className="mb-25" tag="h4">
                      Srikanth Thallapally
                    </CardTitle>
                    <CardText>3+ years of MERN Stack devlopment</CardText>
                    <Badge color='primary'   onClick={() => setOpenModal(!openModal)} style={{cursor: 'pointer'}}>
        <AlertCircle size={12} className='align-middle'  />
        <span className='align-middle ml-25'>CV</span>
      </Badge>
                  </div>
                </div>
              </div>
              <div className="mycheckbox">
                <label class="checkbox">
                  <input type="checkbox" class="checkbox__input" />
                  <span class="checkbox__inner"></span>
                </label>
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
      <div className='button-div'>
        <Link to='/FrontEnd/Results'>
        <Button.Ripple style={{margin:'auto', display:'block'}}  className='instruction-button' color='primary'>submit</Button.Ripple>
        </Link>
        </div>
      {/* viceprisedent */}
      <Modal isOpen={openModal} toggle={() => setOpenModal(!openModal)}>
        <ModalHeader toggle={() => setOpenModal(!openModal)}>
          Srikanth Thallapally
        </ModalHeader>
        <ModalBody>
          If you’re anything like me, you probably don't think about your
          professional bio until you’re suddenly asked to "shoot one over via
          email." You have approximately one afternoon to come up with it, and
          that's when you scramble, and the bio ends up reading like this:
          <br></br>
          "Rodney Erickson is a content marketing professional at HubSpot, an
          inbound marketing and sales platform that helps companies attract
          visitors, convert leads, and close customers. Previously, Rodney
          worked as a marketing manager for a tech software startup. He
          graduated with honors from Columbia University with a dual degree in
          Business Administration and Creative Writing."<br></br>
          Woof, that was dull. Are you still with me? I swear, not even adding a
          tidbit about his cats would liven that bio up.
        </ModalBody>
        <ModalFooter style={{ display: "flex", margin: "auto" }}>
          <Button color="primary" onClick={() => setOpenModal(!openModal)}>
            OK
          </Button>
        </ModalFooter>
      </Modal>
    </>
  )
}

export default CardAppDesign
