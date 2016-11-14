var express = require('express'),
    router = express.Router();

var tasks = [
    {name: 'Task1', description: 'TaskDescription1'},
    {name: 'Task2', description: 'TaskDescription2'},
    {name: 'Task3', description: 'TaskDescription3'},
    {name: 'Task4', description: 'TaskDescription4'}
];

router.get('/', function (req, res) {
    res.json(tasks)
});

router.get('/:id', function (req, res) {
    res.json(tasks[req.params.id]);
});

router.put('/:id', function (req, res) {
    tasks[req.params.id] = req.body;
    res.send();
});

router.post('/', function (req, res) {
    tasks.push(req.body);
    res.send();
});

module.exports = router;