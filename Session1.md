# Session 1 - Before Development Begins

The first session would be more of an infodump.
Expectations: All things noted/taught in here relates to personal experience and might not fully apply.

Ask many questions, and correct me if you find any faults. We are all here to learn.

## Table of Content

<!-- - [Session 1: Before Development Begins](#session-1-before-development-begins) -->
  - [Table of Content](#table-of-content)
  - [On constant learning](#on-constant-learning)
    - [Resource for learning](#resource-for-learning)
    - [Some tips on learning that worked for me](#some-tips-on-learning-that-worked-for-me)
  - [General Software Development Flow](#general-software-development-flow)
    - [General Flow](#general-flow)
    - [General Flow, But more detailed (SDLC Framework)](#general-flow-but-more-detailed-sdlc-framework)
    - [My Personal Flow](#my-personal-flow)
  - [First Step: Requirements](#first-step-requirements)
  - [Researching and Making Decisions](#researching-and-making-decisions)
    - [Technological Stack](#technological-stack)
      - [Tooling Choices -> Languages, Libraries, Frameworks and other technologies](#tooling-choices---languages-libraries-frameworks-and-other-technologies)
      - [Unexplored Territory -> things without predecessor or resources to references](#unexplored-territory---things-without-predecessor-or-resources-to-references)
  - [Development Concepts](#development-concepts)
    - [Key Concepts](#key-concepts)
    - [Target Platforms](#target-platforms)
  - [Web/Software Architectures Design](#websoftware-architectures-design)
    - [Fully Server Side](#fully-server-side)
    - [Client-Server](#client-server)
    - [Microservices](#microservices)
    - [Serverless](#serverless)
    - [Other architectures](#other-architectures)
    - [Common Comparisons: Fully Server Side vs Client-Server vs Microservices](#common-comparisons-fully-server-side-vs-client-server-vs-microservices)
    - [How to design and define an architecture](#how-to-design-and-define-an-architecture)
  - [Final Project Planning](#final-project-planning)
  - [Software Maintainability: Importance of Conventions, and Technical Debt](#software-maintainability-importance-of-conventions-and-technical-debt)
    - [Coding convensions](#coding-convensions)
    - [Technical Debt](#technical-debt)

## On constant learning

Constant life long learning is very important to ensure that you are updated with new information which would allow more freedom in choosing your tools in addition to ensuring the developed software's quality.

### Resource for learning

- Dev.to (My goto)
- Reddit
- Online developer groups and communities(facebook ones is not bad, twitter have a lot of them as well)
- Youtube recordings from conferences
- Conferences, Meetup and Events

### Some tips on learning that worked for me

- Do instead instead of pure reading
- Understand instead of memorize
- Most of the things that does the same thing also works the same; They just word themself differently so that they are different.
- Official Documentation is your best friend, and the source code is your one and only love

## General Software Development Flow

### General Flow

1. Software Specification: Defining Functionality and Constraints
2. Software Development: Developing Software
3. Software Validation: Validate Software
4. Software Evolution: Evolve to meet changing client needs

### General Flow, But more detailed (SDLC Framework)

1. Requirement Analysis
2. Defining
3. Designing
4. Coding
5. Testing
6. Deployment
7. Maintenance

### My Personal Flow

1. Aim (What the client wants to achieve)
2. Goal (How does it solve the problem(aim), What it does, What functionality it provides)
3. Visualize (How it roughly looks, and interacts with user, frontend design)
4. Modelling (How data should be represented, backend design)
5. Interaction (How front and back end interacts, API decisions)
6. Research (Which tool is best suited for the user case, test the tools and make a decision on tools)
7. Development (Acting on decision)
8. Present (Demonstration and Obtain feedback)
9. Iterate (From 3 -> 8)
10. Hit (Testing, Confirmation and Wrapping Up)

## First Step: Requirements

Requirements gathering is always an important tasks, it not only allows you to understand what the client wants, it also helps with a lot more aspect for the development process. It is essentially a place that you can set expectation for not only your team but at the same time for your clients.

In my opinion there are a few things you would want to at least achieve in the requirements gathering session/meeting:

1. Understanding the actual intentions of the clients (What they actually want to achieve -> Aim)
2. Understand the key requirements for the project (Things/Attributes that they absolutely want in the product)
3. Provide a solution (goal) that brings value to the client which fulfill their aim (Essentially a form of consultation)
4. Set an expectation on how both parties can work together (Meeting frequency, Time required, Limits, Resources required)
5. Gauge if client and project will be suitable to work with

The 1st step is very important as it helps you understand what your client truly want to achieve. Most of the time they might not have the correct idea on what they want and how they can acheive their aim, so you play an important role to understand what value they want you to add to their company/business. You can ask them what outcomes they want to see to get a hold of their intentions.

The 2nd step is a different thing from the 1st step, as it moves more towards the **implementation** of things. It deals with how they want to achieve their aim, and particular ways they definitely want it to achieve it with. Usually we have to guide them back (the 3rd step) to what is feasible and possible in our knowledge or after our research, in addition to guiding them to a better solution that might fit the problem better.

When dealing with the requirements that you are not sure if feasible, you should do some research on if the feature is somehow doable, and if no so, what alternatives you can offer for the non-feasible requirements.

You might need to negotiate the requirements according to what is feasible, and how much resource is placed into this project. This is where step 4 comes in, setting expectations for both parties is very important. Ensuring that both parties understand what each other want and need is essential to ensure a smooth development process.

After all the process, you finally gauge if want to take this project and work with the client. Remember not to compromise too much, as it usually doesn't end really well.

## Researching and Making Decisions

At this point, you would already have done some research to ensure what you promise in the requirements is feasible. So, now we have to do some deeper research into what can be used and done to implement all this features.

Most of the time, it is very easy to do research since internet and google is always there, but sometimes when you are doing something that is *state of the art* or relatively new, you might not find examples or methods of doing it out there, at least not explicitly, what do we do in those cases then, to ensure that we have enough information to proceed?

Here, we usually put more focus on the important key/promised features that are crucial to the operations of the project and try to find suitable toolings to achieve them.

### Technological Stack

Sometimes, you hear people talking about technological stack, be it MERN stack, LAMP stack, or even Javascript Stack, or Python Stack. What does "stack" means?

In this case, stack refers to a collection of software and technologies used for the development of the system. Some of the popular ones are:

- LAMP/LAPP stack -> Linux, Apache, MySQL/Postgres, Php/Python. Initially started with this meaning, it now generally describe stack utilizing scripting languages and relational databases
- MERN/MEAN stack -> MongoDB, Express, React/Angular, Node.js. Initially also started with the literal meaning. Now can also describe stack utilizing javascript & nodejs heavily, and uses NoSQL Databases.
- "Technology Name" stack -> Implies that you use mainly use the technology in the development of the system
- JAM stack -> The new kid on the block, refers to Javascript, APIs and Markup. Lightning fast as it is generally statically generated.

#### Tooling Choices -> Languages, Libraries, Frameworks and other technologies

What language is the best, what libraries is the best, what frameworks should I use, these are common questions coming from most starting to learn software development, but do they actually matter?

The fact is, **they do!**

However, most of the time its not as black and white as it seems, since we have so many tools out there that can do the same thing, there was not really a need to choose, as we can simply **choose whichever we and our team are comfortable with!** Most tooling choices are actually made based on the familiarity of the team with it, or the existing system that were built with it instead of the specific features of the langauges, libraries or framework. We simply chose the best one that we can **start quickly with.**

During the times when they do matter, sufficient research should immedietely guide you to most of them, but we would have to **carefully examined them on their pros and cons based on requirements.** (e.g. Game development have a set ecosystem around them, Mobile development as well, some languages have certain features that makes them good for certain tasks, some frameworks fulfill your requirements easier due to their style or ability to integrate with other libraries, etc.) In these cases, not only do we have to take into account the details of our requirements, the system implementation, we still have to **take account into the team aspect as well.**

#### Unexplored Territory -> things without predecessor or resources to references

Sometimes we hit a complete deadend, hopefully not due to careless mistake during requirements gathering, when researching a certain features. Maybe some features that seems completely feasible ended up no being feasible; Or maybe some features exists in some other application which you wanted to implement, but can't seem to find a proper explicit solution? In these times, you have 2 options:

1. Try to find a suitable (hopefully good) solution
2. Renegotiate with your clients on the requirements once again

Let's say we continue to try to find a solution...what do we do then? We tried googling for anything related to the term, but can't seem to find anything; We searched through forums and asked questions regarding the subject, but no one is giving a satisfying answer; What should we do now?

Theres a few things that you can do to get some progress or inkling on the actual feasibility of the thing you are trying to do:

- Implementing yourself
- Find distributed information/tools that builds what you want
- Talking to more experienced people that might know something face to face (A friend)

Implementing yourself is the method that requires the most work, as you will have to **dive in to develop specifically what you want to achieve**. Most of the time, it is better to rely on existing technologies, as they are more reliable and requires the least effort. But if there is really no more alternatives, this is a good solution to the problem. However, that is **assuming that you can implement the changes yourself**. This method works for cases when the feature you require is a high level functionality, where most **functionality can be overwritten and changed to fit your specific needs**(Although also have to take into account of the reliability of the methods), but if there are cases where it is more specific and low level, this method might not work, or might be very expensive to self implement.

So, what if you don't know how to implement, or if you still want to see if there's something out there that might fit your needs? One other way is to **search for each part of a smaller functionality that builds towards the bigger functionality**, which you can then **connect and integrate together to form the larger functionalitt that you want.** This method is similar to the previous method that it also requires some development, but might be easier as you have preexisting things that you can rely on. But this is also assuming that the things that you are looking for exists in the first place as well, although most of the time, the smaller functionality usually already exists.

Sometimes, the information that you find might lead to relatively hacky solutions, and might be unreliable to rely on for a long term, but if they are the best solution at the time and you are at a hurry, use them first, while continue to look for better alternatives. Just remember:

> Everything and Anything can be changed to fit your needs; Nothing cannot be done, its just how hacky it might be and what are the technical debt and risk that you take on for doing them.

The final way of approaching this, especially when you have little to no knowledge in the particular domain, is to **seek tutelage from a more experienced person**. I prefer one to one talk, as I personally think that those provide the most context and information than any online conversation, but that is just my personal preferences. Talking to someone that already know something can help alot as they can point you to the right direction, which you can then delve deeper into via more research. This should actually be the first thing you try if they are available, since it would save a lot of time.

If you've tried all the methods and somehow still can't find a viable solution, the last thing you can do is to negotiate with your client. From there, you should give a valid explaination to them so they can understand why you are unable fulfill their requirements.

## Development Concepts

Before diving into the architecture design itself, we have to understand the available target platforms and some key concepts.

### Key Concepts

- Communication Protocols
  - Basically an agreed upon communication methodology -> allows those who follow it to communicate
- Sockets (Specifically Network Socket)
  - It is a virtual socket that acts as a point of connection between two devices.
  - Can be used to send or receive data (in the case sending, one have to specify what address(ip:port) will it be sending to. in the case of receiving, one have to specify what address it will be receiving at -> binding.).
  - Most popular used protocol: TCP and UDP
- IP Address
  - Assigned by admin of network(routers normally)
  - used to identify a device's network interface in a network, providing information on how to route there
  - identify the connection to your device
- Ports
  - basically an extension of ip
  - identify the external connection to its corresponding application
  - usually we use numbers > 1024 since those below are already well known and used by common services.
- Web and HTTP
  - The web is built on powerful computers, which serve websites(which is basically just documents in the format)
  - Web is built upon HTTP, HTTP is the underlying protocol used by Web in fact
  - HTTP describes how computers should talk to each other on a network, specifically how server should serve its client. It is a protocol for a distributed hypermedia information system.
  - GET, POST, PUT, OPTIONS -> these are all ways of telling the server about the things you want it to do essentially.
- Server
  - Basically just a powerful computer, responsible to give you(your browser actually) files to see when you surf the net, and at the same time also responsible to save your provided information.
  - The server also does things like helping you communicate with another person across the group, without you knowing much about the other person (essentially a middle man in some cases you might say)

### Target Platforms

In general, there are a few platforms that we cater to.

1. Web -> Runs on browser
2. Native Mobile -> Runs on phones
3. Native Desktop -> Runs on desktops
4. Lower level hardware -> Refers to those closer to the bare metal, can be embedded systems, SOC, Arduino, Raspi

Each platform written here each have their own contraints. Thus, as a developer, we always have to consider the limitations and capabilties of the devices when making choices. (e.g., web limitation on native features and performance, native's limitation on its computational power and installation, desktop limitation on its access, and lower level hardware's high performance as a reqiirement.)

However, most times there is another element within the system, that is, there is a requirement that need a place for storage and computation which is shared by multiple user. In this cases, we have to consider the server.

A server normally have ample computing power, strong enough to run computationally expensive operations. This is normally where we place our more computational expensive operations at.

## Web/Software Architectures Design

Architectural design is an important aspect of the software development process. It describes the overall layout and flow of your application, helping you to guide your application to a correct direction.

The architectural design for your project is very important as it ensures that your developed product will be scalable, maintainable, and efficient. Theres no one architecture that fits all, and one project/problem might have multiple suitable architecture.

The architecture of a project will be defined from not only the needs of the application, but also the current available resources.

Here we will discuss architectures more applicable to the web, but some of them can be applied in other areas too.

### Fully Server Side

This applies mostly to web architectures.

This architectures basically consists of only mainly the server. Each page is dynamically generated and served by the server when the url is visited, based on the current information.

This architecture is :

- easy to implement
- have generally good loadspeed(since the load is put on a performant computer: server)
- allows good SEO

However, the nature of this architecture has a few drawbacks:

- Frequent server requests
- Non-reactive, changes are reflected only after refreshs
- Visit to each route triggers a full rerendering
- If your website consists of code requiring heavy computation, rendering would take some time, adn thus would slow down load speed.
- Harder to maintain as it grows (Scalability difficulities)

### Client-Server

One of the most common architectures. Used by mobile application, and now also by single page application(web apps).

This architecture seperates the system into two parties: the client and the server. The client handles anything related to presentation, and the server handles the business logics and computations.

This architecture allows for more freedom in development:

- The seperation removes the waiting, as client won't be affected by resource heavy computation which is located at the server, and can do other things while waiting.
- Reactive, changes reflected quickly without need to refresh
- Only parts that changes needs to be rerendered -> less rendering
- Easier to maintain and develop with its seperation (Easier to scale), but now requires more man power to maintain (Resource difficulties)

However, this architecture have its own set of drawbacks:

- Harder to implement, as a communication protocol have to be defined between client and server to allow communication.
- Security of communication between server and client must be done well, as it is a point of attack.
- Still good amount of server requests, and also one point of failure still.

### Microservices

Microservices refers to an architecture where functionalities are divided into small parts called services, which work together to form the system.

Generally, each individual services are only responsible for one thing at a time, and any need of sharing data between services will be done via network communication instead sharing a single state.

Containarization is one of the technology that enables microservices.

With this architectures comes a lot of benefit that big systems / applications look for with their large demands:

- Easily scalable (Just simply increase more of that service)
- No single point of failure
- Addition of functionality is also relatively easy
- Deployment(hence fixes and upgrades) made easier, as there will be less to no effect on the current application
- Repair and recovery of downed service is easier.
- Technology agnostic

However, with its benefits, it comes with a set of drawbacks:

- Significantly more complex to implement
- Easy to maintain in terms of scalability, but now significantly harder to manage the architecture and connection between each services (Architectural difficulity)
- Hard to debug, due to the nature of it (Consists of multiple parts, who knows the source?), and thus requires careful design and monitoring of the architecture
- More expensive due to its nature since each service is deployed individually.
- Security is also harder to manage, since there are potentially multiple points of attack due to its larger amount of internal traffic in addition to external traffic
- As mentioned above, since services communicate via network calls, network latency starts to become a concern.

### Serverless

Generally refers to services provided and managed by cloud providers (AWS, GCP, Azure, Heroku, etc.). These service implements the architectures stated above, which can be configured by developers based on their business needs.

However, serverless do away all the complexities developers faced when setting up the servers, as they help you manage the complexities of maintaining a server, ensuring that your system would be available most of the time.

Serverless can also refer specifically to cloud functions (lambda, gcf, azure functions), which is a platform specific framework that only requires developer to define the functions, which would then be automatically routed by the cloud provider without the need to configure other parts of the web services, simplifying development of the system.

### Other architectures

There are other interesting architectures that we won't discuss here used for specific use cases, such as:

- Master-Slave
- Event-Driven
- Saga

### Common Comparisons: Fully Server Side vs Client-Server vs Microservices

After looking at the architectures that were introduced, one might wonder:

> Since microservices is the latest technologies used by big well known technology coperations, why don't we just use it as well and start with that? Why still consider any other web architectures?

Well, if you take a look at the pros and cons described before, it isn't as simple as just choosing one. As stated before, we must consider multiple factors before deciding on how we want our architecture to be.

In this particular arguments, choosing one over the other might be underengineering or overengineering, which will have severe consequences to the team. Microservices was designed with scale and availability in mind, and thus sacrifice architectural/structural and network complexity for it, which would be difficult to be managed by smaller teams/use cases, which might work better with a simple client-server or even fully server side architecture.

No point going through extra unneeded effort just to use something that you don't need.

### How to design and define an architecture

Personally, I design the architecture with a few tools learnt from lectures,specifically with diagrams.

Drawing the diagrams not only documents your progress, it also helps you communicate with your team member easily, in addition to help you better visualize your architecture.

A few useful diagram I use:

1. Flow Chart
2. Sequence Diagram
3. ERD: Entity Relational Diagram

## Final Project Planning

Now, split into groups of at least 4, and discuss a simple idea applying what was learnt. That would be your project that you'll need to present at the end of the workshops. Think of something that with new ideas!

## Software Maintainability: Importance of Conventions, and Technical Debt

### Coding convensions

You might have heard about the arguments on curly braces: `should the curly braces start in a new line or start directly after the statement?`

```java
if(condition){

}

// Or

if(condition)
{

}
```

You might think it is quite funny such a menial thing would become a subject of argument, but it is actually quite an important matter, as these types of menial things, when combined, becomes quite a threat to developers, who read and write code everyday, as they would become distracting and make reading code difficult especially if a lot of people is working on the same codebase with different style all the time.

This is why we require **coding convensions**.

Coding convension ensures that developers don't waste more time learning how to read the code, instead being able to understand the code easier due to common and clear naming schemes and coding styles.

### Technical Debt

According to wikipedia:

> Technical debt (also known as design debt or code debt, but can be also related to other technical endeavors) is a concept in software development that reflects the implied cost of additional rework caused by choosing an easy (limited) solution now instead of using a better approach that would take longer.

Basically, sometimes, we want things to just work especially when there is a tight time constraints, and in these times, it is not always possible to engineer a perfect and optimal solution for the problem faced. Thus, in these time we instead uses some kind of "hack" to get things to just work. The use of these kind of easier "hack" imposes technical debt upon the project. Technical debt can cause a variety of problems in mutiple aspects, from maintanibility (code that works but not well organized), to scallability (code that works but cannot be applied when load increases) and more.

However, since software are ever evolving, we cannot be expected to just leave the "hack", or the technical debt there unsolved forever. Since technical debt accumalates over time, we must find a way to keep track of them, such as issue tracking, and from that ensure that the debts would continually be resolved so as to prevent it from incuring major losses in the future.

Technical debt is something that we cannot avoid during the development process especially during crucnch time, however we must always strive to reduce the amount of technical debt to a minimum.
