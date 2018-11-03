import React from "react";
export default ({ repsitoryinfo }) => {
  let { account, repository } = repsitoryinfo ? repsitoryinfo : {};
  return (
    <div className="repo-info">
      <h2>
        {account}/{repository}
      </h2>
    </div>
  );
};
