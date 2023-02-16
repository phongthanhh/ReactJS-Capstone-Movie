import React, { useState } from 'react'
import {
  Select, DatePicker,
  Form,
  InputNumber
} from 'antd'
import { useFormik } from 'formik'
import dayjs from 'dayjs'
import { GROUP_ID } from '../../../util/settings'

function ShowTimes() {
  const [componentSize, setComponentSize] = useState('default')
  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size)
  }

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
    // validationSchema: Yup.object({
    //     taiKhoan: Yup.string().min(MIN_CHAR, `Must be ${MIN_CHAR} characters or more`)
    //         .max(MAX_CHAR, `Must be ${MAX_CHAR} characters or less`)
    //         .required('Required'),
    //     matKhau: Yup.string().min(MIN_CHAR, `Must be ${MIN_CHAR} characters or more`)
    // .max(MAX_CHAR, `Must be ${MAX_CHAR} characters or less`).
    // required('Required'),
    //     email: Yup.string().email('Invalid email address').required('Required'),
    //     soDT: Yup.string().required('Required'),
    //     hoTen: Yup.string().required('Required'),
    // })
    // ,
    onSubmit: (values) => {
      if (values.maLoaiNguoiDung === '') {
        // values.maLoaiNguoiDung = 'KhachHang'
      }
      console.log(values)
    }
  })

  const handleChangeSelected = (value) => {
    console.log(`selected ${value}`)
    formik.setFieldValue('maLoaiNguoiDung', value)
  }

  return (
    <div className="container">
      <h2>Show Times</h2>
      <img
        src="https://thuvienanime.com/wp-content/uploads/2021/09/nha-phi.jpeg"
        style={{ width: 200, height: 200 }}
        alt=""
      />
      <Form
        className="mt-3"
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

        <Form.Item label="Hệ thống rạp">
          <Select
            defaultValue="KhachHang"
            style={{
              width: 120
            }}
            onChange={handleChangeSelected}
            options={[
              {
                value: 'KhachHang',
                label: 'User'
              },
              {
                value: 'QuanTri',
                label: 'Admin'
              }
            ]}
          />
        </Form.Item>

        <Form.Item label="Cụm rạp">
          <Select
            defaultValue="KhachHang"
            style={{
              width: 120
            }}
            onChange={handleChangeSelected}
            options={[
              {
                value: 'KhachHang',
                label: 'User'
              },
              {
                value: 'QuanTri',
                label: 'Admin'
              }
            ]}
          />
        </Form.Item>

        <Form.Item label="Ngày chiếu giờ chiếu">
          <DatePicker
            format="YYYY-MM-DD HH:mm:ss"
            showTime={{
              defaultValue: dayjs('00:00:00', 'HH:mm:ss')
            }}
          />
        </Form.Item>

        <Form.Item label="Giá vé">
          <InputNumber min={75000} max={150000} />
          {formik.errors.soDT ? (
            <div className="alert alert-danger mt-2 p-1">{formik.errors.soDT}</div>
          ) : null}
        </Form.Item>

        <Form.Item>
          <button type="submit" className="btn btn-info">Tạo Lịch chiếu</button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default ShowTimes
