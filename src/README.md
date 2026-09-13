1. What is JSX, and why is it used in React?JSX is a syntax that lets us write HTML-like code inside JavaScript. It is used in React because it makes the code much easier to read and write. Without JSX, creating UI with only plain JavaScript would be more complicated and harder to maintain.

2. What is the difference between props and state?
Props are data that a parent component passes down to a child component. Props are read-only and cannot be changed by the child.

State is data that belongs to a component itself. We can update it using the useState hook, and when the state changes, the component re-renders.

3. What does the useState hook do, and where did you use it in this project?
The useState hook allows a component to store and update its own data.

In this project, I used it to store the list of technologies, the selected stack, the loading state, and also for the active link and mobile menu state in the Navbar.

4. What does the useEffect hook do, and why did you need it to load the JSON data?
useEffect is used to run some code after the component has rendered.
I needed it to fetch the technology data from the JSON file when the page first loads, so the data is available as soon as the component mounts.

5. Why does every item in a .map() list need a unique key prop?
When we use .map() to render a list, React needs a unique key for each item. This helps React identify which items have changed, been added, or removed. Without a proper key, React may update the wrong elements or cause unnecessary re-renders.

6. What is conditional rendering? Show one place you used it.
Conditional rendering means showing different UI based on a certain condition.

In this project, I used it in several places:

When the stack is empty, it shows “Your stack is empty”
While the data is loading, it shows a loading spinner
When a technology is already added, the button text changes to “✓ Added to Stack” and becomes disabled

7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
Data is passed from parent to child using props.

To send something back from child to parent, the parent passes a function as a prop, and the child calls that function when needed.
For example, in this project, App.tsx passes tech, isAdded, and onAdd to the TechnologyCard component. When the user clicks the “Add to Stack” button, the child calls the onAdd function, and the parent updates the stack.

