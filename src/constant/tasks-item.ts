export interface ITasksItem {
  number: number;
  title: string;
  exam: ITask[] | [];
  tasks: ITask[] | [];
}

export interface ITask {
  number: number;
  title: string;
  url: string;
  url_demo?: string;
}

export const tasksItem: ITasksItem[] = [
  {
    number: 1,
    title: "Знакомство с TypeScript",
    exam: [
      {
        number: 1,
        title: "Экзамен № 1 - Менеджер задач",
        url: "https://github.com/DoctorSpace/task-manager/",
        url_demo: "https://doctorspace.github.io/task-manager/",
      },
    ],
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
      {
        number: 4,
        title: "Задание № 4",
        url: "https://github.com/DoctorSpace/wb-react-base/tree/main/src/tasks/task-4",
      },
    ],
  },
  {
    number: 2,
    title: "React. Краткий обзор библиотеки",
    exam: [],
    tasks: [
      {
        number: 5,
        title: "Задание № 5",
        url: "https://github.com/DoctorSpace/wb-react-base/tree/main/src/tasks/task-5",
      }
    ],
  },
];
