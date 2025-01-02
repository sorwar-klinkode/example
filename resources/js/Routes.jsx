import { createBrowserRouter } from "react-router-dom"
import ServiceBookedList from "./ServiceBookedList";
import BookService from "./BookService";
import Layout from "./Layout";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <ServiceBookedList />
            },
            {
                path: '/booking-service',
                element: <BookService />
            }
        ]
    },

])

export default router;