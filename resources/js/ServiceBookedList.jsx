import { Page, DataTable, Button } from '@shopify/polaris';
import { useEffect, useState } from 'react';
import axios from 'axios';

import { Link } from 'react-router-dom';
const ServiceBookedList = () => {
    const [services, setServices] = useState([])
    const rows = services?.map((service) => [service.name, service.email, service.serviceType]);
    useEffect(() => {

        axios.get('/api/booking-list')
            .then((response) => {

                setServices(response?.data?.service)
            })
            .catch((err) => {

            });

    }, []);
    return (
        <Page>
            <Link to={'/booking-service'}>
                <Button>Book Service</Button>
            </Link>
            <DataTable
                columnContentTypes={[
                    'text',
                    'text',
                    'text',
                ]}
                headings={[
                    'Name',
                    'Email',
                    'Service',
                ]}
                rows={rows}
            />
        </Page>
    );
};

export default ServiceBookedList;