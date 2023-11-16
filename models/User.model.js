const { Schema, model } = require("mongoose")

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },

    nickname: {
      type: String,
      unique: false,
      required: true,
    },

    email: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },

    password: {
      type: String,
      required: true,
    },

    role: {
      type: String,
      enum: ['visitor', 'planter', 'admin'],
      default: 'visitor'
    },

    myPlants: {
      type: [Number]
    }
  },
  {
    timestamps: true
  }
)

module.exports = model('User', userSchema)

