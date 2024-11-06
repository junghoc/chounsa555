import { useForm } from "react-hook-form";
import { useRecoilState, useSetRecoilState } from "recoil";
import { categoriesState, categoryState } from "./atoms";

interface IForm {
  category: string;
}

function CreateCategory() {
  const [categories, setCategories] = useRecoilState(categoriesState);
  const setCategory = useSetRecoilState(categoryState);
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const onSubmit = ({ category }: IForm) => {
    if (categories.length === 0) setCategory(category);
    setCategories((oldCategories) => {
      //if (oldCategories.length === 0) setCategory(category);
      if (oldCategories.includes(category)) {
        // Same category in list
        return oldCategories;
      } else {
        // No Same category in list
        return [...oldCategories, category];
      }
    });

    setValue("category", "");
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register("category", {
          required: "Please write a Category",
        })}
      />
    </form>
  );
}

export default CreateCategory;
