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
    - [A brief introduction to React and its few core concepts](#a-brief-introduction-to-react-and-its-few-core-concepts)
    - [The use of React Component Libraries](#the-use-of-react-component-libraries)
    - [Making an MVP](#making-an-mvp)
    - [Structuring your application in React](#structuring-your-application-in-react)
    - [The first screen, the Home Screen](#the-first-screen-the-home-screen)
    - [Making a Navigation Bar](#making-a-navigation-bar)
    - [The page for creating threads](#the-page-for-creating-threads)
    - [Routing](#routing)
    - [Starting on the Thread screen](#starting-on-the-thread-screen)
    - [Let's not forget logging in](#lets-not-forget-logging-in)
  - [Backend (Django)](#backend-django)
    - [Enter our framework of the day: Django](#enter-our-framework-of-the-day-django)
      - [On the nature of django web framework](#on-the-nature-of-django-web-framework)
    - [Virtual environment for Python](#virtual-environment-for-python)
    - [Development tools](#development-tools)
    - [Starting development! Creating a new django project](#starting-development-creating-a-new-django-project)
    - [Creating our first app in django](#creating-our-first-app-in-django)
    - [Defining the models](#defining-the-models)
    - [Utilizing the Admin Panel](#utilizing-the-admin-panel)
    - [Views](#views)
    - [Serialization](#serialization)
    - [Routing and URLS](#routing-and-urls)
    - [API design](#api-design)
    - [Authentication and Permission](#authentication-and-permission)
  - [Connecting Front to Back](#connecting-front-to-back)
    - [Home Screen](#home-screen)
    - [New Thread Screen](#new-thread-screen)
  - [Testing and Test Driven Development](#testing-and-test-driven-development)
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

![Visualize Example](./assets/visualize.jpg)

As you may see, it is generally a low fidelity prototype, designed to have an idea on how things should happen **from a visual persective (frontend view I guess)**

Everything here needn't be fully set in stone, its just a tool for us to understand the application more. However, when communicating with client or if there is a need for documentation, evolving this to a higher detail design is okay as well.

If the visualization can be confirmed, we can also evolve it to a more detailed design to be used by frontend.

### Modelling

Now, we proceed to model the data of the application. There is multiple ways to do modelling for the application, but all of them have the same goal: to **show how data represented and what data is needed in the application**. This show how things works **in terms of data (backend view)**.

We can choose to show the data modelling with ERD. I normally use a severly lacking ERD to roughly draft out the data modelling, and "upgrade" it to a full scale ERD if need be afterwards.

The modelling should be done with requirements in mind, and should be able to capture data needed based on the requirements, be it the data from input, currently processed, output, records or third party, anything that would. However, take note that we do not need to model the data flow, merely needing to model those that we would be using. In a simple sense, one could say that we are actually aleady designing the database.

![Modelling Example](./assets/modelling.jpg)

One thing that people might be curious about especially those with some database knowledge is the applicability of ERD for NoSQL databases, especially since some of them don't really utilize concepts like keys, joins or relations. For that, I would argue that here we are mainly using ERD as a tool to visualize the data models involved, and that there is value in having a glimps, especially when you are trying to generally plan out your application and understand more about it.

### Interaction

Now that we have the visualization and the data models, we can proceed to design the interaction. The interaction here refers to that of the interactions of frontend and backend, detailing how data is essentially passed around the entire application. What we are essentially doing can be said to be designing the high level view for the API.

One way of doing that can be so:

![Interaction Example](./assets/interactions.jpg)

This can be a little difficult to understand, but all the rectangles refers to each visual page, and each circle refers to each data model. 3rd party APIs can also be included, represented as a triangle here, connecting to the data model.

You might notice that we've gone for the client-server architecture here, mainly due to the material that we are covering (React frontend and Django Backend), which utilizes a SPA frontend that allows it to be more reactive if needed. This architecture also allow extention into a mobile application if need be in the future, as the APIs can be shared for both the SPA and the native app.

Do note that, this application can be done fully from django alone with a fully server side architecture, with good results. In fact, I believe most forums employ the fully server side architecture as forums do not really need the reactivity with their use case, so you can say we are slightly overengineering this.

*Note: Shape in the architecture example do not hold meanings, they are meant to seperate things only*

## Research

In most cases, research will be done on key features that are more unique in nature, which are usually not really found on the current market. Research would also be done on things that are not known to the developer.

These research affects the implementation of key features and thus the other aspects of the application, such as the UI (visualization), the database design (data modelling) and even the API and architectural design (interactions). This is why research, although placed after the planning phase, is normally done throughout the previous phase as well.

After the planning phase, the research would be more about how the implementation would work, and what technology best fit the problem faced. In this case, we are trying to learn React and Django with DRF, so we would just say that we've chose this as our approach.

## Frontend (React)

A well known and effective approach to software development is the front-to-back approach. This implies that the development starts from the frontend instead of from the backend. This is generally a good idea as it is very hard for us to get an idea on how the application will be like if we start from modelling the data, thus requiring more changes in the backend.

Here, things would start to get technical. Do try to keep up, and if there are any questions, please do ask me.

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
5. Etc. Many design guidelines are out there, with frameworks implementing them. Discover!

### Before we continue, a litte context since JS moves faster than the speed of light

When studying React here, we will be using the newer **React Hooks** since its not only easier to read but also understand, and people had been stating its perks (quotation needed).

Do note that you may use whatever library APIs provided by React to achieve the same purpose.

### What's React

> ReactJS is an open source JavaScript library designed by Facebook for creating rich and engaging web apps fast and efficiently with minimal coding.
> React Native combines the best parts of native development with React.
> Expo is an open-source platform for making universal native apps for Android, iOS, and the web with JavaScript and React.

### Why React

- Reusable Component
- Freedom
- Flexible
- Readable
- Reactive and Fast
- Easy to Learn
- Good ecosystem

### A brief introduction to React and its few core concepts

Try looking into `App.js`, the code you are looking at is es6, which is a standard for javascript that improves it. Basically, it is still javascript, similar to what was used for web sites and all.

The HTML like syntax that you might have notice, is called JSX. Its basically like templating, which allows you to insert markup language inside code. The structure is intuitive especially to people coming from web development.

Another thing you might have noticed is the fact that a function is returning the markup. In this case, the function can now be referred to as a React component. A component is some UI or non-UI element that does a certain thing, which can be use to build bigger things (an application). Components can be designed to be reusable, which reduces development time when a repetitive component would be needed. Components accepts parameters from their parents or creator, called **props** (properties), which allows some data to be conveyed from parents to child. Each component can also have their own **state**, which is variables that would affect the behaviour/view of the component as it changes.

One can write components using functions or classes. Any function returning JSX would be recognised as a component. As for classes, to become a component it would have to inherit the React.Component class. Both approaches are viable, but here since we are utilizing React Hooks, we will mainly focus on function-based components.

### The use of React Component Libraries

React component libraries refers to libraries(or code) written by other people filled with reusable components that we can use directly. We ae using those here since they allow us to code easier. However, do remember that they are no different from us implementing the code ourselves!

The component library that we are using is [Material-UI](https://material-ui.com/), which follows the material design guidelines. There are many out there, which you are free to explore.

### Making an MVP

Let's focus on making a minimal viable product of a forum for this tutorial. Referring to the design, let's strip it down a little bit and make a web app with 4 screens. Here screens refers to how many distinct "pages" the app has. (Technically, the app only has one html document, with javascript rendering any changes onto the html document, so its actually one page only)

1. Home Screen -> Page that shows all the threads
2. Create New Thread Screen -> Page for user to create a new thread
3. Thread Screen -> A single thread view with all the replies and conversation happening
4. Login Screen -> Where the user actually login

You might be wondering: Hey! Wheres the register screen, or the Topic screen? We will not be implementing those here, but feel free to try implementing them yourself after this!

### Structuring your application in React

When developing with React, we normally follow a certain folder structure, or project structure to ensure everything is nicely organized so we can maintain the code easier later.

For me, when developing in react, I usually have the following structure:

```bash
src/
    components/
    context/
    screens/
    App.js
    index.js
    serviceWorker.js
```

`components` would hold all the reusable and shared components for the application. `context` holds all the React context (You can think of them as services) that I defined and use in the applicaiton. `screens` holds all the screens for the application built from multiple components.

### The first screen, the Home Screen

Let's begin from the Home Screen. The home screen should show all the threads that was created by all users, ordered by their created date. Thus, let's begin.

Starting with the base code, let's name the file `Home.js` and put it in the `screen/` folder:

```javascript
import React from "react";

export default function Home(props){
  return <div></div>;
}
```

So, now we have a basic React component. We probably want it to display a list of threads, centered in the middle of the app, showing its title and maybe...the date of creation. Also, it should be ordered based on its date of creation.

Thus, we look into the `@material-ui/core` library and try to find some components that can help us achieve this. We can find multiple suitable components that we can build on, namely `Grid` which helps us layout our screens, and `List` which helps us build a list to show all the threads. We can also utilize the `Divider` component to divide the list items.

So, let's start with using `Grid`:

```javascript
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";]

export default function Home(props) {

  return (
    <Grid container justify="center">
      <Grid item sm={8}>
      </Grid>
    </Grid>
  );
}
```

The `Grid` component creates a Grid layout that divides your screen into 12 sections. You can then specify how much of the sections you want to occupy using the breakpoints props, which here we are using `sm={8}`, which sets the breakpoints to change the size at small screens size values(phone like sizes), with lesser screen size causing the `Grid` to occupy the whole screen, and larger ones limited to occupying 8 columns only. The `justify="center"` prop specifies the items inside the container would be centered. With the use of `Grid`, your content would be responsive and change according to screen sizes. With this setup, we can now move forward to building the list.

```javascript
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";

const useStyles = makeStyles(theme => ({
  listContainer: {
    width: "100%",
    backgroundColor: theme.palette.background.paper
  }
}));

export default function Home(props) {
  return (
    <Grid container justify="center">
      <Grid item sm={8}>
        <List className={classes.listContainer}>
            <ListItem alignItems="flex-start">
              <ListItemText
                primary={"Thread Title"}
                secondary={"Thread Publish Date"}
              />
            </ListItem>
            <Divider component="li" />
            <ListItem alignItems="flex-start">
              <ListItemText
                primary={"Thread Title"}
                secondary={"Thread Publish Date"}
              />
            </ListItem>
            <Divider component="li" />
        </List>
      </Grid>
    </Grid>
  );
}
```

Take a second to look at the code. Here, what we are doing is fairly simple. We add a new `List` component inside `Grid`, and start adding `ListItem` with its content inside the `List`. Then, we use a `Divider` to seperate multiple `ListItem` to give it a better look.

At this point, you might get confused; But no worries, what we are actually doing is actually still writing web based code, however we are utilizing material-ui's component library to help us quickly come up with a good looking webapp quickly. The underlying technologies is still javascript, html and css, and as you see, I did use some css above to actually style the list.

At this point, you might also had already notice the use `props`. When you specify some sort of parameters when adding components to alter its values or behaviours, you are actually passing in `props` so that they know what they should do. An example:

```javascript
<ListItemText
  primary={"Thread Title"}
  secondary={"Thread Publish Date"}
/>
```

Here, when you pass in `primary={"Thread Title"}`, you are actually telling the component that: For the `primary` variables in the component, I want it to become `"Thread Title"`. This would then change the rendering output, showing a `ListItemText` with the value given in `primary`. One way of thinking about `props` is essentially that they act as a function parameter of sorts, or "component parameters" in this case. `props` is one of the main methods to pass data from components to components.

Now, although we've been working on this screen, we don't really get to see the output, so to let us see the result, let's go the `App.js` and make some modification.

```javascript
import React from "react";
import "./App.css";
import Home from "./screens/Home";

function App() {
  return <Home />;
}

export default App;
```

Try doing `npm start` in your console, you should see your page up and running.

### Making a Navigation Bar

A home page is good and all, but now we need to navigate around with some means. Let's make a simple navigation bar, again with the help of `@material-ui/core` library. After checking the documentation, we are delighted to find a navigation element that we can use, called AppBar. To start, lets create a file called `MyAppBar.js` inside the `components/` folder. Lets add these in:

```javascript
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
}));

export default function MyAppBar(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
              CS Forum
          </Typography>
            <Button
              color="inherit"
              variant="outlined"
              className={classes.menuButton}
              endIcon={<AddIcon />}
            >
              Create New Thread
            </Button>
            <Button color="inherit" variant="outlined" >
              Login
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}
```

This code is actually a modified code taken directly from material-ui's documentation. Here, you can see we created a very basic app bar with the library, with 2 buttons, one for creating new thread, another one for logging in. Take some time to read and understand the code. (Note: Check documentation if you have anything that you have some question to.)

To take a look at this appbar that we've made, you can replace `Home` with  `MyAppBar` in `App.js`.

```javascript
import React from "react";
import "./App.css";
import Home from "./screens/Home";
import MyAppBar from "./components/MyAppBar"

function App() {
  return <MyAppBar />;
}

export default App;
```

Nice! But what if we want to have the App bar always be there for the rest of the web application experience? First of all, we should put the `MyAppBar` at a place that shares all the screens, since all of them needs it to navigate, which now happens to be `App.js`. We want it there because putting it there would reduce the amount of rendering each screen would have to do each time they load up, and also it complicates things when we want the login button or create thread button to change based on the current authentication state.

So how do we do that? Well, we can rely `props`. There is a `props` element called `children` that contains the element that is wrapped inside an element. Like so:

```javascript
// ComponentParent is wrapping ComponentChild
<ComponentParent>
  <ComponentChild>
  </ComponentChild>
</ComponentParent>

// So, now ComponentParent can access ComponentChild via props.children
```

Applying it in our application:

```javascript
// MyAppBar.js
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
}));

export default function MyAppBar(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
              CS Forum
          </Typography>
            <Button
              color="inherit"
              variant="outlined"
              className={classes.menuButton}
              endIcon={<AddIcon />}
            >
              Create New Thread
            </Button>
            <Button color="inherit" variant="outlined" >
              Login
            </Button>
          )}
        </Toolbar>
      </AppBar>
      {props.children}
    </div>
  );
}
```

```javascript
import React from "react";
import "./App.css";
import Home from "./screens/Home";
import MyAppBar from "./components/MyAppBar"

function App() {
  return (
    <MyAppBar>
      <Home>
    </MyAppBar>
  );
}

export default App;
```

Now it works!

### The page for creating threads

Ok, now, let's start creating a page for creating new threads.

Each threads would have its own title and contents. So, to let user create a thread, we need a form with two of these as text fields.

Easy enough right? Let's get started!

Looking through the documentation for `@material-ui/core` library, we can use their `TextFields` component directly.

So, let's make a screen with just a form, name it `NewThread.js` and put it inside the `screens/` folder.

```javascript
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, TextField, Button } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4)
  },
  formEle: {
    marginBottom: theme.spacing(2)
  }
}));

export default function NewThread(props) {
  const classes = useStyles();

  return (
    <Grid container justify="center" className={classes.root}>
      <Grid item sm={6}>
        <TextField
          label="Title"
          variant="outlined"
          fullWidth
          className={classes.formEle}
        />
        <TextField
          label="Content"
          variant="outlined"
          multiline
          rows="4"
          fullWidth
          className={classes.formEle}
        />
        <Button
          color="primary"
          variant="contained"
          fullWidth
        >
          Create
        </Button>
      </Grid>
    </Grid>
  );
}
```

Again, the Grids are here to layout the screen, in addition to ensuring responsiveness for your application. Then we just add 2 `TextField`s and a `Button` for creating a new thread.

To see how it looks, we can replace the `Home` screen inside `App.js` to take a look at how `NewThread` screen would look like.

Now, since we would need to take the newest values of the title and content from the `TextField`s when we want to create a new thread, we should add internal state so that we can retrieve or change these values when needed, this is where `state` comes in.

`state` is a variable that belongs to a component that is mutable/changeable. It is used when you have some sort of internal values that would require a re-rendering of the component when it is updated.

In this case, we would want the value of `TextField` to be saved and recorded on each change, so that we can access it later when the create button is pressed. So, to do that, we can utilize the React Hook `useState()`. The `useState()` hook creates a state and a function that sets the value of the set, which we can then use to manage component states in function-based components. We can use it like so:

```javascript
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, TextField, Button } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4)
  },
  formEle: {
    marginBottom: theme.spacing(2)
  }
}));

export default function NewThread(props) {
  const classes = useStyles();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  handleCreate = () => {
    setTitle("");
    setContent("");
  }

  return (
    <Grid container justify="center" className={classes.root}>
      <Grid item sm={6}>
        <TextField
          label="Title"
          variant="outlined"
          value={title}
          onChange={event => setTitle(event.target.value)}
          fullWidth
          className={classes.formEle}
        />
        <TextField
          label="Content"
          variant="outlined"
          value={content}
          onChange={event => setContent(event.target.value)}
          multiline
          rows="4"
          fullWidth
          className={classes.formEle}
        />
        <Button
          color="primary"
          variant="contained"
          onClick={handleCreate}
          fullWidth
        >
          Create
        </Button>
      </Grid>
    </Grid>
  );
}
```

As you may have observed, I have created 2 states, title and content, 
with initial value of empty string, and pass them as props into the `TextField` `value`. This tells `TextField` to set its value to state's value.

Now, to capture the actual change and update the state values, we need to utilize the return function given to use by `useState()`, the function that allows us to set the value of the given state. To capture these changes, we pass in a function as the `onChange` prop into the `TextField` component, which would cause the funciton to be called everytime some changes is made to the `TextField` component, thus updating the values of the state to its newest state. We also passed a `onClick` prop into the button, which would be called when the button is clicked, and for now just rest the form. All these props starting with `on`, are mostly events, which we can specify to do something when some event happens, allowing us to define user interactions basically.

### Routing

Although we are able to view each of our components individually, it is hard for us to navigate around without changing the source code; In fact, we have not trully navigated around the app. Thus, let's introduce routing into our application.

Routing as its name suggests, routes things. In this case, it helps routes urls into specific pages. Here, we will be using `react-router-dom` library, which would help us a lot for routing. Let's start by installing it in the project directory.

```bash
npm i react-router-dom
```

After installation is done, let's start using it, referring to the library, let's change `App.js`.

```javascript
import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import MyAppBar from "./components/MyAppBar";
import Home from "./screens/Home";
import NewThread from "./screens/NewThread";

function App() {

  return (
    <Router>
      <MyAppBar>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/newthread">
            <NewThread />
          </Route>
        </Switch>
      </MyAppBar>
    </Router>
  );
}

export default App;
```

So here, we wrap everything with a `Router` component, which enables routing via passing props and states to its child.

We then use `Switch` to wrap around screens or components to allow us to switch between routes(url).

We then use `Route` to define the routes that what to match to, wrapping the screens or component we want to display when the routes is matched.

Now, if we go to `/newthread`, we will be brought to the New Thread screen.

Ok great, lets also allow navigating to this page via the create new thread button.

```javascript
// MyAppBar.js
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import { Link, useHistory } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  noLinkDeco: {
    textDecoration: "inherit",
    color: "inherit"
  }
}));

export default function MyAppBar(props) {
  const classes = useStyles();
  const history = useHistory();
  const {
    homeURL,
    createThreadURL
  } = props;

  const handleCreateThread = () => {
    history.push(createThreadURL);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <Link to={homeURL} className={classes.noLinkDeco}>
              CS Forum
            </Link>
          </Typography>
          <Button
            color="inherit"
            variant="outlined"
            className={classes.menuButton}
            endIcon={<AddIcon />}
            onClick={handleCreateThread}
          >
            Create New Thread
          </Button>
          <Button color="inherit" variant="outlined">
          Login
          </Button>
          )}
        </Toolbar>
      </AppBar>
      {props.children}
    </div>
  );
}
```

Here, you can see we used the `useHistory` react hook provided by the `react-router-dom` library to access the history object, which allows us to navigate to whatever url/routes we want. We then create a `handleCreateThread` function, which uses the `history` object to navigate to the `newthread/` url. We also used a Link which had its text decoration stripped away on the title, so that users can conveniently navigate back to their home screen if need be.

To allow for reusability, the url for the create thread and the home screen would be made a prop, so that it can be configured by its parent, which in this case would be `App.js`.

Let's make some relevant changes:

```javascript
// App.js
import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import MyAppBar from "./components/MyAppBar";
import Home from "./screens/Home";
import NewThread from "./screens/NewThread";

function App() {

  return (
    <Router>
      <MyAppBar 
      homeURL="/"
      createThreadURL="/newthread"/>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/newthread">
            <NewThread />
          </Route>
        </Switch>
      </MyAppBar>
    </Router>
  );
}

export default App;
```

### Starting on the Thread screen

Now, let's focus on making the thread screen, as in the screen with all the posts and discussion on a single thread. So, to begin with, we know it would look similar to home screen, but just limited to athat single thread. Thus:

```javascript
import React, { useState} from "react";
import { withRouter } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import AuthContext from "../context/AuthContext";

const useStyles = makeStyles(theme => ({
  listContainer: {
    width: "100%",
    backgroundColor: theme.palette.background.paper
  },
  replyBox: {
    padding: theme.spacing(2)
  }
}));

function Thread({ match }) {
  const threadID = match.params.id;
  const classes = useStyles();
  const [replyContent, setReplyContent] = useState("");
  
  const handleReply = () => {
      setReplyContent("");
    }
  };

  return (
    <Grid container>
      <Grid item xs={12}>
        <List className={classes.listContainer}>
          <ListItem alignItems="flex-start">
            <ListItemText
              primary={<strong>{"Title"}</strong>}
              secondary={
                <React.Fragment>
                  {"Username(Data)"}
                  <Typography variant="body2" color="textPrimary">
                    {"Content"}
                  </Typography>
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider component="li" />
            <React.Fragment>
              <ListItem alignItems="flex-start">
                <ListItemText
                  secondary={
                    <React.Fragment>
                      {"Username(Data)"}
                      <Typography variant="body2" color="textPrimary">
                        {"Content"}
                      </Typography>
                    </React.Fragment>
                  }
                />
              </ListItem>
              <Divider component="li" />
            </React.Fragment>
            <ListItem alignItems="flex-start">
              <TextField
                label="Replies"
                multiline
                fullWidth
                value={replyContent}
                onChange={event => {
                  setReplyContent(event.target.value);
                }}
              />
              <Button color="primary" onClick={handleReply}>
                Reply
              </Button>
            </ListItem>
        </List>
      </Grid>
    </Grid>
  );
}

export default withRouter(Thread);
```

That might seem a bit confusing, but let's take a careful look.

Using things we've learnt before, we imitated the code from the main screen and used it here. Now however, we have a big thread title and content up at the very top, followed by its replies and discussion below. We also added a input field and a button to allow user to reply, in addition to implementing the states.

One thing that you may not be familiar with is the use of `withRouter` here. Why are we using this here? Well, for the `Thread` screen, we actually need to render different data based on different threads, and creating one for each of them is just madness. Thus, what we do is that we use an id to identify the thread by a number. By doing that, we can pass this information to the `Thread` screen rendering correct information. The `match` prop would be accessible via the `withRouter` wrap on the component, providing the information required.

Let's also make the relevant changes on `App.js`.

```javascript
import React, { useState, useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import MyAppBar from "./components/MyAppBar";
import Home from "./screens/Home";
import Thread from "./screens/Thread";
import NewThread from "./screens/NewThread";

function App() {
  return (
    <Router>
      <MyAppBar
        homeURL="/"
        createThreadURL="/newthread"
      >
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/thread/:id">
            <Thread />
          </Route>
          <Route path="/newthread">
            <NewThread />
          </Route>
        </Switch>
      </MyAppBar>
    </Router>
  );
}

export default App;
```

### Let's not forget logging in

Now, the final part, let's implement a login dialog that pops up when the login button on `MyAppBar` is pressed. To do that, let's first add a new component called `LoginDialog.js` into the `components/` folder, with the base code.

```javascript
import React from "react";

export default function LoginDialog(props) {
  return <div/>;
}
```

Let's now referece the `@material-ui/core` documentation to see how dialogs can be defined, and implement it here:

```javascript
import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  formField: {
    marginBottom: theme.spacing(2)
  }
}));

export default function LoginDialog(props) {
  const {
    open,
    handleClose,
    handleLogin,
    username,
    password,
    setUsername,
    setPassword
  } = props;
  const classes = useStyles();

  return (
    <React.Fragment>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Login</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            id="name"
            label="Username"
            type="text"
            value={username}
            onChange={event => {
              setUsername(event.target.value);
            }}
            fullWidth
            className={classes.formField}
          />
          <TextField
            id="password"
            label="Password"
            type="password"
            value={password}
            onChange={event => {
              setPassword(event.target.value);
            }}
            fullWidth
            className={classes.formField}
          />
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleLogin} color="primary">
            Login
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
```

Using what we've learnt so far, we created the login dialog component. As you can see, to ensure reusability, multiple props are passed into the component. `open` defines the current state of the dialog. `handleClose` and `handleLogin` are functions to hook into and control the behaviour when the dialog is closed or the login button is pressed. `username`, `password` and their setters will be needed to ensure that it could be used for login later when the login button is pressed.

Let's not forget to make relevant changes to `App.js`.

```javascript
import React, { useState, useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import MyAppBar from "./components/MyAppBar";
import LoginDialog from "./components/LoginDialog";
import Home from "./screens/Home";
import Thread from "./screens/Thread";
import NewThread from "./screens/NewThread";
import AuthContext from "./context/AuthContext";

function App() {
  const [loginOpen, setLoginOpen] = useState(false);
  const [username, setUsername] = useState("");
  const [pass, setPass] = useState("");

  const handleLoginBtn = () => {
    setLoginOpen(true);
  };

  const handleLoginDialogClose = () => {
    setLoginOpen(false);
  };

  const login = () => {
  };

  const logout = () => {
    setDisplayLogin(true);
  };

  return (
    <Router>
      <MyAppBar
        homeURL="/"
        createThreadURL="/newthread"
      >
        <LoginDialog
          open={loginOpen}
          handleClose={handleLoginDialogClose}
          handleLogin={login}
          username={username}
          setUsername={setUsername}
          password={pass}
          setPassword={setPass}
        />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/thread/:id">
            <Thread />
          </Route>
          <Route path="/newthread">
            <NewThread />
          </Route>
        </Switch>
      </MyAppBar>
    </Router>
  );
}

export default App;
```

## Backend (Django)

With our frontend skeleton completed, its time to move towards to backend. The implementation of the logic underneath. For backend, we will be using python with a certain web framework.

### Enter our framework of the day: Django

> Django is a high-level Python Web framework that encourages rapid development and clean, pragmatic design. Built by experienced developers, it takes care of much of the hassle of Web development, so you can focus on writing your app without needing to reinvent the wheel. It’s free and open source.

Let's get it installed and readied. Make sure you have Python installed (version 3.6+), and lets get it started.

#### On the nature of django web framework

One thing that might get you confused here is how people would sometimes describe django as a **backend framework**. One thing that need to be made clear is that django is a **web framework**, infering that it is a **framework for building web application**. Django have the ability to employ templating which generates HTMl dynamically, common in a fully server side architecture (In which case you can argue that it does the front and backend together, but it is technically still a backend...), or it can decide to implement a HTTP API interface instead, returning JSON or XML, common in client-server architecture and microservices (which is more clear as it only handles mostly backend stuff). Both of them actually achieve the same outcome, with different presentation of data returned as a result of the processing (remember about http/s?). Basically, don't worry too much about the terms.

### Virtual environment for Python

Most often than not in development, we will rely on other people's packages. We install them to our machine, and import them in our application. Normally there are two spaces that you install in, the global space(system wide install) or the project space(local install). Most cases, unless our libraries are widely used by us in every single project, we wouldn't want them to be installed globally to prevent unintended conflict when dealing with multiple project, especially when each project might potentially have different dependencies.

Enter virtual environment, where python creates a virtual space where every dependencies/packages would be store in one place. This ensures that each project would be self contained, preventing versioning conflict between projects from happening so often.

To do that, you simple need to do this:

```bash
python -m venv .venv
```

This would create a virtual env inside the current directory.

We then activate the environment so that we can work in it.

```bash
# Windows CMD
call .venv/Scripts/activate.bat

# Windows Powershell
.venv/Scripts/activate

# Mac & Linux
# You might have to install extra package via your system package manager, specifically the package python3-venv
source .venv/bin/activate
```

After activating the virtual environment, you should see something similar to this in the command line, which indicates you are in the environment:

```bash
(.venv) $
```

Let's check `pip freeze`, which shows the packages installed for python. It should show nothing for now, but we are going to add in some packages to help us in development, specifically django.

```bash
# Make sure you are in a virtual environment
pip install django
```

Now let's do `pip freeze` again, and this time you should see something like this:

```bash
$ pip freeze
Django==2.2.7
pytz==2019.3
sqlparse==0.3.0
```

The packages are installed within the virtual env!

### Development tools

Now, before we begin the actual development, we will need some tool to help us better in ensuring that the dev process would be smooth and comfortable. To do that, you can install these 2 packages:

```bash
pip install flake8 black
```

`flake8` is a linter, which looks through your code to tell you any syntatic error or bugs that you might encounter. They are basically code spell checkers.

`black` is a formatter, which enforces a style on the code you write, and help formats your code nicely.

These plugins works nicely with ides or code editors, and if you are using VSCode with the Python Plugin, they would help alot during development.

### Starting development! Creating a new django project

Let's start off by creating a new django project! We can do that simply by doing so:

```bash
django-admin startproject forum
```

A folder called forum should be created with the following file structure:

```bash
forum/
    manage.py
    forum/
        __init__.py
        settings.py
        urls.py
        wsgi.py
```

Let me offer a little bit of explaination. We've just created a project called `forum`. Inside this project there is a folder also called `forum`, which is the package of your actual project, and act as a place for you to configure project wide settings with `settings.py`, and configure routing to other apps via `urls.py`.   `manage.py` is a command line utility that allows you to do things with the project easily.

Now, let's try running the project. To do so, simply do `python manage.py runserver` and it should start running. You would see something like so:

```bash
$ python manage.py runserver
Watching for file changes with StatReloader
Performing system checks...

System check identified no issues (0 silenced).

You have 17 unapplied migration(s). Your project may not work properly until you apply the migrations for app(s): admin, auth, contenttypes, sessions.
Run 'python manage.py migrate' to apply them.
November 18, 2019 - 04:11:46
Django version 2.2.7, using settings 'forum.settings'
Starting development server at http://127.0.0.1:8000/
Quit the server with CTRL-BREAK.
```

Go to the url given at http://127.0.0.1:8000/ and you should see this.

![first_page_django](./assets/django_first_page.png)

Nice!

### Creating our first app in django

With it up and running, let's now create our first app in django. In django, we refer to the entire project as a *"project"*, and a module as *"app"*. We can either create our own app, or we can use third party app that we might need for our use case. To create an app, we can utilize the `manage.py` utility like so:

```bash
# Let's create our first app
python manage.py startapp threads
```

Here, we create an app called threads. Why name it so? Well, let's refer back to the modelling diagram we drew back then:

![modelling again](./assets/modelling.jpg)

From the diagram, we can see that theres 2 main functionality, one that concerns itself with the user, thus authentication and permission, and another that concerns itself with the forum based functionality. And so, it seems quite appropriate to create an app called `threads` and another called `account`, each with different tasks.

You should see something like this after creating the app:

```bash
forum/
    manage.py
    forum/
        __init__.py
        settings.py
        urls.py
        wsgi.py
    threads/
        __init__.py
        admin.py
        apps.py
        models.py
        tests.py
        views.py
```

Ok, explaination time. `__init__.py` as usual defines that the folder is made into a package. `admin.py` allows you to implement your own admin model and admin panel user interface. `apps.py` is created to help user include any application configuration. `models.py` have all the models for the database, and is where the schema and structure of the database can be defined. `tests.py` is where the unit tests for the application should be written. `views.py` is where the view functions will be defined, which handles any incoming requests and at the same time return a response indicative of the status for the tasks accompished.

### Defining the models

Let's start from the database, which in this case, would be the models. Let's refer to the diagram, and design our model based on it.

```python
from django.db import models
from django.contrib.auth.models import User


class Thread(models.Model):
    owner_id = models.ForeignKey(to=User, on_delete=models.CASCADE)
    title = models.CharField(max_length=255)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title


class Post(models.Model):
    user_id = models.ForeignKey(to=User, on_delete=models.CASCADE)
    thread_id = models.ForeignKey(to=Thread, on_delete=models.CASCADE)
    content = models.TextField()
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.content
```

It is slightly different from the original database design, but this should be okay nonetherless.

So, why aren't we defining a User model? Actually there is! Django provide us with a default User, which would be used unless we specifically specify that we do not want to use it. For this case, we do not really need customized user, and thus we would not need to define our own user model.

What the code is doing is quite self-explainatory; A `Thread` model is created with `owner`, `title`, `content` and `created_at` as its field. A `Post` models is also created with the fields `user_id`, `thread_id`, `content` and `updated_at`. After defining these models, we can now `makemigration` and `migrate`, which generates the code for the migration and applies the migration to the database respectively:

```bash
# Make migration
python manage.py makemigrations

# Look at the migration folder inside the thread app model
# You should see a file called 0001_initial.py that contains code
# for the migration.

# Applying the migration
python manage.py migrate
```

Here, when we talk about **migration**, we are referring to the action of applying changes made in models (code) on the actual database.

### Utilizing the Admin Panel

The automatic admin interface is one of the most powerful features that django provides, and is one of the reason people like to use django. Let's try using the admin panel.

First, let's create a superuser account for django via the below command:

```bash
python manage.py createsuperuser
```

This would bring you through some questions, and at the end of it you would have created a new superuser. Now, let's login with that superuser. Let's go to http://localhost:8000/admin to access the admin panel.

![django admin login](./assets/django_admin_page.png)

Login using your superuser account and you should see something like this.

![django admin panel](./assets/django_admin_page2.png)

Nice, but where is our newly defined models? Well, to actually add them into the admin panel, we have to register them into the admin panel, to do that, simply go to the `admin.py` file and add these few lines:

```python
from django.contrib import admin
from .models import Thread, Post

admin.site.register(Thread)
admin.site.register(Post)
```

Now, let's take a look at the admin panel again!

![django admin panel](./assets/django_admin_page3.png)

Nice! Now we can use the admin panel features for our `Thread` and `Post` models!

### Views

Now that we have our data models, we have to think of some way to let the outside world access and manipulate these data. To do that, we require `views`.

**P.S. Do not get confused with the use of `views` especially when you heard of MVC, it does not refer to the same concept, and is of another thing entirely.**

`views` are basically just something that deals with incoming requests and responds to these requests. Inside each `view`, we define how and what data should be returned. One might say `view` contains the implementation of the business logic.

That said, let's define views for both the `Thread` and `Post` models.

```python
from rest_framework.views import APIView
from rest_framework.generics import RetrieveUpdateDestroyAPIView
from rest_framework import status
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from rest_framework.response import Response
from .models import Thread, Post
from .serializers import ThreadSerializer, PostSerializer


class ThreadListCreateView(APIView):
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticatedOrReadOnly]

    def get(self, request, format=None):
        mine = request.query_params.get("mine", 0)
        queryset = Thread.objects.all().order_by("-created_at")
        if mine == 1:
            queryset = queryset.filter(owner_id=request.user)
        serializer = ThreadSerializer(queryset, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request, format=None):
        serializer = ThreadSerializer(data=request.data)
        if serializer.is_valid():
            created = serializer.save(owner_id=request.user)
            created = ThreadSerializer(created)
            return Response(created.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class ThreadRetrievedUpdateDestroyView(RetrieveUpdateDestroyAPIView):
    queryset = Thread.objects.all()
    serializer_class = ThreadSerializer
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticatedOrReadOnly]


class PostListCreateView(APIView):
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticatedOrReadOnly]

    def get(self, request, format=None):
        thread_id = request.query_params.get("thread_id", 0)
        queryset = Post.objects.filter(thread_id=thread_id).order_by("id")
        serializer = PostSerializer(queryset, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request, format=None):
        serializer = PostSerializer(data=request.data)
        if serializer.is_valid():
            created = serializer.save(user_id=request.user)
            created = PostSerializer(created)
            return Response(created.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class PostRetrievedUpdateDestroyView(RetrieveUpdateDestroyAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticatedOrReadOnly]
```

### Serialization

### Routing and URLS

### API design

You might notice we follow certain conventions when we are actually defining and declaring our route for our API. Why is that so?

Well, there are multiple ways of defining your web APIs, and each have their own merits and demerits. Of course, we can also define our own format for our web APIs, but here we are specifically using the REST APIs. So what exactly are REST APIs?

Well according to wikipedia:
> Representational state transfer (REST) is a software architectural style that defines a set of constraints to be used for creating Web services. Web services that conform to the REST architectural style, called RESTful Web services, provide interoperability between computer systems on the Internet. RESTful Web services allow the requesting systems to access and manipulate textual representations of Web resources by using a uniform and predefined set of stateless operations

Of course, REST is not the only choice, there are others out there such as SOAP and RPC, so feel free to look into them as well!

### Authentication and Permission

## Connecting Front to Back

Now, with the api defined, we can connect our frontend with the backend. Let's implement these functionality.

### Home Screen

Again, let's start with the home screen. Since we now have the api, we can now establish communication between the client and the server. The home screen displays a list of threads, ordered from latests to oldests. This is implemented via the endpoint `GET /thread/`. Authentication is not required for the endpoint.

With that said, let's start implementing.

```javascript
import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  listContainer: {
    width: "100%",
    backgroundColor: theme.palette.background.paper
  }
}));

export default function Home(props) {
  const classes = useStyles();
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      let req = await fetch("http://localhost:8000/thread");
      if (req.status === 200) {
        let newData = await req.json();
        setData(newData);
        console.log(newData);
      }
      console.log(req);
    }
    fetchData();
  }, []);

  return (
    <Grid container justify="center">
      <Grid item sm={8}>
        <List className={classes.listContainer}>
          {data.map(({ id, title, created_at }) => (
            <React.Fragment key={id}>
              <ListItem alignItems="flex-start" key={id}>
                <ListItemText
                  primary={<Link to={`/thread/${id}`}>{title}</Link>}
                  secondary={new Date(created_at).toString()}
                />
              </ListItem>
              <Divider component="li" />
            </React.Fragment>
          ))}
        </List>
      </Grid>
    </Grid>
  );
}
```

We initialize states for saving all the threads data. Then we utilize the `useEffect` hook. The `useEffect` hook allows you to perform side effects in function-based components, basically allowing you to handle methods which interact with the "outside world". We will be using this since we are going to communicate with our backend API.

Within `useEffect`, we then define a async function that fetches the required data from the endpoints `GET /thread/`, then save the data as a state, which would update and populate the user interface with the acquired data.

One thing that you might notice is the empty array that was passed as a second argument, this meant that useEffect would only be called once right after the first render of the component for each event, which is fine. If the array contains any variables or states, then the useEffect function would be triggered everytime the elements given inside the array changes. In simpler terms, the array argument for `useEffect` specifies what variables would trigger `useEffect` on change.

Nice, we had the home screen integrated. Let's move on to:

### New Thread Screen

Okay, so, we want to only allow logged in users to access the `NewThread` screen and post new threads. To ensure that, we have to integrate authentication into the application.

## Testing and Test Driven Development

If you haven't notice, we haven't been writing a single line of test cases ever since we started the tutorial which is fine because we are just trying to learn the basics. However, when developing commercialized application, testing can be crucial that your application do not fail during production, which may cause a major financial loss.

So, how do we do testing then? Well there are multiple types of tests:

1. Unit Testing
2. Integration Testing
3. Functional Testing (End-to-end)
4. Ad-hoc testing
5. Sanity Tests
6. Acceptance Tests (Alpha & Beta tests)

### Test Coverage

Test coverage is a useful metric that measures the amount of testing performed by the tests. Basically, test coverage is the measure of how much of the code is covered by the tests, via gathering information on which part of the code is executed during testing phase.

Using test coverage, we can ensure that most if not all of out code are tested, by finding out areas that are not covered.
