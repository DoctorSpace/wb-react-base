export interface ITasksItem {
  number: number;
  title: string;
  tasks: ITask[];
}

export interface ITask {
  number: number;
  title: string;
  url: string;
}

export const tasksItem: ITasksItem[] = [
  {
    number: 1,
    title: "Знакомство с TypeScript",
    tasks: [
      {
        number: 1,
        title: "Задание № 1",
        url: "https://github.com/DoctorSpace/wb-react-base/tree/main/src/tasks/task-1",
      },
      {
        number: 2,
        title: "Задание № 2",
        url: "https://github.com/DoctorSpace/wb-react-base/tree/main/src/tasks/task-2",
      },
      {
        number: 3,
        title: "Задание № 3",
        url: "https://github.com/DoctorSpace/wb-react-base/tree/main/src/tasks/task-3",
      },
    ],
  },
];
