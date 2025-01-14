import { FC } from 'react';

interface ListProps {
  items: string[]; // Assuming the list contains strings; adjust the type as needed.
}

const List: FC<ListProps> = ({ items }) => {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

export default List;
