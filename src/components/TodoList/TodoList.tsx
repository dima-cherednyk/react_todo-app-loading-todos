import classNames from 'classnames';
import React from 'react';
import { Todo } from '../../types/Todo';

type Props = {
  todos: Todo[];
  filterOption: boolean | null;
};

export const TodoList: React.FC<Props> = (
  {
    todos,
    filterOption,
  },
) => {
  let visibleTodos = [...todos];

  if (filterOption !== null) {
    visibleTodos = todos.filter(todo => todo.completed === filterOption);
  }

  return (
    <section className="todoapp__main" data-cy="TodoList">
      {visibleTodos.map(todo => (
        <div
          data-cy="Todo"
          className={classNames(
            'todo', {
              completed: todo.completed,
            },
          )}
          key={todo.id}
        >
          <label className="todo__status-label">
            <input
              data-cy="TodoStatus"
              type="checkbox"
              className="todo__status"
            />
          </label>

          <span
            data-cy="TodoTitle"
            className="todo__title"
          >
            {todo.title}
          </span>

          <button
            type="button"
            className="todo__remove"
            data-cy="TodoDeleteButton"
          >
            ×
          </button>

          <div
            data-cy="TodoLoader"
            className="modal overlay"
          >
            <div className="modal-background has-background-white-ter" />
            <div className="loader" />
          </div>
        </div>
      ))}
    </section>
  );
};
