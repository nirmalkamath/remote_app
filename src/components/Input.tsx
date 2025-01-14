import { FC, ChangeEvent, FormEvent } from 'react';

interface InputProps {
  value: any;
  onChange: (value: any) => void;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
}

const Input: FC<InputProps> = ({ value, onChange, onSubmit }) => {
  return (
    <form
      onSubmit={(e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSubmit(e);
      }}
    >
      <div className="flex-row">
        <input
          type="text"
          value={value}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            onChange(e.target.value)
          }
        />
        <button type="submit">Add</button>
      </div>
    </form>
  );
};

export default Input;
