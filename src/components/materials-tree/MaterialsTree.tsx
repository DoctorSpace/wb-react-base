import { tasksItem, type ITasksItem } from "../../constant/tasks-item.ts";
import { MaterialsItems } from "../materials-items/MaterialsItems.tsx";

import "./MaterialsTree.scss";

export const MaterialsTree = () => {
  return (
    <div className="materials-tree">
      {tasksItem.map((item: ITasksItem) => (
        <>
          <div className="materials-tree__topic" key={item.number}>
            <h3>{item.number}</h3>
            <h2>{item.title}</h2>
          </div>
          <MaterialsItems tasks={item.tasks} />
        </>
      ))}
    </div>
  );
};
