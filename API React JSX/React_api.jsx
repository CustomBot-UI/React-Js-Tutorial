*Tutorial 78:*

### 1. `UserContext.jsx`

Sets up the context, defines the reducer function (`userReducer`), and configures the `UserProvider` component with `useReducer` to manage the user state and pass `dispatch` to consumers.

```jsx
import { createContext, useReducer } from "react";

export const UserContext = createContext();

function userReducer(state, action) {
  if (action.type === "login") {
    return action.payload;
  }
  if (action.type === "logout") {
    return action.payload; // returns the guest user
  }
  return state;
}

export function UserProvider({ children }) {
  const [user, dispatch] = useReducer(userReducer, "guest");

  return (
    <UserContext.Provider value={{ user, dispatch }}>
      {children}
    </UserContext.Provider>
  );
}
```

---

### 2. `Login.jsx`

Accesses the `dispatch` function via `useContext` and dispatches a `"login"` action type along with the user input payload when the form is submitted.

```jsx
import { useContext, useState } from "react";
import { UserContext } from "./UserContext";

export default function Login() {
  const [name, setName] = useState("");
  const { dispatch } = useContext(UserContext);

  function handleSubmit(e) {
    e.preventDefault();
    dispatch({
      type: "login",
      payload: name,
    });
    setName("");
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter username"
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
```

---

### 3. `Logout.jsx`

Accesses `dispatch` and triggers a `"logout"` action with a `"guest"` payload when the logout button is clicked.

```jsx
import { useContext } from "react";
import { UserContext } from "./UserContext";

export default function Logout() {
  const { dispatch } = useContext(UserContext);

  function handleLogout() {
    dispatch({
      type: "logout",
      payload: "guest",
    });
  }

  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}
```

*ReactJS Tutorial 79*

### 1. `UserContext.jsx` (Updated)

Refactored to initialize the state as an object and return new object states inside the `userReducer` function, spreading state properties into the provider value.

```jsx
import { createContext, useReducer } from "react";

export const UserContext = createContext();

function userReducer(state, action) {
  if (action.type === "login") {
    return { ...state, user: action.payload };
  }
  if (action.type === "logout") {
    return { ...state, user: "guest" };
  }
  return state;
}

export function UserProvider({ children }) {
  const [state, dispatch] = useReducer(userReducer, { user: null });

  return (
    <UserContext.Provider value={{ ...state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
}
```

---

### 2. `Login.jsx` & `Logout.jsx`

The consuming components (`Login.jsx` and `Logout.jsx`) remain largely the same as in the previous lesson because they still interact with `dispatch`; they now consume the structured state properties provided by the context.

*ReactJS Tutorial 80:*

### 1. `src/hooks/useDisplayMessage.js`

The final version of the custom hook uses the built-in `useState` hook and returns both a state value and a custom function inside an array.

```jsx
import { useState } from "react";

export default function useDisplayMessage() {
  const [message, setMessage] = useState("this is a message");

  function displayMessage() {
    console.log("this is a message from display message");
  }

  return [message, displayMessage];
}
```

---

### 2. `src/App.jsx`

The consuming component imports the custom hook, destructures both the state variable and the function, and renders them.

```jsx
import useDisplayMessage from "./hooks/useDisplayMessage";

function App() {
  const [message, displayMessage] = useDisplayMessage();

  displayMessage();

  return (
    <div>
      message is {message}
    </div>
  );
}

export default App;
```

*ReactJS Tutorial 81:*

### 1. `src/hooks/useLocalStorage.js`

The custom hook reads from and writes to the browser's `localStorage` using `useState`, so the state persists and stays in sync properly in React components.

```jsx
import { useState } from "react";

export default function useLocalStorage() {
  function setUser(value) {
    localStorage.setItem("user", value);
    setUserValue(value);
  }

  function getUser() {
    return localStorage.getItem("user");
  }

  const [user, setUserValue] = useState(getUser());

  return [user, setUser];
}
```

---

### 2. `src/Login.jsx`

A component that uses the custom `useLocalStorage` hook to update the stored username when the login button is clicked.

```jsx
import { useState } from "react";
import useLocalStorage from "./hooks/useLocalStorage";

export default function Login() {
  const [value, setValue] = useState("");
  const [user, setUser] = useLocalStorage();

  function handleClick() {
    setUser(value);
  }

  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Enter username"
      />
      <button onClick={handleClick}>Login</button>
    </div>
  );
}
```

---

### 3. `src/App.jsx`

The main application component renders the `Login` component.

```jsx
import Login from "./Login";

function App() {
  return (
    <div>
      <Login />
    </div>
  );
}

export default App;

```