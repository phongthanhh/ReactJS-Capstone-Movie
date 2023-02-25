import styled from 'styled-components'

export const HeaderCP = styled.header`
position: relative;
 background:#1f2937;
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 3px );
-webkit-backdrop-filter: blur( 3px );
border: 1px solid rgba( 255, 255, 255, 0.18 );
padding: 1em;
color: #fff;
border-top: none;
z-index: 30;
display: flex;
.userLogin{
    .userLogin__dropdown{
    position: relative;
    display: flex;
    align-items: center;
        .dropdown__select{
        background: #ebebec;
        padding: 2px 1px 0;
         margin-left: 10px;
        border-radius: 5px;
        cursor: pointer;
        span{
            color: #fa5238;
             transition: all .3s linear;
            font-size: 25px;

            }
         }
         .dropdown__list{
            width: 200px;
            position: absolute;
            right: 0;
            border-radius: 4px;
            padding: 10px 5px;
            font-size: 14px;
            border: 1px solid #fa5238;
            background: #1f2937;
            top: 48px;
            z-index: 10;
            li{
                display: flex;
            align-items: center;
            border-radius: 4px;
            padding: 10px 5px;
             list-style: none;
             font-size: 14px;
             font-weight: 700;
             cursor: pointer;
             &:hover .dropdown__list__icon span{
                transform: scale(1.2)
             }
            }
            &__icon{
                span{
                    font-size: 20px;
                    color: #fa5238;
                    margin-right: 5px;
                    transition: all .3s;
                }
            }
         }
    }
    
}
`
