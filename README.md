# full-cycle-docker-node

    Construi um Dockerfile para o nginx e outro para o node. Utilizei o comando COPY para mandar o arquivo de configuração do nginx e os arquivos necessários do projeto node para dentro das minhas imagens. Após, usei o o docker-compose para construir um banco mysql, juntamente com minhas imagens node e nginx e colocar todos na mesma rede.

    Node roda na porta 3000 e nginx na 80.

[link da imagem node](https://hub.docker.com/repository/docker/claudiopsilva/node) 

[link da imagem nginx](https://hub.docker.com/repository/docker/claudiopsilva/nginx)