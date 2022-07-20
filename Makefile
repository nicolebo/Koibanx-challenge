# .env
PWD=$(CURDIR)
ENV_FILE:=${PWD}/example.env
ifneq ("$(wildcard ${PWD}/.env)","")
    ENV_FILE:=${PWD}/.env
endif
$(eval include ${ENV_FILE})
$(eval export sed 's/=.*//' ${ENV_FILE})

.PHONY: build
build:
	docker build -t ${IMAGE} .

.PHONY: start
start:
	docker-compose -f docker-compose.yml up -d

.PHONY: stop
stop:
	docker-compose -f docker-compose.yml stop

.PHONY: restart
restart:
	docker-compose -f docker-compose.yml restart

.PHONY: clean
clean:
	docker-compose -f docker-compose.yml down -v

.PHONY: test
test:
	docker-compose -f docker-compose.yml up -d mongo && docker compose run ${IMAGE} npm test

.PHONY: seed
seed:
	docker-compose -f docker-compose.yml up -d mongo && docker compose run ${IMAGE} npm run seed

.PHONY: first
first: dotenv build ## Creates compiler and tries to compile the project (start here)
.PHONY: dotenv
dotenv: ## Creates (dot)env file
	@cp -f ${PWD}/.env.example ${PWD}/.env
