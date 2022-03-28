import http from "./BaseService";

export const todoList = () => http.get("/todos")

export const todoDetail = (id) => http.get(`/todos/${id}`)

export const createTodo = (body) => http.post("/todo", body)