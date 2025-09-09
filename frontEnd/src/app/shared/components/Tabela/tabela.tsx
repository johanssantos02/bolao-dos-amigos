import { useState } from "react";
import type { IObterBolaoData } from "../../services/ApiServiceBolao/ControllerBolao/ObterBolao/obterBolao";
import type { IListarJogadorBolaoData } from "../../services/ApiServiceBolao/ControllerJogadores/listarJogadoresBolao/listarJogadoresBolao";
import type { IObterJogadoresData } from "../../services/ApiServiceBolao/ControllerJogadores/obterJogadores/obterJogadores"
import type { IObterParticipantesData } from "../../services/ApiServiceBolao/ControllerParticipantesBolao/obterParticipantesBolao";
import type { IListarTimesData } from "../../services/ApiServiceBolao/ControllerTimes/ListarTimes/listarTimes";
import { Tabela, TBody, Td, Th, THead, Tr } from "./style"
import { MdDelete, MdEditSquare } from "react-icons/md"
import ModalDePalpites from "../modalDePalpites/modalDePalpites";

export interface IHeaderConfig {
    label: string;   // O nome que vai aparecer no header
    key: keyof IObterJogadoresData | "actions" | "valor" | "data" | "id"; // A chave do objeto
}
export interface ITabelaDadosProps {
    dadosJogadores?: IObterJogadoresData[],
    classname?: string,
    dadosHeader?: IHeaderConfig[],
    dadosBolao?: IObterBolaoData[],
    dadosJogadoresBolao?: IObterParticipantesData[],
    dadosTimes?: IListarTimesData[],
    dadosBolaoSelecionado?: IObterBolaoData
}


export const TabelaDados = ({
    dadosJogadores,
    classname,
    dadosHeader,
    dadosBolao,
    dadosJogadoresBolao,
    dadosTimes,
    dadosBolaoSelecionado
}: ITabelaDadosProps) => {

    const [
        modalPalpitesEstaAberta,
        setModalPalpitesEstaAberta
    ] = useState(false)

    const [
        dadosParticipante,
        setDadosParticipante
    ] = useState<IObterParticipantesData>({} as IObterParticipantesData)
    

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
            ) : dadosJogadoresBolao ? (
                <TBody>
                    {dadosJogadoresBolao?.map((item, index) => (
                        <Tr
                            key={index}
                            onClick={() => {
                                setDadosParticipante(item)
                                setModalPalpitesEstaAberta(true)

                            }}
                        >
                            <Td className="tdJogadores">
                                {item.idParticipanteBolao}
                            </Td>
                            <Td className="tdJogadores">
                                {item.nome}
                            </Td>
                            <Td className="tdJogadores">
                                5 Acertos
                            </Td>
                        </Tr>
                    ))}
                </TBody>
            ) : dadosTimes ? (
                <TBody>
                    {dadosTimes?.map((item, index) => (
                        <Tr key={index}>
                            <Td className="tdJogadores">
                                {item.NomeTime}
                            </Td>
                            <Td className="tdJogadores">
                                <MdEditSquare size={25} color="blue" />
                                <MdDelete size={25} color="red" />
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

            {modalPalpitesEstaAberta && (
                <ModalDePalpites
                    openModal={modalPalpitesEstaAberta}
                    closeModal={() => setModalPalpitesEstaAberta(false)}
                    dadosJogador={dadosParticipante}
                    onSuccess={() => {}}
                    dadosBolao={dadosBolaoSelecionado!}

                />
            )}

        </Tabela>
    )


}