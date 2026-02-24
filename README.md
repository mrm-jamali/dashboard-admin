
dashboard-admin — Project README (EN)

Project Overview
dashboard-admin is a fully responsive and dynamic admin panel built with Vite + React, featuring role‑based authentication for both Admin and User dashboards. Data is handled using Mock Data, and global state is managed using Context API.

Key Features

Admin Dashboard
• Role-based login  
• Three main menus:
  1. Dashboard – Dynamic statistic cards, recent activities  
  2. Activity – Latest activities  
  3. Users – User list, edit roles, delete users, add users, search, filter, pagination  
• Notification system (view & clear all)  
• Admin profile page (update photo, change password)  
• Log activity section  

User Dashboard
• Three menus:
  1. Dashboard – Stats, teams, ticket status  
  2. Profile – Same features as admin profile  
  3. Orders – Dynamic order list & statuses  
• Logout functionality  
• Notification system (same as admin)  

Responsive Design
The layout is fully responsive on mobile, tablet, and desktop.

Tech Stack
• Vite  
• React  
• React Router  
• Context API  
• CSS Modules  
• React Icons  
• Mock Data  

Folder Structure (Suggested)
src/
 ├── assets/
 ├── components/
 ├── context/
 ├── data/
├── App.jsx
 └── main.jsx

Getting Started

1. Clone the Repository  
git clone https://github.com/mrm-jamali/dashboard-admin.git
2. Install Dependencies  
npm install

3. Start Development  
npm run dev

4. Build for Production  
npm run build

Deploying on GitHub Pages

1. Update vite.config.js  
export default defineConfig({
  base: "/ dashboard-admin /",
});

2. Build  
npm run build

3. Deploy  
Upload the dist folder in GitHub Pages settings.


