import { GROUP_ID } from 'constant'
import {
  del, get, post, put
} from './baseService'

export const getListUserService = () => get(`api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=${GROUP_ID}`)

export const addUserService = (data) => post('api/QuanLyNguoiDung/ThemNguoiDung', data)

export const getUserDetailService = (userCode) => post(`api/QuanLyNguoiDung/LayThongTinNguoiDung?taiKhoan=${userCode}`)

export const updateUserService = (data) => put('api/QuanLyNguoiDung/CapNhatThongTinNguoiDung', data)

export const delUserService = (userCode) => del(`api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${userCode}`)

export const signInService = (data) => post('api/QuanLyNguoiDung/DangNhap', data)

export const registerService = (data) => post('api/QuanLyNguoiDung/DangKy', data)
