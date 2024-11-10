# QR Code Generator App

This repository contains the code for a QR Code Generator mobile app built with React Native for the frontend and Django Rest Framework (DRF) for the backend. The app allows users to generate, save, and share custom QR codes, providing a seamless experience for creating QR codes on the go.

## Key Features
- Custom QR Code Generation: Users can input text, URLs, or other data to generate a unique QR code.
- Save & Share QR Codes: Options to save generated QR codes to the device or share them via social media, messaging apps, etc.
- History & Storage: Keep track of previously generated QR codes with a saved history.
- User Authentication: Secure user access to saved codes and personal QR code history.

## Tech Stack
- Frontend:

  - React Native: Provides a native mobile experience for both Android and iOS users.
  - React Navigation: Enables smooth, multi-screen navigation.
  - Expo: For faster development and testing.

- Backend:

  - Django Rest Framework (DRF): Handles API requests, user authentication, and data storage.
  - Django ORM: Used for managing and querying the database.
  - Database: SQLite or PostgreSQL (depending on development or production environment).

## API Endpoints
- POST /api/generate: Generate a new QR code.
- GET /api/history: Retrieve user’s QR code history.
- POST /api/auth/login: User login.
- POST /api/auth/register: User registration.
## Future Enhancements
- Customizable QR Code Styles: Allow users to personalize QR code colors and shapes.
- Scan Functionality: Integrate a scanner feature to read other QR codes.
- Offline Access: Enable offline functionality to access saved QR codes without an internet connection.
