### Development Tools and architecture
I used visual studio code for the development environment and  nodejs V14.0.0
I deployed the code in AWS. I have created two separate lambda functions and the lambdas are triggered by API which is configured in AWS API Gateway. I used Serverless framework  to automate the deployment.


# lambda functions
# transportnsw-api-service
This Lambda gets triggered by transport nsw entity api for storeing the user details

# transportnsw-api-service-fetch
This Lambda gets triggered by transport nsw entity api fetch a user by id

# API endpoints:
  POST - https://3kiya3gk8g.execute-api.ap-southeast-2.amazonaws.com/dev/v1/user

  # payload (body)
{
	"entityType": "ud",
	"entityPayload": 
	{
		"firstName": "John",
		"lastName": "Doe"
	}
}

  GET - https://3kiya3gk8g.execute-api.ap-southeast-2.amazonaws.com/dev/v1/user/{entityId}

#### Debugging
We can use the launch configuration given in launch.json for debugging in [VS Code](http://code.visualstudio.com/docs/editor/debugging).

### Node Version
Node.js version 14.0.0 is used for this project.

### Style Guide
Followed the google styleguides for [javascript](https://google.github.io/styleguide/jsguide.html) and [html](https://google.github.io/styleguide/htmlcssguide.html)

#### Indentation
Used two spaces for indentation instead of tabs in all javascript, css, html and json files. (vs code default indentation)

#### File naming conventions
Used lower case file names, with hyphens separating words.
For example:
index.js, api-handler.js

Github Repo: https://github.com/abis1723/transport-nsw-api

