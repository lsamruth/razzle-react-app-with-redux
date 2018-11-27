export const GET_TODOS = "GET_TODOS";

const TODOS = [
  { id: 1, task: "code", status: "OPEN" },
  { id: 2, task: "eat", status: "OPEN" },
  { id: 3, task: "sleep", status: "OPEN" }
];

export const getTodos = () => {
  return {
    type: GET_TODOS,
    payload: TODOS
  };
};