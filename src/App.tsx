import { createServer, Model } from "miragejs";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
