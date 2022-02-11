import { memo } from "react";

const SelectPriority = ({ handleSelect, PRIORITY, priority }) => {

    console.log("SELECT_RENDER");

  return (
    <select onChange={handleSelect} name="priority" value={priority}>
      <option value="all">ALL</option>
      <option value={PRIORITY.HIGH}>HIGH</option>
      <option value={PRIORITY.MEDIUM}>MEDIUM</option>
      <option value={PRIORITY.LOW}>LOW</option>
    </select>
  );
};

export default memo(SelectPriority);
