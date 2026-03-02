create database day1;
use day1;
create table Intern(
soid int,
sname varchar(80),
class varchar(70),
dob date
);
drop table Product;
create table Product(
pid int,
pname varchar(40),
cost int,
manufacture_name varchar(50)
);

insert into Product values
(1,"lux",34,"Bharath");
insert into Product values
(1,"locks",54,"Irfan");

create table employ(
e_id int primary key,
e_name varchar(50) not null,
e_salary int,
e_bg varchar(40),
e_age int,
e_email varchar(50) unique
);
select * from day1.employ;
insert into employ values(1,"naidu",40000,"+ve",20,"naidu@123");
insert into employ values(2,"rajesh",30000,"-ve",25,"");


drop database day2;
create database day2;
use day2;
CREATE TABLE employee2 (
    eid INT,
    fname VARCHAR(50),
    lname VARCHAR(50),
    age INT,
    salary INT NULL,
    dept VARCHAR(20),
    doj DATE
);

select * from employee2;

INSERT INTO day2.employee2 (eid, fname, lname, age, salary, dept, doj) VALUES
(1, 'rajeev', 'sukla', 23, 12000, '.net', '2011-10-23'),
(2, 'sowmya', 'kumari', 23, 19000, 'db', '2010-11-13'),
(3, 'kishore', 'kumar', 27, 36000, 'android', '2011-10-16'),
(4, 'abimanyu', 'biswal', 22, NULL, 'android', '2010-02-20'),
(5, 'soni', 'kumar', 24, 21800, '.net', '2009-06-21'),
(6, 'anu', '_singh', 22, 12000, 'db', '2010-10-23'),
(7, '_dinesh', 'moh%anty', 23, 15000, '.net', '2009-08-26'),
(8, 'nishala', '_kumari', 22, 18000, 'db', '2008-07-19'),
(1, 'rajeev', 'sukla', 23, 12000, '.net', '2011-10-23');


select * from day2.employee2;
select distinct * from employee2;

CREATE TABLE patient (
    pid INT,
    fname VARCHAR(50),
    lname VARCHAR(50),
    age INT,
    bg VARCHAR(10)
);
create database day2;
use day2;
INSERT INTO patient(pid, fname, lname, age, bg) VALUES
(1, 'madhava', 'reddy', 45, 'o+ve'),
(2, 'abhinav', 'bandra', 45, 'o-ve'),
(4, 'hari', 'kiran', 60, 'b-ve'),
(3, 'madhava', 'kiran', 52, 'o+ve'),
(5, 'veena', 'kumari', 42, NULL),
(6, 'k_iran', 'kumar', 39, 'b-ve'),
(2, 'abhinav', 'bandra', 45, 'o-ve'),
(7, 'mahes%h', 'nambootri', 36, 'b+ve'),
(8, 'rahul', 'kumar', 46, 'b-ve'),
(9, 'bharat', 'kumar', 56, 'b-ve');

select * from patient;
select bg from patient group by bg;
select count(*) from patient group by bg having bg='b-ve';
select count(pid) from patient;
select p1. * from patient p1 where 3=(select count(distinct(p2.pid)) from patient p2 where p2.age>p1.age);

use day1;
create table Stu(
id int,
name varchar(40),
age int
);
use day1;
select * from Stu;

insert into Stu values(1,"pavan",20);
insert into Stu values(2,"irfan",30);
insert into Stu values(3,"naidu",40,"male");


alter table Stu add gen varchar(40);
alter table Stu drop column gen;
insert into Stu(gen) values(male);
alter table Stu rename column name to Sname;
delete from Stu where Sname='naidu';
SET SQL_SAFE_UPDATES = 0;

create table Stu2(
sno int,
name varchar(20),
branch varchar(20)
);
