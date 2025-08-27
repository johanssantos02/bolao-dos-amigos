import styled from "styled-components";

export const ContainerHistorico = styled.div`

    width: 100%;
    height: auto;

    .tabelaHistorico{
        thead{
            tr{
                th{
                    height: 35px;
                    font-size: 1.2em;
                    &:nth-of-type(1){
                        width: 25%;
                    }
                }
            }
        }
        tbody{
            tr{
                td{
                    width: 25%;
                }
            }
        }
    }

`

