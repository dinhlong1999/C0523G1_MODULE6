create database sprint2;
use sprint2;

create table `account`
(
id int primary key auto_increment,
`username` varchar(255),
`password` varchar(255),
is_deleted bit default 0
);

create table `role`
(
id int primary key auto_increment,
`name` varchar(255),
is_deleted bit default 0
);

create table category
(
id int primary key auto_increment,
`name` varchar(255),
is_deleted bit default 0
);

create table `status`
(
id int primary key auto_increment,
`name` varchar(255),
is_deleted bit default 0
);

create table `status_payment`
(
id int primary key auto_increment,
`name` varchar(255),
is_deleted bit default 0
);

create table `product`
(
id int primary key auto_increment,
`name` varchar(255),
price int ,
describer varchar(255),
manufacturer varchar(255),
quantity int,
category_id int,
is_deleted bit default 0,
foreign key(category_id) references category(id)
);

create table `user`
(
id int primary key auto_increment,
`name`varchar(255),
birthday date,
`address` varchar(255),
email varchar(255),
phone_number varchar(255),
gender bit,
avatar varchar(255),
id_card varchar(255),
is_delete bit default 0,
role_id int,
account_id int,
foreign key(role_id) references `role`(id),
foreign key(account_id) references `account`(id)
);

create table `order` 
(
id int primary key auto_increment,
product_id int,
quantity int,
user_id int,
status_payment_id int,
is_delete bit default 0,
foreign key(product_id) references product(id),
foreign key(user_id) references `user`(id),
foreign key(status_payment_id) references `status_payment`(id)
);

create table `booking_detail`
(
id int primary key auto_increment,
order_id int,
date_start datetime,
date_end datetime,
status_id int,
is_deleted bit default 0,
foreign key(order_id) references `order`(id),
foreign key(status_id) references `status`(id)
);



