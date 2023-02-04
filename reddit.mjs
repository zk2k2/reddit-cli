#! /usr/bin/env node
import fetch from 'node-fetch'
import open from 'open'
import yargs from 'yargs'
const { argv } = yargs(process.argv)
const res = await fetch('https://www.reddit.com/.json') // This gets the data from the API
const data= await res.json() // This gets the data from the response
const posts = data.data.children // This gets the posts from the data
const randomPost = posts[Math.floor(Math.random() * posts.length)] // This gets a random post from the posts
const link=`https://www.reddit.com${randomPost.data.permalink}` // This gets the link from the random post

  console.log(`
  title: ${randomPost.data.title}
  link: ${link}
  `)

