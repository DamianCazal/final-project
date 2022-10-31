const express = require('express')
const { default: mongoose } = require('mongoose')

const categorieSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
  },
  {
    versionKey: false
  }
)

module.exports = mongoose.model('Categories', categorieSchema)