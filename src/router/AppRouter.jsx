import { createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom";
import App from "../App";
import HomePage from "../pages/HomePage";
import Messages from "../pages/Messages"
import Gallery from "../pages/Gallery";
import FaqPages from "../pages/FaqPages";
import ContactPage from "../pages/ContactPage";
import WeeklyService from "../pages/WeeklyService";


const AppRouter = createBrowserRouter(
    createRoutesFromElements(
        <>
        <Route path="/"  element={<App />}>
           <Route path="/" index element={<HomePage />} /> 
           <Route path="/messages" element={<Messages />} />
           <Route path="/week" element={<WeeklyService />} />
           <Route path="/contact" element={<ContactPage />} />
           <Route path="/faq" element={<FaqPages />} />
           <Route path="/gallery" element={<Gallery />} />
           
        </Route>
        </>
        
    )
);

export default AppRouter