# Session 2 - Actual Development: The Practicals

## Table of Content

- [Session 2 - Actual Development: The Practicals](#session-2---actual-development-the-practicals)
  - [Table of Content](#table-of-content)
  - [Homework Sharing Session](#homework-sharing-session)
  - [Expectations & Outcomes](#expectations--outcomes)
  - [A brief mention on version control](#a-brief-mention-on-version-control)
  - [Pre Development](#pre-development)
    - [Key features](#key-features)
  - [Planning & Designing the application](#planning--designing-the-application)
    - [Visualize](#visualize)
    - [Modelling](#modelling)
    - [Interaction](#interaction)
  - [Research](#research)
  - [Frontend (React)](#frontend-react)
    - [Starting from Design](#starting-from-design)
    - [Best Practises](#best-practises)
    - [Design Guidelines](#design-guidelines)
    - [Before we continue, a litte context since JS moves faster than the speed of light](#before-we-continue-a-litte-context-since-js-moves-faster-than-the-speed-of-light)
    - [What's React](#whats-react)
    - [Why React](#why-react)
    - [The use of React Component Libraries](#the-use-of-react-component-libraries)
    - [Beginning of the Project](#beginning-of-the-project)
  - [Backend (Django with DRF)](#backend-django-with-drf)
    - [Setting up a virtual environment](#setting-up-a-virtual-environment)
    - [API design](#api-design)
  - [Connecting Front and Back](#connecting-front-and-back)
  - [Testing and Test Driven Development](#testing-and-test-driven-development)
    - [Unit Tests](#unit-tests)
    - [Functional Tests (End-to-end)](#functional-tests-end-to-end)
    - [Test Coverage](#test-coverage)

## Homework Sharing Session

Let's share about the 5 articles that we've read last week!

## Expectations & Outcomes

Before this course, you are expected to:

- Had participated in the first workshop (if you didn't, I'm sad, go read up on the materials on Github.)
- Have some experience in programming
- Have revisioned basic knowledge on Javascript and Python

The expected outcomes after this workshop is:

- Understands how applications are generally built
- Learns basic knowledge of React and Django with DRF
- Understands the underlying mechanisms of Web Frameworks
- Understands Web API design
- Understands the importance of testing

In this tutorial, let's make a simple forum application!

With this, let's start the software development process that we are familiar before.

But before we start...

## A brief mention on version control

Version Control Systems(VCS) had become one of the most crucial develop tools ever since their release. VCS allows developers to record changes done to a set of files over time so we can **recall specific versions or changes later**. Furthermore, with VCS, we can **easily collaborate** as well, given that the changes each user made can be easily compared and even merged.

We will be using the **Git** VCS throughout the session, so go get it if you haven't.

## Pre Development

It's time to apply what we've learnt last week.

Using the flow:

1. Aim
2. Goal
3. Visualize
4. Modelling
5. Interaction
6. Research
7. Development
8. Present
9. Iterate
10. Hit

Let's first define the **Aim** and the **Goal** of the application.

Since we don't really have a client defined for us now, let's imagine the client is the School of Computer Science, and they approach us for the development of the forum.

What may be the **aim** of the forum then? Remember, the **aim** represents the business needs, or the actual intention that motivates the creation of the software (What the client wants).

Well, maybe the school wants to **connect with its student better**? Or maybe, the school wants a more **engaging learning environment**?

That certainly seems plausible, so after asking our clients, maybe they ended up actually having this as their **aim**.

After getting to know their **aim**, we now want to know the **goals** of this application. Remember, the **goals** describes how the software should solve the problem.

In this case, a forum makes sense. With a forum, students can easily communicate to discuss about important issues between each other and also lecturers. All the information that was recorded can also be easily accessed by new incoming students if they have any issues with, becoming a good source of references. The school can also see student's progress judging by the questions ask, and easily address some concerns that they might have. These all fulfilled the **aim** to some degree. (Food for thought: is there a better idea?)

So now, we have these information:

1. Aim: To better connect with students and create an engaging learning environment.
2. Goals: Forums for School of Computer Science, providing a place for lecturers and students to communicate.

### Key features

Now we have some information, coming up with some key features becomes easier. Keeping them in mind, we can come up with these features:

1. Users must be able to login using their university accounts
2. Users must be able to make threads on certain topics
3. There should be multiple topics that users can make threads on, so that the website is catogorically organized
4. User should be able to reply to threads
5. User should be able to search threads
6. User should be able to see the newest threads on the first page, based on categories
7. There should be 3 types of user: Students, Lecturers, Admin
8. Admin must be able to moderate threads (Delete)

## Planning & Designing the application

With the requirements done, we can look to design and plan for the application!

### Visualize

Let's start with visualizing the application. As said before, this is the step where we try to visualize how a application would look and hopefully from that we can understand more about the application we are going to develop on. This step is particularlly useful especially if one have access to frequent client feedback.

So, from the requirements we draw a general sketch on what would it look like.

![Visualize Example](./assets/visualize.png)

As you may see, it is generally a low fidelity prototype, designed to have an idea on how things should happen **from a visual persective (frontend view I guess)**

Everything here needn't be fully set in stone, its just a tool for us to understand the application more. However, when communicating with client or if there is a need for documentation, evolving this to a higher detail design is okay as well.

If the visualization can be confirmed, we can also evolve it to a more detailed design to be used by frontend.

### Modelling

Now, we proceed to model the data of the application. There is multiple ways to do modelling for the application, but all of them have the same goal: to **show how data represented and what data is needed in the application**. This show how things works **in terms of data (backend view)**.

We can choose to show the data modelling with ERD. I normally use a severly lacking ERD to roughly draft out the data modelling, and "upgrade" it to a full scale ERD if need be afterwards.

The modelling should be done with requirements in mind, and should be able to capture data needed based on the requirements, be it the data from input, currently processed, output, records or third party, anything that would. However, take note that we do not need to model the data flow, merely needing to model those that we would be using. In a simple sense, one could say that we are actually aleady designing the database.

![Modelling Example](./assets/modelling.png)

One thing that people might be curious about especially those with some database knowledge is the applicability of ERD for NoSQL databases, especially since some of them don't really utilize concepts like keys, joins or relations. For that, I would argue that here we are mainly using ERD as a tool to visualize the data models involved, and that there is value in having a glimps, especially when you are trying to generally plan out your application and understand more about it.

### Interaction

Now that we have the visualization and the data models, we can proceed to design the interaction. The interaction here refers to that of the interactions of frontend and backend, detailing how data is essentially passed around the entire application. What we are essentially doing can be said to be designing the high level view for the API.

One way of doing that can be so:

![Interaction Example](./assets/interactions.png)

This can be a little difficult to understand, but all the rectangles refers to each visual page, and each circle refers to each data model. 3rd party APIs can also be included, represented as a triangle here, connecting to the data model.

In another sense, the interaction can also represent the essential **architecture** of the application, represented like so:

![Architecture Example](./assets/arch.png)

You might notice that we've gone for the client-server architecture here, mainly due to the material that we are covering (React frontend and Django Backend), which utilizes a SPA frontend that allows it to be more reactive if needed. This architecture also allow extention into a mobile application if need be in the future, as the APIs can be shared for both the SPA and the native app.

Do note that, this application can be done fully from django alone with a fully server side architecture, with good results. In fact, I believe most forums employ the fully server side architecture as forums do not really need the reactivity with their use case, so you can say we are slightly overengineering this.

*Note: Shape in the architecture example do not hold meanings, they are meant to seperate things only*

## Research

In most cases, research will be done on key features that are more unique in nature, which are usually not really found on the current market. Research would also be done on things that are not known to the developer.

These research affects the implementation of key features and thus the other aspects of the application, such as the UI (visualization), the database design (data modelling) and even the API and architectural design (interactions). This is why research, although placed after the planning phase, is normally done throughout the previous phase as well.

After the planning phase, the research would be more about how the implementation would work, and what technology best fit the problem faced. In this case, we are trying to learn React and Django with DRF, so we would just say that we've chose this as our approach.

## Frontend (React)

A well known and effective approach to software development is the front-to-end approach. This implies that the development starts from the frontend instead of from the backend. This is generally a good idea as it is very hard for us to get an idea on how the application will be like if we start from modelling the data, thus requiring more changes in the backend.

So, that said, let's start development. Make sure that you already have **NodeJS** and **create-react-app** installed on your computer!

For those trying to use React Native for their mobile application, or those that are using other technologies not taught here, no worries. You can still learn some concepts here that might help you get started with your project, so hold on!

### Starting from Design

Before we actually dive into coding for frontend, we first have to design the interface that we want. We do this via various tools, such as Sketch or Adobe XD. Using these tools, we can first define how the application would look like before getting our hands dirty with coding, which is more expensive to create and implement, reducing time taken for development.

From your design, you would want to capture a few things:

1. The general look and feel, the theme of the application (color scheme, fonts etc)
2. The functionality of each pages
3. The interaction between pages

### Best Practises

There is a few things you should be looking out for when designing as well, the so called best practises.

1. Responsiveness: What you create should be able to adapt to any screen size **nicely**
2. Consistency is key: ensure your margins, paddings, fonts sizes, and other things are all consistent
3. Don't use too much colour, choose a pallette: Too much colours just makes it annoying
4. Use whitespaces: Whitespace ensure that use would get clouded by too much information at once
5. Make it Dumb & Simple: Make everything simple enough that even a new user can use it rather quickly
6. SHOW the main point: Make the things you want user to see more obvious

There's a lot more out there, feel free to look for them.

### Design Guidelines

Professionals from big companies spent a lot of time on designing a good interface for their user to ensure that user have good experiences when using their product. From these experiences, they had come up with design guidelines which can help us design product better. These are some of them:

1. [Microsoft Design](https://www.microsoft.com/design)
2. [Apple Design](https://developer.apple.com/design/)
3. [Ant Design](https://ant.design/)
4. [Material Design](https://material.io/design/)

### Before we continue, a litte context since JS moves faster than the speed of light

When studying React here, we will be using the newer **React Hooks** since its not only easier to read but also understand, and people had been stating its perks (quotation needed).

Do note that you may use whatever APIs provided by React to achieve the same purpose.

### What's React

> ReactJS is an open source JavaScript library designed by Facebook for creating rich and engaging web apps fast and efficiently with minimal coding.

### Why React

- Reusable Component
- Freedom
- Flexible
- Readable
- Reactive and Fast
- Easy to Learn
- Good ecosystem

### The use of React Component Libraries

React component libraries refers to libraries(or code) written by other people filled with reusable components that we can use directly. We ae using those here since they allow us to code easier. However, do remember that they are no different from us implementing the code ourselves!

The component library that we will be using here is the Material-UI component library, which follows the Material Design Guidelines.

### Beginning of the Project

After designing the frontend UI, we can finally start the development process. First, we start by creating a react application via `create-react-app` like so:

```bash
npx create-react-app cs_forum_frontend
```

It should take some time to install and initialize the entire thing. When it is done, run the following command on your command line:

```bash
# Change directory into the created project
cd cs_forum_frontend

# Actually run the code
npm start
```

If the application run as expected, with a screen that tells you to edit `App.js` then you've suceeded in starting the project!

Now, let's install all the dependencies that we might need for this application. In `cs_forum_frontend`, do:

```bash
# Install material ui libraries
npm install @material-ui/core

# Install the roboto font
npm install typeface-roboto
```

## Backend (Django with DRF)

### Setting up a virtual environment


### API design

## Connecting Front and Back

## Testing and Test Driven Development

If you haven't notice, we haven't been writing a single line of test cases ever since we started the tutorial which is fine because we are just trying to learn the basics. However, when developing commercialized application, testing can be crucial that your application do not fail during production, which may cause a major financial loss.

So, how do we do testing then? Well there are multiple types of tests, from smaller test scale to bigger scale:

1. Unit Tests
2. Functional Tests (End-to-end)
3. Black Box Tests (Alpha & Beta Tests)
4. Market Acceptance Tests

### Unit Tests

### Functional Tests (End-to-end)

### Test Coverage

Test coverage is a useful metric that measures the amount of testing performed by the tests. Basically, test coverage is the measure of how much of the code is covered by the tests, via gathering information on which part of the code is executed during testing phase.

Using test coverage, we can ensure that most if not all of out code are tested, by finding out areas that are not covered.
