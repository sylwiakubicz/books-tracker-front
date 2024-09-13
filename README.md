<h1>Pandary Front</h1>

<h2>Project Description</h2>
Pandary is designed to help users manage their personal library, accessible at any time, even from their mobile phones. It allows users to track their reading progress with defined statuses. Users can create a TBR lists, follow their improvement with a visual progress bar, providing extra motivation to complete their reading. At any moment they can sort, filter and look through their reading history. The app also includes a star’s based rating system. All that to allow them manage their book collection more efficiently, like deciding which long-unfinished book to complete. Furthermore, the application is designed with a cute, pandas theme that everyone will love.
<br>
<br>
Administrators have a dedicated panel (CMS) where they can manage the available book entries, ensuring the book database remains up-to-date with the latest releases. They can add new books, edit existing ones, or remove entries when needed. Additionally, administrators have access to user management features, allowing them to oversee user accounts and ensure smooth functioning across the platform.
<br>
<br>
The frontend is built with Angular, ensuring a modern and responsive design. Data is displayed dynamically based on backend API calls, ensuring that the information presented is always up-to-date. The clean design and user-friendly layout make it easy for book enthusiasts to organize their library and monitor their reading journey.
<br>
<br>
Link to the corresponding <a href="https://github.com/sylwiakubicz/books-tracker-app">backend repository.</a>
<br>

  
<h2>Page overview</h2>


<h2>Technologies used</h2>
<ul>
  <li>Angular (Router, Services, HttpClient, Lifecycle Hooks)</li>
  <li>Angular Directives (NgClass, NgFor, Ngx-Pagination)</li>
  <li>RxJS</li>
  <li>Auth Interceptor</li>
  <li>Tailwind CSS, FontAwesome</li>
  <li>TypeScript</li>
  <li>DOM Manipulation (Mouse Events, Drag-and-Drop)</li>
  <li>Vercel</li>
</ul>


<h2>What I've learned</h2>
During this project, I gained experience with various frontend technologies and frameworks, improving my skills in UI development, state management, and user interaction, such as:
<ul>
  <li>Developed a structured frontend application using <strong>Angular</strong>, including routing, services, HTTP requests, and lifecycle hooks.</li>
  <li>Worked with <strong>Angular Directives</strong> like NgClass, NgFor, and Ngx-Pagination for dynamic styling, iteration, and pagination.</li>
  <li>Used <strong>Angular Decorators</strong> such as ViewChild and ViewChildren to manage DOM elements and components.</li>
  <li>Leveraged <strong>RxJS</strong> for handling asynchronous data streams, particularly with Observable, map, and pipe.</li>
  <li>Implemented an <strong>HTTP Interceptor</strong> for secure authentication by attaching credentials to all outgoing HTTP requests.</li>
  <li>Styled the application using <strong>Tailwind CSS</strong> and enhanced the UI with icons from <strong>FontAwesome</strong>.</li>
  <li>Ensured <strong>responsiveness</strong> and a mobile-friendly interface.</li>
  <li>Managed user interaction through <strong>DOM manipulation</strong>, handling mouse events and implementing drag-and-drop functionality for a carousel component.</li>
  <li>Deployed the frontend application to <strong>Vercel</strong>, ensuring fast and reliable hosting with automatic deployment from the repository.</li>
</ul>


<h2>How to Run the Application and Load Test Data</h2>
  <h3>Method 1: Easiest way to test the application</h3>
  <p>If you want to test the Angular application without cloning the repository or setting it up locally, the easiest way is to use a provided link to an online hosted version of the app.</p>
  <ol>
    <li><a href="https://pandary.vercel.app/">Click the link</a> shared by the project maintainers.</li>
    <li>The application will open in your browser, and you can test it without any additional steps.</li>
  </ol>
  
  > [!NOTE]  
  > This method works only if the application is hosted online and the link is provided by the developers.

<h2>Method 2: Testing the application locally using GitHub</h2>
<p>To test the Angular application on your local machine using the GitHub repository, follow these steps:</p>
<ol>
  <li>
    <h4>Clone the repository from GitHub</h4>
    
``` 
git clone https://github.com/sylwiakubicz/books-tracker-front.git
```
    
  </li>
  <li>
    <h4>Navigate to the project directory</h4>

``` 
cd books-tracker-front
```
    
  </li>
  <li>
  <h4>Install dependencies</h4>

``` 
npm install
```
    
  </li>
  <li>
  <h4>Start the development server</h4>

``` 
ng serve
```
> If you don't have Angular CLI installed globally, you can use:
```
npx ng serve
```

  </li>
  <li>
    <h4>Open the application in your browser</h4>
   <p>Once the server is running, the application will be available at <a href="http://localhost:4200">http://localhost:4200</a>. Open this address in your browser to test the app locally.</p>
  </li>
</ol>


<h2>Author</h2>
<p>Sylwia Kubicz</p>
