const mongoose = require('mongoose');
const { default: slugify } = require('slugify');
const mongoosePaginate = require('mongoose-paginate-v2')

const postSchema = new mongoose.Schema(
    {
    title: {
      type: String,
      required: true
    },
    body: {
      type: String,
      required: true
    },
    user: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true
    },
    image: {
      type:String,
      required: true
    },
    created: {
      type: String,
    },
    update: {
      type: String
    }
  },
  {
    versionKey: false
  }
)

postSchema.plugin(mongoosePaginate)// con esta linea ya nuestro esquema puede ser paginado

//middleware .pre()
postSchema.pre('validate', function(next) {
  if ( this.title ) {
    this.slug = slugify(this.title, {lower:true, strict:true})
  }
  next()
})

module.exports = mongoose.model('Post', postSchema)