import { ContainerBody } from "./style"


type BodyCentralProps = {
  children?: React.ReactNode;
};

export const BodyCentral = ({
    children
}: BodyCentralProps) => {


    return (
        <ContainerBody>
            {children}
        </ContainerBody>
    )
}