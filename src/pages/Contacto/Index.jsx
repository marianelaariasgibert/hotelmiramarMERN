import React from "react";
import { HeaderSection } from "../../components/Main/HeaderSection";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from "react-bootstrap/Form";
import Alert from 'react-bootstrap/Alert';

//icons
import { SiWhatsapp } from "react-icons/si";
import { FiMail } from 'react-icons/fi'
//css-propio
import "../../components/Main/bodyRandom.css";
import { useForm } from "../../components/Main/useForm";
import {Helmet} from "react-helmet";

const initialForm ={
  name: "",
  lastname: "",
  email:"",
  phone: "",
  comments:"",
}

const validationsForm =(form) =>{

  let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
  let regexComments = /^.{1,400}$/;
  let regexNumber =/[0-9]{3}[-][0-9]{7}/
  
  let errors = {}

  if(!form.name.trim()){
    errors.name = "ingrese bien los datos"
  }
  if (!form.lastname.trim()){
    errors.lastname = "ingrese bien los datos"
  }
  if (!form.phone.trim()){
    errors.phone = "ingresa correctamente los datos"
  } else if (!regexNumber.test(form.phone.trim()))
  errors.phone = "ingresa tu telefono sin el prefijo 0 luego -(guion) y su número sin el 15"
  if(!form.email.trim()){
    errors.email = "ingresa un mail"
  }else if(!regexEmail.test(form.email.trim())){
    errors.email="ingresa correctamente los datos"
  }
  if(!form.comments.trim()){
    errors.comments = "Rellene su consulta"
  }else if(!regexComments.test(form.comments.trim())){
    errors.comments = "Hasta 500 caracteres"
  }
  return errors
}
const Contacto = () => {
  const {
    form,
    erros,
    loading,
    response,
    handleSubmit,
    handleChange,
    handleBlur
  } = useForm(initialForm, validationsForm)

  const section = "Contacto";
  
  return (
    <>
    <main className="container-index ">
      <Helmet>
        <title>Hotel Miramar</title>
        <meta name="author" content="Arias Gibert Marianela" />
        <meta name="description" content="Contactate para vivir la experiencia de nuestro Hotel en el centro de Cordoba" />
        <meta name="keywords" content="Hotel Miramar en Cordoba, capital, habitaciones, servicios, desayuno, sala de conferencia, vacaciones"></meta>
      </Helmet>
        <header>
        <HeaderSection section={ section} />
        </header>
        <Container>
        <Row>
        <Col fluid="lg">
          <div className="contact-index">
            <h4 className="h4-contact">Estamos a disposicion para responder todas tus consultas</h4>       
           
           
            <Form
              className="form margin-f" 
              onSubmit={handleSubmit} 
              autoComplete='off'
              method="POST"
              >
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Nombre</Form.Label>
                  <Form.Control 
                    type="text" 
                    name="name"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={form.name}
                    required
                    />
                    {erros.name &&<p className="error">{erros.name}</p>}
                </Form.Group>
                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label>Apellido</Form.Label>
                  <Form.Control 
                    type="text"
                    name="lastname"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={form.lastname}
                    required
                    />
                    {erros.lastname &&<p className="error">{erros.lastname}</p>}
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridAddress1">
                  <Form.Label>Número telefónico</Form.Label>
                  <Form.Control 
                   type="tel" 
                   placeholder="Código de área-número sin 15"
                   name="phone"
                   onBlur={handleBlur}
                   onChange={handleChange}
                   value={form.phone}
                   required
                  />
                  {erros.phone &&<p className="error">{erros.phone}</p>}
                </Form.Group>
              </Row>
              <Form.Group className="mb-3" controlId="formGridAddress1">
                <Form.Label>Correo</Form.Label>
                <Form.Control 
                  type="email" 
                  name="email"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={form.email}
                  required
                  />
                  {erros.email &&<p className="error">{erros.email}</p>}
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Datos adicionales</Form.Label>
                <Form.Control 
                  as="textarea" 
                  rows={3} 
                  name="comments"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={form.comments}
                  required
                  />
                  {erros.comments &&<p className="error">{erros.comments}</p>}
              </Form.Group>
              {response && 
                <Alert variant="light">
                  <Alert.Heading>Datos enviados correctamente</Alert.Heading>
                  <p>
                  En breve un asesor se contactara verificando los datos ingresados
                  </p>
                </Alert>
              } 
              <button 
              type="submit" 
              className="btn-submit"
              style={{marginTop: "1rem"}}
              >Enviar
              </button>
            </Form>

            
          </div>
        </Col>
        </Row>
        <footer className="footer-contact">
              <div className="item-footer">
                <h3 className="h3-icon"><SiWhatsapp/></h3>
                <h6 className="h6-text">+54 (351) 610 4591</h6>
              </div>
              <div className="item-footer">
                <h3 className="h3-icon"><FiMail/></h3>
                <h6 className="h6-text">miramarhotel@gmail.com</h6>
              </div>
            </footer>
        </Container>
      </main>
    </>
  );
};

export { Contacto };
