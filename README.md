## Simple feedback application to leave comments

Aim of this app was to do some excercise with react to create small web application. It is connected with json-server which is providing data. In Context component all REST calls are being proceed allowing user to create, edit, and delete each of feedback. In addition there was an About page added which is using React-router. 

![image](https://user-images.githubusercontent.com/44081987/198843820-7f0cea1f-0a26-4436-b218-e5865f4f0a1a.png)

## Edition of feedback 
Every comment can be edited by simply clicking edit icon visible on each of feedback component. When edition button is clicked object is read from datebase and it is available for a update, user can update description and rating as well. After clicking save button, data is updated in database. On the example below we are updating first comment wiht change of description and rating.


![image](https://user-images.githubusercontent.com/44081987/198843832-54314f1e-15db-4148-af0f-dfdddd80f285.png)


After saving changes, first feedback comment have got changed. 


![image](https://user-images.githubusercontent.com/44081987/198843854-494d726b-7c4d-43f2-8891-9c53e6f84e5a.png)


## Deletion of feedback comment. 

On each of feedback comments there is an delete icon, after clicking on it, there would be an question displayed if user is sure and if it really wants to delete this item. In the example below we are going to delete last comment, after clicking ok on the window displayed at the top, component with comment is being deleted.


![image](https://user-images.githubusercontent.com/44081987/198843896-3eda3e70-c038-4ed9-9a41-86a550beb810.png)

Last comment was succesfully deleted from page and from database. 

![image](https://user-images.githubusercontent.com/44081987/198843914-cbfc7a81-3892-4542-a411-ecd2204f268c.png)

## About page

This project also contains about section where react-router was used. 


![image](https://user-images.githubusercontent.com/44081987/198843876-824262fd-8cf5-408e-9677-95f57fa38dca.png)
