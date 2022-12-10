import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const Login = () => {
  const {register, formState: { errors }, handleSubmit} = useForm();
  const {signIn} = useContext(AuthContext);
  const [loginError, setLoginError] = useState('');

  const handleLogin = data =>{
    console.log(data);
    setLoginError('');
    signIn(data.email, data.password)
    .then(result => {
        const user = result.user;
        console.log(user);
    })
    .catch(error => {
      console.log(error.message)
      setLoginError(error.message);
    });
  }

  return (
    <div className='h-[800px] flex justify-center items-center'>
       <div className='w-96 px-10 pb-10 shadow-lg rounded-lg'>
          <h2 className='text-4xl text-center mb-8 text-secondary'>Login</h2>

          <form onSubmit={handleSubmit(handleLogin)}>
            <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text">Email</span>
                </label>
                <input type="email" {...register("email", {
                   required: 'Email Address is required'
                })}
                className="input input-bordered w-full max-w-xs" />
                {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
            </div>
            <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text">Password</span>
                </label>
                <input type="password" {...register("password",{
                    required: 'Password is required'
                })} 
                className="input input-bordered w-full max-w-xs"/>
                <label className="label">
                    <span className="label-text text-secondary my-2">Forget Password</span>
                </label>
                {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
            </div>
              <input className='btn btn-accent w-full' value="login"
              type="submit" />
              { loginError && <p className='text-red-600'>{loginError}</p>}
          </form>
          <p className='my-2'><small>New to Doctors Portal?</small> <Link to='/signup' className='text-secondary'>Create new account </Link></p> 
         <div className="divider my-6">OR</div>
         <button className='btn btn-outline w-full'>CONTINUE WITH GOOGLE </button>
      </div>
    </div>
  );
};

export default Login;