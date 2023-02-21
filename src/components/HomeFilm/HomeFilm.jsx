import React from 'react'
import './HomeFilm.css'

function HomeFilm() {
  return (
    <div className="card " style={{ padding: '5px' }}>
      <img src="https://vietjet.net/includes/uploads/2020/12/nuoc-anh-thuoc-chau-nao.jpg" alt="Avatar" className="image" />
      <div className="overlay">
        <div className="text">Hello World</div>
        <div>tên phim: avenger</div>
        <button type="button">Đặt vé</button>
      </div>
    </div>
  )
}

export default HomeFilm
