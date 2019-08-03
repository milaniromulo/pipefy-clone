import styled from 'styled-components';

export const Container = styled.div`
    padding: 0 15px;
    height: 100%;
    flex: 0 0 320px;

    & + div {
        border-left: 1px solid #d8d8d8;
    }


    header{
        display: flex;
        justify-content: space-between;
        align-items:center;
        height: 42px;

        h2{
            font-weight: 500px;
            font-size: 16px;
            padding: 0 10px;
        }

        button{
            width: 42px;
            height: 42px;
            border-radius: 100%;
            background: linear-gradient(91.83deg, #F8485E 3.84%, #E11383 97.59%);
            border: 0;
            cursor: pointer;
        }
    }

    ul{
        margin-top: 30px;
    }
`; 