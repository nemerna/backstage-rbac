# Project Setup Guide

This README provides step-by-step instructions for setting up the project environment. Follow these guidelines to configure the project correctly.

## Table of Contents
- [Project Setup Guide](#project-setup-guide)
  - [Table of Contents](#table-of-contents)
  - [Setting Placeholders](#setting-placeholders)
    - [In `catalog-entities/user.yaml`](#in-catalog-entitiesuseryaml)
    - [In `app-config.local.yaml`](#in-app-configlocalyaml)
  - [Source Code Modifications](#source-code-modifications)
  - [Environment Variables](#environment-variables)
  - [Installation and Running the Application](#installation-and-running-the-application)

## Setting Placeholders

You need to set several placeholders in specific files to configure the application correctly.

### In `catalog-entities/user.yaml`
Replace the following placeholders:
- `$PLACEHOLDER_GITHUB_USERNAME`: Your GitHub username.
- `$PLACEHOLDER_DISPLAY_USERNAME`: Display name for GitHub.
- `$PLACEHOLDER_GITHUB_EMAIL`: Your GitHub email address.

### In `app-config.local.yaml`
Set these placeholders:
- `$PLACEHOLDER_RBAC_ADMIN_USERNAME`: Set to `user:default/nemerna` (example value).
- `$PLACEHOLDER_GITHUB_CLIENT_ID`: Create a GitHub client ID and set it here.
- `$PLACEHOLDER_GITHUB_CLIENT_SECRET`: Create a GitHub client secret and set it here.

## Source Code Modifications

Manually update the following source code files (already modified this is a FYI step):
- `packages/backend/src/plugins/auth.ts`
- `packages/backend/src/plugins/catalog.ts`
- `packages/backend/src/plugins/permission.ts`

## Environment Variables

Set the following environment variables:

```bash
export POSTGRES_HOST=localhost
export POSTGRES_USER=postgres
export POSTGRES_PORT=5432
export POSTGRESQL_ADMIN_PASSWORD=mysecretpassword
export GITHUB_ENABLED=true
export PERMISSION_ENABLED=true
export POSTGRES_PASSWORD=mysecretpassword
```

## Installation and Running the Application

Once all setup steps are completed:

1. **Install dependencies:**
   ```bash
   yarn install
   ```

2. **Startin the Project**
   ```bash
    yarn start
   ```