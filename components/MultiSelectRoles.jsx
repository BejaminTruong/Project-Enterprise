import React from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from "@chakra-ui/react";
const MultiSelectRoles = (props) => {
  const { label, options, buttonProps, selectedOptions, setSelectedOptions } =
    props;
  return (
    <Menu closeOnSelect={false}>
      {({ onClose }) => (
        <>
          <MenuButton
            type="button"
            backgroundColor={selectedOptions.length ? "purple.200" : "white"}
            color={selectedOptions.length ? "purple.500" : "gray.600"}
            borderColor={selectedOptions.length ? "purple.200" : "gray.300"}
            borderWidth={1}
            p={2}
            px={4}
            borderRadius="25px"
            _focus={{
              outline: "none",
            }}
            {...buttonProps}
          >
            {`${label}${
              selectedOptions.length > 0 ? ` (${selectedOptions.length})` : ""
            }`}
          </MenuButton>
          <MenuList>
            <MenuGroup title={undefined}>
              <MenuItem
                onClick={() => {
                  setSelectedOptions([]);
                  onClose();
                }}
              >
                Clear all
              </MenuItem>
            </MenuGroup>
            <MenuDivider />
            <MenuOptionGroup
              title={undefined}
              defaultValue={selectedOptions.map((r) => ({ id: r.id }))}
              type="checkbox"
              onChange={(values) => {
                setSelectedOptions(values);
                props.onChange?.(values);
              }}
            >
              {options.map((option) => {
                return (
                  <MenuItemOption
                    key={`multiselect-menu-${option.name}`}
                    type="button"
                    value={option.id}
                  >
                    {option.name}
                  </MenuItemOption>
                );
              })}
            </MenuOptionGroup>
          </MenuList>
        </>
      )}
    </Menu>
  );
};

MultiSelectRoles.displayName = "MultiSelectRoles";

export default MultiSelectRoles;
