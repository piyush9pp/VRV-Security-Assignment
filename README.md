# VRV-Security-Assignment
Role-Based Access Control (RBAC) System
This project is a secure backend application that demonstrates the implementation of Authentication, Authorization, and Role-Based Access Control (RBAC) principles. It leverages modern tools and best practices to ensure security and scalability. Users can register, log in, and access resources based on their assigned roles, with JWT used for session management.

Concepts Implemented
Authentication
The system allows users to register and log in securely. Passwords are hashed using bcrypt.js, ensuring that sensitive information is stored securely. After successful login, users receive a JWT token for accessing protected resources.

Authorization
Role-based authorization ensures that only users with the correct permissions can access specific routes. Roles such as Admin, User, and Moderator are used to define access levels for different resources.

Role-Based Access Control (RBAC)
RBAC allows fine-grained control over resources. Each role has predefined permissions, which are enforced through middleware to restrict or allow access to endpoints.

Technology Stack
Node.js: Provides the backend runtime environment.
Express.js: Framework for building server-side applications.
MongoDB: NoSQL database for storing user data and roles.
JWT: Securely manages user sessions through token-based authentication.
bcrypt.js: Hashes user passwords to enhance security.
Project Highlights
Secure Registration and Login:

Users can register with unique credentials.
Login generates a JWT token for secure session management.
Role-Based Access:

Roles such as Admin, User, and Moderator are predefined.
Role-based middleware ensures access control to resources.
API Endpoints:

Public and protected endpoints demonstrate the flexibility of the RBAC system.
Extensible and Modular Design:

Codebase is structured for scalability and maintainability.
New roles or features can be easily added.
