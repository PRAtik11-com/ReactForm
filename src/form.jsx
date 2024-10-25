import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Tasklist() {
    const [name,setname] = useState("")
    const [email,setemail] = useState("")
    const [pass,setpass] = useState("")
    const [city,setcity] = useState("")
    const [gender,setgender] = useState("")
    const [Ismarried,setIsmarried] = useState("false")
    // console.log(Ismarried);

    const handlevalue = (e) => {
        e.preventDefault()

        const NewObj = {
            name,
            email,
            pass,
            city,
            gender,
            Ismarried
        }
        localStorage.setItem("Data",JSON.stringify(NewObj))

        setname("");
        setemail("");
        setpass("");
        setcity("");
        setgender("");
        setIsmarried(false);
        
    }
    
  return (
    <div>
    <Form onSubmit={handlevalue} >
    <Form.Group className="mb-3 text-start" controlId="formBasictext">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter text" value={name} onChange={(e)=>{setname(e.target.value)}}  />
      </Form.Group>
      <Form.Group className="mb-3 text-start" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={(e)=>{setemail(e.target.value)}} value={email} />
      </Form.Group>

      <Form.Group className="mb-3 text-start" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={(e)=>{setpass(e.target.value)}} value={pass} />
      </Form.Group>
      <Form.Select aria-label="Default select example" className='mb-3' onChange={(e)=>{setcity(e.target.value)}} value={city}>
      <option>Select City</option>
      <option>Surat</option>
      <option>Ahmdabad</option>
      <option>Pune</option>
      <option>Rajkot</option>
    </Form.Select>
    <Form.Group className="mb-3 text-start">
        <Form.Check type="radio" label="Male" name='gender' value="male" onChange={(e) => {setgender(e.target.value)}} />
        <Form.Check type="radio" label="Female" name='gender' value="female" onChange={(e) => {setgender(e.target.value)}} />
      </Form.Group>
      <Form.Group className="mb-3 text-start" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Ismarried" onChange={(e) => {setIsmarried(e.target.checked)}} />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
  );
}

export default Tasklist;