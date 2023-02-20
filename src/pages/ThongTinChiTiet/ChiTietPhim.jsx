import axios from 'axios'
import React from 'react'
import { useEffect, useState } from 'react'
import { TOKEN_CYBER } from '../../ulti/settings'
import { history } from '../../App'

export default function ChiTietPhim(maPhim) {
    

    let ma = maPhim.maPhim;
    

    let [thongTinMovie, setThongTin] = useState({})
    useEffect(() => {
        getThongTinMovie();
    }, [])
    let getThongTinMovie = () => {
        let promise = axios({
            method: 'GET',
            url: `https://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?MaPhim=${ma}`,
            headers: {
                'TokenCybersoft': TOKEN_CYBER,
            }
        })

        promise.then((result) => {
            console.log(result.data);
            setThongTin(result.data.content);
        })

        promise.catch((error) => {
            console.log(error)
        })
    }
  return (
    <div className='container'>
                <div className="row">
                    <div className="col-4">
                        <img src={thongTinMovie.hinhAnh} style={{ width: '100%' }} alt="abc" />
                    </div>
                    <div className="col-8">
                        <h3>{thongTinMovie.tenPhim}</h3>
                        <p>{thongTinMovie.moTa}</p>
                        <p>Đánh giá: {thongTinMovie.danhGia} </p>
                        <p>Ngày khởi chiếu: {thongTinMovie.ngayKhoiChieu}</p>
                        <a href={thongTinMovie.trailer}>
                            <button className='btn btn-success mr-2'>Trailer</button>
                        </a>

                        <button className='btn btn-danger'>Mua vé ngay</button>
                    </div>
                </div>
            </div>
  )
}
