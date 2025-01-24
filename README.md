## Space Travel Service
Hello everyone, This is a GOV.UK-styled service designed by Mojisola Idowu.

## About
It is a digital service to apply for space travel to the Moon or Mars. Users can select their destination, enter their name and address, and review/submit their booking

## User Flow
Here is the user flow for the "Space Travel Service" service on GOV.UK
- 1. Landing Page: Welcome to the service.
- 2. Start Page: Informational page about the space travel service.
- 3. Destination Choice: User selects destination - Moon or Mars.
- 4. Name: User enters their full name.
- 5. Address: User enters their Earth address.
- 6. Confirmation: User reviews and confirms their details.
- 7. Submission: User submits the form.

## Paths
-[Index Page](app/views/index.html)
-[Start Page](app/views/start-page.html)
-[Destination Page](app/views/destination-page.html)
-gg
-

## The Structure of the Git Repo consists of: 

### Main Branch (main)
- This is the Base prototype functionality
- Include the core form components
- Basic routing setup
- GDS Design System integration
- Basic form templates (HTML&CSS)

### Feature Branch (feature/validation)
- I Added form validation for address and details pages 
- Implemented client-side error handling
- Added GDS error summary and field-level errors
- Enhanced user experience with inline validation

### Feature Name Branch
- Added user elements like Name and Destination name to the confirmation page to improve the user experience.

## The application uses 
- GDS design patterns
- Clear headings and typography
- GOV.UK-style buttons
- Form validation
- Check your answers pattern
- Responsive design using Tailwind CSS

## Deployment
This service is deployed on Render.com. New deployments are triggered automatically when pushing to main branch.