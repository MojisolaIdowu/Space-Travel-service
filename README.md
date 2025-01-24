## Space Travel Service
Hello everyone, This is a GOV.UK-styled service designed by Mojisola Idowu.

## About
It is a digital service to apply for space travel to the Moon or Mars. Users can select their destination, enter their name and address, and review/submit their booking

## Live Demo (Deployment)
This service is deployed on Render.com. New deployments are triggered automatically when pushing to main branch.

- Render Link : https://space-travel-service-nad3.onrender.com
- Password : Pass

## User Flow
Here is the user flow for the "Space Travel Service" service on GOV.UK
- 1. Landing Page: Welcome to the service.
- 2. Start Page: Informational page about the space travel service.
- 3. Destination Choice: User selects destination - Moon or Mars.
- 4. Details (Name): User enters their full name.
- 5. Address: User enters their Earth address.
- 6. Confirmation: User reviews and confirms their details.
- 7. Submission: User submits the form.

## Paths
- 1. [Index Page](app/views/index.html)
- 2. [Start Page](app/views/start-page.html)
- 3. [Destination Page](app/views/destination-page.html)
- 4. [Details Page](app/views/details-page.html)
- 5. [Address Page](app/views/address-page.html)
- 6. [Confirmation Page](app/views/confirmation-page.html)
- 7. [Summary Page](app/views/summary-page.html)

##  Feature Images (Screenshots) 
This directory contains screenshots of each key page in the user journey. The images serve as visual documentation of the prototype's interface and user flow. Check it out!

[Features](app/views/layouts/FeaturesFile.md)

## The Structure of the Git Repo consists of: 

### Main Branch (main)
- This is the Base prototype functionality
- Include the core form components
- Basic routing setup
- GDS Design System integration
- Basic form templates (HTML&CSS)

### Feature Branch (feature/validation)
- I Added form validation for address and details pages 
- Implemented client-side error handling (shows if there are any errors)
- Added GDS error summary and field-level errors
- Enhanced user experience with inline validation

### Feature Name Branch
- Added user elements like Name and Destination name to the confirmation page to improve the user experience.

## Features Documentation (Implementation guide)

#### Git Branching Strategy
Main branch served as stable production code, while feature branches enabled me a safe development and testing of form validation and user experience improvements before integration.

#### Local Storage Implementation (passing): 
I Implemented it to:
- Prevent data loss during navigation
- Enable multi-step form completion
- Improve user experience by saving progress
- Allow session recovery after browser refresh 

(WHY?: I implemented localStorage instead of query parameters or hidden form fields for this multi-step form as it provides better data persistence and security. Unlike query parameters which can expose data in URLs and hidden fields that are lost on refresh. I also saw this as crucial thing for government service forms where users may need to complete sections across multiple sessions.)

#### Form Validation
I Added it for:
- Data quality assurance
- Immediate user feedback
- Accessibility compliance
- Error prevention before submission

#### Personalized Confirmation Message
I Added user's name and destination to confirmation page to:
- Create a personalized user experience
- Build trust through acknowledgment
- Follow GOV.UK design patterns for service completion pages

## The application uses 
- GDS design patterns
- Clear headings and typography
- Multi-step form validation (3 step flow)
- GOV.UK-style buttons
- Form validation
- Check your answers pattern
- Accessibility considerations
- WCAG 2.1 compliance
- Clear user journeys
- Consistent page layouts

