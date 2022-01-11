var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;
var todos = [{
    id: 1,
    description: 'Meet anjali for lunch',
    complated: false
},{
    id: 2,
    description: 'Read book',
    complated: false
},{
    id: 3,
    description: 'Dance Practice',
    complated: false
}];

app.get('/',function (req, res){
    res.send('TOdo API Root');
});

app.get('/todos',function(req, res){
    res.json(todos);
});

app.get('/todos/:id',function(req, res){
    var todoId = parseInt(req.params.id,10);
    var matchedTodo;

    todos.forEach(function(todo){
        if(todoId === todo.id){
            matchedTodo = todo;
        }
     });
     if(matchedTodo){
        res.json(matchedTodo);
     }else{
        res.status(404).send();
     }
});

app.listen(PORT, function(){
    console.log('Express is listening on!!' + PORT + '!');
})