import {Route, Routes} from 'react-router-dom'
import Dashboard from '../pages/dashboard'
import LoginPage from '../pages/loginPage'



const Router = ()=>{

    return(
        <Routes>
            <Route element={<LoginPage/>} path='/'/>
            <Route element={<Dashboard/>} path='/dashboard' />
        </Routes>
    )
}
export default Router