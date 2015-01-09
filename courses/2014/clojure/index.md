---
title: Functional programming with Clojure
layout: course
main-class: has-aside
sidenav: 2014/clojure
---
```clojure
(defn hello [name]
	(println "Hello," name))
```

[Functional programming](http://en.wikipedia.org/wiki/Functional_programming) is a programming paradigm where pure functions are the basic building blocks of programs. A pure function is like a function in the mathematical sense. The outputs of the function are fully determined by its inputs. The idea is that this restriction makes your programs easier to understand. This course shows how you can code meaningful programs with mainly pure functions. Pure functional programming differs from object-oriented programming in that e.g. it does not make use of variables or loops.

The course is an introduction to functional programming with a dynamically typed language **Clojure**. We start with an introduction to Clojure; its syntax and development environment. Clojure has a good selection of data structures and we cover most of them. We also go through the basics of recursion and higher-order functions. The course material is in English.

[Clojure](http://clojure.org/) is a young [Lispish](http://en.wikipedia.org/wiki/Lisp_%28programming_language%29) functional programming language on the [Java virtual machine](http://en.wikipedia.org/wiki/Java_virtual_machine) (JVM) platform, suitable for small and large programs. Because it runs on the JVM, all Clojure programs can use all the standard and third-party Java libraries freely. It offers tools for many tasks that are harder with other languages and has a special focus on concurrent programming.

You should have basic programming skills. **No prior experience with functional programming is required.**

The course is based on previous courses given at Helsinki Metropolia University of Applied Sciences in 2012 and at University of Helsinki CS department in 2011, 2012 and 2013.

# Completing the course

The course is completed by programming solutions to exercises embedded in the course material. The course relies heavily on the use of [third party cloud services](http://mooc.cs.helsinki.fi/clojure/behind-scenes). To complete the course, you must register to GitHub for an account. No other registration is reguired. [The material will guide you in setting up necessary tools and submitting solutions ››](http://iloveponies.github.io/120-hour-epic-sax-marathon/index.html)

- - -

# Course staff

Juhana Laurinharju works as a research assistant at the department of Computer Science at the University of Helsinki. He has also taught, among other things, functional programming at the University of Helsinki. 

Jani Rahkola is a masters student at the University of Helsinki. He's a programming language enthusiast and has taught this Clojure course at the University of Helsinki.

# Material elf

Ilmari Vacklin is a software engineer at Reaktor. He has worked on free software projects and taught functional programming and software engineering at the University of Helsinki CS department.