# WEB103 Project 4 - BoltBucket Studio

Submitted by: **Noor AlAzzawi**

About this web app: **BoltBucket Studio is a full-stack custom device configurator built with React, Node.js, Express, and PostgreSQL. Users can customize a device by choosing different options like shell, core, power profile, storage, and finish, see the visual preview and total price update instantly, and save, edit, view, and delete builds from the database.**

Time spent: **20+** hours

## Required Features

The following **required** functionality is completed:

- [x] **The web app uses React to display data from the API.**
- [x] **The web app is connected to a PostgreSQL database, with an appropriately structured `CustomItem` table.**
  - [x]  **NOTE: Your walkthrough added to the README must include a view of your Render dashboard demonstrating that your Postgres database is available**
  - [x]  **NOTE: Your walkthrough added to the README must include a demonstration of your table contents. Use the psql command `SELECT * FROM tablename;` to display your table contents.**
- [x] **Users can view multiple features of the `CustomItem` they can customize.**
- [x] **Each customizable feature has multiple options to choose from.**
- [x] **On selecting each option, the displayed visual icon for the `CustomItem` updates to match the option the user chose.**
- [x] **The price of the `CustomItem` changes dynamically as different options are selected.**
- [x] **The visual interface changes in response to at least one customizable feature.**
- [x] **The user can submit their choices to save the item to the list of created `CustomItem`s.**
- [x] **If a user submits a feature combo that is impossible, they should receive an appropriate error message and the item should not be saved to the database.**
- [x] **Users can view a list of all submitted `CustomItem`s.**
- [x] **Users can edit a submitted `CustomItem` from the list view of submitted `CustomItem`s.**
- [x] **Users can delete a submitted `CustomItem` from the list view of submitted `CustomItem`s.**
- [x] **Users can update or delete `CustomItem`s that have been created from the detail page.**

The following **optional** features are implemented:

- [ ] Selecting particular options prevents incompatible options from being selected even before form submission

The following **additional** features are implemented:

- [x] Modern glassmorphism-style UI with responsive layout
- [x] Live build preview card that updates as options are selected
- [x] Seeded PostgreSQL database with sample builds for testing
- [x] Detailed build page with edit and delete actions
- [x] Hero section and stats cards on the homepage

## Video Walkthrough

Here's a walkthrough of implemented required features:
![ScreenRecording2026-04-01at1 43 09AM-ezgif com-video-to-gif-converter](https://github.com/user-attachments/assets/98af95fa-8e88-412d-a02d-f519ad7967d2)

![ScreenRecording2026-04-01at2 14 19AM-ezgif com-video-to-gif-converter](https://github.com/user-attachments/assets/6b94abac-9e91-481e-9eae-b29be92f60c9)



GIF created with **Ezgif**

## Notes

One challenge was connecting the React frontend, Express backend, and PostgreSQL database while keeping the file structure and route imports consistent. Another challenge was validating impossible build combinations before saving data, while still keeping the UI responsive and easy to use. I also spent time improving the visual design so the project would feel polished and portfolio-ready instead of looking like a basic CRUD assignment.

## License

Copyright 2026 Noor AlAzzawi

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

> http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
