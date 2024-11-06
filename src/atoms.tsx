import { atom, selector } from "recoil";

export interface ITodo {
  text: string;
  id: number;
  category: string;
}

export const toDoState = atom<ITodo[]>({
  key: "toDo",
  default: [],
  effects_UNSTABLE: [
    ({ setSelf, onSet }) => {
      const savedData = sessionStorage.getItem("toDo");
      // setSelf: atom 값을 설정 혹은 재설정
      if (savedData) setSelf(JSON.parse(savedData));

      // atom이 변화가 감지될 때 작동, Storage에 데이터 저장
      // setSelf에 의해서는 작동하지 않음
      onSet((newValue) => {
        sessionStorage.setItem("toDo", JSON.stringify(newValue));
      });
    },
  ],
});

export const categoriesState = atom<string[]>({
  key: "categories",
  default: [],
  effects_UNSTABLE: [
    ({ setSelf, onSet }) => {
      const savedData = sessionStorage.getItem("categories");
      // setSelf: atom 값을 설정 혹은 재설정
      if (savedData) setSelf(JSON.parse(savedData));

      // atom이 변화가 감지될 때 작동, Storage에 데이터 저장
      // setSelf에 의해서는 작동하지 않음
      onSet((newValue) => {
        sessionStorage.setItem("categories", JSON.stringify(newValue));
      });
    },
  ],
});

export const categoryState = atom<string>({
  key: "category",
  default: "",
  effects_UNSTABLE: [
    ({ setSelf, onSet }) => {
      const savedData = sessionStorage.getItem("category");
      // setSelf: atom 값을 설정 혹은 재설정
      if (savedData) setSelf(JSON.parse(savedData));

      // atom이 변화가 감지될 때 작동, Storage에 데이터 저장
      // setSelf에 의해서는 작동하지 않음
      onSet((newValue) => {
        sessionStorage.setItem("category", JSON.stringify(newValue));
      });
    },
  ],
});

export const toDoSelector = selector({
  key: "toDoSelector",
  get: ({ get }) => {
    const toDos = get(toDoState);
    const category = get(categoryState);
    return toDos.filter((toDo) => toDo.category === category);
  },
});
