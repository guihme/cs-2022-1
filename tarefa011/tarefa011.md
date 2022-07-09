## Padrões de Codificação

Um padrão que descreve as várias convenções de codificação usadas para implementações compreensíveis, consistentes e qualitativas. O uso de um padrão de codificação é uma prática de desenvolvimento de software amplamente aceita. A necessidade dessa prática é a importância de criar um ambiente altamente colaborativo. Sua equipe deve ter uma maneira padrão de nomear e formatar seu código para que possa entendê-lo rapidamente e saber onde procurar o que precisa. Isso permite a propriedade compartilhada do código para que cada membro da equipe possa entender rapidamente o código escrito por outros.
Exemplo de nomes de classes e interfaces em Java:
- Os nomes de classe devem ser substantivos e, em caso de nomes compostos, utilize nomes com a primeira letra de cada palavra interna maiúscula. Use palavras inteiras evitando acrônimos e abreviaturas. Exemplo: Cliente ou ContaCliente.

## Programação Defensiva

A programação defensiva é o desenvolvimento de código de software de computador projetado para evitar problemas antes que eles surjam e tornar o produto mais estável. A premissa básica é criar um sistema que funcione bem mesmo em processos inesperados ou quando entradas inesperadas são feitas pelos usuários. A programação defensiva geralmente depende de uma combinação um tanto paradoxal de eliminação de código desnecessário, garantindo que quantidades suficientes sejam geradas para lidar com todas as ações possíveis do usuário.
A programação defensiva pode ser usada para eliminar códigos desnecessários.
Um exemplo de utilização é adicionar validações para os dados recebidos. Existem várias ferramentas que podem nos auxiliar nessa verificação, como o uso da lib Joi em JS.

## Reflexão

Na ciência da computação, a reflexão é a capacidade de um programa de computador examinar, introspectar e modificar sua própria estrutura e comportamento em tempo de execução.
Tradicionalmente usado para carregar módulos e classes de assemblies e instanciá-los em tempo de execução.
Para criar bibliotecas comuns que lidam com formatos diferentes sem reimplantar, às vezes fazendo referência ou usando associação tardia implícita.
A reflexão também é útil quando você está escrevendo código genérico em uma estrutura. Você pode precisar interagir com tipos fornecidos pelo usuário que você pode não ter previsto. A reflexão pode ajudar quando você não sabe quais métodos e propriedades um tipo expõe.
Um exemplo útil do mundo real de usar reflexão seria a troca entre montagens com base em um valor armazenado em um banco de dados ou outro recurso estático. 
