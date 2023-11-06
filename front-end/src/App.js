import { BrowserRouter as Router } from "react-router-dom";
import AppRouting from "./routes/AppRouting";

const App = () => {
  return (
    <Router>
      <AppRouting />
    </Router>
  );
};

export default App;
