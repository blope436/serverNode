import { Router } from 'express'

import { StatusCodes } from 'http-status-codes'

import { getTodos, getTodo, addTodo, updateTodo } from '../../utils/todo'

const router = Router()

router.get('/', (req, res) => 
{
  const todos = getTodos(req.query.completed)
  res.send(todos)
})

router.get('/:id', (req, res, next) => 
{
  const todo = getTodo(req.params.id)
  if (todo) {
    res.send(todo)
  } 
  
  
  else 
  {
    res.status(StatusCodes.NOT_FOUND)
    next(new Error(`Not Found To do with ID: ${req.params.id}`))
  }
})

router.post('/', (req, res, next) => 
{
  const todo = req.body
  const response = addTodo(todo)

  if (response.error) 
  {
    res.status(StatusCodes.BAD_REQUEST)
    next(response.error)
  } 
  
  else 
  {
    res.status(StatusCodes.CREATED)
    res.send(response.newTodo)
  }
})

router.put('/:id', (req, res, next) => 
{
  const todo = req.body
  const response = updateTodo(req.params.id, todo)

  if (response.error) {
    res.status(StatusCodes.BAD_REQUEST)
    next(response.error)
  } 
  
  else {
    res.status(StatusCodes.OK)
    res.send(response.updatedTodo)
  }
})

export default router