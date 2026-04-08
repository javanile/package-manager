
CONTAINER_NAME = package-manager-dev

# Demo port mapping: add new demos here
DEMO_PORTS = minimal:4001 bpkg:4002 docker:4003

define demo_port
$(patsubst $(1):%,%,$(filter $(1):%,$(DEMO_PORTS)))
endef

# -----
# Push to main

push:
	@git config credential.helper 'cache --timeout=3600'
	@git add .
	@git commit -m "Update"
	@git push

# -----
# Serve
# Usage:
#   make serve            → local dev (current checkout, port 4000)
#   make serve demo=X     → push to main, restart demo X with fresh remote theme

serve:
ifdef demo
	$(MAKE) push
	@docker rm -f package-manager-demo-$(demo) 2>/dev/null || true
	@docker pull bretfisher/jekyll-serve
	@docker run \
		--name package-manager-demo-$(demo) \
		-p $(call demo_port,$(demo)):4000 \
		-v $$(pwd)/demo/$(demo):/site \
		bretfisher/jekyll-serve
else
	@docker rm -f $(CONTAINER_NAME) 2>/dev/null || true
	@docker run \
		--name $(CONTAINER_NAME) \
		-p 4000:4000 \
		-v $$(pwd):/site \
		-v $$(pwd)/.bundle/root:/root/.bundle \
		-v $$(pwd)/.bundle/local:/usr/local/bundle \
		bretfisher/jekyll-serve
endif

# -----
# Stop all containers

stop:
	@docker rm -f $(CONTAINER_NAME) 2>/dev/null || true
	@for entry in $(DEMO_PORTS); do \
		name=$$(echo $$entry | cut -d: -f1); \
		docker rm -f package-manager-demo-$$name 2>/dev/null || true; \
	done
