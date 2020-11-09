# Overlook Hotel Solo Project

## Project Description:

[This is a hotel booking application](https://jaypeasee.github.io/overlook-hotel/). It allows users (a manager, and 50 guests) to sign into their accounts. 

The guests, upon logging in, are provided with a unique dashboard that allows them to see today's date, the total amount they have spent at the hotel, and their booking history (past, present, and future). Guests can also search dates in the future to see the hotel's room availability, filter their searches by room type and book rooms.

The manager, upon logging in, is provided with their own dashboard that displays today's date, the hotel's revenue for that date, the number of rooms available that day. Like guests, the manager can also search dates in the future to see the hotel's room availability and book a room for a guest. In addtion, the manager can search a guest by name to see their booking history (past, present, and future). The manager has the option to cancel future bookings for the guest they searched.

The [booking](https://fe-apps.herokuapp.com/api/v1/overlook/1904/bookings/bookings), [user](https://fe-apps.herokuapp.com/api/v1/overlook/1904/users/users), and [room](https://fe-apps.herokuapp.com/api/v1/overlook/1904/rooms/rooms) data is all fetched from, posted to and deleted from separate APIs.

## Setup Instructions:

1. `Fork` [this repository](https://github.com/jaypeasee/overlook-hotel).

2. `Clone` it down to your local machine in the Terminal with the command `git clone <your ssh key>`. 

3. Run `npm install` to get Webpack to run properly.

4. To see the page locally:

   1. Run `npm start`
   2. Take copy and paste the provided server url to your browser.

5. To review all of the tests run in `Mocha` run `npm test`.

6. ###### To log into a guest account:

   1. Usernames: `customer1` - `customer50`
   2. Password: `overlook2020`

7. ###### To log into the manager account:

   1. Username: `manager`
   2. Password: `overlook2020`

## The Working Application:

### Login & Guest Experience:

![Guest Experience Screen Recording](https://media.giphy.com/media/IecEWdVbdGFHSeRWgJ/giphy.gif)



### Manager Experience:

![Manager Experience Screen Recording](https://media.giphy.com/media/3fpcdvyY1ZxNAQxWSu/giphy.gif)

## Learning Goals:

1. Work with APIs to receive and send Data that dictated content on the page.
2. Creating a robust testing suite that drove the object oriented programming process.
3. Using event delegation to control almost the entirety of the `DOM` manipulation.
4. Using rules and tools within `scss` to separate and `DRY` up the stylesheets.
5. Using `media queries` to make a fully responsive page.

## Planning:

While this was a solo project. There was quite a lot of planning involved, including but not limited to:

* A [Class Structure Document](https://github.com/jaypeasee/overlook-hotel/blob/main/planning/ClassStructure.md)
* A [Login Experience Wireframe](https://github.com/jaypeasee/overlook-hotel/blob/main/planning/logInView.png)
* A [Guest Experience Wireframe](https://github.com/jaypeasee/overlook-hotel/blob/main/planning/customerView.png)
* A [Manager Experience Wireframe](https://github.com/jaypeasee/overlook-hotel/blob/main/planning/managerView.png)
* A [Github Project Board](https://github.com/jaypeasee/overlook-hotel/projects/1)

## Challenges:

1. Passing and displaying data asynchronously while working in a single-threaded language. The `GET`, `FETCH`, and `DELETE` calles to the API all rely in promises to resolve before data can be updated and therefore displayed on the page. This seemingly goes against the nature of JavaScript when you try to invoke new functions immediately after an API call without tying it to the promises.
2. Creating a truly responsive was a major challenge - especially when almost all of the HTML is inserted via Javascript. It has required essentially redesigning the various nav displays and given all property declarations percentages for sizes instead of pixels.

## Wins:

1. This application successfully `GET`s, `POST`s and `DELETE`s data to and from the three APIs. It also asynchronously `GET`s the booking information again after it has been changed, without having to reload the page entirely.
2. The page is fully responsive with an accessibility rating of 100% according to `Lighthouse` in `Chrome Dev Tools`.
3. The testing suite is robust with over 50 tests that test 5 classes or objects.
4. The `DOM` display is clean and makes the experience easy to use.

## Programming Languages and Technology Used:

* `JavaScript` using `ES6` functions and classes.
* `HTML`
* `CSS`
* `Webpack` to bundle all necessary implementation files.
* `NPM` to run and test the page locally.
* `Mocha` testing framework that uses the `Chai` assertion library.

## Contributors:

* [JP Carey](https://github.com/jaypeasee): Application Owner & Creater.
* [Jordon Smith](https://github.com/jdxsmith): Workflow Buddy, responsible for two pull request reviews and merges.
* [Bob Gu](https://github.com/BobGu) and [Travis Rollins](https://github.com/Kalikoze): Project Managers.
