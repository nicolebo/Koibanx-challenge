# .env
PWD=$(CURDIR)
ENV_FILE:=${PWD}/.env.example
ifneq ("$(wildcard ${PWD}/.env)","")
    ENV_FILE:=${PWD}/.env
endif
$(eval include ${ENV_FILE})
$(eval export sed 's/=.*//' ${ENV_FILE})

# === build ====================================================================
.PHONY: build
build: ## build image
	docker build -t ${IMAGE} .

# === start ====================================================================
.PHONY: start
start: ## starts containers
	docker-compose -f docker-compose.yml up -d

# === stop ====================================================================
.PHONY: stop
stop: ## Stops all container
	docker-compose -f docker-compose.yml stop

# === clean ====================================================================
.PHONY: clean
clean: ## Cleans database and drop containers
	docker-compose -f docker-compose.yml down -v

# === test ====================================================================
.PHONY: test
test:
	docker-compose -f docker-compose.yml up -d mongo && docker compose run ${IMAGE} npm test

# === seed ====================================================================
.PHONY: seed
seed:
	docker-compose -f docker-compose.yml up -d mongo && docker compose run ${IMAGE} npm run seed

# === first ====================================================================
.PHONY: first
first: dotenv build ## Creates compiler and tries to compile the project (start here)
.PHONY: dotenv
dotenv: ## Creates (dot)env file
	@cp -f ${PWD}/.env.example ${PWD}/.env

# === help =====================================================================
.PHONY: help
help:
	@printf '\n \033[33mProject help - \033[m\n\n'
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' ${PWD}/Makefile | awk \
	  'BEGIN {FS = ":.*?## "}; {printf "\033[37m + \033[34m%-20s\033[37m %s\n", $$1, $$2}'
	@printf '\n\033[m'
.PHONY: h
h: help
