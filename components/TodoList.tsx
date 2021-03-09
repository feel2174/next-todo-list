import { FC, useCallback, useMemo, useState } from 'react';
import TodoListContainer from '../styles/TotoListContainer';
import { TodoType } from '../types/todo';
import TrashCanIcon from '../public/statics/trash_can.svg';
import CheckMarkIcon from '../public/statics/check_mark.svg';
import { checkTodoAPI, deleteTodoAPI } from '../lib/api/todo';

interface IProps {
  todos: TodoType[];
}

const TodoList: FC<IProps> = ({ todos }) => {
  const [localTodos, setLocalTodos] = useState(todos);

  const getTodocolorNums = useCallback(() => {
    let red = 0;
    let orange = 0;
    let yellow = 0;
    let green = 0;
    let blue = 0;
    let navy = 0;
    localTodos.forEach((todo) => {
      switch (todo.color) {
        case 'red':
          red += 1;
          break;
        case 'orange':
          orange += 1;
          break;
        case 'yellow':
          yellow += 1;
          break;
        case 'green':
          green += 1;
          break;
        case 'blue':
          blue += 1;
          break;
        case 'navy':
          navy += 1;
          break;
        default:
          break;
      }
    });
    return {
      red,
      orange,
      yellow,
      green,
      blue,
      navy,
    };
  }, [todos]);
  const todoColorNums: any = useMemo(getTodocolorNums, [todos]);
  const checkToDo = async (id: number) => {
    try {
      await checkTodoAPI(id);
      const newTodos = localTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, checked: !todo.checked };
        }
        return todo;
      });
      setLocalTodos(newTodos);
    } catch (e) {
      console.log(e);
    }
  };
  const deleteTodo = async (id: number) => {
    try {
      await deleteTodoAPI(id);
      const newTodos = localTodos.filter((todo) => todo.id !== id);
      setLocalTodos(newTodos);
      console.log('deleted');
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <TodoListContainer>
      <div className="todo-list-header">
        <p className="todo-list-last-todo">
          남은TODO<span>{localTodos.length}개</span>
        </p>
        <div className="todo-list-header-colors">
          {Object.keys(todoColorNums).map((color, index) => (
            <div className="todo-list-header-color-num" key={index}>
              <div className={`todo-list-header-round-color bg-${color}`} />
              <p>{todoColorNums[color]}개</p>
            </div>
          ))}
        </div>
      </div>
      <ul className="todo-list">
        {localTodos.map((todo) => (
          <li className="todo-item" key={todo.id}>
            <div className="todo-left-side">
              <div className={`todo-color-block bg-${todo.color}`} />
              <p
                className={`todo-text ${
                  todo.checked ? 'checked-todo-text' : ''
                }`}
              >
                {todo.text}
              </p>
            </div>
            <div className="todo-right-side">
              {todo.checked && (
              <>
                <TrashCanIcon
                  className="todo-trash-can"
                  onClick={() => {
                    deleteTodo(todo.id);
                  }}
                />
                <CheckMarkIcon
                  className="todo-check-mark"
                  onClick={() => {
                    checkToDo(todo.id);
                  }}
                />
              </>
              )}
              {!todo.checked && (
              // eslint-disable-next-line jsx-a11y/control-has-associated-label
              <button
                type="button"
                className="todo-button"
                onClick={() => {
                  checkTodoAPI(todo.id);
                }}
              />
              )}
            </div>
          </li>
        ))}
      </ul>
    </TodoListContainer>

  );
};
export default TodoList;
