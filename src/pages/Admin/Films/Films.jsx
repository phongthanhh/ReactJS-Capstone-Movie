/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from 'react'
import { Table, Button, Input } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import {
  EditOutlined,
  DeleteOutlined,
  CalendarOutlined,
  SearchOutlined
} from '@ant-design/icons'
import { debounce } from 'utils'
import { ROUTES_NAME } from 'constant'
import { delFilmAction, getFilmAction } from '../../../redux/action/movieManagerAction'

function Films({ history }) {
  const { arrFilms } = useSelector((state) => state.movieManagerReducer)
  const dispatch = useDispatch()

  const [data, setData] = useState([])

  const handleSearchFilm = (e) => {
    const { value } = e.target
    dispatch(getFilmAction(value))
  }

  useEffect(() => {
    if (arrFilms.length > 0) {
      const arr = arrFilms.map((film) => ({ ...film, key: film.maPhim }))
      setData(arr)
    }
  }, [arrFilms])

  useEffect(() => {
    dispatch(getFilmAction())
  }, [])

  const columns = [
    {
      title: 'Mã Phim',
      dataIndex: 'maPhim',
      onFilter: (value, record) => record.name.indexOf(value) === 0,
      sorter: (a, b) => a.maPhim - b.maPhim,
      sortDirections: ['descend'],
      width: '15%'
    },
    {
      title: 'Tên Phim',
      dataIndex: 'tenPhim',
      defaultSortOrder: 'ascend',
      sorter: (a, b) => {
        const tenPhimA = a.tenPhim.toLowerCase().trim()
        const tenPhimB = b.tenPhim.toLowerCase().trim()
        if (tenPhimA > tenPhimB) return 1
        return -1
      },
      width: '20%'
    },
    {
      title: 'Hình Ảnh',
      dataIndex: 'hinhAnh',
      render: (text, film) => <img src={film.hinhAnh} alt={film.tenPhim} width={80} height={80} />,
      width: '20%'
    },
    {
      title: 'Mô Tả',
      dataIndex: 'moTa',
      render: (text, film) => (
        // eslint-disable-next-line react/jsx-no-useless-fragment
        <>
          {film.moTa.length > 50 ? `${film.moTa.substr(0, 50)}...` : film.moTa}
        </>
      ),
      width: '25%'
    },
    {
      title: 'Action',
      dataIndex: 'maPhim',
      render: (text, film) => (
        < >
          <NavLink className="mr-2" to={`${ROUTES_NAME.ADMIN_FILM_EDIT}/${film.maPhim}`}><EditOutlined /></NavLink>

          <span
            onClick={() => {
              if (window.confirm(`bạn có muốn xóa ${film.tenPhim}`)) {
                dispatch(delFilmAction(film.maPhim))
              }
            }}
            className="mr-2"
            style={{ color: 'red', cursor: 'pointer' }}
            role="button"
            tabIndex="0"
            aria-hidden="true"
          >
            <DeleteOutlined />
          </span>
          <NavLink
            className="mr-2"
            to={`${ROUTES_NAME.ADMIN_SHOWTIMES}/${film.maPhim}`}
            onClick={() => {
              localStorage.setItem('filmParams', JSON.stringify(film))
            }}
          >
            <CalendarOutlined />

          </NavLink>
        </>
      ),
      width: '20%',
      align: 'center'
    }

  ]

  const onChange = (pagination, filters, sorter, extra) => {
  }

  return (
    <div className="container">
      <h2>Movie Manager</h2>
      <Button
        onClick={() => {
          history.push(ROUTES_NAME.ADMIN_ADD_NEW_FILM)
        }}
        className="mb-3"
        type="primary"
        danger
      >
        {' '}
        Add New Film
      </Button>
      <Input
        placeholder="input search text"
        enterButton="Search"
        size="large"
        onChange={debounce(handleSearchFilm)}
        prefix={<SearchOutlined />}
      />
      <Table className="mt-3" columns={columns} dataSource={data} onChange={onChange} />
      ;
    </div>
  )
}

export default Films
