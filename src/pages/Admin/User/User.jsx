import React, { useEffect, useState } from 'react'
import { Button, Table } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

import {
  EditOutlined,
  DeleteOutlined

} from '@ant-design/icons'
import { delUserAction, getListUserAction } from '../../../redux/action/userManagerActions'

function User({ history }) {
  const { arrUser } = useSelector((state) => state.userManageReducer)

  const [data, setData] = useState([])

  useEffect(() => {
    if (arrUser.length > 0) {
      const arr = arrUser.map((user) => ({ ...user, key: user.taiKhoan }))
      setData(arr)
    }
  }, [arrUser])

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getListUserAction())
  }, [])

  const columns = [
    {
      title: 'User Name',
      dataIndex: 'taiKhoan',
      onFilter: (value, record) => record.name.indexOf(value) === 0,
      sorter: (a, b) => {
        const taiKhoanA = a.taiKhoan.toLowerCase().trim()
        const taiKhoanB = b.taiKhoan.toLowerCase().trim()
        if (taiKhoanA > taiKhoanB) return 1
        return -1
      },
      sortDirections: ['descend'],
      width: '15%'
    },
    {
      title: 'Full Name',
      dataIndex: 'hoTen',
      defaultSortOrder: 'descend',
      sorter: true,
      width: '20%'
    },
    {
      title: 'Email',
      dataIndex: 'email',
      width: '25%'
    },
    {
      title: 'Phone Number',
      dataIndex: 'soDT',
      width: '20%'
    },
    {
      title: 'Action',
      dataIndex: '',
      width: '20%',
      render: (text, user) => (
        <>
          <NavLink className="mr-2" to={`/admin/users/edit-user/${user.taiKhoan}`}><EditOutlined /></NavLink>
          <span
            onClick={() => {
              if (window.confirm(`Bạn có muốn xóa ${user.taiKhoan}`)) {
                dispatch(delUserAction(user.taiKhoan))
              }
            }}
            style={{ color: 'red', cursor: 'pointer' }}
            role="button"
            tabIndex="0"
            aria-hidden="true"
          >
            <DeleteOutlined />
          </span>
        </>
      )
    }
  ]

  const onChange = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra)
  }

  return (
    <div className="container">
      <h2>User Manage</h2>
      <Button
        onClick={() => history.push('/admin/users/add-new-user')}
        className="mb-3"
        type="primary"
        danger
      >
        {' '}
        Add New User
      </Button>
      <Table columns={columns} dataSource={data} onChange={onChange} />
    </div>
  )
}

export default User
