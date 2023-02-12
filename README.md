Inventory Tracker/Management Software

* The application is currently going through a rewrite to improve the UI and to convert the codebase to TypeScript. This will also include improvements to the codebase to make the application overall more efficient. You can view the progress of this rewrite under the rewrite branch. Once sufficient implementation has been completed a merge to dev and potentially main will occur.

## Setup:
Once cloning be sure to create a .env file and place inside your mongoURI in this format:
MONGO_URI = "uri here"

Now you can install all dependencies:
npm install

Running the application:
npm start

## Features:
See all of your inventory laid out in table format
![placeholder](https://github.com/KelvinVan1/veterinary-inventory-tracker/blob/main/images/InventoryDetails.png?raw=true)

Access an inventory's list of items
![placeholder](https://github.com/KelvinVan1/veterinary-inventory-tracker/blob/main/images/MedicationInfo.png?raw=true)

Add and Edit existing inventories and items
![placeholder](https://github.com/KelvinVan1/veterinary-inventory-tracker/blob/main/images/EditInfo.png?raw=true)

Calculate the usage of medication
![placeholder](https://github.com/KelvinVan1/veterinary-inventory-tracker/blob/main/images/CalculateUsage.png?raw=true)

Other features exist such as deleting and live updates of stock compared to the ideal stock set by the user