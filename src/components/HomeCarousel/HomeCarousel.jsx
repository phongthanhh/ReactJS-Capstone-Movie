import React, { useEffect, useState } from 'react'
import { Carousel } from 'antd'
import { getCarouSelService } from 'services/carouselService'

const contentStyle = {
  height: '700px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
  marginBottom: 0,
  backgroundPosition: 'center center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: '100%',
  objectFit: 'cover'
}
function HomeCarousel() {
  const [banner, setBanner] = useState([])
  console.log(banner)
  useEffect(() => {
    const fetchData = async () => {
      const data = await getCarouSelService()
      if (data) setBanner(data.data.content)
    }
    fetchData()
  }, [])

  const renderBanner = () => banner?.map((item) => (
    <div>
      <h3 style={{ ...contentStyle, background: `url(${item.hinhAnh})` }}><img className="w-full opacity-0" src={item.hinhAnh} alt="" /></h3>
    </div>
  ))

  return (

    <Carousel autoplay>
      {renderBanner()}
    </Carousel>

  )
}

export default HomeCarousel
