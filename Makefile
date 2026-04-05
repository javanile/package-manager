

CONTAINER_NAME = package-manager-dev

# Demo port mapping: add new demos here
DEMO_PORTS = minimal:4001 bpkg:4002 docker:4003

# -----
# Helpers

define docker_serve
	@docker rm -f $(1) 2>/dev/null || true
	@docker run \
		--name $(1) \
		-p $(2):4000 \
		-v $$(pwd)/$(3):/site \
		-v $$(pwd)/$(3)/.bundle/root:/root/.bundle \
		-v $$(pwd)/$(3)/.bundle/local:/usr/local/bundle \
		bretfisher/jekyll-serve
endef

define demo_port
$(patsubst $(1):%,%,$(filter $(1):%,$(DEMO_PORTS)))
endef

# -----
# Main

push:
	@git config credential.helper 'cache --timeout=3600'
	@git add .
	@git commit -m "Update"
	@git push

serve:
ifdef demo
	@bash scripts/stage-demo.sh $(demo)
	$(call docker_serve,package-manager-demo-$(demo),$(call demo_port,$(demo)),.demo-build/$(demo)-current)
else
	$(call docker_serve,$(CONTAINER_NAME),4000,.)
endif

restart:
ifdef demo
	@bash scripts/stage-demo.sh $(demo)
	$(call docker_serve,package-manager-demo-$(demo),$(call demo_port,$(demo)),.demo-build/$(demo)-current)
else
	$(call docker_serve,$(CONTAINER_NAME),4000,.)
endif

restart-demos:
	@for entry in $(DEMO_PORTS); do \
		name=$$(echo $$entry | cut -d: -f1); \
		$(MAKE) restart demo=$$name; \
	done

# -----
# Stop all

stop:
	@docker rm -f $(CONTAINER_NAME) 2>/dev/null || true
	@for entry in $(DEMO_PORTS); do \
		name=$$(echo $$entry | cut -d: -f1); \
		docker rm -f package-manager-demo-$$name 2>/dev/null || true; \
	done
