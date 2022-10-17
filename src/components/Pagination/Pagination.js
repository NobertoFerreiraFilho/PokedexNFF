import React, { useState } from "react";
import { Content, Wrapper } from "./Pagination.styles";

const Pagination = (props) => {
  const { page, totalPages, previousClick, nextClick, changeHandler } = props;

  const [pagination, setPagination] = useState();

  return (
    <Wrapper>
      <Content className="pagination">
        <button onClick={previousClick}>◀</button>
        <Content>
          {page} of {totalPages}
        </Content>
        <button onClick={nextClick}>▶</button>
      </Content>
      <label>
        cards / pg:
        <select value={pagination} onChange={changeHandler}>
          <option>50</option>
          <option>200</option>
          <option>500</option>
          <option>800</option>
          <option>1200</option>
        </select>
      </label>
    </Wrapper>
  );
};

export default Pagination;
