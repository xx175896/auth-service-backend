# Auth Service - Full Stack Application

A complete authentication service with backend (Spring Boot) and frontend (React) implementation.

## Features

### Backend
- ✅ User Signup
- ✅ User Login
- ✅ JWT Authentication
- ✅ Refresh Token
- ✅ Email Verification
- ✅ Password Reset
- ✅ Role-based Access Control

### Frontend
- ✅ Login Page
- ✅ Signup Page
- ✅ Email Verification Page
- ✅ Forgot Password Page
- ✅ Reset Password Page

## Tech Stack

### Backend
- Spring Boot 4.0.2
- Spring Security
- Spring Data JPA
- H2 Database (for development)
- JWT (jjwt 0.12.5)
- Java Mail Sender
- Lombok

### Frontend
- React 18
- React Router DOM
- Vite
- Axios

## Project Structure

```
auth-service-backend/
├── auth-service-backend/
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/com/example/authservicebackend/
│   │   │   │   ├── config/          # Security configuration
│   │   │   │   ├── controller/      # REST controllers
│   │   │   │   ├── dto/             # Data Transfer Objects
│   │   │   │   ├── entity/          # JPA entities
│   │   │   │   ├── repository/      # JPA repositories
│   │   │   │   ├── security/        # JWT filter
│   │   │   │   └── service/         # Business logic
│   │   │   └── resources/
│   │   │       └── application.properties
│   │   └── test/
│   └── pom.xml
└── frontend/
    ├── src/
    │   ├── pages/                   # React pages
    │   ├── services/                # API service
    │   ├── App.jsx
    │   └── main.jsx
    ├── package.json
    └── vite.config.js
```

## Getting Started

### Prerequisites
- Java 21
- Maven 3.6+
- Node.js 18+
- npm or yarn

### Backend Setup

1. Navigate to the backend directory:
```bash
cd auth-service-backend/auth-service-backend
```

2. Build the project:
```bash
mvn clean install
```

3. Run the application:
```bash
mvn spring-boot:run
```

The backend will start on `http://localhost:8080`

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The frontend will start on `http://localhost:3000`

## API Endpoints

### Authentication
- `POST /api/auth/signup` - Register a new user
- `POST /api/auth/login` - Login user
- `POST /api/auth/verify-email` - Verify email with token
- `POST /api/auth/forgot-password` - Request password reset
- `POST /api/auth/reset-password` - Reset password with token
- `POST /api/auth/refresh` - Refresh access token
- `POST /api/auth/logout` - Logout user

## Configuration

### Backend Configuration

Edit `auth-service-backend/src/main/resources/application.properties`:

```properties
# Email Configuration (for production)
spring.mail.username=your-email@gmail.com
spring.mail.password=your-app-password

# JWT Secret (change in production)
jwt.secret=your-secret-key-min-64-characters

# Frontend URL
app.base-url=http://localhost:3000
```

### Email Setup

For Gmail:
1. Enable 2-Step Verification
2. Generate an App Password
3. Use the app password in `application.properties`

For development, you can use a mock email service or configure SMTP settings.

## Database

The application uses H2 in-memory database for development. The database is accessible at:
- Console: `http://localhost:8080/h2-console`
- JDBC URL: `jdbc:h2:mem:authdb`
- Username: `sa`
- Password: (empty)

## Frontend Routes

- `/login` - Login page
- `/signup` - Signup page
- `/verify-email?token=<token>` - Email verification
- `/forgot-password` - Forgot password page
- `/reset-password?token=<token>` - Reset password page

## Auth Flow

### Signup Flow
1. User fills signup form
2. Backend validates input
3. User is saved as INACTIVE
4. Verification token is generated
5. Email is sent with verification link
6. User clicks link and verifies email
7. User account is activated

### Login Flow
1. User enters credentials
2. Backend validates credentials
3. JWT access token and refresh token are generated
4. Tokens are stored in localStorage
5. User is authenticated

### Password Reset Flow
1. User requests password reset
2. Reset token is generated
3. Email is sent with reset link
4. User clicks link and enters new password
5. Password is updated

## Development Notes

- The backend uses H2 in-memory database (data is lost on restart)
- For production, configure a persistent database (PostgreSQL, MySQL, etc.)
- Update email configuration for actual email sending
- Change JWT secret key for production
- Configure CORS origins in `SecurityConfig.java` for production

## License

This project is for educational purposes.
