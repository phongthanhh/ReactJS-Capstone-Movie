import React, { useEffect, useState } from 'react';
import { Table } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { delFilmAction, getFilmAction } from '../../../redux/action/movieManagerAction';
import { NavLink } from 'react-router-dom';
import {
    EditOutlined,
    DeleteOutlined,
    PlusOutlined,
    DownloadOutlined
} from '@ant-design/icons';
import { Button, } from 'antd';

const Films = (props) => {
    console.log(props)
    const { arrFilms } = useSelector(state => state.movieManagerReducer)
    const [size, setSize] = useState('large');
    const dispatch = useDispatch()

    useEffect(() => {
        if (arrFilms.length > 0) {
            const arr = arrFilms.map(film => {
                return { ...film, key: film.maPhim }
            })
            setData(arr)
        }

    }, [arrFilms])

    useEffect(() => {
        dispatch(getFilmAction())

    }, [])

    const [data, setData] = useState([])

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
            render: (text, film) => {
                return <>
                    <img src={film.hinhAnh} alt={film.tenPhim} width={80} height={80} />
                </>
            },
            width: '20%'
        },
        {
            title: 'Mô Tả',
            dataIndex: 'moTa',
            render: (text, film) => {
                return <>
                    {film.moTa.length > 50 ? film.moTa.substr(0, 50) + '...' : film.moTa}
                </>
            },
            width: '25%'
        },
        {
            title: 'Action',
            dataIndex: 'maPhim',
            render: (text, film) => {
                return < >
                    <NavLink className='mr-2' to={`/admin/films/edit/${film.maPhim}`} ><EditOutlined /></NavLink>
                    <Button onClick={() => {
                        if (window.confirm(`bạn có muốn xóa ${film.tenPhim}`)) {
                            dispatch(delFilmAction(film.maPhim))
                        }

                    }} className='mr-2' style={{ color: 'red' }}><DeleteOutlined /></Button>
                </>
            },
            width: '20%',
            align: 'center'
        }

    ];

    const onChange = (pagination, filters, sorter, extra) => {
        console.log('params', pagination, filters, sorter, extra);
    };

    return (
        <div className='container'>
            <h2>Movie Manager</h2>
            <Button onClick={() => {
                props.history.push('/admin/films/add-new-film')
            }} className='mb-3' type="primary" danger size={size}> Add New Film</Button>
            <Table columns={columns} dataSource={data} onChange={onChange} />;
        </div>
    );
}

export default Films;
