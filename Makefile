.PHONY: start
start:
	docker-compose -f docker-compose.yml up -d --build

.PHONY: stop
stop:
	docker-compose -f docker-compose.yml stop

.PHONY: restart
restart:
	docker-compose -f docker-compose.yml restart

.PHONY: clean
clean:
	docker-compose -f docker-compose.yml down -v
