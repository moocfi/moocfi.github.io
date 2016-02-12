---
title: How to get started
layout: course
main-class: has-aside
sidenav: general/programming
english: true
---
# Registration
Create yourself an account to the Test My Code (TMC) server in address <https://tmc.mooc.fi/mooc/user/new>

If you already have an account in TMC, you do not need a new one. Ensure that you remember your password by logging in to  <https://tmc.mooc.fi/mooc/>.

# Installation of the programming environment

In the course we'll be using version 8.0 of the NetBeans Integrated Development Enviroinment and the TMC plugin to download and submit the programming assignments. NetBeans requires Java development kit (JDK) to be installed.

**NOTE:** If you have an old version of NetBeans on your computer, we recommend that you remove it before installing the new version. When the installation procedure asks  if the old setting should be imported, answer "no".

**Does the installation of Java to your computer cause a security risk?** Not directly. The use of JDK and NetBeans do not cause any risk. The risks involved with Java are related to certain Web-pages that use Java-based components. Nothing we do in this course can cause any security risk to your computer. The installation of JDK also installs a Java plugin to your internet-brower. It might be wise to disable that plugin. For more information, see  <http://krebsonsecurity.com/how-to-unplug-java-from-the-browser/>.

1. Installing JDK
	If you already have JDK 7 or newer installed, go directly to step 2.

	Download the most recent version of JDK "Java SE Development Kit 7uxx" from the address <http://www.oracle.com/technetwork/java/javase/downloads/jdk7-downloads-1880260.html>. *If you are a Linux user, see the information below!*

	Accept the licence, select a suitable version for you computer and do the installation.
	- In **Windows** the installation proceeds similarly as installations of any Windows program.
	- In **OS X (Mac)**, the installation resembles installation of any dmg-package. NOTE: you need Mac OS X 10.7.3:n (Lion) or a more recent OS X -version.  Oracle provides detailed information about the installation <http://docs.oracle.com/javase/7/docs/webnotes/install/mac/mac-jdk.html> If installation complain about developer id, see <http://support.apple.com/kb/ht5290>.
	- In most **Linux** distibutions you get JDK directly from the packet management. In Debian based distributions (eg. in Ubuntu) it is enought to install the package *openjdk-7-jdk* which can be done in command line with the command `sudo apt-get install openjdk-7-jdk -y` or by using the Synaptic Package Manager. In the case that your distribution does not provide a suitable JDK, you can do the installation by extracting the .tar.gz-file found on the Oracle page.

2. Installing NetBeans

	**JDK must be installed before installing NetBeans.**

	Download the NetBeans/TMC-bundle suitable for your computer by right clicking and selecting "save link as":
	- [Windows](http://update.testmycode.net/installers/tmc-netbeans_mooc/tmc-netbeans_mooc_tmcbeans-windows.exe)
		- The installation is done by opening the downloaded executable file
	- [OS X (Mac)](http://update.testmycode.net/installers/tmc-netbeans_mooc/tmc-netbeans_mooc_tmcbeans-macosx.tgz)
		- The installation is done by extracting the contents of the downloaded package and then running the *Netbeans with TMC Installer.app*. The installer installs TMC-NetBeans to your computer. After the installation, the program is found from the Applications-folder.
	- [Linux](http://update.testmycode.net/installers/tmc-netbeans_mooc/tmc-netbeans_mooc_tmcbeans-linux.sh)
		- The installation is done by executing the installation script by giving the command `./tmc-netbeans_mooc_tmcbeans-linux.sh` in the directory where the file is located
			- The script can be executed only if it has been given right permissions eg. with command `chmod o+x tmc-netbeans_mooc_tmcbeans-linux.sh`.
			- In Ubuntu, for example, the execution permissions can be given using the File browser  by right clicking the script and selecting Properties / Permissions / Allow executing file as program. After doing this, the script can be executed by clicking it.

# Completing and submitting the programming assignments

When you start NetBeans with TMC for the first time, the below window should open. If it does not open, you can find it from the TMC / Settings in NetBeans menu bar.

![tmc-settings]({{ "/img/programming/tmc-settings.png" | prepend: site.baseurl }})

Give the Username and Password that you gave during registration.

Press the button "refresh list" and select course from "Current course".

By pressing "ok" the assignment "projects" are downloaded to your computer.

The next video shows how to program and submit the assignments using TMC/NetBeans.

<iframe width="560" height="315" src="//www.youtube.com/embed/ZFsg0Uh0UVE" frameborder="0" allowfullscreen></iframe>

Now you are finally ready to start the course!
