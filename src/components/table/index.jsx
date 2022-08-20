import Loader from "../loader";
import { TableContainer } from "./style";

const Table = ({ headerTitle, body, headerBtn, tableHeader, next, previous, nextFunction, previousFunction, style }) => {
    return (
    <TableContainer style={style}>
      <div className="table-header">
        <span className="table-header__title">{headerTitle}</span>
        <div className="table-header__btn">{headerBtn}</div>
      </div>
      <ul className="table-body">
            <li className="table-body-header">
            {tableHeader}
            </li>
            {body.props.children ? body : <Loader/>}
      </ul>
      <div className="table-footer">
        {previous && <button onClick={previousFunction}>Voltar</button>}
        {next && <button onClick={nextFunction}>Avançar</button>}
      </div>
    </TableContainer>
  );
};

export default Table;
