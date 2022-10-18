import { useEffect } from "react"
import { useUsuarios } from "../../providers/usuarios"
import { InfoBoxesContainer } from "./style"
import CountUp from 'react-countup';

const InfoBoxes = ()=>{
    const {
        totalOfDoctors,
        totalOfPatients,
        totalOfConsultasToday,
        totalOfPatientsThatHaventPayed,
        getOverviewInfo
    } = useUsuarios()
    useEffect(()=>{
        getOverviewInfo()
    },[])
    const countTime = 3
    return(
        <InfoBoxesContainer>
          <div className="info-box">
            <div className="content">
              <span className="number">
                {totalOfPatients ? (
                  <CountUp duration={countTime} end={totalOfPatients} />
                ):0}
                {/* {totalOfPatients} */}
                </span>
              <span className="number-description">Total de Pacientes Ativos</span>
            </div>
            <div className="icon"></div>
          </div>

          <div className="info-box">
            <div className="content">
              <span className="number">
                {totalOfPatientsThatHaventPayed ? (
                  <CountUp duration={countTime} end={totalOfPatientsThatHaventPayed} />
                ):0}
                {/* {totalOfPatientsThatHaventPayed} */}
                </span>
              <span className="number-description">
                Pacientes Inadimplentes
              </span>
            </div>
            <div className="icon"></div>
          </div>

          <div className="info-box">
            <div className="content">
              <span className="number">
                {totalOfDoctors ? (
                  <CountUp duration={countTime} end={totalOfDoctors} />
                ): 0}
                
                </span>
              <span className="number-description">Total de Médicos</span>
            </div>
            <div className="icon"></div>
          </div>

          <div className="info-box">
            <div className="content">
              <span className="number">
              {totalOfConsultasToday ? (
                <CountUp duration={countTime} end={totalOfConsultasToday} />
              ):0}
                {/* {totalOfConsultasToday} */}
                </span>
              <span className="number-description">
                Consultas Agendadas Para Hoje
              </span>
            </div>
            <div className="icon"></div>
          </div>
        </InfoBoxesContainer>
    )
}
export default InfoBoxes
