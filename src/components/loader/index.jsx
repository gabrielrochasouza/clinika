import { LoaderContainer } from "./style"


const Loader = ()=>{

    return(
        <LoaderContainer>
            <div className="spinner">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </LoaderContainer>
    )
}

export default Loader