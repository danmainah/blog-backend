# blog-backend

### This is a restful api that aloows a new user to be added and logged in, the user has ability to create a blog and add comments to a blog

# How to interact with the api

### You can use post, get put and delete to add and interact with data

## To create a new user 
 Visit `/users/signup` the add json data example 
 ```
 {  
    "fullname": "daniel maina",
    "email" : "faith@gmail.com",
    "password":  "1234dan"
}
```

## To login

 Visit  `/users/login` the add json data , the api will generate a token that you will use to interact with the api example json
  ```
 {  
    "email" : "faith@gmail.com",
    "password":  "1234dan"
}
```

## To add new blog
 Visit post `/blogs` the add json data, also ensure to add the token generated in your header/authorazition example 
   ```
 {    
    "title": "third blog",
    "content": "this is the tfosdfsdru thdsdfsdf content of the blog post",
    "reading_time": "1 minute"
}
```
## To  view blogs
 Visit `/blogs` 
 
## To  view a blog
 
  Visit `/blogs/:id` the id is the blog id
  
## To edit a blog
  
Visit `/blogs/:id` the id is the blog id, example code
```
 {   
    "title": "fifth blog",
    "content": "this is the tfosdfsdru thdsdfsdf content of the blog post",
    "reading_time": "1 minute"
}
```
   
## To delete a blog
   
Visit `/blogs/:id` the id is the blog id
 
 ## To add comment to a blog
 
 Visit `/blogs/:id/comment` the id is the blog id , example code
 ```
 {
    "message" :  "the second message"

}
```
 
 ## To view comments of a blog

 Visit `/blogs/:id/comment` the id is the blog id
 
## To edit a comment to a blog
  
Visit `/blogs/:id/comment/:id` the first id is for the blog and the second one for the comment, example
 ```
 {
    "message" :  "the fifth message"
}
```
  
## To delete a comment to a blog
  
 Visit `/blogs/:id/comment/:id` the first id is for the blog and the second one for the comment
 
