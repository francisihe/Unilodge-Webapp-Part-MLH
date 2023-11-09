
Developing Project for Real Estate Platform:

Basics:
1. App allows users create accounts
2. App allows users see properties (houses or lands) for sale or rent
3. App allows users book and pay for inspection
4. App allows users bookmark houses for viewing later

Admins and Managers:
1. Three categories of users - Admins, Managers, User
2. Admins can perform all actions - including creating and deleting property, users, bookings and payments and adjusting access levels
3.  Managers can do same except delete users or change access level
4.  Regular can only view, book inspection and update own profile

Properties:
1. Properties will be either houses or lands
2. They belong to either sell or rent categories

Single property page:
1. View details of house including pictures
2. Have a button with link to view view of property on youtube or instagram
3. Booking section appears below each property to allow for easy booking



// Active Process
1. 

// To-do
1. Implement email verification via code. Refer: https://dev.to/cyberwolves/how-to-verify-user-email-in-node-express-eaj
Second ref: https://firebase.google.com/docs/auth/web/password-auth
2. Implement password forgot process
3. Check cookie timeout and set timeout on leaving page
4. Update the sign in and sign up pages to use Redux reducers defined in the userSlice, and useDispatch