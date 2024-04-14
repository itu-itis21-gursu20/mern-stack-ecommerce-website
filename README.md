# MERN Stack E-commerce Website

This project is a full-featured e-commerce platform built with the MERN stack. It utilizes React for the frontend, Node.js and Express for the backend API, and MongoDB as the database. The client side is designed with Redux for state management, Styled-Components for component-level styles, and Material UI for a cohesive and flexible design system.

## Features

- User authentication and authorization
- Product listing with search and filter functionalities
- Shopping cart and checkout system
- Payment gateway integration
- Order management
- Responsive design for various screen sizes
- Admin panel for product and order management

## Getting Started


To get the application running on your local machine, follow these steps:

1. Clone the repository to your local machine.
    ```
    git clone https://github.com/itu-itis21-gursu20/mern-stack-ecommerce-website.git
    ```

2. Install dependencies in both the `api/`, `client/` and `admin/` directories.
    ```
    cd api
    npm install

    cd ../client
    npm install

    cd ../admin
    npm install
    ```

3. Start the backend server.
    ```
    cd api
    npm start
    ```

4. In a new terminal, start the React client.
    ```
    cd client
    npm start
    ```
    
5. In a new terminal, start admin.
    ```
    cd admin
    npm start
    ```

6. Navigate to `http://localhost:8000` in your web browser to view the application.

## Environment Variables

Before starting the application, ensure you have the necessary environment variables set up. Create a `.env` file in the `api/` directory with the following variables:

- `MONGODB_URI`: Your MongoDB connection string
- `PORT`: The port number for the Express server (default: 8000)

## Contributing

Contributions are welcome! If you have suggestions for improvements or bug fixes, please feel free to fork the repository, make your changes, and submit a pull request.

I hope you find this MERN stack E-Commerce Website useful. Happy coding!

