import { Link, useNavigate } from 'react-router-dom';
import './style.css';
import pizza from '../../assets/pizza.jpg';
import { LockOutlined, UserOutlined, EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Button, Form, Input, message, Spin } from 'antd';
import { useState, useEffect } from "react";
import useFetchData from '../../share/useFetchData';
import { BaseURL } from '../../constant/base_api';

// interface FarmData {
//   status: boolean;
//   msg: string;
//   data: [
//     {
//       id: number;
//       owner_id: number;
//       name: string;
//       address: string;
//       about: string | null;
//       lat: string | null;
//       lng: string | null;
//       status: number;
//       cover: string | null;
//       logo: string | null;
//       created_at: string;
//       updated_at: string;
//     }
//   ];
// }

interface LoginData {
  status: boolean;
  msg: string;
  data: {
    user: {
      id: number;
      first_name: string;
      last_name: string;
      profile_url: string | null;
      email: string;
      phone: string;
      auth_type: string;
      device_type: string;
      phone_verify: number;
      unique_id: string;
      fcm_token: string | null;
      status: number;
      created_at: string;
      updated_at: string;
    };
    accessToken: string;
  };
}

const LoginPage = () => {
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate(); // Use the useNavigate hook

  const togglePasswordVisibility = () => {
    setVisible(!visible);
  };

  function setCookie(name: string, value: string, days: number) {
    let expires = "";
    if (days) {
      const d = new Date();
      d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000));
      expires = "expires=" + d.toUTCString();
    }
    document.cookie = name + "=" + encodeURIComponent(value) + ";" + expires + ";path=/";
  }

  function getCookie(name: string) {
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      if (cookie.indexOf(name + "=") === 0) {
        return decodeURIComponent(cookie.substring(name.length + 1));
      }
    }
    return null;
  }

  const { data: loginData, isLoading: loginLoading, error: loginError, fetchData: Login } = useFetchData<LoginData>(BaseURL + '/login', 'POST');

  function handleLogin(values: { phone: string; password: string; type: string }) {
    
    Login(values);
  
  }

 useEffect(() => {
  if (loginData) {
    setCookie('access_token', loginData.data.accessToken, 365 * 100);
    localStorage.setItem("isAuthenticated", "true");
    console.log("isAuthenticated:", localStorage.getItem("isAuthenticated")); // Add this line
    message.success("Login successful!");
    navigate('/home');
  }
   if (loginError) {
    message.error("Login failed: ");
  }
}, [loginData, loginError, navigate]);

//   const onLogin = () =>{
//     localStorage.setItem('loginDate','1')
//     navigate('/')
//   }

  return (
    <div className="login template d-flex justify-content-center align-items-center w-100 vh-100 bg-success">
      <div className="form_container p-5 rounded bg-white">
        <Form
          onFinish={handleLogin}
        >
          <div className='d-flex justify-content-center align-items-center'>
            <img src={pizza} alt='logo' style={{ width: "5rem", height: "3rem", objectFit: 'cover' }} />
          </div>
          <h1 className="text-center">Welcome back</h1>
          <p className='text-center'>Sign in to your account to full access our application</p>
          <Form.Item
            name="phone"
            rules={[
              {
                required: true,
                message: 'Please input your Phone number!',
              },
            ]}
          >
            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Phone number" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your Password!',
              },
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              suffix={
                visible ? (
                  <EyeTwoTone className="site-form-item-icon" onClick={togglePasswordVisibility} />
                ) : (
                  <EyeInvisibleOutlined className="site-form-item-icon" onClick={togglePasswordVisibility} />
                )
              }
              type={visible ? 'text' : 'password'}
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item
            name="type"
            rules={[
              {
                required: true,
                message: 'Please input your type!',
              },
            ]}
          >
            <Input placeholder="type" />
          </Form.Item>
          <div>
            <input type="checkbox" className="custom-control custom-checkbox" id="check" />
            <label htmlFor="check" className="custom-input-label ms-2">
              Remember me
            </label>
          </div>
          <div className="d-grid">
            <Button
            //  onClick={onLogin}
              type="primary"
              htmlType="submit"
              className="login-form-button text-center"
              loading={loginLoading}
            >
              {loginLoading ? <Spin /> : "Sign in"}
            </Button>
          </div>
          <p className='text-center'>
            <a href="#">Forgotten password</a>?
          </p>
          <div className="d-grid d-flex justify-content-center align-items-center">
            <Link to="/register" style={{ width: '30%', height: '100%', objectFit: 'cover' }} className="btn btn-success">Create new account</Link>
          </div>
          <div className="separator">
            <hr />
            <span>or sign up with</span>
          </div>
          <div className="d-grid d-flex justify-content-center align-items-center" style={{ width: '100%' }}>
            <a href="#" target="_blank" style={{ margin: '0 10px', fontSize: '30px' }} ><i className="fa-brands fa-facebook"></i></a>
            <a href="#" target="_blank" style={{ margin: '0 10px', fontSize: '30px' }} ><i className="fa-brands fa-google"></i></a>
            <a href="#" target="_blank" style={{ margin: '0 10px', fontSize: '30px' }}><i className="fa-brands fa-twitter"></i></a>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default LoginPage;
