import { GROUP_ID } from "../util/settings";
import { get, post, put } from "./baseService";

export const getListUserService = () => get(`api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=${GROUP_ID}`)

export const addUserService = (data) => post(`api/QuanLyNguoiDung/ThemNguoiDung`, data)

export const getUserDetailService = (userCode) => post(`api/QuanLyNguoiDung/LayThongTinNguoiDung?taiKhoan=${userCode}`)

export const updateUserService = (data) => post(`api/QuanLyNguoiDung/CapNhatThongTinNguoiDung`, data)