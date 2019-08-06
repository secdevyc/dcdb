# dcdb
A Personal COUPON Organizer and DISCOUNT database

User Story:
1. User should be able to add coupon information
2. User should be able to see an overview of all coupons entered in Coupon View and in list View be able to sort by Item, Company and expiration date.
3. User should be able to see the details for each coupon upon clicking details
4. User should be able to edit the coupon from the details view and update the coupon
5. User should be to delete the coupon from the details view

This is a basic CRUD app that utilizes MongoDB and Node.js packages such as Express, Mongoose, EJS, and method-override.
The styling was done using the Materialize framework plus some added customizations.

This app is deployed on Heroku at:
https://discount-database.herokuapp.com/dcdb/

Future Implementations:
1. UserID / PW authentication
2. Use select/options tags for the coupon.tags
3. Figure out how to make utilize the actual Date format, and change the coupon.date from a type: string to type: Date
