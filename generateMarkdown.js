// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Description
  ${data.description}
  
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  // Continue with other sections
  
  ## Installation
  ${data.installation}
  
  // Continue with other sections
`;
}

module.exports = generateMarkdown;
