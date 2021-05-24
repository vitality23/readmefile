// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  
  return `# ${data.title}

  ## Table Of Contents
*[Title]{#Title}
*[Description]{#Description}
*[usage]{#usage}
*[license]{#license}
*[contributer]{#contributer}
*[test]{#test}
*[installation]{#installation}

##Description
${data.Description}

##usage
${data.usage}

##license
${data.license}

##contributer
${data.contributer}

##test
${data.test}

##installation
${data.installation}

github: [${data.userName}]

email[${data.email}]

`;
}

module.exports = generateMarkdown;
