# Project makefile, useful for storing commands for the command line.

.PHONY: help-make
.DEFAULT: help-make

help-make:
	@echo Welcome to make.  A tool for writing better batch files

all:
	@echo a target for making all the files

clean:
	@echo a target for cleaning caches and downloaded files
