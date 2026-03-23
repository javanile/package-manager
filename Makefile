

CONTAINER_NAME = package-manager-dev

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

# -----
# Main

push:
	@git config credential.helper 'cache --timeout=3600'
	@git add .
	@git commit -m "Update"
	@git push

serve:
	$(call docker_serve,$(CONTAINER_NAME),4000,.)

restart:
	$(call docker_serve,$(CONTAINER_NAME),4000,.)

# -----
# Demo: minimal (port 4001)
# Zero-config demo — shows the template works out of the box.

demo-minimal:
	$(call docker_serve,package-manager-demo-minimal,4001,demo/minimal)

restart-demo-minimal:
	$(call docker_serve,package-manager-demo-minimal,4001,demo/minimal)

# -----
# Demo: bpkg (port 4002)
# bpkg-style demo — bash package registry with realistic packages.

demo-bpkg:
	$(call docker_serve,package-manager-demo-bpkg,4002,demo/bpkg)

restart-demo-bpkg:
	$(call docker_serve,package-manager-demo-bpkg,4002,demo/bpkg)

# -----
# Stop all

stop:
	@docker rm -f $(CONTAINER_NAME) 2>/dev/null || true
	@docker rm -f package-manager-demo-minimal 2>/dev/null || true
	@docker rm -f package-manager-demo-bpkg 2>/dev/null || true
