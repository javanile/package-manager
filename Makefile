


CONTAINER_NAME = package-manager-dev

push:
	@git add .
	@git commit -m "Update"
	@git push

serve:
	@docker rm -f $(CONTAINER_NAME) 2>/dev/null || true
	@docker run \
		--name $(CONTAINER_NAME) \
		-p 4000:4000 \
		-v $$(pwd):/site \
		-v $$(pwd)/.bundle/root:/root/.bundle \
		-v $$(pwd)/.bundle/local:/usr/local/bundle \
		bretfisher/jekyll-serve

restart:
	@docker rm -f $(CONTAINER_NAME) 2>/dev/null || true
	@docker run \
		--name $(CONTAINER_NAME) \
		-p 4000:4000 \
		-v $$(pwd):/site \
		-v $$(pwd)/.bundle/root:/root/.bundle \
		-v $$(pwd)/.bundle/local:/usr/local/bundle \
		bretfisher/jekyll-serve
