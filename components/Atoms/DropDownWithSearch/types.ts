type DataType = {
  name: string;
  _id: string;
};

export type DropDownWithSearchProps = {
  data: DataType[];
  placeholder: string;
  isFirstItem?: boolean;
};
