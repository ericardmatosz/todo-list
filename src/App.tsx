import { Header } from "./components/Header";
import { NewTask } from "./components/NewTask";

import "./App.scss";
import "./styles/colors.scss";
import "./styles/global.scss";

function App() {
  return (
    <div>
      <Header />
      <NewTask />
    </div>
  );
}

export default App;
