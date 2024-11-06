import CreateToDo from "./CreateToDo";
import { useRecoilState, useRecoilValue } from "recoil";
import { categoriesState, categoryState, toDoSelector } from "./atoms";
import React from "react";
import ToDo from "./ToDo";
import CreateCategory from "./CreateCategory";

function ToDoList() {
  const toDos = useRecoilValue(toDoSelector);
  const categories = useRecoilValue(categoriesState);
  const [category, setCategory] = useRecoilState(categoryState);
  const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
    setCategory(event.currentTarget.value);
  };
  return (
    <div>
      <h1>To Dos</h1>
      <hr />
      <h2>CreateCategory</h2>
      <CreateCategory />
      {categories.length > 0 && (
        <>
          <hr />
          <h2>Categories</h2>
          <select onInput={onInput} value={category}>
            {categories?.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>

          <hr />
          <h2>CreateToDo</h2>
          <CreateToDo />

          {toDos && (
            <>
              <hr />
              <h2>ToDos</h2>
              {toDos?.map((aTodo) => <ToDo key={aTodo.id} {...aTodo} />)}
            </>
          )}
        </>
      )}
    </div>
  );
}

export default ToDoList;
