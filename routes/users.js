/*
    GET a list of students
    GET a single student by ID
    PUT a single student by ID (log results)
    POST a single student by ID (log results)
    DELETE a single student by ID (log results)
 */

var express = require('express');
const {request} = require("express");
var router = express.Router();

const students = [
  {'id':0,'name': 'Steven'},
  {'id':1, 'name': 'Connie'}
]


// router.get('/id/:id', function (req, res){
//   let id = req.params.id;
//   console.log(id)
//
//   res.send('Cannot find user');
// })

const getRandomInt = (max) => Math.floor(Math.random()* max);

const checkId = (student_id) => {
  if (!students.length){
    return {'id':-1, 'result': 'Error: No students'};
  }

  let student = students.filter(el => el.id == student_id)

  console.log(student)
  if (student.length > 0){
    return {'id': 1, 'result': student}
  }

  return {'id': 2, 'result': "No errors found"}
}

/* GET random user */
router.get('/', function (req, res){
  if (students.length){
    res.json(students[getRandomInt(students.length)]);
  }
  res.send('')
})


/* GET users listing. */
router.get('/all', function(req, res, next) {
  res.send(students)
});


/* GET names from students */
router.get('/names', function (req, res){
  let studentNames = [];
  for (let student of students){
    studentNames.push(student.name)
  }
  res.send(studentNames)
})


/* GET student JSON object when passed id and if criteria matches */
router.get('/id/:id', function (req, res){

  let result = checkId(req.params.id)

  if (result.id === 1){
    res.send(result.result[0])
  }
  else {
    res.json({'id': 0, 'error': 'Student not found'})
    res.status(404)
  }
})


/* POST new student into array by id, if not overlapping*/
router.post('/id/:id', function(req, res){

  let student_id = parseInt(req.params.id)

  let result = checkId(student_id)

  // Student with specified id exists, send code 409 Conflict
  if (result.id === 1){
    res.status(302)
    res.send('Student exists. Exiting.')
    return
  }

  students.push({'id':student_id, 'name':''})
  res.json(students)
})

/* Put new student into array by id, replace value if overlapping*/
router.put('/id/:id', function (req, res){
  let student_id = parseInt(req.params.id)
  let result = checkId(student_id)

  if (result.id === 1){
    students[result.result[0].id] = {'id':student_id, 'name':''}
  } else{
    students.push({'id':student_id, 'name':''})
  }

  res.send(students)


  // if (result.id === 1){
  //   let p = result.result[0]
  //   for (let key in p){
  //     if (p.hasOwnProperty(key)){
  //
  //     }
  //   }
  // }

  })

/* Delete student from list given matching id*/
router.delete('/id/:id', function (req, res){
  let student_id = parseInt(req.params.id)
  let result = checkId(student_id)

  if (result.id === 1){
    students.splice(student_id)
    res.send(students)
  } else{
    res.status(204)
    res.send("Student does not exist.")
  }
})

module.exports = router;
