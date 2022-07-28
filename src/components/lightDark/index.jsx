import { LightDarkContainer } from "./style"
import {MdDarkMode,MdLightMode} from 'react-icons/md'

const LightDark = ({darkTheme, changeTheme})=>{
    return(
        <LightDarkContainer onClick={()=>changeTheme()}>
            {darkTheme===false ? <MdDarkMode/>: <MdLightMode/>}
           
        </LightDarkContainer>
    )
}
export default LightDark