// Подключение express
var express = require('express');
var app = express();

// Установка механизма представления handlebars
var handlebars = require('express-handlebars').create({defaultLayout: 'main'});
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

// Установка используемого порта
app.set('port', process.env.PORT || 3000);


// Маршруты
app.get('/', function(req, res){
	/*res.type('text/plain');
	res.send('mainPage');*/

	res.render('home');
});

app.get('/about', function(req, res){
	/*res.type('text/plain');
	res.send('aboutPage');*/

	res.render('about');
});

// ----- Промежуточное ПО ----- //
//
app.use(express.static(__dirname + '/public'));

// пользовательская страница 404
app.use(function(req, res){
	/*res.type('text/plain');
	res.status(404);
	res.send('404 - not found');*/
	res.status('404');
	res.render('404');
});

app.use(function(err, req, res, next){
	console.error(err.stack);
	/*res.type('text/plain');
	res.status(500);
	res.send('500 - server error');*/
	res.status('500');
	res.render('500');
});


// Запуск сервера
app.listen(app.get('port'), function(){
	console.log('Server start on port ' + app.get('port'));
});