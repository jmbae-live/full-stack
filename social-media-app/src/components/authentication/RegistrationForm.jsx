import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


function RegistrationForm() {
  const navigate = useNavigate();
  const [validated, setValidated] = useState(false);
  const [form, setForm] = useState({})
  const [error, setError] = useState(null)
  
  return (<></>);
}

export default RegistrationForm