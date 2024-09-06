interface Props {
  type?: string;
  id?: string;
  placeholder: string;
}

export const Input = ({ type = "text", id, placeholder }: Props) => {
  return (
    <input
      type={type}
      name=""
      id={id}
      placeholder={placeholder}
      className={`focus-visible:outline-none bg-transparent border-[1px] border-gray px-4 py-2`}
    />
  );
};
