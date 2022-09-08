import NoDataIcon from "../noData"
import { Container } from "./style"

const Empty = ()=>{

    return(
        <Container>
            <NoDataIcon/>
            <span>Vazio</span>
        </Container>
    )
}

export default Empty