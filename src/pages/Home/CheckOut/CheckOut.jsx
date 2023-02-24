import React, { useEffect, useMemo, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { USER_LOGIN } from 'constant'
import { toast } from 'react-toastify'
import screen from '../../../assets/img/screen.png'
import backGround from '../../../assets/img/background.jpg'
import { bookTicketAction, getTicketRoomAction, selectSeatAction } from '../../../redux/action/bookTicketManageAction'
import './checkOut.css'

const SEATS_TYPE = [
  { code: 'seat', name: 'Ghế trống' },
  { code: 'bookingSeat', name: 'Đang đặt' },
  { code: 'vipSeat', name: 'Ghế Vip' },
  { code: 'bookedSeat', name: 'Ghế đã đặt' }
]

function CheckOut(props) {
  const dispatch = useDispatch()
  const { ticketRoomDetail, seatsSelecting } = useSelector((state) => state.bookTicketManageReducer)
  let userLogin = {}
  if (localStorage.getItem(USER_LOGIN)) userLogin = JSON.parse(localStorage.getItem(USER_LOGIN))
  const { thongTinPhim, danhSachGhe } = ticketRoomDetail

  useEffect(() => {
    dispatch(getTicketRoomAction(props.match.params.id))
  }, [props.match.params.id, dispatch])

  const onCheckedSeat = useCallback((seat) => {
    dispatch(selectSeatAction(seat))
  }, [dispatch])

  const renderSeats = useMemo(() => danhSachGhe?.map((seat, index) => {
    const renderClassSeat = (chair = {}) => {
      if (chair.selecting) return 'bookingSeat'
      if (chair.daDat) return 'bookedSeat'
      if (chair.loaiGhe === 'Vip') return 'vipSeat'
      return 'seat'
    }
    return (
      <>
        <button
          aria-label="seat"
          disabled={seat.daDat}
          onClick={() => onCheckedSeat(seat)}
          type="button"
          className={renderClassSeat(seat)}
        />
        {(index + 1) % 16 === 0 ? <br /> : ' ' }
      </>
    )
  }), [danhSachGhe, onCheckedSeat])

  const handleBookTicket = () => {
    if (!seatsSelecting.length) {
      toast.error('Vui lòng chọn ghế')
      return
    }
    const value = {
      maLichChieu: props.match.params.id,
      danhSachVe: seatsSelecting
    }
    dispatch(bookTicketAction(value))
  }

  return (
    <div style={{ backgroundImage: `url(${backGround})` }}>
      <div className="container py-5">
        <div className="row">
          <div className="col-9">
            <div className="screen">
              <img style={{ width: '100%' }} src={screen} alt="" />
            </div>
            <div style={{ textAlign: 'center', paddingTop: '2em' }}>
              {renderSeats}
            </div>
            <div className="mt-5 flex justify-center">
              {SEATS_TYPE.map((seat) => (
                <div className="w-1/5 flex flex-col items-center">
                  <p className="m-0 text-white">{seat.name}</p>
                  <button aria-label="Seat" type="button" className={`${seat.code} text-center`} />
                </div>
              ))}
            </div>
          </div>
          <div className="col-3 text-white formBookTicket" style={{ fontSize: '0.8em' }}>
            <h2 style={{
              padding: '1em', textAlign: 'center', borderBottom: '1px dotted #fff', fontSize: '1.5em'
            }}
            >
              {thongTinPhim?.tenPhim}
            </h2>
            <div className="d-flex py-3 infoFilm">
              <span>Địa điểm:</span>
              <span>{thongTinPhim?.diaChi}</span>
            </div>
            <div className="py-3 infoFilm">
              <p> Ngày chiếu:</p>
              <p>
                {' '}
                {thongTinPhim?.ngayChieu}
                {' '}
                -
                {thongTinPhim?.gioChieu}
              </p>
            </div>
            <div className="py-3">{thongTinPhim?.tenRap}</div>
            <div className="d-flex py-3 infoFilm">
              <div style={{ display: 'flex', flexWrap: 'wrap' }} className="w-4/5">
                <span className="text-danger mr-1">Ghế</span>
                {seatsSelecting?.map((seat) => <span className="text-green-500 mr-1">{seat.tenGhe}</span>)}
              </div>
              <div className="col-span-1">
                <span className="text-success">
                  {seatsSelecting.reduce((total, seat) => total + seat.giaVe, 0).toLocaleString('en-US', { style: 'currency', currency: 'VND' })}
                </span>
              </div>
            </div>
            <div className="py-3 infoFilm">
              <p>Email:</p>
              <p>{userLogin.email}</p>
            </div>
            <div className="py-3 infoFilm">
              <p>Phone:</p>
              <p>{userLogin.soDT}</p>
            </div>
            <div className="pt-5">
              <button
                className="btn btn-danger w-100"
                type="button"
                onClick={handleBookTicket}
              >
                Book Ticket
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CheckOut
