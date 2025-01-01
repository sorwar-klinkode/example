import { createBrowserRouter } from "react-router-dom"
import ServiceBookedList from "./ServiceBookedList";
import BookService from "./BookService";

const router = createBrowserRouter([
    {
        path: '/',
        element: <ServiceBookedList />
    },
    {
        path: '/booking-service',
        element: <BookService />
    }
])

export default router;