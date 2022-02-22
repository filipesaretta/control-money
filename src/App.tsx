import { createServer, Model } from "miragejs";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";

import "bootstrap/dist/css/bootstrap.min.css";

createServer({
  models: {
    transaction: Model,
  },

  routes() {
    this.namespace = "api";

    this.get("/transactions", () => this.schema.all("transaction"));

    this.post("/transactions", (schema, req) => {
      const data = JSON.parse(req.requestBody);

      return schema.create("transaction", data);
    });
  },
});

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
