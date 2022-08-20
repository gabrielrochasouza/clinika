import { SearchInputContainer } from "./style"
import {AiOutlineSearch} from 'react-icons/ai'

const SearchInput = ({submitFunction, placeholder="Faça sua pesquisa"})=>{

    return(
        <SearchInputContainer onSubmit={(e)=>{
            e.preventDefault()
            submitFunction()
        }}>
            <span>
            <AiOutlineSearch/>
            </span>
            <input type="text" placeholder={placeholder} />
            
        </SearchInputContainer>
    )
}

export default SearchInput
