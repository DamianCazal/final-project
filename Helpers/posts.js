const { faker } = require('@faker-js/faker');
const slugify = require('slugify')


const generatePost = () => {
  const post = {
    title: faker.lorem.words(6),
    body: faker.lorem.sentence(12),
  }
  //para testear
  //console.log(post);
  return post
}

module.exports = {
  generatePost
}