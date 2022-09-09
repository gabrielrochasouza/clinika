import { useEffect } from "react";
import { useRef } from "react";
import { StyledUl, StyledLi } from "./styles";

const ListMedicos = ({ list, currentMedicoId, setCurrentMedicoId }) => {
    const medRef = useRef(null);

    useEffect(() => {
        medRef.current?.scrollIntoView({ block: "center" });
    }, []);

    return (
        <StyledUl>
            {list?.map((value) => (
                <StyledLi
                    key={value.id}
                    id={value.id}
                    ref={currentMedicoId === value.id ? medRef : null}
                    selected={currentMedicoId === value.id ? true : false}
                    onClick={() => setCurrentMedicoId(value.id)}>
                    <span>{value.nome}</span>
                    <span>{value.especialidade}</span>
                </StyledLi>
            ))}
        </StyledUl>
    );
};

export default ListMedicos;
