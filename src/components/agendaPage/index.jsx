import { DivContainer, DivContent, DivAgenda } from "./styles";
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
        <Calendar
          locale='pt-BR'
          value={date}
          onChange={(value) => setDate(new Date(value))}
        />
        {date && (
          <div className='div_medicos'>
            <h3>Médicos disponíveis</h3>
            <Input
              placeholder=' '
              value={inputValue}
              inputName={"Buscar Médico"}
              onChange={(e) => {
                setInputValue(e.target.value);
              }}
              Icon={
                <div className='input-icon' onClick={() => setInputValue("")}>
                  {inputValue && <FiX />}
                </div>
              }
            />
            <ListMedicos
              list={allMedicos}
              currentMedicoId={currentMedicoId}
              setCurrentMedicoId={setCurrentMedicoId}
            />
          </div>
        )}
      </DivContent>
      {currentMedicoId && (
        <DivAgenda>
          <h4>
            {"Doutor(a): " +
              allMedicos?.find((m) => m.id === currentMedicoId)?.nome +
              " |Dia: " +
              date.toLocaleString().split(" ")[0]}
          </h4>
          <Agenda />
        </DivAgenda>
      )}
    </DivContainer>
  );
};

export default AgendaPage;
