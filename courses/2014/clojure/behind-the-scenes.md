---
title: Behind the scenes
layout: course
main-class: has-aside
sidenav: clojure
---
The course works on top of a number of services and tools. What follows is a short description of the infrastructure.

![Clojure infra]({{ "/img/clojure-infra_4.jpg" | prepend: site.baseurl }})
*The infrastructure of the Clojure course. Steps 1-4 are done by the student and steps 5-6 are automatically handled by us.*

# The life of a submission

It all starts when someone makes a fork of a chapter's repository in Github. They then clone the fork and what they get is a Leiningen project with a test suite and a source file full of function stubs. When the stubs are filled and the test suite passes, it's time to make a pull request.

We have enabled the Travis hook in our chapter repositories. This means that Travis is notified of every new pull request. Travis will run the test suite against the submission with a test runner that outputs the scores in JSON, based on meta data on the tests. Travis then calls a webhook on our scoreboard server.

Travis passes a notification of the test run to our server. The server parses the notification and makes an API call to get the actual scores in JSON. The scores are stored, ready to be queried by a snippet of Javascript in our scoreboard website.

# GitHub

Along with the writen material, Github also hosts the project repositories for every chapter. Anyone can fork a repository and start working on the exercises with just Leiningen installed.

# Leiningen

Leiningen is the project manager for Clojure. It handles dependencies, runs test and even installs Clojure for you.

# Travis

Travis is a continuous integration tool as a service. Submissions to the exercises are made as pull requests between the chapters repository and the submitters fork. Travis is responsible for running the test suite of the project for every such pull request.

# Heroku

Heroku is a cloud application platform, a hosting service for web applications. Our scoreboard server is currently deployed to Heroku.