# Pandary Front

## Project Description
Pandary is designed to help users manage their personal library, accessible at any time, even from their mobile phones. It allows users to track their reading progress with defined statuses. Users can create TBR lists, follow their improvement with a visual progress bar, providing extra motivation to complete their reading. At any moment they can sort, filter, and look through their reading history. The app also includes a star’s based rating system. All that to allow them to manage their book collection more efficiently, like deciding which long-unfinished book to complete. Furthermore, the application is designed with a cute pandas theme that everyone will love.

Administrators have a dedicated panel (CMS) where they can manage the available book entries, ensuring the book database remains up-to-date with the latest releases. They can add new books, edit existing ones, or remove entries when needed. Additionally, administrators have access to user management features, allowing them to oversee user accounts and ensure smooth functioning across the platform.

The frontend is built with Angular, ensuring a modern and responsive design. Data is displayed dynamically based on backend API calls, ensuring that the information presented is always up-to-date. The clean design and user-friendly layout make it easy for book enthusiasts to organize their library and monitor their reading journey.

Link to the corresponding [backend repository](https://github.com/sylwiakubicz/books-tracker-app).

## Page overview

## Technologies used
- Angular (Router, Services, HttpClient, Lifecycle Hooks)
- Angular Directives (NgClass, NgFor, Ngx-Pagination)
- RxJS
- Auth Interceptor
- Tailwind CSS, FontAwesome
- TypeScript
- DOM Manipulation (Mouse Events, Drag-and-Drop)
- Vercel

## What I've learned
During this project, I gained experience with various frontend technologies and frameworks, improving my skills in UI development, state management, and user interaction, such as:

- Developed a structured frontend application using **Angular**, including routing, services, HTTP requests, and lifecycle hooks.
- Worked with **Angular Directives** like NgClass, NgFor, and Ngx-Pagination for dynamic styling, iteration, and pagination.
- Used **Angular Decorators** such as ViewChild and ViewChildren to manage DOM elements and components.
- Leveraged **RxJS** for handling asynchronous data streams, particularly with Observable, map, and pipe.
- Implemented an **HTTP Interceptor** for secure authentication by attaching credentials to all outgoing HTTP requests.
- Styled the application using **Tailwind CSS** and enhanced the UI with icons from **FontAwesome**.
- Ensured **responsiveness** and a mobile-friendly interface.
- Managed user interaction through **DOM manipulation**, handling mouse events and implementing drag-and-drop functionality for a carousel component.
- Deployed the frontend application to **Vercel**, ensuring fast and reliable hosting with automatic deployment from the repository.

## How to Run the Application and Load Test Data

### Method 1: Easiest way to test the application
If you want to test the Angular application without cloning the repository or setting it up locally, the easiest way is to use a provided link to an online hosted version of the app.

1. [Click the link](https://pandary.vercel.app/) shared by the project maintainers.
2. The application will open in your browser, and you can test it without any additional steps.

> **NOTE:**  
> This method works only if the application is hosted online and the link is provided by the developers.

### Method 2: Testing the application locally using GitHub
To test the Angular application on your local machine using the GitHub repository, follow these steps:

1. **Clone the repository from GitHub**

    ```bash
    git clone https://github.com/sylwiakubicz/books-tracker-front.git
    ```

2. **Navigate to the project directory**

    ```bash
    cd books-tracker-front
    ```

3. **Install dependencies**

    ```bash
    npm install
    ```

4. **Start the development server**

    ```bash
    ng serve
    ```

    > If you don't have Angular CLI installed globally, you can use:

    ```bash
    npx ng serve
    ```

5. **Open the application in your browser**
   
   Once the server is running, the application will be available at [http://localhost:4200](http://localhost:4200). Open this address in your browser to test the app locally.

## Author
Sylwia Kubicz
