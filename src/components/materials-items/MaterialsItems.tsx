import { type ITask } from "../../constant/tasks-item.ts";
import githubLogo from "../../assets/icons/github.svg";

import "./MaterialsItems.scss";

interface IProps {
  tasks: ITask[];
}

export const MaterialsItems = ({ tasks }: IProps) => {
  return (
    <div className="materials-items">
      {tasks.map((task: ITask) => (
        <div className="materials-items__task" key={task.number}>
          {task.title}
          <div className="materials-items__task-buttons">
            {/* <button onClick={() => {}}>запустить</button> */}
            <img
              src={githubLogo}
              alt="GitHub"
              onClick={() => window.open(task.url)}
            />
          </div>
        </div>
      ))}
    </div>
  );
};
