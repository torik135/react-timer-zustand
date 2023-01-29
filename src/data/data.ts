export type projType = {
  title: string;
  project_id: number;
};

export type taskType = {
  title: string;
  project_id: number;
  task_id: number;
};

export const projList: projType[] = [
  { title: "proj 1", project_id: 1 },
  { title: "proj 2", project_id: 2 },
  { title: "proj 3", project_id: 3 },
];

export const taskList: taskType[] = [
  { title: "task 1", project_id: 1, task_id: 1 },
  { title: "task 2", project_id: 2, task_id: 2 },
  { title: "task 3", project_id: 3, task_id: 3 },
  { title: "task 4", project_id: 3, task_id: 4 },
  { title: "task 5", project_id: 1, task_id: 5 },
];
