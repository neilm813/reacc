import App from "./App.js";

const root = document.getElementById("root");
const { app, components } = App();

/* 
I initially tried to automatically render the child component's from the parent
during construction, but that was happening before the child's initial state
was set up, which was a problem.

This ensures the child's initial state will be set up before the first render
and gives the parent access to the child's DOM reference
*/
components.forEach((c) => c.baseRender());
root.appendChild(app);
