   /* страницы для читателей*/
import { Login } from "../authPages/Login";
import { Regsiter } from "../authPages/Regsiter";
import Stidy from "../Pages/Stidy";
import StidySearch  from "../Pages/StidyPages/StidySearch";
import StidyLessons from "../Pages/StidyPages/StidyLessons";
  /*Админка */
import { Admin } from "../authPages/Admin";
import FinansePage from "../Pages/AdminPages/FinansePage";
import AdminPage from "../Pages/AdminPages/AdminPage";
import StatisticAdmin from "../Pages/AdminPages/StatisticAdmin";
/*Страницы для преподов */
import AutoPagesTeacher from "../authPages/autoPagesTeacher";
import Teacher from '../Pages/Teacher'
import MakeLessons from "../Pages/TeacherPages/MakeLessons";
import Statistic from "../Pages/TeacherPages/Statistic";
/*Страницы общего назначения */
import  Help  from "../Pages/TeacherPages/HelpTeacher";
import HelpStidy from "../Pages/StidyPages/HelpStidy";
import PageNotFound from "../Pages/PageNotFound";


export const routes = [

    /* страницы для читателей*/

    { id: "login", path: "/login", element: <Login/> },
    { id: "registr", path: "/registr", element: <Regsiter/> },
    { id: "stidy", path: "/StidyPage", element: <Stidy/> },
    { id: "search", path: "/search", element: <StidySearch/> },
    { id: "myLessons", path: "/myLessons", element: <StidyLessons/> },
    { id: "stidyHelp", path: "/stidyHelp", element: <HelpStidy/> },

    /*Админка */
    
    { id: "Admin", path: "/BossAdmin", element: <Admin/> },
    { id: "FinansePage", path: "/FinanseAdmin", element: <FinansePage/> },
    { id: "AdminPage", path: "/AdminPage", element: <AdminPage/> },
    { id: "Statistic", path: "/StatisticAdmin", element: <StatisticAdmin/> },

    /*Страницы для преподов */
   
    { id: "teacher", path: "/teacher", element: <Teacher/> },
    { id: "entranceTeacher", path: "/entranceTeacher", element: <AutoPagesTeacher/> },
    { id: "makeLessons", path: "/makeLessons", element: <MakeLessons/> },
    { id: "Statistic", path: "/Statistic", element: <Statistic/> },
   
    { id: "help", path: "/help", element: <Help/> },
    /* Несуществующая страница, ошибка  */
    { id: "err", path: "*", element: <PageNotFound/> },
  
]