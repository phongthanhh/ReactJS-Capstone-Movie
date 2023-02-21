/* eslint-disable no-unused-vars */
import React from 'react'
import {
  LockOutlined, UserOutlined, MailOutlined, UserAddOutlined, PhoneOutlined
} from '@ant-design/icons'
import {
  Form, Input
} from 'antd'
import { history } from 'App'
import { GROUP_ID, ROUTES_NAME } from 'constant'
import { useDispatch } from 'react-redux'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { MAX_CHAR, MIN_CHAR } from 'utils/constants/validateYup'
import { registerAction } from 'redux/action/userManagerActions'
import background from '../../../assets/img/backGruondSpace.png'

function Register() {
  const dispatch = useDispatch()
  const formik = useFormik({
    initialValues: {
      taiKhoan: '',
      matKhau: '',
      email: '',
      soDt: '',
      maNhom: GROUP_ID,
      hoTen: ''
    },
    validationSchema: Yup.object({
      taiKhoan: Yup.string().min(MIN_CHAR, `Must be ${MIN_CHAR} characters or more`)
        .max(MAX_CHAR, `Must be ${MAX_CHAR} characters or less`)
        .required('Required'),
      matKhau: Yup.string()
        .min(MIN_CHAR, `Must be ${MIN_CHAR} characters or more`)
        .max(MAX_CHAR, `Must be ${MAX_CHAR} characters or less`)
        .required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
      soDt: Yup.string().required('Required'),
      hoTen: Yup.string().required('Required')
    }),
    onSubmit: (values) => {
      dispatch(registerAction(values))
    }
  })

  return (
    <div
      className="d-flex"
      style={{
        height: '100vh', justifyContent: 'center', alignItems: 'center', background: `url(${background})`, backgroundSize: '100%'
      }}
    >
      <Form
        onSubmitCapture={formik.handleSubmit}
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true
        }}
        style={{
          background: 'rgba( 255, 255, 255, 0.1 )',
          boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
          borderRadius: '10px',
          border: '1px solid rgba( 255, 255, 255, 0.18 )',
          padding: '2em',
          width: '350px'
        }}
      >
        <h1 className="text-center mb-3 text-white text-lg">SIGN UP</h1>
        <Form.Item
          name="username"
        >
          <Input
            onChange={formik.handleChange}
            name="taiKhoan"
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Username"
          />
          {formik.errors.taiKhoan ? (
            <div className="alert alert-danger m-0 p-1">{formik.errors.taiKhoan}</div>
          ) : null}
        </Form.Item>

        <Form.Item>
          <Input
            onChange={formik.handleChange}
            name="matKhau"
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
          {formik.errors.matKhau ? (
            <div className="alert alert-danger m-0 p-1">{formik.errors.matKhau}</div>
          ) : null}
        </Form.Item>

        <Form.Item>
          <Input
            onChange={formik.handleChange}
            name="email"
            prefix={<MailOutlined />}
            placeholder="Email"
          />
          {formik.errors.email ? (
            <div className="alert alert-danger m-0 p-1">{formik.errors.email}</div>
          ) : null}
        </Form.Item>

        <Form.Item>
          <Input
            onChange={formik.handleChange}
            name="hoTen"
            prefix={<UserAddOutlined />}
            placeholder="FullName"
          />
          {formik.errors.hoTen ? (
            <div className="alert alert-danger m-0 p-1">{formik.errors.hoTen}</div>
          ) : null}
        </Form.Item>

        <Form.Item>
          <Input
            onChange={formik.handleChange}
            name="soDt"
            prefix={<PhoneOutlined className="site-form-item-icon" />}
            placeholder="Phone Number"
          />
          {formik.errors.soDt ? (
            <div className="alert alert-danger m-0 p-1">{formik.errors.soDt}</div>
          ) : null}
        </Form.Item>

        <Form.Item className="mt-5 ">
          <button
            style={{
              width: '100%',
              border: '1px solid rgba( 255, 255, 255, 0.25 )',
              color: '#fff'
            }}
            type="submit"
            className="btn-login"
          >
            SIGN UP
          </button>
        </Form.Item>
        <Form.Item className=" text-center text-white ">
          <p className="m-0 p-0">OR</p>
          <button
            onClick={() => {
              history.push(ROUTES_NAME.LOGIN)
            }}
            type="button"
            className="btn-register"
            style={{
              border: '1px solid rgba( 255, 255, 255, 0.25 )',
              color: '#fff',
              padding: '5px 10px',
              borderRadius: '5px',
              fontWeight: 'bold'
            }}
          >
            SIGN IN

          </button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default Register
