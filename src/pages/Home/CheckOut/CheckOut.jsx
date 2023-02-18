import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import screen from '../../../assets/img/screen.png'
import backGround from '../../../assets/img/background.jpg'
// import hero from '../../../assets/img/hero-1.jpg'
import { getTicketRoomAction } from '../../../redux/action/bookTicketManageAction'
import './checkOut.css'

function CheckOut(props) {
  const dispatch = useDispatch()
  const { ticketRoomDetail } = useSelector((state) => state.bookTicketManageReducer)
  console.log(ticketRoomDetail)
  const { thongTinPhim } = ticketRoomDetail

  useEffect(() => {
    dispatch(getTicketRoomAction(props.match.params.id))
  }, [])

  // const renderSeats = () => danhSachGhe?.map((seat, index) => (
  //   <>
  //     <button className="seat">{seat.stt}</button>
  //     {(index + 1) % 16 === 0 ? <br /> : ' ' }
  //   </>
  // ))

  return (
    <div style={{ backgroundImage: `url(${backGround})` }}>
      <div className="container py-5">
        <div className="row">
          <div className="col-9">
            <div className="screen">
              <img style={{ width: '95%' }} src={screen} alt="" />
            </div>
            <div>
              {/* {renderSeats()} */}
            </div>
          </div>
          <div className="col-3">
            <h3>0đ</h3>
            <h3>{thongTinPhim?.tenPhim}</h3>
            <p>
              Địa điểm:
              {thongTinPhim?.diaChi}
            </p>
            <p>
              Ngày chiếu:
              {thongTinPhim?.ngayChieu}
              {' '}
              -
              {' '}
              {thongTinPhim?.gioChieu}
            </p>
            <p>{thongTinPhim?.tenRap}</p>
            <div className="d-flex">
              <span className="text-danger">Ghế</span>
              <span className="text-success">0đ</span>
            </div>
            <div>
              <span>Email:tangthanh@gmail.com</span>
            </div>
            <div>
              <span>Phone:02130123812</span>
            </div>
            <div>
              <p className="btn btn-info">Book Ticket</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CheckOut
