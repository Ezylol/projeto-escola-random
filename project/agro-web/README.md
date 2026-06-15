# Agropecuária Web Project

Este projeto é uma aplicação web dedicada à agropecuária, fornecendo informações sobre culturas, fazendas e práticas agrícolas. Abaixo estão as instruções para instalação e uso, bem como uma visão geral da estrutura do projeto.

## Estrutura do Projeto

```
agro-web
├── public
│   └── index.html          # Ponto de entrada da aplicação
├── src
│   ├── css
│   │   └── main.css        # Estilos principais da página
│   ├── js
│   │   └── main.js         # Código JavaScript principal
│   ├── components
│   │   ├── header.js       # Componente de cabeçalho
│   │   └── farmCard.js     # Componente de cartão de fazenda
│   ├── pages
│   │   ├── home.html       # Conteúdo da página inicial
│   │   └── about.html      # Informações sobre o projeto
│   └── data
│       └── crops.json      # Dados sobre diferentes culturas
├── .gitignore              # Arquivos a serem ignorados pelo Git
├── package.json            # Configuração do npm
└── README.md               # Documentação do projeto
```

## Instalação

1. Clone o repositório:
   ```
   git clone <URL do repositório>
   ```
2. Navegue até o diretório do projeto:
   ```
   cd agro-web
   ```
3. Instale as dependências:
   ```
   npm install
   ```

## Uso

Para iniciar a aplicação, você pode usar um servidor local. Uma opção é usar o `live-server` ou qualquer outro servidor de sua preferência. Execute o seguinte comando:
```
npx live-server public
```

## Contribuição

Sinta-se à vontade para contribuir com melhorias ou correções. Para isso, crie um fork do repositório, faça suas alterações e envie um pull request.

## Licença

Este projeto está licenciado sob a MIT License - veja o arquivo [LICENSE](LICENSE) para mais detalhes.