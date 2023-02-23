import styled from 'styled-components'

export const CardStyle = styled.div`
  padding: 5px;
  position: relative;
  width: 100%;
  &:hover .overlay {
    height: 100%;
  }
  .card-item{
    margin-bottom: 10px;
    position: relative;
    cursor: pointer;
    z-index: 0;
    &:hover .btnCard{
      opacity: 1;
      transform: translateY(0);
      transition: all .5s;
    }
    &:hover .card-overlay{
      opacity:1;
      transition: all .5s;
    }
  }
  .card-img{
    position: relative;
    width: 100%;
    height: 350px;
    border-radius: 5px;
    .card-overlay{
      width: 100%;
      position: absolute;
      background: linear-gradient(0deg,#000,transparent);
      opacity: 0;
      top: 0;
      bottom: 0;
      right: 0;
    }
    .card-img-title{
    width: 100px;
    position: absolute;
    left: -5%;
    top: 0;
    }
  }
  .card-info {
    position: relative;
    height: 50px;
    .cardName{
      position: absolute;
      top: 50%;
    left: 50%;
      transform: translate(-50%, -50%);
    }
    .btnCard{
         position: absolute;
    bottom: 0;
    left: 0;
    transform: translateY(40%);
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: all .3s ease-in-out;
    padding: 5px;
    font-size: 18px;
    font-weight: 600;
    color: #fff;
    border-radius: 4px;
    background: linear-gradient(270deg,#fb4226,#ce3017);
    cursor: pointer;
    outline: none;
    }
  }
  
 
`
