#!/bin/bash


docker run \
	--volume="$PWD:/root/project:delegated" \
	--entrypoint /bin/sh \
	-ti node:20-alpine \
	-c "
		cd /root/project/;
		yarn
		yarn build

		apk update
		apk add py3-pip ruby ruby-dev ruby-nokogiri alpine-sdk openjdk11-jre-headless bash
		pip3 install html5validator 
		gem install --no-document html-proofer
		./proof_html.sh
"
