/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import {
  Select, DatePicker,
  Form,
  InputNumber
} from 'antd'
import { useFormik } from 'formik'
import dayjs from 'dayjs'
import { createShowTimesAction } from 'redux/action/theaterAction'
import { useDispatch } from 'react-redux'
import { getCumRapService, getHeThongRapService } from '../../../services/theaterService'

function ShowTimes(props) {
  const dispatch = useDispatch()
  let filmParam = {}
  if (localStorage.getItem('filmParams')) filmParam = JSON.parse(localStorage.getItem('filmParams'))

  const [state, setState] = useState({
    heThongRap: [],
    cumRap: []
  })

  useEffect(() => {
    const fetchData = async () => {
      const data = await getHeThongRapService()
      if (data) setState((prevState) => ({ ...prevState, heThongRap: data.data.content }))
    }
    fetchData()
  }, [])

  const handleChangeTheater = async (value) => {
    const data = await getCumRapService(value)
    if (data) setState((prevState) => ({ ...prevState, cumRap: data.data.content }))
  }

  const formik = useFormik({
    initialValues: {
      maPhim: props.match.params.idFilm,
      ngayChieuGioChieu: '',
      maRap: '',
      giaVe: 0
    },
    onSubmit: (values) => {
      dispatch(createShowTimesAction(values))
    }
  })

  const handleChangeTheaterClu = (value) => formik.setFieldValue('maRap', value)

  const onChange = (value) => formik.setFieldValue('ngayChieuGioChieu', dayjs(value).format('DD/MM/YYYY HH:mm:ss'))

  const onChangeInputNumber = (value) => formik.setFieldValue('giaVe', value)

  return (
    <div className="container ">
      <div>
        <h2>
          Create Showtimes -
          {' '}
          {filmParam.tenPhim}
          {' '}
        </h2>
      </div>

      <Form
        className="mt-5 d-flex "
        onSubmitCapture={formik.handleSubmit}
        labelCol={{
          span: 8
        }}
        wrapperCol={{
          span: 16
        }}
      >
        <div>
          <img
            src={filmParam.hinhAnh}
            style={{ width: 300, height: 300 }}
            alt=""
          />
        </div>

        <div style={{ flex: 1 }}>
          <Form.Item label="H??? th???ng r???p">
            <Select
              options={state.heThongRap?.map((htr) => ({ value: htr.maHeThongRap, label: htr.tenHeThongRap }))}
              placeholder="Ch???n h??? th???ng r???p"
              onChange={handleChangeTheater}
            />
          </Form.Item>

          <Form.Item label="C???m r???p">
            <Select
              style={{ width: 120 }}
              options={state.cumRap?.map((rap) => ({ value: rap.maCumRap, label: rap.tenCumRap }))}
              placeholder="Ch???n c???m r???p"
              onChange={handleChangeTheaterClu}
            />
          </Form.Item>

          <Form.Item label="Ng??y chi???u gi??? chi???u">
            <DatePicker
              format="DD/MM/YYYY HH:mm:ss"
              showTime={{
                defaultValue: dayjs('00:00:00', 'HH:mm:ss')
              }}
              onChange={onChange}
            />
          </Form.Item>

          <Form.Item label="Gi?? v??">
            <InputNumber min={75000} max={150000} name="giaVe" onChange={onChangeInputNumber} />
          </Form.Item>

          <Form.Item style={{ marginLeft: '19em' }}>
            <button type="submit" className="btn btn-info">Create Showtimes </button>
          </Form.Item>
        </div>
      </Form>

    </div>
  )
}

export default ShowTimes
