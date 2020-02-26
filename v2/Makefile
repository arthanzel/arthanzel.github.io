.PHONY: all
all:
	node build.js

.PHONY: watch
watch: all
	watchman-make -p "**/*.vue" "*.js" "*.styl" -r "node build.js"
