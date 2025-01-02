import { Button, Form, FormLayout, Page, Select, TextField } from '@shopify/polaris';
import { useCallback, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const BookService = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [serviceType, setServiceType] = useState('web development');
    const navigate = useNavigate();

    const handleSelectChange = useCallback(
        (value) => setServiceType(value),
        [],
    );

    const services = [
        { label: 'web development', value: 'web development' },
        { label: 'app development', value: 'app development' },
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            name,
            email,
            serviceType
        }
        console.log(data)

        axios.post('/api/booking', data)
            .then((response) => {
                console.log('Success:', response.data);
                navigate('/');
            })
            .catch((error) => {
                console.error('Error:', error.response ? error.response.data : error.message);
            });
    };

    return (
        <Page>
            <Form onSubmit={handleSubmit}>
                <FormLayout>
                    <TextField
                        onChange={(value) => setName(value)}
                        value={name}
                        label="name"
                        type="name"
                    />
                    <TextField
                        onChange={(value) => setEmail(value)}
                        value={email}
                        label="email"
                        type="email"
                    />

                    <Select
                        label="Select Service"
                        options={services}
                        onChange={handleSelectChange}
                        value={serviceType}
                    />
                    <Button submit primary>
                        Submit
                    </Button>
                </FormLayout>
            </Form>
        </Page>
    );
};

export default BookService;