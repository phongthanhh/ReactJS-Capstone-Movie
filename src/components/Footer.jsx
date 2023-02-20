import React from 'react'
import logo from '../asset/img/logo.png'

export default function Footer() {
  return (
    <div className='contact'>
      <div className='footer'>

      </div>
      <div className='container info'>
        <div className="row">
          <div className="col-3">
            <img style={{ width: '100%' }} src={logo} alt="" />
          </div>
          <div className="col-6">
            <h4>CTY TNHH MOVIEBOX</h4>
            <p>Địa chỉ: 103 Nguyễn Hữu Dật, phường Hoà Cường Bắc, quận Hải Châu, TP Đà Nẵng </p>
            <p>Hotline: 19001881</p>
            <p>COPYRIGHT 2023 MOVIEBOX. All RIGHTS RESERVED .</p>

          </div>
          <div className="col-3">
            <h5>Kết nối với chúng tôi</h5>
            <div className="row">
              <div className="col-2">
                <a href="#">
                  <i class="fa-brands fa-facebook"></i>
                </a>
              </div>
              <div className="col-2">
                <a href="#">
                  <i class="fa-brands fa-instagram"></i>
                </a>
              </div>
              <div className="col-2">
                <a href="#">
                  <i class="fa-brands fa-youtube"></i>
                </a>
              </div>
              <div className="col-2">
                <a href="#">
                  <i class="fa-brands fa-tiktok"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
      
    </div>

  )
}
