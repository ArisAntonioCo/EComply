# Coding Pattern Preferences

This document outlines the coding standards and patterns to follow when developing this project.

## Core Principles

### Simplicity First
- Always prefer simple solutions over complex ones
- Choose readability and maintainability over cleverness
- Avoid over-engineering

### Code Organization
- Avoid duplication of code whenever possible
- Check for existing similar code and functionality before implementing new features
- Keep the codebase very clean and organized
- Follow a modular code architecture
- Avoid having files over 200–300 lines of code - refactor at that point
- Adhere to Clean Code Architecture principles, ensuring clear separation of concerns and 
  maintainable modules.
- Properly refactor code when necessary to improve readability, maintainability, and 
   extensibility, especially when files approach the line limit.

## Environment Considerations
- Write code that takes into account different environments: dev, test, and prod
- Never add stubbing or fake data patterns to code that affects dev or prod environments
- Mocking data is only needed for tests, never mock data for dev or prod

## Change Management
- Only make changes that are requested or you are confident are well understood and related to the change being requested
- When fixing an issue or bug, do not introduce a new pattern or technology without first exhausting all options for the existing implementation
- If introducing new patterns/technology, make sure to remove the old implementation afterwards to avoid duplicate logic

## File and Script Management
- Avoid writing scripts in files if possible, especially if the script is likely only to be run once
- Never overwrite .env files without first asking and confirming

## Data Handling
- No fake data or stubbing in development or production code
- Keep data handling patterns consistent across the application

---

*These patterns help maintain code quality, consistency, and team productivity. Follow these guidelines for all development work.*