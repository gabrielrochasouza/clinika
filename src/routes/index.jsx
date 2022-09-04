import {Route, Routes} from 'react-router-dom'
import Dashboard from '../pages/dashboard'
import LoginPage from '../pages/loginPage'
import NotFoundPage from '../pages/notFound'



const Router = ()=>{

    return(
        <Routes>
            <Route element={<LoginPage/>} path='/'/>
            <Route element={<Dashboard/>} path='/dashboard' />
            <Route element={<NotFoundPage/>} path='*' />
        </Routes>
    )
}
export default Router