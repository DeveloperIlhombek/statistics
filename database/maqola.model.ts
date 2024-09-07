import { Schema, model, models } from 'mongoose'

const MaqolaSchema = new Schema({
	article: { type: String, required: true },
	dataOfCreate: { type: String, required: true },
	source: { type: String, required: true },
})

const Maqola = models.Maqola || model('Maqola', MaqolaSchema)

export default Maqola
