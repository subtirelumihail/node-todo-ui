import { Text, Anchor } from "@mantine/core";

export type FilterOptionType = {
  label: string;
  value: string;
};

interface FilterOptionProps {
  option: FilterOptionType;
  selected: boolean;
  onChange: (option: FilterOptionType) => void;
}
const FilterOption = ({ option, selected, onChange }: FilterOptionProps) => {
  const handleOnOptionsChange = (option: FilterOptionType) => {
    onChange(option);
  };

  if (selected) {
    return <Text>{option.label}</Text>;
  }

  return (
    <Anchor type="button" onClick={() => handleOnOptionsChange(option)}>
      {option.label}
    </Anchor>
  );
};

export default FilterOption;
