import React, { useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import {
  Form,
  Input, Select
} from 'antd'
import { useDispatch } from 'react-redux'

import { GROUP_ID, USERS_TYPE } from 'constant'
import { addtUserAction } from '../../../../redux/action/userManagerActions'
import { MAX_CHAR, MIN_CHAR } from '../../../../utils/constants/validateYup'

function AddNewUser() {
  const [componentSize, setComponentSize] = useState('default')
  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size)
  }

  const dispatch = useDispatch()

  const formik = useFormik({
    initialValues: {
      taiKhoan: '',
      matKhau: '',
      email: '',
      soDT: '',
      maLoaiNguoiDung: '',
      hoTen: '',
      maNhom: GROUP_ID

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
      soDT: Yup.string().required('Required'),
      hoTen: Yup.string().required('Required')
    }),
    onSubmit: (values) => {
      if (values.maLoaiNguoiDung === '') {
        // eslint-disable-next-line no-param-reassign
        values.maLoaiNguoiDung = USERS_TYPE.CUSTOMER
      }
      console.log(values)

      dispatch(addtUserAction(values))
    }
  })

  const handleChangeSelected = (value) => {
    console.log(`selected ${value}`)
    formik.setFieldValue('maLoaiNguoiDung', value)
  }

  return (
    <div className="container">
      <h2>Add New User</h2>
      <Form
        onSubmitCapture={formik.handleSubmit}
        labelCol={{
          span: 4
        }}
        wrapperCol={{
          span: 14
        }}
        layout="horizontal"
        initialValues={{
          size: componentSize
        }}
        onValuesChange={onFormLayoutChange}
        size={componentSize}
        style={{
          maxWidth: 600
        }}
      >
        <Form.Item label="User Name">
          <Input name="taiKhoan" onChange={formik.handleChange} />
          {formik.errors.taiKhoan ? (
            <div className="alert alert-danger mt-2 p-1">{formik.errors.taiKhoan}</div>
          ) : null}

        </Form.Item>
        <Form.Item label="Password">
          <Input.Password name="matKhau" onChange={formik.handleChange} />
          {formik.errors.matKhau ? (
            <div className="alert alert-danger mt-2 p-1">{formik.errors.matKhau}</div>
          ) : null}
        </Form.Item>

        <Form.Item label="FullName">
          <Input name="hoTen" onChange={formik.handleChange} />
          {formik.errors.hoTen ? (
            <div className="alert alert-danger mt-2 p-1">{formik.errors.hoTen}</div>
          ) : null}

        </Form.Item>

        <Form.Item label="Email">
          <Input name="email" onChange={formik.handleChange} />
          {formik.errors.email ? (
            <div className="alert alert-danger mt-2 p-1">{formik.errors.email}</div>
          ) : null}
        </Form.Item>

        <Form.Item label="Phone Number">
          <Input name="soDT" onChange={formik.handleChange} />
          {formik.errors.soDT ? (
            <div className="alert alert-danger mt-2 p-1">{formik.errors.soDT}</div>
          ) : null}

        </Form.Item>

        <Form.Item label="Loại Người Dùng">
          <Select
            defaultValue={USERS_TYPE.CUSTOMER}
            style={{
              width: 120
            }}
            onChange={handleChangeSelected}
            options={[
              {
                value: USERS_TYPE.CUSTOMER,
                label: 'User'
              },
              {
                value: USERS_TYPE.ADMIN,
                label: 'Admin'
              }
            ]}
          />
        </Form.Item>
        <Form.Item>
          <button type="submit" className="btn btn-info">ADD</button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default AddNewUser
