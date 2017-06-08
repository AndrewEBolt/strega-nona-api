var ObjectID = require('mongodb').ObjectID;

module.exports = function(app, db) {

	app.delete('posts/:id', (req, res) => {
		const id = req.params.id
		const details = { id: new ObjectID(id) }
		db.collection('posts').remove(details, (err, item) => {
			if (err) {
				res.send({ error: 'An error has occurred' });
			} else {
				res.send('post ' + id + ' was deleted')
			}
		})
	})

	app.get('/posts/:id', (req, res) => {
		console.log(req.params.id)
		const id = req.params.id
		const details = { _id: new ObjectID(id) }
		db.collection('posts').findOne(details, (err, item) => {
			console.log(details)
			if (err) {
				res.send({ error: 'An error has occurred' });
			} else {
				res.send(item)
			}
		})
	})

	app.post('/posts', (req, res) => {
		console.log(req.body);
		const data = req.body
		const post = {
			description: data.description,
			location: data.location,
			type: data.type
		}
		db.collection('posts').insert(post, (err, result) => {
			if (err) {
				res.send({ error: 'An error has occurred' });
			} else {
				res.send(result.ops[0]);
			}
		})
	})

	app.put('posts/:id', (req, res) => {
		const id = req.params.id
		const data = req.body
		const details = { _id: new ObjectID(id) }
		const post = {
			description: data.description,
			location: data.location,
			type: data.type
		}
		db.collection('posts').update(details, post, (err, result) => {
			if (err) {
				res.send({ error: 'An error has occurred' });
			} else {

			}
		})
	})

};
