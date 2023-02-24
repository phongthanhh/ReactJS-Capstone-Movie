import styled from 'styled-components'

export const TabCp = styled.div`
.rapName{
   display: flex;
   padding: 0;
   justify-content: center;
   align-items: center;
   .rapChild__info{
    text-align: left;
    padding-left:10px;
    .rapChil__name{
    font-size: 16px;
    margin: 0;
    color: rgb(139, 197, 65);
    font-weight: 700;
   }
   .rapChil__diaChi{
    font-size: 10px;
   }
   }
   
}
.detail__films{
   padding: 10px;
   padding-bottom: 20px;
   border-bottom: 2px solid #fff;
.film__giochieu{
   display: flex;
   flex-wrap:wrap;
   margin: 5px 0;
   .film__giochieu__detail{
      outline: none!important;
    display: block;
    float: left;
    padding: 10px;
    margin: 0 10px 10px 0;
    border-radius: 4px;
    border: 1px solid #e4e4e4;
    color: rgb(16, 143, 62);
    font-weight: 600;
    background-color: #fff;
    font-size: 12px;
    min-width: 25%;
   }
}
.film__tenphim{
   font-size: 16px;
   font-weight: bold;
   color:#fff;
   gap: 10px;
   img{
          width: 50px;
    height: 50px;
    object-fit: cover;
    border-radius: 4px;
   }
   display: flex;
   padding: 5px;
}
}
`
