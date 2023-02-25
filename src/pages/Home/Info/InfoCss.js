import styled from 'styled-components'

export const InfoDiv = styled.div`
min-height: 500px;
.info{
   margin-top: 3em;
   padding: 0 2em;
    .infoContent{
    background: #1f2937;
    color: #fff;
    padding: 1em;
    .info__titel{
        font-size: 18px;
    }
    .info__detail{
        font-size: 1em;
        padding:.7em 0.5em;
        border-bottom: 1px solid #374151;
        p{
            margin: 0;
            font-weight: 400;
        }
        strong{
            font-weight: 400;
            color:#9b9b9b;
            font-size: 16px;
            margin-top: 7px;
                display: block;
            }
        span{
            font-weight: 400;
            color:#9b9b9b;
            font-size: 16px;
            margin-top: 7px;
                display: block;
        }
        }
    }
}
.info__history{
    padding: 1.5em;
    background: #1f2937;
    th{
        padding: 15px 10px;
        background: #111827;
    }
    td{
        padding: 15px 10px;

    }
}

`
