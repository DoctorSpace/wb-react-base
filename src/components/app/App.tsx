import { MaterialsTree } from "../materials-tree/MaterialsTree";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <h1>
        React.База{" "}
        <a
          href="https://tech.wildberries.ru/cabinet/courses/react-base"
          target="_blank"
        >
          ссылка на курс
        </a>
      </h1>

      <MaterialsTree />
    </div>
  );
}

export default App;
