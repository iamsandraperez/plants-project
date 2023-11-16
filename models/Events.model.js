const { Schema, model } = require("mongoose")
const eventSchema = new Schema(
    {
        title: {
            type: String,
            required: true
        },
        date: {
            type: Date,
            required: true
        },
        location: {
            type: {
                type: String
            },
            coordinates: {
                type: [Number]
            }
        },
        description: {
            type: [],
            required: true
        },
        owner: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            // required: true, descomentar una vez funcione ubicación en evento
        },
        participants: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User'
            }
        ]

    },
    {
        timestamps: true
    }
)

eventSchema.index({ location: '2dsphere' })

module.exports = model('Event', eventSchema)