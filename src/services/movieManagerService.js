import { DOMAIN, GROUP_ID } from "../util/settings"
import { apiClient, get, post } from "./baseService"

export const getAllMovieService = () => get(`api/QuanLyPhim/LayDanhSachPhim?maNhom=${GROUP_ID}`)


export const addNewMovieService = formData => post(`api/QuanLyPhim/ThemPhimUploadHinh`, formData)
