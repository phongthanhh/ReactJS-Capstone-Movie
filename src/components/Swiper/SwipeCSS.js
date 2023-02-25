import styled from 'styled-components'
import iconPrev from '../../assets/img/iconPrev.png'
import iconNext from '../../assets/img/iconNext.png'

export const SwiperTab = styled.div`
.ant-tabs-tab-active{
    .btn__show{
        color: #fa5238 !important;
    }
}
.btn__show{
    font-size: 20px;
    outline: none;
    font-weight: 600;
}
.swiper-initialized.swiper-horizontal{
    position: relative;
}

/* .swiper-button-prev::before{
    content: "";
    position: absolute;
    top: 42%;
    left: 0px;
    background: url(${iconPrev}) 50%/contain no-repeat;
    transform: translateY(-50%);
    width: 40px;
    height: 65px;
    border-radius: 5px;
    background-color: #ebebec;
    z-index: 10;
}
.swiper-button-next::before{
    content: "";
    position: absolute;
    top: 42%;
    right: 0px;
    background: url(${iconNext}) 50%/contain no-repeat;
    transform: translateY(-50%);
    width: 40px;
    height: 65px;
    border-radius: 5px;
    background-color: #ebebec;
    z-index: 10;
} */

`
