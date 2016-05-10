// new Vue({
// 	el : '#app',
// 	data : {
// 		message : 'Hello Vue.js!'
// 	}
// });
// new Vue({
// 	el : '#app',
// 	data : {
// 		todos : [
// 			{ text : 'Learn JavaScript'},
// 			{ text : 'Learn Vue.js'},
// 			{ text : 'Learn Other'}
// 		]
// 	}
// });
// new Vue({
// 	el : '#app',
// 	data : {
// 		message : 'Hello Vue.js'
// 	},
// 	methods : {
// 		reverseMessage : function(){
// 			this.message = this.message.split('').reverse().join('');
// 		}
// 	}
// })
new Vue({
	el : '#app',
	data : {
		newTodo : '',
		todos : [{
			text : 'Add some todos'
		}]
	},
	methods : {
		addTodo : function(){
			var text = this.newTodo.trim()
			if(text){
				this.todos.push({text:text})
				this.newTodo = ''
			}
		},
		removeTodo : function(index){
			this.todos.splice(index, 1);
		}
	}
})