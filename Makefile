

install:
	bundle install

serve:
	bundle exec jekyll serve --verbose --trace --incremental

build:
	bundle exec jekyll build --verbose --trace --incremental
