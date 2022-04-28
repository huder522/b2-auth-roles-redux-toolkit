import { FormEvent } from 'react'
import { useForm } from '../../hooks/useForm'


interface FormData {
  email: string;
  password: string;
}
const initialForm: FormData = {
  email: 'peter@user.com',
  password: '123456'
}
export const SigninPage = () => {

  const { formValues, handleInputChange } = useForm( initialForm );
  const { email, password } = formValues;

  const handleSubmit = ( e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  }

  return (
    <div className="signin-container">
      <h1>Login</h1>
      <form onSubmit={ handleSubmit }>
        <input 
          className="form-control mb-3"
          type="text" 
          placeholder="email"
          autoComplete="off"
          name="email"
          value={ email }
          onChange={ handleInputChange }
        />
        <input 
          className="form-control mb-3"
          type="password" 
          placeholder="password"
          autoComplete="off"
          name="password"
          value={ password }
          onChange={ handleInputChange }
        />
        <div className="d-grid gap-2">
          <button
            type="submit"
            className="btn btn-success"
          > 
            Sign in
          </button>
        </div>
      </form>
    </div>
  )
}
