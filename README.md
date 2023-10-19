# Simple react app that

1. Fetch Data: Make an API call to the "Rick and Morty" API and fetch the characters’ data.
2. Display Data: Render the fetched data in a table with the following columns: ID, Name, Status, Species, and Detail Button.
3. Search: Implement a search functionality that allows users to search characters based on their name.
4. Sort: Allow users to sort the data based on Name and ID, in both ascending and descending order.
5. Detail View: Implement a "Detail" button in each row. When a user clicks on it, a popup/modal should appear, displaying detailed information about the character, including an image, gender, location, and origin. (fetch single character details)
6. Pagination: Implement pagination for the displayed characters.


# Find the website at
[Rick and Morty](https://master.d3isv88gi0onxz.amplifyapp.com/)
   
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

It runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### Development approach and reasons behind your technical choices.
- Used tailwind for styling instead of using CSS or SASS and redefining all styles.
- Have a straightforward file and folder system. A components folder with components for sorting, search bar, table, pagination and modal.
- All the functionality and state are handled in the root itself. I haven't utilized any redux or state management as it's a fairly simple component structure and props are passed only one level.
- #### However, redux is implemented in a separate branch called redux.

### Challenges encountered and how you addressed them.
- No major challenges. Pretty straightforward assignment. Faced a couple of challenges with UI styling choices and had to refer to the tailwind documentation.
