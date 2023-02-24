/* eslint-disable no-unused-vars */
const { default: styled, css } = require('styled-components')

export const HomeDetail = styled.div`
background: #111827;
.homeDetail{
    
    height: 600px;
    min-width: 500px;
    position: relative;
    color: #fff;
    margin-bottom: 0;
    .detail__intro{
    overflow: hidden;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    img{
        width: 100%;
    height: 100%;
    -webkit-filter: blur(9px);
    filter: blur(9px);
    object-fit: cover;
    object-position: center center;
    }
   }
   .detail__overlay{
    position: absolute;
    inset: 0;
    background: linear-gradient(0deg, rgb(17, 24, 39), transparent);
   }
   .detail__content{
    z-index: 100;
    position: relative;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .detail__text{
        display: flex;
        align-items: center;
             &__img{
                width: 200px;
                height: 300px;
                position: relative;
                img{
                    border-radius: 10px;
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
            }
            &__info{
                padding: 10px;
                .name__movie{
                    font-size: 1.5em;
                    font-weight: 700;
                    margin: 0;
                    padding: 3px 0;
                }
                .info__datetime{
                    font-size: 12px;
                    font-weight: 300;
                }
                .digital__movie{
                    font-size: 12px;
                    font-weight: 300;
                }
            }
        }
        .detail__rating{
            display: flex;
            flex-direction: column-reverse;
            
        }
    }
}
.infoLichChieu{
    
}
.info__rap{
display: flex;
padding: 10px;
align-items: center;
p{
    margin: 0 0 0 15px;
    color: rgb(139, 197, 65);
    font-weight: bold;
}
}
.info__gioChieu{
padding: 10px;
.btn__rap{
    outline: none!important;
    display: block;
    float: left;
    padding: 7px;
    margin: 0 10px 10px 0;
    border-radius: 4px;
    border: 1px solid #e4e4e4;
    color: #9b9b9b;
    font-weight: 600;
    background-color: #fff;
    font-size: 16px;
    min-width: 25%;
    &:hover{
    color: rgb(139,197,65);
    }
}
}
`
