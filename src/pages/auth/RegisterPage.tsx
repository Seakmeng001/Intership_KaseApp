import React, { FormEvent, useContext, useRef } from 'react'
import { useNavigate,} from 'react-router-dom';
import UserContext from '../../context/UserContext';
import pizza from '../../assets/pizza.jpg';
import './RegisterPage.css';
// import { useUserContext } from '../../context/UserContextProvider';



const RegisterPage = () => {
  
  const [visible, setVisible] = React.useState(false);
  const { user, updateUserInformation } = useContext(UserContext);
    const firstName = useRef<HTMLInputElement>(null)
    const lastName = useRef<HTMLInputElement>(null)
    const phoneNumber = useRef<HTMLInputElement>(null)
    const password = useRef<HTMLInputElement>(null)
    const navigate = useNavigate()
 
//   const togglePasswordVisibility = () => {
//     setVisible(!visible);
//   };
  

  async function handleSubmit(event: FormEvent) {
    event.preventDefault()
    const url = "https://kaseapp1dev.kasegro.com/api/r1/get-otp-code"
    try {
        const phone = phoneNumber.current?.value
        const formatted_number = phone!.replace(/(\d{3})(\d{3})(\d{4})/, '$1 $2 $3') + phone!.slice(11)

        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ 'phone': formatted_number })
        })

        if (!response.ok) {
          const errorBody = await response.json();
          // Check if the error message indicates the phone number is already registered
          if (errorBody.message.includes("phone number already registered")) {
            alert("This phone number is already registered. Please use another one or log in.");
            return;
          }
            throw new Error(`Network response was not ok (status ${response.status})`)
        }

        const body = await response.json()
        console.log(body.data)
        const verifiedRequestId = body.data.otp_verified_id
        const forward_data = { first_name: firstName.current?.value , last_name: lastName.current?.value, phone: formatted_number, password: password.current?.value, verified_request_id: verifiedRequestId}
        updateUserInformation(forward_data)
        console.log(forward_data)
        localStorage.setItem("otpFlag", "true")
        navigate('/otp')
        // store.commit('setUserInformation', { firstName: this.firstName, lastName: this.lastName, phoneNumber: formatted_number, email: this.email, password: this.password, verifiedRequestId: verifiedRequestId, authType: "phone", deviceType: "Web" })
        // store.commit('setOtpFlag', true)
        // this.$router.push('/otp-verification')

    } catch (error) {
        console.error('Error fetching data:', error)
        throw error
    }
}


  return (
    <div className="register-page">
      <div className="form-container ">
        <form
         
         onSubmit={handleSubmit}
        >
          <div className='logo-container'>
            <img src={pizza} alt='logo' style={{ width: "5rem", height: "3rem", objectFit: 'cover' }} />
          </div>
          <h1 className="text-center">Welcome to KaseApp</h1>
          <p className='text-center'>Sign up to your account to access our application</p>

          <div  className="input-group">
          <label 
          htmlFor="phoneNumber" className="input-label"
            
          >
            <input ref={firstName} placeholder="Please input your first name!" className="input-field" />
          </label>

          <label
             htmlFor="phoneNumber" className="input-label"
          >
            <input ref={lastName} placeholder="Please input your last name!" className="input-field" />
          </label>

          <label
           htmlFor="phoneNumber" className="input-label"
          >
            <input ref={phoneNumber} placeholder="Please input your phone!" className="input-field" />
          </label>

          <label
            htmlFor="phoneNumber" className="input-label"
          >
            <input
            ref={password} 
            className="input-field"
            //   prefix={<LockOutlined className="site-form-item-icon" />}
            //   suffix={
            //     visible ? (
            //       <EyeTwoTone className="site-form-item-icon" onClick={togglePasswordVisibility} />
            //     ) : (
            //       <EyeInvisibleOutlined className="site-form-item-icon" onClick={togglePasswordVisibility} />
            //     )
            //   }
            //   type={visible ? 'text' : 'password'}
              placeholder="Password"
            />
          </label>
          </div>
             
          <div>
            <input type="checkbox" className="custom-control custom-checkbox" id="check" />
            <label htmlFor="check" className="custom-input-label ms-2">
              Remember me
            </label>
          </div>

          <div className="d-grid">
            <button type="submit" className="btn btn-primary">Sign up</button>
          </div>

          <p className='text-center'>
            <a href="#">Forgotten password</a>?
          </p>

          <div className="separator">
            <hr />
            <span>or sign up with</span>
          </div>

          <div className="d-grid d-flex justify-content-center align-items-center" style={{ width: '100%' }}>
            <a href="#" target="_blank" style={{ margin: '0 10px', fontSize: '30px' }} ><i className="fa-brands fa-facebook"></i></a>
            <a href="#" target="_blank" style={{ margin: '0 10px', fontSize: '30px' }} ><i className="fa-brands fa-google"></i></a>
            <a href="#" target="_blank" style={{ margin: '0 10px', fontSize: '30px' }}><i className="fa-brands fa-twitter"></i></a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
