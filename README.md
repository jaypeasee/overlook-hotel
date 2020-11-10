# Overlook Hotel Solo Project

## Project Description:

[This is a hotel booking application](https://jaypeasee.github.io/overlook-hotel/). It allows users (a manager, and 50 guests) to view and book vacant rooms at a single hotel. 

The guests, upon logging in, are provided with a unique dashboard that allows them to see today's date, the total amount they have spent at the hotel, and their booking history (past, present, and future). Guests can also search dates in the future to see the hotel's room availability, filter their searches by room type and book rooms.

The manager, upon logging in, is provided with their own dashboard that displays today's date, the hotel's revenue for that date, the number of rooms available that day, and the percent occupancy of the hotel. Like guests, the manager can also search dates in the future to see the hotel's room availability and book a room for a guest. In addtion, the manager can search a guest by name to see their booking history (past, present, and future). The manager has the option to cancel future bookings for the guest they searched.

The [booking](https://fe-apps.herokuapp.com/api/v1/overlook/1904/bookings/bookings), [user](https://fe-apps.herokuapp.com/api/v1/overlook/1904/users/users), and [room](https://fe-apps.herokuapp.com/api/v1/overlook/1904/rooms/rooms) data is all fetched from, posted to, and deleted from separate APIs.

The complete project spec and rubric can be found [here](https://frontend.turing.io/projects/overlook.html).

## Setup Instructions:

1. `Fork` [this repository](https://github.com/jaypeasee/overlook-hotel).

2. `Clone` it down to your local machine in the Terminal with the command `git clone <your ssh key>`. 

3. Run `npm install` to get Webpack to compile the various implementation files.

4. To see the page locally:

   1. Run `npm start`
   2. Copy and paste the provided local host link to your browser.

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

1. Work with APIs to receive and send data that dictate content on the page.
2. Create a robust testing suite that drives the `OOP` process.
3. Use `event delegation` to control almost the entirety of `DOM` manipulation.
4. Use tools within `scss` to separate and `DRY` up stylesheets.
5. Use `media queries` to make a fully responsive page.

## Planning:

While this was a solo project, there was quite a lot of planning involved, including but not limited to:

* A [Class Structure Outline](https://github.com/jaypeasee/overlook-hotel/blob/main/planning/ClassStructure.md)
* A [Login Experience Wireframe](https://github.com/jaypeasee/overlook-hotel/blob/main/planning/logInView.png)
* A [Guest Experience Wireframe](https://github.com/jaypeasee/overlook-hotel/blob/main/planning/customerView.png)
* A [Manager Experience Wireframe](https://github.com/jaypeasee/overlook-hotel/blob/main/planning/managerView.png)
* A [Github Project Board](https://github.com/jaypeasee/overlook-hotel/projects/1)

## Challenges:

1. Passing and displaying data asynchronously while working in a single-threaded language. The `GET`, `FETCH`, and `DELETE` calls to the API all rely in `Promise`s to resolve before data can be updated and therefore displayed on the page. This seemingly goes against the nature of JavaScript when attempting to invoke new functions immediately after an API call without tying it to `Promise`s.
2. Designing a truly responsive page, especially when almost all of the HTML was inserted via Javascript. It required essentially redesigning the various nav displays, while giving property declarations percentage values instead of pixels.

## Wins:

1. This application successfully `GET`s, `POST`s and `DELETE`s data to and from the three APIs. It also asynchronously `GET`s the booking information again after it has been changed, without having to reload the page.
2. The page is fully responsive with an accessibility rating of 100% according to `Lighthouse` in `Chrome Dev Tools`.
3. The testing suite is robust with over 55 `it` blocks that test 5 classes/objects and rely on a single sample data file.
4. The `DOM` display is clean and makes the experience easy to use.

## Programming Languages and Technology Used:

* `JavaScript` using `ES6` functions and classes.
* `HTML`
* `SCSS`
* `Webpack` to bundle all necessary implementation files.
* `NPM` to run the page locally, test classes and objects and to utilize the `moment` time package.
* `Mocha` testing framework that uses the `Chai` assertion library.

## Contributors:

* [JP Carey](https://github.com/jaypeasee): Application Owner & Creater.
* [Jordon Smith](https://github.com/jdxsmith): Workflow Buddy, responsible for two pull request reviews and merges.
* [Bob Gu](https://github.com/BobGu) and [Travis Rollins](https://github.com/Kalikoze): Project Managers.
