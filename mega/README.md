# Mega Bolão Manager — v5

Versão recriada do zero como uma aplicação estática HTML/CSS/JavaScript.

## Como executar

1. Extraia o ZIP.
2. Abra `MegaBolao_v5/index.html` no navegador.
3. Não é necessário instalar servidor, Node.js ou .NET.

## Fluxo recomendado

1. Clique em **＋ Novo projeto** no cabeçalho.
2. Informe:
   - Identificador único;
   - Concurso;
   - Data-base;
   - Descrição.
3. Clique em **Salvar projeto**.
4. Vá para **Projeto** e selecione de 6 a 20 dezenas.
5. Use **Jogos** para fechamento completo/amostra ou **Otimizador** para montar um portfólio.
6. Cadastre participantes e cotas.
7. Use **Persistência** para exportar/importar o projeto.

## Persistência

A v5 usa JSON dentro de `localStorage`.

A chave de cada projeto é:

`Identificador + Concurso + Data-base`

Implementação:

`Identificador|Concurso|Data-base`

Exemplo:

`FAMILIA-GODOY-2026|2920|2026-12-31`

Isso permite que diversos projetos sejam mantidos no mesmo navegador.

### Por que JSON/localStorage?

Para uma aplicação que deve abrir diretamente como `index.html`, é a alternativa mais simples e confiável.

SQLite no navegador é possível com SQLite WASM, normalmente combinado com IndexedDB, mas adiciona uma camada de infraestrutura. Se o projeto evoluir para multiusuário, a melhor arquitetura será:

Frontend → ASP.NET Core Web API → SQLite/PostgreSQL.

## Recursos

- Criar novo projeto explicitamente.
- Salvar projeto.
- Abrir projetos existentes.
- Identificador + concurso + data-base.
- 6 a 20 dezenas-base.
- Fechamento completo C(n,6).
- Amostra aleatória.
- Amostra balanceada.
- Otimizador guloso.
- Cobertura de pares, trincas e quadras.
- Redução de sobreposição.
- Peso histórico opcional.
- Importação de histórico CSV.
- Frequência histórica.
- Atraso real desde a última ocorrência.
- Repetição entre concursos.
- Soma média.
- Participantes e cotas.
- Conferência de resultado.
- Exportação CSV.
- Exportação/importação JSON.
- Exclusão individual ou total dos projetos.
- Operação offline.

## Importante sobre matemática

O otimizador não cria uma vantagem matemática sobre o sorteio.

As métricas de cobertura servem para distribuir melhor um orçamento entre diferentes combinações do conjunto-base.

Frequência, atraso e padrões históricos são estatísticas descritivas, não previsões.

## Próxima evolução sugerida

Se o projeto for usado por várias famílias/empresas, a próxima arquitetura recomendada é separar:

- `Bolao`
- `Concurso`
- `Jogo`
- `Participante`
- `Cota`
- `Resultado`

e usar uma chave única equivalente a:

`UsuarioId + Concurso + DataBase`

em uma API ASP.NET Core, com SQLite inicialmente e PostgreSQL posteriormente.
