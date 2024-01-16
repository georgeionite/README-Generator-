// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
  ${data.description}

  ## Features
  ${data.features}

  ## Technologies
  ${data.technologies}

  ## Credits
  ${data.credits}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contribution
  ${data.contributing}

  ## Test
  ${data.test}

  ## License
  ${data.license}
  
  // Continue with other sections
`;
}

module.exports = generateMarkdown;
