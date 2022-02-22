import { useState, useCallback } from "react";
import { loadingStore } from "../../stores/loadingStore";
import "./login.css";

export default function Login() {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState<string>();

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
      }
    },
    [credentials, setError]
  );

  return (
    <div className="d-flex align-items-center vh-100 p-2" id="login">
      <form
        className="mx-auto bg-white p-4 rounded"
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
