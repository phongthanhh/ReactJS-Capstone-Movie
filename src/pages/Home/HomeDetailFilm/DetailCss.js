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
   
   
`
