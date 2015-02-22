angular.module('starter.services', [])

//TODO: Create cache
.factory('TodoItems', function($q) {
  var todoItemsList = [{
    id: 0,
    title: 'Todo List Item 0',
    summary: 'Todo Item Summary 0',
    dueDate: Date.now(),
    isComplete: false
  }, {
    id: 1,
    title: 'Todo List Item 1',
    summary: 'Todo Item Summary 1',
    dueDate: Date.now(),
    isComplete: false
  }, {
    id: 2,
    title: 'Todo List Item 2',
    summary: 'Todo Item Summary 2',
    dueDate: Date.now(),
    isComplete: false
  }, {
    id: 3,
    title: 'Todo List Item 3',
    summary: 'Todo Item Summary 3',
    dueDate: Date.now(),
    isComplete: false
  }, {
    id: 4,
    title: 'Todo List Item 4',
    summary: 'Todo Item Summary 4',
    dueDate: Date.now(),
    isComplete: false
  }];

  return {
    all: function() {
      return $q.when(todoItemsList);
    },
    remove: function(itemId) {
      todoItemsList = todoItemsList.filter(function(item){
        return item.id != itemId;
      });
      return $q.when(true);
    },
    get: function(itemId) {
      for (var i = 0; i < todoItemsList.length; i++) {
        if (todoItemsList[i].id === parseInt(itemId)) {
          return todoItemsList[i];
        }
      }
      return null;
    }
  }
});