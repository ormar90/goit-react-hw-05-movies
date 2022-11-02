import { useForm } from "react-hook-form";

const SearchBox = ({onSubmit}) => {
  const {
    register,
    handleSubmit,
    reset
  } = useForm({
    defaultValues: {
      movie: '',
    }
  });
  

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit, reset)}>
        <input {...register('movie')} />
        <button type="submit" onClick={reset}>Search</button>
      </form>
      
    </>
  );
};

export default SearchBox;