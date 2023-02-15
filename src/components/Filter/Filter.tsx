import { Flex, Text } from "@mantine/core";

import FilterOption, {
  FilterOptionType,
} from "./components/FilterOption/FilterOption";

const Filter = ({ selected, options = [], onChange }: any) => {
  const handleOnOptionsChange = (option: FilterOptionType) => {
    onChange(option.value);
  };

  return (
    <Flex direction="row" gap={24}>
      <Text>Show:</Text>
      {options.map((option: FilterOptionType) => (
        <FilterOption
          key={option.value}
          selected={option.value === selected}
          option={option}
          onChange={handleOnOptionsChange}
        />
      ))}
    </Flex>
  );
};

export default Filter;
