import styled from "styled-components";



export const ContainerHeader = styled.div`

    width: 100%;
    height: 80px;
    background-color: #034159;
    color: white;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    padding: 5px;
    font-family: 'lato';
`
export const ContainerLogo = styled.div`
    
    width: auto;
    height: 40px;
    padding: 10px;
    display: flex;
    flex-direction: row;
    /* justify-content: center; */
    align-items: center;
    margin: auto 40px;
    font-size: 30px;
    font-family: 'lato';
`

export const NavBar = styled.div`

    width: 60%;
    height: 20px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 10%;
    margin: auto 0;
    font-size: 23px;
    /* border: solid 1px red; */

    h4{
        cursor: pointer;
    }
    
`