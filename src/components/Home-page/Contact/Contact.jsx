import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';

import EmailImg from '../../../assets/email_img.jpg';
import { ImLinkedin } from 'react-icons/im';
import { MdSend } from 'react-icons/md';
import { FaGithub } from 'react-icons/fa';

import { Formik, Form } from 'formik';
import { TextField, TextArea } from '../Input-field/InputField';
import * as Yup from 'yup';

import './Contact.style.scss';

const Contact = () => {
  const formRef = useRef();
  const [formResponse, setFormResponse] = useState(false);
  const [loading, setLoading] = useState(false);

  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const validate = Yup.object({
    name: Yup.string().required('Please add Your name'),
    email: Yup.string().email('Email is invalid').required('Email is required'),
    phoneNumber: Yup.string()
      .matches(phoneRegExp, 'Phone number is not valid')
      .min(10, 'Number is too short')
      .max(10, 'Number is too long'),
    subject: Yup.string().required('Please fill this field'),
    message: Yup.string().required('Please fill this field'),
  });

  const onSubmit = (values, { resetForm }, e) => {
    setLoading(true);
    emailjs
      .sendForm(
        'service_3eyll27',
        'template_4yf4qpa',
        formRef.current,
        'user_k3Iuw96WhWyHwzSmOpF75'
      )
      .then(
        (result) => {
          console.log(result.text);
          setFormResponse(true);
          setLoading(false);
          resetForm();
        },
        (error) => {
          console.log(error.text);
          setFormResponse(false);
          setLoading(false);
        }
      );
  };

  return (
    <div className='contact-section'>
      <h3 className='section-title'>Contact Me</h3>
      <div className='contact-section-wrapper'>
        <div className='info-box'>
          <div className='image'>
            <img src={EmailImg} alt='' />
          </div>
          <div className='content'>
            <h3 className='name'>Jayanth</h3>
            <p className='text'>
              Connect with me and call in to
              my account.
            </p>
            <p className='email'>
              <span>Email:</span>
              <a href="mailto:jayanthkarur@gmail.com" target="_blank">jayanthkarur@gmail.com</a>
            </p>
            <div className='find-me'>
              <h4 className='title'>Find Me</h4>
              <div className='social-links flex flex-ai-c'>
                <div className='box-container flex flex flex-jc-c flex-ai-c'>
                  <div className='icon flex flex-ai-c'>
                  <a href="https://www.linkedin.com/in/jayanth-tamilmani-b16458154/" target="_blank"> <ImLinkedin /> </a>
                  </div>
                </div>
                <div className='box-container flex flex flex-jc-c flex-ai-c'>
                  <div className='icon flex flex-ai-c'>
                  <a href="https://github.com/jayanthtamil" target="_blank"> 
                    <FaGithub />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='contact-form'>
          <Formik
            initialValues={{
              name: '',
              email: '',
              phoneNumber: '',
              subject: '',
              message: '',
            }}
            validationSchema={validate}
            onSubmit={onSubmit}
          >
            {(formik) => (
              <Form ref={formRef}>
                <TextField
                  label='Name'
                  name='name'
                  type='text'
                  placeholder='Enter Your Name'
                />

                <TextField
                  label='Email Address'
                  name='email'
                  type='email'
                  placeholder='Enter Your Email Address'
                />

                <TextField
                  label='Phone Number (optional)'
                  name='phoneNumber'
                  type='text'
                  placeholder='Enter Your PhoneNumber (optional)'
                />

                <TextArea
                  label='Subject'
                  name='subject'
                  placeholder='Subject goes here...'
                  id='subject'
                />

                <TextArea
                  label='Message'
                  name='message'
                  placeholder='Message goes here...'
                  id='message'
                />

                <div
                  style={{ display: formResponse ? 'block' : 'none' }}
                  className='message-response'
                >
                  <p className='text'>
                    Hi! I recieved your message, Will get back to you shortly
                    today.
                  </p>
                </div>

                <button
                  disabled={loading ? true : false}
                  style={{ opacity: loading ? '0.7' : '1' }}
                  className='submit-form flex flex-ai-c flex-jc-c'
                >
                  Submit
                  <span
                    className={
                      loading
                        ? 'flex flex-ai-c loading-spinner-icons'
                        : 'flex flex-ai-c'
                    }
                  >
                    <MdSend />
                  </span>
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Contact;
