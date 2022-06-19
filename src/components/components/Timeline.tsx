type TimelineProps = {
  items: ItemProps[];
  className?: string;
};
export const Timeline = ({ items, ...props }: TimelineProps) => {
  let className = "relative border-l border-gray-200 dark:border-gray-700";
  className += props.className ? ` ${props.className}` : "";
  return (
    <ol className={className}>
      {items.map((item, index) => (
        <Item key={index} {...item} />
      ))}
    </ol>
  );
};

type ItemProps = {
  label: string;
  header: string;
  children?: React.ReactNode;
};
export const Item = ({ label, header, children }: ItemProps) => {
  return (
    <li className="mb-5 ml-4">
      <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
      <time className="mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
        {label}
      </time>
      <h3 className="text-lg font-semibold">{header}</h3>
      {children}
    </li>
  );
};
