create table users (
id SERIAL PRIMARY KEY,
username VARCHAR(255),
password VARCHAR(255),
user_img text
)

update users 
set user_img = 'https://www.nature.scot/sites/default/files/styles/teaser_feature_image_large/public/2017-07/Otter-01v2.jpg?itok=jkXOHvpu'
where id = 7