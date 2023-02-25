import styled from 'styled-components'

export const CheckOutDiv = styled.div`
 .infoFilm{
  display: flex;
  justify-content: space-between;
  p {
  font-size: 1em;
  }
}
.seat{
    width: 30px;
    height: 30px;
    font-size: 12px;
    border-radius: 5px;
    margin: 1px;
    background-color: #3e515d !important;
  }
  .seat::before{
    border: 3px solid orange;
    background: orange ;
  }

  .vipSeat{
    background-color: rgb(228, 45, 121) !important;
    width: 30px;
    height: 30px;
    margin: 1px;
    border-radius: 5px;
    color: #000;
    cursor: pointer;
}
  
  
.bookingSeat {
    background: rgb(74, 207, 69) !important;
    color: #000;
    cursor: pointer;
    border-radius: 5px;
    width: 30px;
    height: 30px;
    margin: 1px;

  
  }

.bookedSeat {
    background: orange !important;
    color: #000;
    cursor: no-drop !important;
    border-radius: 5px;
    width: 30px;
    height: 30px;
    margin: 1px;
  
  }
  .formBookTicket p {
    padding: 1em 0;
    margin: 0;
  }
  .formBookTicket{
    background: rgba( 3, 3, 3, 0.15 );
box-shadow: 0 8px 32px 0 rgba(203, 203, 208, 0.482);
backdrop-filter: blur( 3px );
-webkit-backdrop-filter: blur( 3px );
border-radius: 10px;
border: 1px solid rgba( 255, 255, 255, 0.18 );
  }
.swal2-actions .swal2-styled.swal2-confirm{
  background-color: #fa5238 !important;
}
.swal2-cancel.swal2-styled{
background: rgb(126, 179, 57);
}
.info{
  display: flex;
  justify-content: space-between;
  padding: .5em 0;
  .timer__title{
    color: #9b9b9b;
    font-size: 16px;
  }
  .timer__cowndown{
    text-align: right;
    color: #fa5238;
    font-size: 22px;
    font-weight: 600;
  }
  &__rap{
    display: flex;
    color: white;
    .rap__detail{
      &__name{
        margin: 0;
      }
    }
  }
}
 `
