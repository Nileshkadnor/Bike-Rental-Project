import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import bcrypt from 'bcryptjs';


const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const usenavigate = useNavigate();

 
  useEffect(() => {
    sessionStorage.clear();
  }, []);

  const validate = () => {
    let result = true;
    if (username === '' || username === null) {
      result = false;
      toast.warning('Please Enter Username');
    }
    if (password === '' || password === null) {
      result = false;
      toast.warning('Please Enter Password');
    }
    return result;
  }

  const proceedLogin = async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        const res = await fetch("http://localhost:8000/user/" + username);
        const resp = await res.json();

        if (Object.keys(resp).length === 0) {
          toast.error('Please Enter a valid username');
        } else {
          const storedHashedPassword = resp.password;
          const isPasswordMatch = bcrypt.compareSync(password, storedHashedPassword);
          
          if (isPasswordMatch) {
            toast.success('Success');
            sessionStorage.setItem('username', username);
            sessionStorage.setItem('userrole', resp.role);
            usenavigate('/Bike_Owner_Db');
          } else {
            toast.error('Please Enter valid credentials');
          }
        }
      } catch (err) {
        toast.error('Login Failed due to :' + err.message);
      }
    }
  }

  return (
    <section className="login-wrapper p-5" style={{ backgroundColor: '#8abde9' }}>
      <div className="container-xxl" style={{ marginTop: '70px' }}>
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-8 col-sm-10">
            <div className="card">
              <div className="card-body p-5">
                <h2 className="text-center">LOGIN</h2>
                <p className="text-center mb-4">Welcome Back!!</p>
                <form onSubmit={proceedLogin}>
                  <div className="mb-3">
                    <label>User Name <span className="errmsg">*</span></label>
                    <input value={username} onChange={e => setUsername(e.target.value)}
                      className="form-control"></input>
                   <br/>  <label>Password <span className="errmsg">*</span></label>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)}
                      className="form-control"></input>
                  </div>
                  {/* <div className="mb-3">
                    <Link to="/Forgotpass" className="form-link">
                      Forgot password?
                    </Link>
                  </div> */}
                  <div>
                    <br/>
                  </div>
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <p className='m-0'>Don't have an account?</p>
                    <Link to="/regist" className="form-link">
                      Sign up
                    </Link>
                  </div>
                  <div className="d-grid gap-2 ">
                    <button type="submit"className="btn btn-primary" >Login</button>
                    <ToastContainer />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
