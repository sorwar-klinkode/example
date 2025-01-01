import { RouterProvider } from "react-router-dom";
import router from "./Routes";

const App = () => {


    return (
        <div className='bg-slate-100'>
            <RouterProvider router={router}>

            </RouterProvider>
        </div>
    );
};

export default App;