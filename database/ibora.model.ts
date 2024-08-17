import { Schema, model, models } from 'mongoose'

const MaqolSchema = new Schema(
	{
		phrase: { type: String, required: true },
		description: { type: String, required: true },
	},
	{ timestamps: true }
)

const Ibora = models.Ibora || model('Ibora', MaqolSchema)
export default Ibora
