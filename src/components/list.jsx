import React from "react";
import DateFormatter from "../components/dateformatter";
export default ({ issuesList }) => {
  if (issuesList) {
    return (
      <div>
        <ul>
          {issuesList.map((issues, index) => {
            return (
              <li key={issues.id}>
                <div className="issue-title">
                  <h3>
                    <a href="#">{issues.title}</a>
                  </h3>
                  <p>
                    #{issues.number} opened{" "}
                    <DateFormatter datesrc={issues.created_at} /> by{" "}
                    {issues.user.login}
                  </p>
                </div>

                <p>
                  <strong>Comments:</strong> {issues.comments}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    );
  } else {
    return null;
  }
};
