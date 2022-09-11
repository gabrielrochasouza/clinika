import { SearchInputContainer } from "./style"
import {AiOutlineSearch} from 'react-icons/ai'

const SearchInput = ({submitFunction, placeholder="Faça sua pesquisa"})=>{

    return(
        <SearchInputContainer onSubmit={async(e)=>{
            e.preventDefault()
            let text=e.target[0].value
            await submitFunction(text)
        }}>
            <span>
            <AiOutlineSearch/>
            </span>
            <input 
            type="text"
            placeholder={placeholder}
            onChange={async(e)=>{
                if(e.target.value.length===0){
                    await submitFunction('')}
                } 
            }
            />
            
        </SearchInputContainer>
    )
}

export default SearchInput
