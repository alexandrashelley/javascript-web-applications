class GithubView {
  constructor(model, api) {
    this.model = model;
    this.api = api;

    const submitButtonEl = document.querySelector('#submit-button');
    const repoInputEl = document.querySelector('#repo-name-input');

    submitButtonEl.addEventListener('click', () => {
      const repoName = repoInputEl.value;

      this.api.getRepoInfo(repoName, repoData => {
        console.log(repoData);

        this.display(repoData);
      });
    });
  }

  display() {
    const repoName = document.querySelector('#repo-name-input').value
    this.api.getRepoInfo(repoName, repoData => {
      document.querySelector('#repo-name').textContent = repoData.full_name;
      document.querySelector('#repo-description').textContent = repoData.description;
      document.querySelector('img').src = repoData.organization.avatar_url;
    });

    



  }
}

module.exports = GithubView;