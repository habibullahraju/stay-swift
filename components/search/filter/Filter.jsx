import SortHotel from "../../sort/SortHotel";
import FilterByAmineties from "./FilterByAmineties";
import FilterByRange from "./FilterByRange";
import FilterByStarCategory from "./FilterByStarCategory";

const Filter = () => {
  return (
    <>
      <div className="col-span-3 space-y-4">
        <SortHotel />
        <FilterByRange />
        <FilterByStarCategory />
        <FilterByAmineties />
      </div>
    </>
  );
};

export default Filter;
