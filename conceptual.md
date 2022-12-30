### Conceptual Exercise

Answer the following questions below:

- What is the purpose of the React Router?  
  - The purpose of the React Router is to manage browser URL in sync with rendered UI in a React application.  

- What is a single page application?  
  - A single page application is an application housed on a single HTML page served on a single API call. Content can be rendered immediately or dynamically via Javascript without additional requests to server. 

- What are some differences between client side and server side routing?  
  - Client-side routing requires a single browser request- all content, logic, assets used in application are served to browser on single, first request; server-side routing only serves the content associated with the requested URL and  requires new requests anytime new content is displayed. 
  - In client-side routing the content determnines the URL; in server-side, the URL determines the content.
  - Client-side routing can fetch and display dynamic data from external APIs without reloading or loading the page.


- What are two ways of handling redirects with React Router? When would you use each?  
  - Returning a ```<Redirect to=.../>/ <Navigate to=.../>``` component, which is best when the route should never have been accessed/ can't be accessed. 
  - ```useHistory``` / ```useNavigate``` hooks to push the redirected location into the history stack, which is best used when something happens or completes that triggers or any situation when you'd want the user to navigate back to the redirected-from page.

- What are two different ways to handle page-not-found user experiences using React Router? 
  - Including a path-less ```<Route />``` with a page-not-found component.
  - Including a ```<Redirect to=... />``` component in the Routes function.

- How do you grab URL parameters from within a component using React Router?  
  - ```useParams()``` hook. A component rendered from route ```/foods/:foodGroup/:foodName``` can get both params with ```{foodGroup, foodName} = useParams()```.

- What is context in React? When would you use it?  
  - Context is a way to store and share "global" data across components without prop drilling. You would use it when some data needs to be shared with many components like current authenticated user, a theme or language. 

- Describe some differences between class-based components and function components in React.  
  - Class based components extend the React Component class (which extends a plain old JavaScript class) and use built-in lifecycle methods to manage state and render the component. Props must be extracted within the constructor. Hooks cannot be used in class components. Functional components are just simple functions that return a JSX component, like a class render method, and use hooks to manage state and lifecycle. They can take destructored (or not) props as arguments and don't accept constructors. Context and useContext hook for global data sharing only available within functional components. 
  
  - Class components are considered stateful because they maintain state. Functional components are considered stateless because they don't maintain any state information (thought I'm not sure how that works because I think it's still being 'maintained' with hooks behind the scenes).

- What are some of the problems that hooks were designed to solve?  
  - Hooks solved the convoluted ways of sharing code across class-based components. Wrapper functions, mixins, higher order components and render props are hard to follow, hard to debug, lengthy and difficult to change and isolate for tests. Hooks eliminates the need to use any of these approaches to share code and/or minimize redundancy. 