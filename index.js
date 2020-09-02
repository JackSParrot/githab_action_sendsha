const core = require('@actions/core')
const github = require('@actions/github')

try
{
	const url = core.getInput('url');
	const sha = core.getInput('sha');
	fetch(url + sha).then(res=>{console.log(res)})
}