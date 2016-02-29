---
title: Instructions
layout: course
main-class: has-aside
sidenav: general/programming
english: true
---
# Frequently asked questions

1. I don't know how to solve assignement N?
	- Read the course material
	- You may also find help from internet by Google etc.
	- Join [IRC]({{"/courses/general/programming/irc-guide.html" | prepend: site.baseurl }}) (Internet Relay Chat)
		- Average response time 20 minutes
		- The official course staff are moderators and have an @ sign in front of their name
		- Channel #mooc.fi @IRCnet
	- Join [Google Groups]({{"/courses/general/programming/google-groups.html" | prepend: site.baseurl }}) 
		- Average response time 2 working days
		- Course discussion forum
2. I suspect that the tests of assignment N have some problems

	It is possible that tests have some problems. If you think that is the case, ask the course personnel to check the issue.

	Problems should be reported to us by email to <a href="mailto:mooc@cs.helsinki.fi">mooc@cs.helsinki.fi</a>. For general help with exercises, please check out our <a href="/courses/general/programming/irc-guide.html">IRC-guide</a> and <a href="/courses/general/programming/google-groups.html">Google Groups discussion forum</a>.

3. How do I see what assignments I have already completed?

	From the main page of TMC <https://tmc.mooc.fi/mooc/> you can navigate to the course page were all your submissions are shown. By clicking the name of an assignment you can see also the model solution in case you have solved it already.

4. I have forgotten my password

	You can reset yout password in <https://tmc.mooc.fi/mooc/password_reset_keys/new>

5. How do I share my code to others so they can help me with an assignment?

	You can use our build in TMC Pastebin: NetBeans / TMC menu / Submit to TMC pastebin.

	You can use a text sharing service such as our own <http://paste.mooc.fi/>.

6. Can I use multiple computers to do the exercises?

	Yes. You will need to install NetBeans with the TMC plugin on each computer.

	You can move your code from one computer to the other in several ways:
	- Manual copying from the TMC server:
		- You have submitted some code to an exercise.
		- If you want to work on your solution for the exercise on another computer, you may need to download the exercise template:
			- If you haven't completed the assignment yet, the template will be downloaded along with the other uncompleted assignments automatically
			- If you have completed the assignment, check "Download old completed exercises" in the TMC menu in order to download the template
		- You can download the solutions you have submitted from <https://tmc.mooc.fi/mooc>. By logging in, you can see all the solutions you have submitted. You can either copy the code from the browser or download the solution as a zip file.
	- Using an exteral server
		- You can use a file sharing service, such as DropBox (<http://www.dropbox.com>)  to easily access your solutions on any computer with a network connection. For synchronizing your solutions, you need to locate the exercise directory by checking the TMC settings.
	- USB flash drive
		- You can use a flash drive to move your project files between multiple computers.
7. What if all the assignment projects are not loaded to NetBeans?

	If it seems that you did get only part of the assignments act as follows:

	1. Look at from the Setting of the NetBeans/TMC-menu the *project folder*
	2. The assignment projects are saved to the subfolder
	3. Select open project from the NetBeans / File menu, find the above mentioned folder and do "open project" to the projects you need to get opened

8. CAN I SUBMIT AN ASSIGNMENT MULTIPLE TIMES?

	Yes. And even if you submit a incorrect solution after submitting an solution which is accepted, you do not lose your points.

# NetBeans tips

1. Automatic `System.out.println`

	You can get the text `System.out.println("")` by typing sout and pressing the tabulator key (located to the left of the q key)

2. Automatic indentation

	NetBeans helps with the correct indentation. You can easily indent your program by pressing <kbd>shift</kbd> + <kbd>alt</kbd> + <kbd>f</kbd> simultaneously.

3. Autocomplete

	There is a really useful tool in NetBeans called auto-complete. If you have, for example, a variable String familyName;in your code, you do not need to always write it all. See what happens when you type and after that press ctrl and space simultaniously. Similarly NetBeans can auto-complete other names as well, for example to get the command while, you need to type only <kbd>w</kbd> and press <kbd>ctrl</kbd> + <kbd>space</kbd>...

4. Renaming

	Variables, methods and classes (that we learn about next week) need to have descriptive names. It is common that the selected name is not that describing and the need for changing the name arises. In NetBeans it is really easy to rename things. Just select and "paint" the name you want to change with the mouse. Then press <kbd>ctrl</kbd> + <kbd>r</kbd> simultaneously, then write the new name.

5. Generating an empty line below the current one

	You can make an empty line below the current line by pressing <kbd>shift</kbd> + <kbd>enter</kbd> at anywhere in a line

6. The automatic generation of constructors, getters and setters

	Go inside of the code block of the class, but outside of all methods and simultaneously press <kbd>ctrl</kbd> + <kbd>space</kbd>. If your class, for example, has an object variable balance, NetBeans will offer you the opportunity to generate the getter and setter methods, and a constructor that sets a starting value for the object variable.

7. Clean and build

	NetBeans occasionally loses track of changes made to a Java file and attempts to run a version of your program ignoring some recent changes you've made to your code. This often results in error messages during running the program or the TMC tests. In these cases, the Clean and build operation typically helps. You can find it in the "Run"-menu or by clicking the button with a hammer and a broom right above the code window. Clean and build removes the existing compiled version of the code and recompiles the source you currently have.

8. More shortcuts

	From NetBeans menu you can find all shortcuts and even make new ones. From the menu select *Tools -> Options -> Editor -> Code Templates*.

# Links to other netbeans resources

- [Keyboard shortcuts](http://netbeans.org/project_downloads/www/shortcuts.pdf)
- [Information for Mac OS X users](http://netbeans.org/kb/articles/mac.html)