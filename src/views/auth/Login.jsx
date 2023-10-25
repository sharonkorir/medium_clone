import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login({ setUser }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  //   const handleSubmit
  //   if (!email) return;
  //   setUser({ email: email });
  //   navigate("/posts");
  return <div>Login</div>;
}
