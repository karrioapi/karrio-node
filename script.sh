
if [[ "$*" == *shell* ]]; then
	docker run --network="host" --rm --interactive --tty --volume $PWD:/app node:alpine sh
elif [[ "$*" == *gen:cli* ]]; then
	rm -rf ./src/generated || true
	docker run --rm -v ${PWD}:/local openapitools/openapi-generator-cli generate \
		-i https://raw.githubusercontent.com/karrioapi/karrio/main/server/schemas/openapi.json \
        -g typescript-fetch \
		-o /local/src/generated \
        --additional-properties=typescriptThreePlus=true \
        --additional-properties=modelPropertyNaming=snake_case \
        --additional-properties=useSingleRequestParameter=True

    rm -rf ./src/generated/index.ts || true
    rm -rf ./src/generated/apis/index.ts || true
else
    echo "Help: You can pass any the following commands to the server"
    echo "-----"
    echo "shell: run a node shell inside the container"
    echo "gen:cli: generate node client code"
fi