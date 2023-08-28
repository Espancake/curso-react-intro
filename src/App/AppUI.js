import { TodoCounter } from '../TodoCounter/TodoCounter';
import { TodoSearch } from '../TodoSearch/TodoSearch';
import { TodoList } from '../TodoList/TodoList';
import { TodoItem } from '../TodoItems/TodoItem';
import { TodosLoading } from '../TodosLoading/TodosLoading';
import { TodosError } from '../TodosError/TodosError';
import { EmptyTodos } from '../EmptyTodos/EmptyTodos'
import { CreateTodoButton } from '../CreateTodoButton/CreateTodoButton';
import { TodoContext } from '../TodoContext/TodoContext';


function AppUI() {
  return (
    <>
      <TodoCounter/>
      <TodoSearch/>
      <TodoContext.Consumer>
          {({
                        loading,
                        error,
                        searchedTodos,
                        completeTodo,
                        deleteTodo,
          })=>(
                    <TodoList>
                    {loading && (
                      <>
                        <TodosLoading />
                        <TodosLoading />
                        <TodosLoading />
                      </>
                    )}
                    {error && <TodosError/>}
                    {(!loading && searchedTodos.length === 0) && <EmptyTodos />}
          
                    {searchedTodos.map(todo => (
                      <TodoItem
                        key={todo.text}
                        text={todo.text}
                        completed={todo.completed}
                        onComplete={() => completeTodo(todo.text)}
                        onDelete={() => deleteTodo(todo.text)}
                      />
                    ))}
                  </TodoList>
          )}
      </TodoContext.Consumer>
      
      <CreateTodoButton />
    </>
  );
}

export { AppUI };