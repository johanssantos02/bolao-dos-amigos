import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { type SelectChangeEvent } from '@mui/material/Select';
import type { IObterPartidasData } from '../../services/ApiServiceBolao/ControllerPartidas/obterPartidas';


export interface ITimeSelecionado {
    id: number | null;
    nome: string;
}

export interface ISelectBaseProps {
    label: string,
    classNameSelect?: string,
    classNameLabel?: string,
    dados: IObterPartidasData[],
    partidaSelecionada?: IObterPartidasData
    opcaoSelecionada?: IObterPartidasData,
    setOpcaoSelecionada: React.Dispatch<React.SetStateAction<IObterPartidasData>>,
    tipoSelect: number,
    opcaoSelecionadaPalpite?: ITimeSelecionado,
    setOpcaoSelecionadaPalpite?: React.Dispatch<React.SetStateAction<ITimeSelecionado>>,
}

export default function SelectBase({
    label,
    classNameSelect,
    dados,
    opcaoSelecionada,
    setOpcaoSelecionada,
    tipoSelect,
    partidaSelecionada,
    classNameLabel,
    opcaoSelecionadaPalpite,
    setOpcaoSelecionadaPalpite
}: ISelectBaseProps) {

    const handleChangePalpite = (event: SelectChangeEvent<number | string>) => { // 1. RECEBE O EVENTO
        const selectedValue = event.target.value; // 2. PEGA O VALOR DO ITEM CLICADO

        if (!partidaSelecionada || !setOpcaoSelecionadaPalpite) {
            return;
        }

        // 3. DECIDE O QUE FAZER COM BASE NO VALOR
        if (selectedValue === partidaSelecionada.t1) {
            setOpcaoSelecionadaPalpite({ id: partidaSelecionada.t1, nome: partidaSelecionada.nomeTime1 });
        } else if (selectedValue === partidaSelecionada.t2) {
            setOpcaoSelecionadaPalpite({ id: partidaSelecionada.t2, nome: partidaSelecionada.nomeTime2 });
        } else if (selectedValue === 0) {
            setOpcaoSelecionadaPalpite({ id: 0, nome: 'Empate' });
        }
    };


    return (
        <Box sx={{ minWidth: 120 }}>
            {tipoSelect === 1 ? (
                <FormControl fullWidth >
                    <label
                        style={{ fontWeight: 500, marginBottom: 4, display: 'block' }}
                        className={classNameLabel}
                    >
                        {label}
                    </label>
                    <Select
                        id="select-label"
                        value={opcaoSelecionada?.idPartida ?? ""}
                        label={label}
                        onChange={(e) => {
                            const partida = dados.find(d => d.idPartida === e.target.value);
                            if (partida) setOpcaoSelecionada(partida);
                        }}
                        className={classNameSelect}
                    >
                        {dados.map((d) => (
                            <MenuItem value={d.idPartida}>{d.nomeTime1} X {d.nomeTime2}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
            ) : (
                <FormControl fullWidth>
                    <label
                        style={{ fontWeight: 500, marginBottom: 4, display: 'block' }}
                        className={classNameLabel}
                    >
                        {label}
                    </label>

                    <Select
                        id="demo-simple-select"
                        value={opcaoSelecionadaPalpite?.id ?? ""}
                        label={label}
                        onChange={handleChangePalpite} // 4. USA A FUNÇÃO CORRETA AQUI
                        className={classNameSelect}
                    >
                        <MenuItem value={partidaSelecionada?.t1 ?? -1}>{partidaSelecionada?.nomeTime1}</MenuItem>
                        <MenuItem value={partidaSelecionada?.t2 ?? -2}>{partidaSelecionada?.nomeTime2}</MenuItem>
                        <MenuItem value={0}>Empate</MenuItem>
                    </Select>
                </FormControl>
            )}

        </Box>
    );
}
