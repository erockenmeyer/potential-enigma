// function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return '';
  }
  return ``
}

// function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
    return '';
  }
  return `- [License](README.md#license)`
}

// function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return '';
  }
  return `
## License
  `;
}

// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
## Table of Contents
- [Description](README.md#description)
- [Installation](README.md#installation)
- [Usage](README.md#usage)
${renderLicenseLink(data.license)}
- [Contributing](README.md#contributing)
- [Tests](README.md#tests)
- [Questions](README.md#questions)

## Description
${data.description}

## Installation
${data.installation}

## Usage
${data.usage}
${renderLicenseSection(data.license)}
${renderLicenseBadge(data.license)}
## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
Github: [${data.username}](${data.github})
Email: ${data.email}
${data.contact}
`;
}

module.exports = generateMarkdown;
