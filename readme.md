# Rest API

This assumes student ids are listed sequentially.

## Demo

GET
- Random user: http://localhost:3000/users/
- Users listing: http://localhost:3000/users/all/
- Names from students: http://localhost:3000/users/names
- Student JSON object when passed id and if criteria matches: http://localhost:3000/users/id/{id}

POST
- new student into array by id, if not overlapping http://localhost:3000/users/id/{id}

PUT
- new student into array by id, replace value if overlapping http://localhost:3000/users/id/{id}

DELETE
- student from list given matching id http://localhost:3000/users/id/{id}

GET http://localhost:3000/users/

###

GET http://localhost:3000/users/all/

###

GET http://localhost:3000/users/names

###

GET http://localhost:3000/users/id/1

###

POST http://localhost:3000/users/id/1

###

PUT http://localhost:3000/users/id/1

###

DELETE http://localhost:3000/users/id/1

This is an assignment to ensure you know how to create a REST API using ExpressJS.

    Use express-generator to create an ExpressJS app
    Start the server and test it using Postman (or similar tool) 
    Modify your server to do the following using a resource called "student":
        GET a list of students
        GET a single student by ID
        PUT a single student by ID (log results)
        POST a single student by ID (log results) 
        DELETE a single student by ID (log results)

Post your code to your weekly project Github Repo.
