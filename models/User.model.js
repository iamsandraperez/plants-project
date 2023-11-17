const { Schema, model } = require("mongoose")

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required']
    },

    nickname: {
      type: String,
      unique: false,
      required: [true, 'Nickname is required']
    },

    email: {
      type: String,
      unique: true,
      required: [true, 'Email is required'],
      trim: true,
    },

    password: {
      type: String,
      required: [true, 'Password is required'],
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

