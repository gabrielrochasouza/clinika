import { DivContainer, DivContent } from "./styles";
import { useMedico } from "../../providers/medicos";
import { useAgenda } from "../../providers/agenda";
import Agenda from "../agenda";

import { useEffect, useState } from "react";
import Calendar from "react-calendar";
import { FiX } from "react-icons/fi";
import ListMedicos from "../ListMedicos";
import Loader from "../loader";
import Input from "../input";

const AgendaPage = () => {
  const [inputValue, setInputValue] = useState("");
  const { currentMedicoId, setCurrentMedicoId, date, setDate } = useAgenda();
  const { allMedicos, getAllMedicos } = useMedico();

  useEffect(() => {
    getAllMedicos(`?nome=${inputValue}`);
  }, [inputValue]);

  useEffect(() => {
    getAllMedicos();
  }, []);
  return (
    <DivContainer>
      <DivContent>
        <div className="div_medicos">
          <h3>Médicos</h3>
          <Input
            placeholder=" "
            value={inputValue}
            inputName={"Buscar Médico"}
            onChange={(e) => {
              setInputValue(e.target.value);
            }}
            Icon={
              <div className="input-icon" onClick={() => setInputValue("")}>
                {inputValue && <FiX />}
              </div>
            }
          />
          {allMedicos.length !== 0 ? (
            <ListMedicos
              list={allMedicos}
              currentMedicoId={currentMedicoId}
              setCurrentMedicoId={setCurrentMedicoId}
            />
          ) : (
            <small>{!currentMedicoId && "Selecione algum médico"}</small>
          )}
        </div>
        <Calendar
          locale="pt-BR"
          value={date}
          onChange={(value) => setDate(new Date(value))}
        />
      </DivContent>
      <h4>
        {currentMedicoId
          && "Doutor(a): " +
            allMedicos?.find((m) => m.id === currentMedicoId)?.nome + " |Dia: " + date.toLocaleString().split(" ")[0]
          }
      </h4>
      {currentMedicoId && <Agenda />}
    </DivContainer>
  );
};

export default AgendaPage;
