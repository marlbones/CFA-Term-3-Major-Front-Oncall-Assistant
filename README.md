On-Call Assistant
===================

Project Developer: Marlon Dimaano

Project back-end found [here](https://github.com/marlbones/CFA-Term-3-Major-Back-Oncall-Assistant)

----------
Overview
-------------
1. Project Brief
2. Problem
3. Getting Started
4. Design Journey
5. Development
6. Future

Project Brief
-------------
This project was a Term-3 major assignment for Coder Factory Academy. The project brief was as follows:

"You are to design, build, deploy and present an application built for a real world customer.

Meet with the business owner or organisation manager to find out what challenges they face. Find a problem that you can solve with an application and present your ideas to the client".

Problem
-------------
#### Client
The client I engaged with was an NGO manager for a program that provides case management/welfare support to refugees in the community.

#### Problem definition
The client manages a team of permanent and rotating case managers. Part of the teams function is to provide emergency after hours or "on-call" support to refugees in the community. This entails a single case manager manning a phone every evening where they receive calls from clients with varying issues (ranging from distressing situations to logistical ones).

The on-call case manager requires a selection of resources to assist them with their duties. These are currently carried around as physical copies in a large folder that case managers are finding disorganised and difficult to access in the heat of an emergency call. Additionally, a high level of new staff adopting on-call duties are expressing a high level of anxiety and confusion associated with the role due to the lack of organisation around the resources.

#### Solution
After discussing the problem with the client extensively, they came to the conclusion that a solution to this problem would be a platform that holds all of this information in an easily accessible, easy to use place.

#### Hamper
On-Call Assistant is a prototype web platform that aims to support on-call case managers by providing an easily accessible space to access on-call resources that are important to providing an effective on-call service. It is designed to be used alongside the organisations internal database systems and can be used on mobile devices.

Getting Started
-------------

#### Installation

Clone the project:
```javascript
git clone https://github.com/marlbones/CFA-Term-3-Major-Front-Oncall-Assistant.git
```
change into the project directory, and install the dependencies:
```javascript
yarn add
```
Run the app:
```javascript
yarn start
```

and access it through your browser:
```javascript
http://localhost:3000
```

#### Dependencies

Dependencies to install:

| npm     | Installation | 	Usage   |
| :------- | ----: | :---: |
| axios | yarn add 'axios' |  creates http request/response   |
| lodash | yarn add 'lodash' |  js library    |
| moment    | yarn add 'moment'   |  time/date formatting  |
| moment-timezone     | yarn add 'moment-timezone'    |  time/date formatting  |
| react-materialize    | yarn add 'react-materialize'   |  css framework  |


Design Journey
-------------
As per the client's request, the project was designed to be responsive, clean, and minimal. Users accessing the application would most likely be stressed or anxious, thus having a clean, intuitive design was essential.

#### User stories
Trello was used to build user stories and manage/schedule project tasks/agile developement (see image below). Trello was also used for effort estimation using an agile points system. This was done for both broad features and smaller tasks.
![user-stories](http://res.cloudinary.com/dabq7kxo6/image/upload/v1496892181/Screen_Shot_2017-06-07_at_7.31.56_pm_arsn26.png)
![user-stories](http://res.cloudinary.com/dabq7kxo6/image/upload/v1496892179/Screen_Shot_2017-06-07_at_7.31.38_pm_wumpfn.png)

#### Wireframes/User Journery
Used Sketch to combine wireframes and user journey/flow. Final product changed from concept depicted below, but a lot of elements remained true to concept.
![wireframes](http://res.cloudinary.com/dabq7kxo6/image/upload/v1496899067/Screen_Shot_2017-06-08_at_3.15.55_pm_c9kumz.png)
![wireframes](http://res.cloudinary.com/dabq7kxo6/image/upload/v1496899066/Screen_Shot_2017-06-08_at_3.16.38_pm_bvmqi6.png)
![wireframes](http://res.cloudinary.com/dabq7kxo6/image/upload/v1496899067/Screen_Shot_2017-06-08_at_3.16.10_pm_abcnqx.png)
![wireframes](http://res.cloudinary.com/dabq7kxo6/image/upload/v1496899067/Screen_Shot_2017-06-08_at_3.16.25_pm_t3idiy.png)

#### ERD
Sketch was also used to develop the ERD. ERD remained the same the whole process as only two databases were required.
![erd](http://res.cloudinary.com/dabq7kxo6/image/upload/v1496895360/Screen_Shot_2017-06-08_at_2.14.59_pm_jm1yrs.png)


Development
-------------

#### Tech Stack
Nodejs
React
Axios
React-Materialize

#### Github
Github and version control was used throughout the development process. A repository was made for front and back end.
![git](http://res.cloudinary.com/dabq7kxo6/image/upload/v1496897803/Screen_Shot_2017-06-08_at_2.56.09_pm_nhjcyy.png)

Project Future
-------------
#### Features

Development of the On-Call Assistant will be on going. Various functions still need to be added. These include:

> - Ability for Administrator to add new items to the Contact Directory.;
> - More efficient code allowing for smoother running/capabilities;
> - Added client relationships in database(i.e. linking related cients);
> - Implementation of Authorisation following feedback from RC IT;

In addition to this, testing and major code refactoring still needs to occur.

#### Outstanding issues

A number of issues present within the MVP remain outstanding. These include:
> - Filtering months in Callout Logs lists alphabetically when it should list in month order;
> - Contact Directories incomplete due to lack of information for a number of states.
