import type { IObterBolaoData } from "../../services/ApiServiceBolao/ControllerBolao/ObterBolao/obterBolao";
import type { IObterJogadoresData } from "../../services/ApiServiceBolao/ControllerJogadores/obterJogadores/obterJogadores"
import { Tabela, TBody, Td, Th, THead, Tr } from "./style"
import { MdDelete, MdEditSquare } from "react-icons/md"

export interface IHeaderConfig {
    label: string;   // O nome que vai aparecer no header
    key: keyof IObterJogadoresData | "actions" | "valor" | "data" | "id"; // A chave do objeto
}
export interface ITabelaDadosProps {
    dadosJogadores?: IObterJogadoresData[],
    classname?: string,
    dadosHeader?: IHeaderConfig[],
    dadosBolao?: IObterBolaoData[]
}


export const TabelaDados = ({
    dadosJogadores,
    classname,
    dadosHeader,
    dadosBolao
}: ITabelaDadosProps) => {


    return (
        <Tabela className={classname}>
            <THead>

                <Tr>
                    {dadosHeader?.map((item, index) => (
                        <Th className="headerJogadores" key={index}>
                            {item.label}
                        </Th>
                    ))}
                </Tr>

            </THead>
            {dadosBolao ? (
                <TBody>
                    {dadosBolao?.map((item, index) => (
                        <Tr key={index}>
                            <Td className="tdBolao">
                                {item.idBolao}
                            </Td>
                            <Td className="tdBolao">
                                {item.nomeBolao}
                            </Td>
                            <Td className="tdBolao">
                                {item.dataCriacao}
                            </Td>
                            <Td className="tdBolao">
                                {item.statusBolao}
                            </Td>
                        </Tr>
                    ))}
                </TBody>
            ) : (
                <TBody>
                    {dadosJogadores?.map((item, index) => (
                        <Tr key={index}>
                            <Td className="tdJogadores">
                                {item.nome}
                            </Td>
                            <Td className="tdJogadores">
                                <MdEditSquare size={25} color="blue" />
                                <MdDelete size={25} color="red" />
                            </Td>
                        </Tr>
                    ))}
                </TBody>
            )}

        </Tabela>
    )


}