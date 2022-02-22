import { useState, useCallback, useEffect } from "react";
import { loadingStore } from "../../stores/loadingStore";
import { userStore } from "../../stores/userStore";
import { useNavigate } from "react-router-dom";

import "./login.css";

export default function Login() {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState<string>();
  let navigate = useNavigate();
  const user = userStore((state: any) => state.user);

  //on input change
  const onInputChange = useCallback(
    (value: string, type: string) => {
      const inner: any = { ...credentials };
      inner[type] = value;
      setCredentials(inner);
    },
    [credentials, setCredentials]
  );

  //On submit
  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      setError("");
      if (credentials.username !== "admin" || credentials.password !== "admin")
        setError("Username o password errati!");
      else {
        loadingStore.setState((state) => {
          state.isVisible = true;
        });
        //Fake api call (TODO implement a real one)
        setTimeout(() => {
          loadingStore.setState((state) => {
            state.isVisible = false;
          });
          userStore.setState((state: any) => {
            state.user = {
              name: "Admin",
              isLogged: true,
            };
          });
        }, 2000);
      }
    },
    [credentials, setError]
  );

  useEffect(() => {
    if (user && user.isLogged) navigate("/");
  }, [user]);

  return (
    <div className="d-flex align-items-center vh-100 p-2" id="login">
      <form
        className="mx-auto bg-white p-4 rounded animate__animated animate__fadeInDown"
        onSubmit={(e) => onSubmit(e)}
      >
        <h1>Login</h1>
        <label>*Username</label>
        <input
          type="text"
          className="w-100"
          value={credentials.username}
          onChange={(e) => onInputChange(e.target.value, "username")}
          required
          minLength={3}
          maxLength={20}
        />
        <label className="mt-2">*Password</label>
        <input
          type="password"
          className="w-100"
          value={credentials.password}
          onChange={(e) => onInputChange(e.target.value, "password")}
          required
          minLength={3}
          maxLength={20}
        />
        <div className="d-flex justify-content-end my-3">
          <input
            type="submit"
            value="Login"
            className="btn btn-light border border-secondary"
          />
        </div>

        {error && (
          <div className="text-danger animate__animated animate__shakeX">
            {error}
          </div>
        )}
      </form>
    </div>
  );
}
