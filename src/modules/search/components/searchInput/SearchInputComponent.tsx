import React from "react";
import { Location } from "../../../main/fragments/App";
import styles from "./SearchInputComponent.module.css";

interface Props {
  placeholder: string;
  name: string;
  value: string;
  searchQuery: Location;
  setSearchQuery: React.Dispatch<React.SetStateAction<Location>>;
}

const SearchInputComponent: React.FC<Props> = ({
  placeholder,
  name,
  value,
  searchQuery,
  setSearchQuery,
}) => {
  return (
    <input
      className={styles.input}
      type="text"
      name={name}
      value={value}
      placeholder={placeholder}
      data-testid='search-input'
      onChange={(e) =>
        setSearchQuery({ ...searchQuery, [e.target.name]: e.target.value })
      }
    />
  );
};

export default SearchInputComponent;
