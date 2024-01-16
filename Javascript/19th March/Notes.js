/**
 * How Internet Works
 * ------------------
 * Request
 * Response
 * URL Query
 * 
 * There is a person using a computer and he sends a request an HTTP request using wwww called (world wide web)
 * and the request goes to the server, so as soon as the request send to the server, server checked what kind of 
 * request has arrived and based on the request the server will send the response
 * 
 * API :- APPLICATION PROGRAMMING INTERFACE
 * it is a kind of link which carry certain information and to get back the data from the server
 * suppose we want to search for Inueuron , so google had an API Link which contains some domain name and path 
 * querystring it went to the server ask to the server for data / or the data informtaion server /
 * its just like that we want to get data from Ineuron and how we will get that data .. when we will 
 * search for ineuron google had an api link that contains data about ineuron which got informatin from server 
 * and then we will get to see a webpage which contain the detail informtaion about ineuron.
 * 
 * so api is something which will comunicate with between the client and server
 * 
 * Node Js Architecture how does it work (important for interview)(Follow ImageOne)
 * --------------------------------------------------------------------------------
 * Request
 * Node.js Server
 * Event Queue
 * Event Queue
 * Thread Pool 
 * Event Loop
 * External Resource
 * 
 * Whenever client makes any request it goes back to Nodejs Server which contain two most 
 * important thing called Event Queue and Thread Pool. The impotant factor between both of them is Event Loop
 * 
 * 
 * Event Queue : - whenever we do any request it will go the Event Queue
 * Thread Pool : - If there is something which require a connectivity through 
 * database will go to the Thread Pool or anything that we have to go out from the
 * backend and front end that particular thing will go to the Thread Pool and Event Loop 
 * is going to perform this activity
 * 
 * so its a Task for Thread Pool to go and connect with the database.
 * 
 * 
 * first of all request will be made then all the request will go to the event queue
 * and after that there is something called event loop which will check that what type is 
 * request has came so its basically the task of Event Loop to check that what type of 
 * request has came, and if there is a request which require database connectivity
 * in that case the event loop will send that request to the Thread Pool. So not only the 
 * request required database connectivity will come to the thread pool there may be some request
 * which needs some external work to be done like commutaion etc will go to the Thread Pool 
 * so this is like blocking operation because it need some time to perform these opration like 
 * database connectivity and all, it may take 1sec or 2sec but still it will take some time
 * and those request which doesnot need any database connectivity will be going to the non blocking 
 * operations so not every request will go through ThreadPool
 * 
 */

/**
 * Application WorkFlow
 * ----------------------
 * User Will first request to the website for example google. facebook, ineuron etc and make a request
 * and then we will get a home page lets take an example of ineuron we will get an ineuron homepage
 * and then we will click on the courses to see the courses we have enrolled now what will happen 
 * frontend will send request to backend now the backend will check what kind of request has arrived 
 * and what kind of information has been asked 
 * 
 * suppose we want to click on the particular course to see what new video has been uploaded so for that 
 * so what will backend will do is it going to make new request to the databse to check for new videos
 * a new api call will be made by us an api call will hit to the databse but before hitting to the databse
 * there will be something called middleware which will check that the credentials are correct or not and whether
 * the request is doing is valid or not by checking whether we have paid for that course or not and after that the 
 * databse will return an api with the particular video ans pass to the frontend.
 * 
 * 
 * in simple words the client will make a request to the frontend and if required 
 * the request will made by frontend to backend and based on the request made 
 * the database call will be there and then the things will ber return to the 
 * fontend and frontend will be sending request to the client.
 */
