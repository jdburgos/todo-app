/** React core **/
import React, { useEffect, useState } from 'react';

/** Styles **/
import styles from './Todo.module.scss';

/** Services **/
import TodoDataService from '../../services/todo.service';

/** Types **/
import { TodoType } from '../../types/todo.type';

type TodoProps = {
  todo: TodoType;
};

const Todo: React.FC<TodoProps> = ({ todo }) => {
  const [check, setCheck] = useState(false);

  useEffect(() => {
    setCheck(!todo.active);
  }, [todo.active]);

  const toggleTodoHandler = () => {
    setCheck(prevState => {
      const updateData = async () => {
        await TodoDataService.update(todo.id, { active: !todo.active });
      };

      updateData();

      return !prevState;
    });
  };

  const deleteTodoHandler = () => {
    TodoDataService.delete(todo.id);
  };

  const isChecked = check || !todo.active;
  const checkedClass = isChecked ? styles['todo--checked'] : '';
  const classes = `${styles.todo} ${checkedClass}`.trim();

  return (
    <div className={classes}>
      <div className={styles.todo__check} onClick={toggleTodoHandler}>
        {isChecked && <img src={`${process.env.PUBLIC_URL}/images/icon-check.svg`} alt="check" />}
      </div>
      <h3 className={styles.todo__title}>{todo.title}</h3>
      <img
        className={styles.todo__cross}
        src={`${process.env.PUBLIC_URL}/images/icon-cross.svg`}
        alt="cross"
        onClick={deleteTodoHandler}
      />
    </div>
  );
};

export default Todo;
