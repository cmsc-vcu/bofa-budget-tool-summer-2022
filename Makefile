# Project makefile, useful for storing commands for the command line.
# Make is VERY powerful.  See:  http://www.gnu.org/software/make/manual/


.PHONY: help-make clean test
.DEFAULT: help-make

help-make:
	@echo Welcome to make.  A tool for writing better batch files

all:
	@echo a target for making all the files

clean-android:
	@echo Deleting ANDROID build files and stuff
	-cd android & gradlew clean & cd ..
	-rmdir /S /Q node_modules
	-del yarn.lock package-lock.json

fresh-android: clean-android
	@echo Reinstalling node modules, cleaning cache and starting watcher
	-npm install
	-npm start -- --reset-cache

