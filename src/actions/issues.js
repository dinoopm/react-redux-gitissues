const get = (url, dispatch) =>
  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response.json();
    })
    .catch(error => {
      //dispatch({ type: "ERROR", payload: true });
    });

export const getIssues = (account, repository) => dispatch =>
  get(
    `https://api.github.com/repos/${account}/${repository}/issues`,
    dispatch
  ).then(response => {
    response &&
      dispatch({
        type: "GET_ISSUES",
        payload: {
          issuesList: response,
          repsitoryinfo: { account, repository }
        }
      });
  });
