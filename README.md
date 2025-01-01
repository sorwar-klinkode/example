# Laravel React Booking System

## Features

- **Service Booking**: Users can book a service by filling out a form with their name, email, and the type of service they require.
- **View Booked Services**: Admin or users can view a table listing all booked services.
- **Shopify Polaris UI**: The project uses Shopify Polaris React components for a consistent and modern user interface.
- **Integrated with Shopify**: Uses the `kyon147/laravel-shopify` package for integrating with the Shopify API for service bookings.

## Installation

### Clone the Repository

Clone this repository to your local machine:

```bash
git clone https://github.com/sorwar-klinkode/example.git
cd example
```

### Set Up the .env File

Copy the `.env.example` to `.env` and configure your database and environment variables:

```bash
cp .env.example .env
```

Then, open the `.env` file and make sure you configure the necessary environment variables for your database and other settings.

### Run Migrations

To set up the database schema, run the following command:

```bash
php artisan migrate
```

This will run the Laravel migrations and create the necessary tables.

### Start the Laravel Server

Now, start the Laravel development server:

```bash
php artisan serve
```

This will start the backend at [http://localhost:8000](http://localhost:8000).
