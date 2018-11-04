import React from "react";
import { timeDifference } from "../utils/helper.js";

export default ({ datesrc }) => {
  var currentdate = new Date();
  return <span>{timeDifference(currentdate, datesrc)}</span>;
};
