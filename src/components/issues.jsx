import React, { PureComponent } from "react";

import Header from "../components/header";
import Footer from "../components/footer";
import List from "../components/list";
import IssuesHeader from "../components/issuesheader";
import RepoInfo from "../components/repoinfo";

export default class Issues extends PureComponent {
  render() {
    return (
      <div>
        <Header />
        <main id="main-content">
          <RepoInfo />
          <div class="issues-wrapper">
            <IssuesHeader />
            <List />
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}
