const userName = ''
const baseApi = 'https://api.github.com/'
const fork = `${userName}/javascript-fetch-lab`

//Issue and Repo objects and templates

function Issue(attributes){
  this.title = attributes.title;
  this.body = attributes.body;
  this.url = attributes.url;
}

function Repo(attributes){
  this.url = attributes.url;
}

Issue.prototype.template = function(){
   var template = `<li>Title: <a href="${this.url}">${this.title} </a><span> | Body: ${this.body}</span></li>`
   return template;
};

Repo.prototype.template = function(){
  var template = `<h3>Forked Successfully!</h3><a href="${this.url}"> ${this.url}</a>`
  return template;
};




function getIssues() {
}

function showIssues(json) {
}

function createIssue() {
  const issueTitle = document.getElementById('title').value
const issueBody = document.getElementById('body').value
const postData = { title: issueTitle, body: issueBody }
fetch(`${baseApi}repos/${fork}/issues`, {
  method: 'post',
  headers: {
    'Authorization': `token ${getToken()}`
  },
  body: JSON.stringify(postData)
}).then(resp => getIssues())
}

function showResults(json) {
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  //use fetch to fork it!
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}
