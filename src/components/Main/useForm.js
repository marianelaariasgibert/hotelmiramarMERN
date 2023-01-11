import { useState } from 'react'
import axios from 'axios';


export const useForm = (initialForm, validateForm) => {
  const [form, setForm] = useState(initialForm)
  const [erros, setErros] = useState({})
  const [loading, setLoading] = useState(false)
  const [response, setResponse] = useState(null)

  const URL = 'http://localhost:3001/consulta';


  const handleChange = (e)=>{
    const {name,value} = e.target
    setForm({
        ...form,
        [name]: value   
    }
    )
  }

   const handleSend = async () => {
    await axios.post(URL, form)
    set({
      name: "",
      lastname: "",
      email:"",
      phone: "",
      comments:"",
    })
  }
  
  const handleBlur = (e)=>{
   handleChange(e)
   setErros(validateForm(form))
  }
  const handleSubmit = (e)=>{
    e.preventDefault()
    setErros(validateForm(form))
    
    if(Object.keys(erros).length === 0){
        setLoading(true)
        setResponse(true)
        setForm(initialForm)
        handleSend()
        

    }else{
        return
    }
  }

  return{
    form,erros,loading,response, handleSubmit, handleChange, handleBlur
  }
}
