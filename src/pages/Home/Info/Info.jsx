import React, { useEffect, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from 'react-hook-form'
import TextField from '@mui/material/TextField'
import { GROUP_ID, USER_LOGIN } from 'constant'
import { getUserDetailAction, updateUserAction } from 'redux/action/userManagerActions'
import { InfoDiv } from './InfoCss'

function Info() {
  const dispatch = useDispatch()
  let userLogin = {}
  if (localStorage.getItem(USER_LOGIN)) userLogin = JSON.parse(localStorage.getItem(USER_LOGIN))
  useEffect(() => {
    dispatch(getUserDetailAction(userLogin.taiKhoan))
  }, [])

  const [showForm, setShowForm] = useState(true)

  const { userDetail } = useSelector((state) => state.userManageReducer)
  const { thongTinDatVe } = userDetail

  const renderHistory = useMemo(() => thongTinDatVe?.map((item) => (
    <tr className="hover:bg-gray-700 border-gray-700 border-b group text-opacity-100 cursor-pointer relative
      border-b border-solid transition"
    >
      <td>{item.maVe}</td>
      <td>{item.tenPhim}</td>
      <td>{ item.ngayDat}</td>
    </tr>
  )), [thongTinDatVe])

  const valuesUser = {
    taiKhoan: userLogin.taiKhoan,
    matKhau: '',
    email: userLogin.email,
    soDt: userLogin.soDT,
    maNhom: GROUP_ID,
    maLoaiNguoiDung: userLogin.maLoaiNguoiDung,
    hoTen: userLogin.hoTen
  }

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()
  const onSubmit = (data) => {
    console.log(data.matKhau)
    valuesUser.matKhau = data.matKhau
    dispatch(updateUserAction(valuesUser))
    setShowForm(true)
  }

  return (
    <div style={{ background: '#111827' }}>
      <InfoDiv className="container">
        <div className="row">
          <div className="col-3 info" style={{ background: '#1f2937', padding: '0 .5em' }}>
            <div className="infoContent">
              <h2 className="info__titel">Thông tin cá nhân</h2>
              <div className="info__detail">
                <p>Họ tên</p>
                <strong>{userLogin.hoTen}</strong>
              </div>
              <div className="info__detail">
                <p>Email</p>
                <strong>{userLogin.email}</strong>
              </div>
              <div className="info__detail">
                <p>Số điện thoại</p>
                <strong>{userLogin.soDT}</strong>
              </div>
              {showForm ? (
                <div className="info__detail d-flex" style={{ alignItems: 'center', justifyContent: 'space-between' }}>
                  <div>
                    <p>Mật khẩu</p>
                    <strong>*******</strong>
                  </div>
                  <button onClick={() => setShowForm(false)} className="btn btn-danger" type="button">Đổi mật khẩu</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} style={{ padding: '.7em .5em' }}>
                  <h2 className="pb-2">Đổi mật khẩu</h2>
                  <div>
                    <TextField
                      className="pb-2"
                      id="outlined-password-input"
                      name="matKhau"
                      label="Mật khẩu mới"
                      type="password"
                      fullWidth
                      autoComplete="current-password"
                      {...register('matKhau', { required: 'Mật khẩu không được để trống' })}
                      error={Boolean(errors.matKhau)}
                      helperText={errors.matKhau?.message}
                    />
                  </div>
                  {/* <div>
                    <TextField
                      id="outlined-password-input"
                      name="cfmatKhau"
                      label="Xác nhận mật khẩu"
                      type="password"
                      fullWidth
                      autoComplete="current-password"
                      {...register('cfmatKhau', { required: 'Mật khẩu không được để trống' })}
                      error={Boolean(errors.password)}
                      helperText={errors.password?.message}
                    />
                  </div> */}
                  <div className="d-flex justify-between pt-3">
                    <button type="submit" className="btn btn-success">Đổi mật khẩu</button>
                    <button onClick={() => setShowForm(true)} type="button" className="btn btn-danger">Hủy bỏ</button>
                  </div>
                </form>
              )}

            </div>
          </div>
          <div className="col-9 info">
            <div className="info__history">
              <h2 className="info__history__title text-white text-lg mb-3">Lịch Sử đặt vé</h2>
              <div className="info__history__table">
                <table className="w-full text-white">
                  <thead className="mb-3">
                    <tr className="bg-gray-900">
                      <th>Mã vé</th>
                      <th>Tên phim</th>
                      <th>Thời gian đặt vé</th>
                      <th>Ghế</th>
                    </tr>
                  </thead>
                  <tbody>
                    {renderHistory}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </InfoDiv>
    </div>
  )
}

export default Info
