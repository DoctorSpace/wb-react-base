import { type ITask } from "../../constant/tasks-item.ts";
import githubLogo from "../../assets/icons/github.svg";

import "./MaterialsItems.scss";

interface IProps {
  exam: ITask[] | [];
  tasks: ITask[] | [];
}

export const MaterialsItems = ({ tasks, exam }: IProps) => {
  return (
    <div className="materials-items">
      <div className="materials-items__wrapper">
        {tasks.length > 0 &&
          tasks.map((task: ITask) => (
            <div className="materials-items__task" key={task.number}>
              {task.title}
              <div className="materials-items__task-buttons">
                {task.url_demo && (
                  <button onClick={() => window.open(task.url_demo)}>
                    посмотреть
                  </button>
                )}

                <img
                  src={githubLogo}
                  alt="GitHub"
                  onClick={() => window.open(task.url)}
                />
              </div>
            </div>
          ))}
      </div>

      <div className="materials-items__wrapper">
        {exam.length > 0 &&
          exam.map((exam: ITask) => (
            <div className="materials-items__exam" key={exam.number}>
              {exam.title}
              <div className="materials-items__exam-buttons">
                {exam.url_demo && (
                  <button onClick={() => window.open(exam.url_demo)}>
                    посмотреть
                  </button>
                )}

                <img
                  src={githubLogo}
                  alt="GitHub"
                  onClick={() => window.open(exam.url)}
                />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};
