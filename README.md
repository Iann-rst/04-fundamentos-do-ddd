# DDD (Domain-driven Design)

Design dirigido à domínio

## Domínio

É o coração do negócio em que você está trabalhando. É baseado em um conjunto de ideias, conhecimento e processos de negócio. É a razão para o negócio existir.

- Domain Experts

  - Conversa: Entender o funcionamento do negócio e evitar problemas de comunicação;

- Linguagem ubíqua

  - Linguagem falada no dia a dia, no contexto da empresa. É a linguagem que utiliza as terminologias da realidade do negócio;
  - Podemos falar do termo usuário. Alguns entenderão como alguém logado no sistema. Outros poderão chamar de cliente, fornecedor, atendente...

  - Usuário:
    - Cliente;
    - Fornecedor;
    - Atendente;
    - Barman;

- Agregados;
- Value Objects;
- Eventos de domínio;
- Subdomínios (Bounded Contexts);
- Entidades;
- Casos de uso;

# Fórum com DDD & Clean Architecture

Desacoplamento entre as camadas;

- [The Clean Code Blog - Clean Architecture, Author: Uncle Bob](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html)

# Aggregates & Watched Lists

## Conceitos

- Aggregate: Conjunto de entidades que são manipuladas ao mesmo tempo e elas juntas compõem algo maior (agregado). Ajudam a organizar e manter a consistência de objetos relacionados;

- Watched Lists: Lista observável - Classe (Pattern) que permite ter mais informações de itens contido em um lista (itens novo, editados ou removidos). São listas de objetos que são monitorados conforme ocorrem alterações nos objetos agregados;

# Subdomínios & Domain Events

- Core: O que dá dinheiro
- Supporting: Dá suporte para o core funcionar
- Generic: Você precisa, mas não são tão importantes

## Exemplos de Subdomínios

- Baseados em um sistema de E-Commerce

### Core

- Compra
- Catálogo
- Pagamento
- Entrega

### Supporting

- Estoque

### Generic

- Notificação ao cliente
- Promoções
- Chat
