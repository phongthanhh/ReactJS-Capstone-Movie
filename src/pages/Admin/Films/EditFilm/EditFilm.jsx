import React, { useEffect, useState } from 'react'
import { useFormik } from 'formik'
import {
  DatePicker,
  Form,
  Input,
  InputNumber,
  Switch
} from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import dayjs from 'dayjs'
import { getFilmDetailAction, updateFilmAction } from '../../../../redux/action/movieManagerAction'
import { GROUP_ID } from '../../../../util/settings'

function EditFilm({ match }) {
  const dispatch = useDispatch()
  const { infoFilmDetail } = useSelector((state) => state.movieManagerReducer)

  useEffect(() => {
    const { id } = match.params
    dispatch(getFilmDetailAction(id))
  }, [])

  const [componentSize, setComponentSize] = useState('default')
  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size)
  }

  const [img, setImg] = useState('')

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      maPhim: infoFilmDetail.maPhim,
      tenPhim: infoFilmDetail.tenPhim,
      trailer: infoFilmDetail.trailer,
      moTa: infoFilmDetail.moTa,
      ngayKhoiChieu: infoFilmDetail.ngayKhoiChieu,
      dangChieu: infoFilmDetail.dangChieu,
      sapChieu: infoFilmDetail.sapChieu,
      hot: infoFilmDetail.hot,
      danhGia: infoFilmDetail.danhGia,
      hinhAnh: null,
      maNhom: GROUP_ID

    },
    onSubmit: (values) => {
      console.log('EDITvALUE', values)
      const formData = new FormData()
      // eslint-disable-next-line no-restricted-syntax
      for (const key in values) {
        if (key !== 'hinhAnh') {
          formData.append(key, values[key])
        } else if (values.hinhAnh !== null) {
          formData.append('File', values.hinhAnh, values.hinhAnh.name)
        }
      }
      dispatch(updateFilmAction(formData))
    }
  })

  const handleChangeDatePicker = (value) => {
    const result = dayjs(value).format('DD/MM/YYYY')
    console.log(result)
    formik.setFieldValue('ngayKhoiChieu', result)
  }

  const handleChangeSwitch = (name) => (value) => formik.setFieldValue(name, value)

  const handleChangeInputNumber = (name) => (value) => formik.setFieldValue(name, value)

  const handleOnChangeFile = (e) => {
    const file = e.target.files[0]
    if (file.type === 'image/png'
    || file.type === 'image/jpeg'
    || file.type === 'image/gif'
    || file.type === 'image/jpg') {
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = (event) => {
        setImg(event.target.result)
      }
      formik.setFieldValue('hinhAnh', file)
    }
  }

  return (
    <div className="container">
      <h2>Edit Film</h2>
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
        <Form.Item label="Tên Phim">
          <Input name="tenPhim" onChange={formik.handleChange} value={formik.values.tenPhim} />
        </Form.Item>
        <Form.Item label="Trailer">
          <Input name="trailer" onChange={formik.handleChange} value={formik.values.trailer} />
        </Form.Item>
        <Form.Item label="Mô tả">
          <Input name="moTa" onChange={formik.handleChange} value={formik.values.moTa} />
        </Form.Item>

        <Form.Item label="Ngày khởi chiếu">
          <DatePicker
            className="ml-2"
            format="DD/MM/YYYY"
            onChange={handleChangeDatePicker}
            defaultValue={dayjs(formik.values.ngayKhoiChieu)}
          />
        </Form.Item>

        <Form.Item label="Đang chiếu" valuePropName="checked">
          <Switch onChange={handleChangeSwitch('dangChieu')} checked={formik.values.dangChieu} />
        </Form.Item>
        <Form.Item label="Sắp chiếu" valuePropName="checked">
          <Switch onChange={handleChangeSwitch('sapChieu')} checked={formik.values.sapChieu} />
        </Form.Item>
        <Form.Item label="Hot" valuePropName="checked">
          <Switch onChange={handleChangeSwitch('hot')} checked={formik.values.hot} />
        </Form.Item>
        <Form.Item label="Đánh giá">
          <InputNumber min={0} max={10} onChange={handleChangeInputNumber('danhGia')} value={formik.values.danhGia} />
        </Form.Item>
        <Form.Item label="Hình ảnh">
          <input type="file" onChange={handleOnChangeFile} accept="image/png,image/jpeg,image/gif,image/jpg" />
          <img
            className="mt-3"
            src={img === '' ? infoFilmDetail.hinhAnh : img}
            style={{ width: 150, height: 150 }}
            alt="..."
          />
        </Form.Item>
        <Form.Item>
          <button type="submit" className="btn btn-info">Update</button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default EditFilm
