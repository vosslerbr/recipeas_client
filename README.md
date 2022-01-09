# Recipeas

## Welcome to Recipeas!

I built Recipeas as a recipe manager for my wife and I to use. We found that it would be useful to have a common location for our recipes, instead of paper recipes floating around our kitchen, or a bunch of bookmarks, videos, and screenshots saved to different devices.

Since I knew I wanted the app to be accessible by the public (maybe someone like you!), the API I built for Recipeas does require authentication in the form of a passcode. Nothing crazy, really just to prevent users besides my wife or me from creating, editing, or deleting recipes.

### Current Features

Recipeas currently supports the following features:

- Viewing all Recipeas
- Viewing a Recipea's details
- Creating Recipeas
  - Requires passcode
  - Recipeas can have a title, description, steps, ingredients, and a link to the original recipe
- Editing Recipeas
  - Requires passcode
  - Recipea's 'modified' date automatically updates when the Recipea is edited
- Deleting Recipeas
  - Requires passcode

### Planned Features

There are a few more features I'd like to add/improve:

- Tags support
  - So users can filter the homepage by recipea type (like dairy-free, vegan, vegetarian...)
- Sorting support
  - So users can sort by name, # of steps, # of ingredients
- Image support
  - I'd like users to be able to upload 1-6 images per Recipea. The image would then be used as a thumbnail on the homepage, and in a gallery on the Recipea details page.
- Improve the steps/ingredient editors
  - The ability to edit steps or ingredients in the Create/Edit forms is already in place, but it's clunky. I plan to make this UI more user-friendly.
- Build a landing page to show off all the features of Recipeas
- General design improvements
