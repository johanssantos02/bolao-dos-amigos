import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export interface IInputComSugestaoProps<T> {
    dadosOpcoes: T[];
    label: string;
    getOptionLabel: (option: T) => string;
    value: T | null;                        // 👈 controla o valor
    onChange: (novoValor: T | null) => void; // 👈 callback quando mudar
}

export default function InputComSugestao<T>({
    dadosOpcoes,
    label,
    getOptionLabel,
    value,
    onChange
}: IInputComSugestaoProps<T>) {


    return (
        <Autocomplete
            disablePortal
            options={dadosOpcoes}
            getOptionLabel={getOptionLabel}
            value={value} // 👈 valor controlado
            onChange={(_, novoValor) => onChange(novoValor)}
            sx={{ width: "80%" }}
            renderInput={(params) => <TextField {...params} label={label} />}
        />
    );
}
