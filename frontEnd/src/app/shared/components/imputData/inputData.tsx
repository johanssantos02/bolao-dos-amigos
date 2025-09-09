import type { InputHTMLAttributes } from "react"
import { ContainerInput, InputDate, Label } from "./style"

export interface IInputDataProps extends InputHTMLAttributes<HTMLInputElement>{
  label: string,
}

export const InputData = ({
  label,
  ...rest
}: IInputDataProps) => {


  return (
    <ContainerInput>
      <Label>
        {label}
      </Label>

      <InputDate
        {...rest}
      >

      </InputDate>
    </ContainerInput>

  )
}