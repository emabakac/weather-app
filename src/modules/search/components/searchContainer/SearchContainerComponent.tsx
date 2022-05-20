import React from "react";
import { SearchInputComponent } from "../../../../modules";
import { Location } from "../../../main/fragments/App";
import styles from "./SearchContainerComponent.module.css";

interface Props {
  searchQuery: Location;
  setSearchQuery: React.Dispatch<React.SetStateAction<Location>>;
  search: () => void;
}

const SearchContainerComponent: React.FC<Props> = ({
  searchQuery,
  setSearchQuery,
  search,
}) => {
  return (
    <div className={styles.container}>
      <SearchInputComponent
        placeholder="City"
        name="city"
        value={searchQuery.city}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      <SearchInputComponent
        placeholder="Country code (optional)"
        name="countryCode"
        value={searchQuery.countryCode}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      <button className={styles.searchButton} onClick={search}>
        Search
      </button>
    </div>
  );
};

export default SearchContainerComponent;
