import React, { PureComponent } from "react";

import Header from "../components/header";
import Footer from "../components/footer";
import List from "../components/list";
import IssuesHeader from "../components/issuesheader";
import RepoInfo from "../components/repoinfo";

export default class Issues extends PureComponent {
  componentDidMount() {
    const {
      match: { params },
      getIssues
    } = this.props;

    getIssues(params.account, params.repository);
  }
  render() {
    const { issuesList, repsitoryinfo } = this.props.issues;
    return (
      <div>
        <Header />
        <main id="main-content">
          <RepoInfo repsitoryinfo={repsitoryinfo} />
          <div className="issues-wrapper">
            <IssuesHeader />
            <List issuesList={issuesList} />
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}
