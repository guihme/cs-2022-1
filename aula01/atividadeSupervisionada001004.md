### Semana 1 - Dia 25/05/2022 - Aulas 001a004 - Atividade Supervisionada


1. Elaborar uma pesquisa sobre o tema "_Rest API_".
2. Elaborar um texto de pelo menos uma página, descrito com suas próprias palavras, destacando:
* As definições dos conceitos envolvidos;
* As principais características deste conceito (pelo menos umas cinco).

## Rest API
Uma API ou interface de programação de aplicativos é um conjunto de regras que definem como aplicativos ou dispositivos se conectam e se comunicam entre si. Uma API REST é uma API que se modela de acordo com os princípios de design REST ou o estilo arquitetônico Representational State Transfer. Portanto, as APIs REST são frequentemente chamadas de APIs RESTful.
## Princípios do REST
As APIs REST podem ser desenvolvidas em praticamente qualquer linguagem de programação e suportam vários formatos de dados. O único requisito é que eles estejam em conformidade com os seis princípios de design REST, também conhecidos como restrições de arquitetura.
###### 1. Interface uniforme:
* Todas as solicitações da API para o mesmo recurso devem ser iguais, não importa a origem da solicitação.
###### 2. Desacoplamento do cliente-servidor:
* No projeto da API de REST, os aplicativos cliente e servidor devem ser completamente independentes um do outro. A única informação que o aplicativo cliente deve receber é a URI do recurso solicitado.
###### 3. Sem estado definido:
* As APIs de REST não possuem estado definido, o que significa que cada solicitação precisa incluir todas as informações necessárias para processá-lo.
###### 4. Capacidade de armazenamento em cache:
* Se possível, os recursos devem ser armazenados em cache pelo cliente ou servidor. A resposta do servidor precisa também conter informações sobre as permissões de cache para o recurso fornecido.
###### 5. Arquitetura de sistema em camadas:
* Em uma API REST, chamadas e respostas passam por diferentes camadas. Em geral, não assuma que os aplicativos cliente e servidor estejam conectados diretamente um ao outro. Pode haver muitos intermediários diferentes na comunicação.
###### 6. Código sob demanda (opcional):
* REST permite que a funcionalidade do lado do cliente seja estendida baixando e executando código na forma de scripts. Isso simplifica o cliente, reduzindo o número de funções que precisam ser implementadas antecipadamente.
## Métodos
As APIs de REST se comunicam via solicitações de HTTP para executar funções padrão como criar, ler, atualizar e excluir registros  em um recurso.
* O método GET geralmente é usado para solicitar que um servidor envie um recurso;
* O método POST  enviar dados de entrada para o servidor;
* O método PUT edita e atualiza documentos em um servidor;
* O método DELETE deleta certo dado ou coleção do servidor.