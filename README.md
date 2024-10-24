# SpaceX Launches Project - Completed Tasks

This project has been successfully refactored and improved according to the given requirements. Here's a summary of the completed tasks and how to run the project.

## How to Run the Project

1. **Clone the repository**

   ```
   git clone <repository-url>
   cd <project-directory>
   ```

2. **Install dependencies**

   ```
   npm install
   ```

3. **Generate GraphQL types**

   ```
   npm run generate
   ```

4. **Run the development server**

   ```
   npm run dev
   ```

5. **Open the application**
   Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

6. **Build for production**

   ```
   npm run build
   ```

7. **Run production server**
   ```
   npm start
   ```

### Bonus: Watch for GraphQL Changes

If you're actively developing and making changes to GraphQL queries, you can use the following command to automatically regenerate types when changes are detected:

```
npm run generate:watch
```

This command will watch for changes in your GraphQL files and automatically regenerate the types, saving you time during development.

## Completed Tasks

1. **Refactoring for Better Structure**: The codebase has been refactored to introduce a more maintainable architecture using domain objects and a Repository-Mapper-Presentation layers structure.

2. **15-Minute Revalidation Time**: All pages are set up to revalidate every 15 minutes, ensuring that the statically generated pages refresh periodically to reflect new data.

3. **On-Demand Revalidation API Endpoint**: An API endpoint has been created to trigger on-demand revalidation for specific pages or the entire website.

4. **LaunchDetail Page Implementation**: A dynamically routed page (`/launches/[id]`) has been implemented to display SpaceX launch details based on the route parameters.

5. **LaunchDetail Page Extension**: The LaunchDetail page now includes a button to fetch and display rocket information dynamically on the client-side.

6. **Static Generation of Pages**: All pages are statically generated at build time, except for the dynamic routes and rocket details fetched dynamically from the client.

7. **Styling**: Simple styling has been applied to ensure readability and avoid console errors.

8. **GraphQL Code Generation**: TypeScript types are generated based on GraphQL queries, maintaining type safety and consistency across the project.

## Testing Revalidation

To test the revalidation functionality, you can use the following curl commands:

1. Revalidate a specific page:

   ```
   curl -X POST "http://localhost:3000/api/revalidate?path=/launches/123"
   ```

2. Revalidate all pages:
   ```
   curl -X POST "http://localhost:3000/api/revalidate?all=true"
   ```

## Revalidation Info Component

A `RevalidationInfo` component has been added to display information about the last revalidation time and the revalidation interval. This component is included on relevant pages to provide visibility into the revalidation process.

## Project Structure

The project now follows a clear structure with separate folders for domain entities, repositories, mappers, and presentation components. This separation of concerns makes the code more maintainable and easier to adapt to future API changes.

## Next Steps

- Review the implemented features and test thoroughly.
- Consider adding more comprehensive error handling and loading states.
- Explore opportunities for further optimization, such as implementing pagination for the launches list.

Feel free to reach out if you have any questions or need further clarification on any of the implemented features.
