# CI-CD

## Workflow (workflow.yml)

The main workflow is triggered on each pull request, each push to the main branch (`main`), and when a pull request is closed. The different steps of the workflow include:

### Build

- **Description:** This step involves building the application by installing dependencies and running the build process.
- **Trigger:** Pull requests, pushes to the main branch (`main`), and tags.
- **Actions:**
  1. Checkout the repository.
  2. Install Node.js.
  3. Install JavaScript dependencies.
  4. Build the application.

### Linting

- **Description:** Checks the addition.js file and Dockerfile for coding conventions.
- **Trigger:** Pull requests, pushes to the main branch (`main`), and tags.
- **Actions:**
  1. Checkout the repository.
  2. Install Node.js.
  3. Install JavaScript dependencies.
  4. Linting of the addition.js file using `npm run lint-addition`.
  5. Linting of the Dockerfile using Hadolint.

### Test addition.js

- **Description:** Executes defined tests for the addition.js file.
- **Trigger:** Pull requests, pushes to the main branch (`main`), and tags.
- **Actions:**
  1. Checkout the repository.
  2. Install Node.js.
  3. Install JavaScript dependencies.
  4. Run tests using `npm test`.
  5. Set GitHub status based on the test result.

### Test Dockerfile

- **Description:** Builds and runs the Dockerfile to ensure it works correctly.
- **Trigger:** Pull requests, pushes to the main branch (`main`), and tags.
- **Actions:**
  1. Checkout the repository.
  2. Install Docker.
  3. Build the Docker image.
  4. Run the Docker image.

### Image Deployment

- **Description:** Builds and deploys the Docker image to Docker Hub.
- **Trigger:** Merged pull request or created tag.
- **Actions:**
  1. Checkout the repository.
  2. Install Docker.
  3. Build the Docker image with a specific tag.
  4. Connect to Docker Hub.
  5. Tag the image with the specific tag.
  6. Push the tagged image to Docker Hub.

## Tag Creation Workflow (workflow-create-tag.yml)

This workflow is triggered when a pull request is closed (merged) and aims to automatically create a new tag for deployment.

### Create Tag

- **Description:** Creates an automatic tag when a pull request is merged.
- **Trigger:** Pull request closed (merged).
- **Actions:**
  1. Checkout the repository.
  2. Determine the version from the `version.txt` file.
  3. Configure Git identity.
  4. Create a tag with the new version.
  5. Push the tag to the remote repository.

### Image Deployment

- **Description:** Builds and deploys the Docker image to Docker Hub using the new tag.
- **Trigger:** Merged pull request.
- **Actions:**
  1. Checkout the repository.
  2. Install Docker.
  3. Build the Docker image with the tag version.
  4. Connect to Docker Hub.
  5. Tag the image with the tag version.
  6. Push the tagged image to Docker Hub.
