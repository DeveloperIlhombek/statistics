import { Schema, model, models } from 'mongoose'

const MaqolSchema = new Schema(
	{
		proverb: { type: String, required: true },
	},
	{ timestamps: true }
)

const Maqol = models.Maqol || model('Maqol', MaqolSchema)
export default Maqol
