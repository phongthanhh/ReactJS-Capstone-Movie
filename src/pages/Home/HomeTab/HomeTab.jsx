import React from 'react'
import { Tabs } from 'antd'
import { useSelector } from 'react-redux'
import { TabCp } from './HomeTabCSS'

function HomeTab() {
  const { arrHeThongRap } = useSelector((state) => state.theaterReducer)
  console.log(arrHeThongRap)

  return (
    <TabCp className="py-5 container text-white">
      <Tabs
        tabPosition="left"
        items={arrHeThongRap.map((rap, index) => ({
          label: <img
            style={{ borderRadius: '60%', width: '50px' }}
            alt=""
            src={rap.logo}
          />,
          key: index,
          children: <Tabs
            tabPosition="left"
            items={rap.lstCumRap.map((rapChild, indexChild) => ({
              label: <p className="text-white text-lg rapName">{rapChild.tenCumRap}</p>,
              key: indexChild,
              children: '123'
            }))}
          />
        }))}
      />
    </TabCp>
  )
}

export default HomeTab
