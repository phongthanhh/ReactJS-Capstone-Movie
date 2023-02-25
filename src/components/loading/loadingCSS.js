import styled, { keyframes } from 'styled-components'

const loading = keyframes`
0%,100%{
    height: 10px;
    background: #ffd166;
}
25%{
    height: 90px;
    background: #06d6a0;

}
59%{
    height: 40px;
    background: #118ab2;

}
75%{
    height: 90px;
    background: #ef476f;
}
`

export const LoadingCp = styled.div`
height: 90px;
display: flex;
transform: rotate(180deg);
    span{
        width: 36px;
        margin: 0 2px;
        border-radius: 4px;
        animation: ${loading} 2s infinite;
        &:nth-child(1){
            animation-delay:.2s;
        }
        &:nth-child(2){
            animation-delay:.4s;
        }
        &:nth-child(3){
            animation-delay:.5s;
        }
        &:nth-child(4){
            animation-delay:.8s;
        }
        &:nth-child(5){
            animation-delay: 1s;
        }
    }
`
