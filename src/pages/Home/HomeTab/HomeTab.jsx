import React from 'react'
import { Tabs } from 'antd'

function HomeTab() {
  return (
    <div>
      <Tabs
        tabPosition="left"
        items={new Array(3).fill(null).map((_, i) => {
          const id = String(i + 1)
          return {
            label: <img
              style={{ borderRadius: '60%', width: '50px' }}
              alt=""
              src="https://vietjet.net/includes/uploads/2020/12/nuoc-anh-thuoc-chau-nao.jpg"
            />,
            key: id,
            children: `Content of Tab ${id}`
          }
        })}
      />
    </div>
  )
}

export default HomeTab
