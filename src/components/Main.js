import React, { StrictMode } from 'react';
import { Form, Row, Col, InputGroup, FormControl, Button } from 'react-bootstrap';
import Select from 'react-select'
class Main extends React.Component{
    
    constructor(props){
        super(props)
        this.state = {
            dataNegara: [],
            number: null,
        }
    }

    async componentDidMount() {
        const d = await fetch('https://restcountries.eu/rest/v2/all')
        const dd = await d.json()
        dd.map(data => {
            this.state.dataNegara.push({
                value: data.name,
                label: <div><img width="20px" height="20px" src={data.flag} /> {' '} {data.name} </div>,
                number: data.callingCodes[0]
            })
        })
    }


    render(){
        
        const changeNumber = (event) => {
            this.setState({number: event.target.value});
        }
        
        return(
            <div style={{ marginLeft:'50px', marginTop:'20px', marginRight: '50px', marginBottom: '20px' }}>
                <h4>Create new Account</h4>
                <Form style={{ marginTop:'20px' }}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Title</Form.Label>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" inline label="Mrs" />
                        <Form.Check type="checkbox" inline label="Ms" />
                        <Form.Check type="checkbox" inline label="Mom" />
                        <Form.Check type="checkbox" inline label="Mr" />
                        <Form.Check type="checkbox" inline label="Dr" />
                    </Form.Group>
                </Form.Group>
                <Row md={12}>
                    <Col md={6}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control placeholder="Last name" />
                    </Form.Group>
                    </Col>
                    <Col md={6}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control placeholder="First name" />
                    </Form.Group>
                    </Col>
                </Row>
                <Row md={12}>
                    <Col md={2}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Mobile Phone Number</Form.Label>
                        <Select defaultValue={this.state.dataNegara[0]} options={this.state.dataNegara} value={this.state.number} />
                    </Form.Group>
                    
                    </Col>
                    <Col md={3}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label style={{ visibility:'hidden' }}>Mobile Phone Number</Form.Label>
                        <Form.Label htmlFor="inlineFormInputGroup" srOnly>
                            Username
                        </Form.Label>
                        <InputGroup className="mb-2">
                            <InputGroup.Prepend>
                            <InputGroup.Text>+{this.state.number}</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl id="inlineFormInputGroup" placeholder="Mobile Phone Number" />
                        </InputGroup>
                    </Form.Group>
                    </Col>
                </Row>
                <h4>Address</h4>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Address</Form.Label>
                    <FormControl id="inlineFormInputGroup" placeholder="Address" />
                </Form.Group>
                <Row md={12}>
                    <Col md={6}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Country/Location</Form.Label>
                        <Select defaultValue={this.state.dataNegara[0]} options={this.state.dataNegara} value={this.state.number} />
                    </Form.Group>
                    
                    </Col>
                    <Col md={6}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Provinci/District</Form.Label>
                        <Form.Label htmlFor="inlineFormInputGroup" srOnly>
                            Username
                        </Form.Label>
                        <Select defaultValue={this.state.dataNegara[0]} options={this.state.dataNegara} value={this.state.number} />
                    </Form.Group>
                    </Col>
                </Row>
                <h4>Contacts</h4>
                <Row md={12}>
                    <Col md={6}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email Address</Form.Label>
                        <FormControl id="inlineFormInputGroup" placeholder="Email Address" />
                    </Form.Group>
                    
                    </Col>
                    <Col md={2}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Provinci/District</Form.Label>
                        <Form.Label htmlFor="inlineFormInputGroup" srOnly>
                            Username
                        </Form.Label>
                        <Select defaultValue={this.state.dataNegara[0]} options={this.state.dataNegara} value={this.state.number} />
                    </Form.Group>
                    </Col>
                    <Col md={2}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Provinci/District</Form.Label>
                        <Form.Label htmlFor="inlineFormInputGroup" srOnly>
                            Username
                        </Form.Label>
                        <Select defaultValue={this.state.dataNegara[0]} options={this.state.dataNegara} value={this.state.number} />
                    </Form.Group>
                    </Col>
                    <Col md={2}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Provinci/District</Form.Label>
                        <Form.Label htmlFor="inlineFormInputGroup" srOnly>
                            Username
                        </Form.Label>
                        <Select defaultValue={this.state.dataNegara[0]} options={this.state.dataNegara} value={this.state.number} />
                    </Form.Group>
                    </Col>
                </Row>
                </Form>

                <h5 style={{ marginTop:'50px' }}>Standart Privacy Note</h5>
                <p>I warrant that the above informations is true and correct. I understand that failure to answer all questions listed in the application from may prevent L'OCCITANE from processing my application and L'OCCITANE may refuse to accept this application in the right of my individual cirumstance </p>
                <p>I warrant that the above informations is true and correct. I understand that failure to answer all questions listed in the application from may prevent L'OCCITANE from processing my application and L'OCCITANE may refuse to accept this application in the right of my individual cirumstance </p>
                <p>I warrant that the above informations is true and correct. I understand that failure to answer all questions listed in the application from may prevent L'OCCITANE from processing my application and L'OCCITANE may refuse to accept this application in the right of my individual cirumstance </p>
                <p>I warrant that the above informations is true and correct. I understand that failure to answer all questions listed in the application from may prevent L'OCCITANE from processing my application and L'OCCITANE may refuse to accept this application in the right of my individual cirumstance </p>
                <p>I warrant that the above informations is true and correct. I understand that failure to answer all questions listed in the application from may prevent L'OCCITANE from processing my application and L'OCCITANE may refuse to accept this application in the right of my individual cirumstance </p>

                <Button style={{ float:'right', marginBottom:'20px' }} variant="warning">Create Customer</Button>
            </div>

            
        )
    }
}

export default Main