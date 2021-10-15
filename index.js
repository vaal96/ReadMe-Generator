const inquirer = require("inquirer");
const fs = require("fs").promises;
// const data = process.argv.slice(2).join(" ");






// import the fs.promises api instead of the default fs api which uses callbacks

const generateReadMe = (answers) => {
  return `
  # <${answers.title}>
  ## Description
  - ${answers.description}
  - When the user is prompted a series of questions, and types or selects the answer, the answer is then displayed in the correct file.
  - Inquirer is a NPM package that captures users input in our Node.js command line.  
  ## Table of Contents 
  - [Installation](#installation)
  - [Project Requirements](#project-requirements)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  ## Installation
  ${answers.installation}
  
  ## Project Requirements
  
  - [x] Command-line application that accepts user input and prompted for information about my application repository
  - [x] Searched city is added to the search history
  - [x] A professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License,        Contributing, Tests, and Questions
  - [x] Requests GitHub User name and displays it in readMe file
  - [x] Displays badge
  - [x] Table of contents takes you to the corresponding section
  
  ## Usage
  When the user is asked a series of questions, and the answer is set in the command line. The input is then displayed in our readMe file.  
  ## Credits
  Used Link for a professional readMe reference: https://coding-boot-camp.github.io/full-stack/github/professional-readme-guide
  GitHub: https://github.com/vaal96
  
  ## License
  The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).
  ---
  🏆 The previous sections are the bare minimum, and your project will ultimately determine the content of this document. You might also want to consider adding the following sections.
  ## Badges
  (https://img.shields.io/github/last-commit/vaal96/ReadMe-Generator?color=pink&style=for-the-badge)
  
  ## Questions:
  Contant me at: ${answers.email}
  Or at my GitHub: https://github.com/${answers.credits} 
  `
};

const promptUser = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "What is the title of your project?",
    },
    {
      type: "input",
      name: "description",
      message: "How would you describe your project?",
    },
    {
      type: "input",
      name: "installation",
      message: "What is the process of installation for this particle project",
    },
    {
      type: "input",
      name: "credits",
      message: "What is your GitHub user name?",
    },
    {
      type: "input",
      name: "email",
      message: "Enter your email address?",
    },
  ]);
};

// Bonus using writeFileAsync as a promise
promptUser()
  .then((answers) => fs.writeFile("output/README.md", generateReadMe(answers)))
  .then(() => console.log("Successfully wrote to readme file"))
  .catch((err) => console.error(err));

