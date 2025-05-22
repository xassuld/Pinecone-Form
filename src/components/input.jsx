export const Input = (props) => {
  return (
    <div className="flex flex-col gap-2 items-start">
      <p>{props.text} *</p>
      <input type="text" placeholder={props.placeholder} />
    </div>
  );
};
