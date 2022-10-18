import { useEffect, useState } from "react";
import { useUsuarios } from "../../providers/usuarios";
import Loader from "../loader";
import { TableContainer } from "./style";

const Table = ({
  headerTitle,
  body,
  headerBtn,
  tableHeader,
  next,
  count,
  previous,
  getFunction,
  style,
}) => {
  
  const currentPageNumber = previous ? ( previous.includes("=") ? Number(previous.split("=")[1])+1 : 2): 1

  return (
    <TableContainer style={style}>
      <div className="table-header">
        <span className="table-header__title">{headerTitle}</span>
        <div className="table-header__btn">{headerBtn}</div>
      </div>
      <ul className="table-body">
        <li className="table-body-header">{tableHeader}</li>
        {body.props.children ? body : <Loader />}
      </ul>
      <div className="table-footer">
        {(previous || next) && (
          <button 
          disabled={previous ? false : true} 
          className={previous ? "" :"visibility-off"}
          onClick={async()=>{
            if(previous){
              if(previous.includes("=")){
                const number = previous.split("=")[1]
                await getFunction(`?page=${number}`)
              }else{
                await getFunction()
              }
            }
          }}>
            Voltar
          </button>
        )}
        {(previous || next) && (
          <ul className="pagination">
            {Array(Math.ceil(count / 20))
              .fill(0)
              .map((p, i) => (
                <li 
                key={i}
                className = {i+1==currentPageNumber ? "current-page" : ""} 
                onClick={() => getFunction(`?page=${i + 1}`)}>
                  {i + 1}
                </li>
              ))}
          </ul>
        )}
        {(previous || next) && (
          <button 
          disabled={next ? false : true}
          className={next ? "":"visibility-off" }
          onClick={async()=>{
            if(next){
              const number = next.split("=")[1]
              await getFunction(`?page=${number}`)
            }
          }}>
            Avançar
          </button>
        )}
      </div>
    </TableContainer>
  );
};

export default Table;
