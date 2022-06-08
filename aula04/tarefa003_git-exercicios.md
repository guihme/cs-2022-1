### Tarefa 003: Git Exercícios - 03/06/2021.

Responda as questões abaixo (exercite os comandos do git correspondentes). Lembre-se de que o “interessante” não é exatamente o conjunto de respostas, mas o processo de obtê-las e a experiência obtida com a execução dos comandos.


1. Qual o comando para obter a versão instalada do Git?
git --version
2. Qual o efeito da execução de cada um dos comandos abaixo?
  a. git help

  lista e descreve no terminal os comandos git mais comuns

  b. git help checkout

  abre uma página de manual sobre o comando checkout

  c. git help merge

  abre uma página de manual sobre o comando merge 

  d. git init

  inicia um novo repositório e cria uma pasta .git

  e. git add --all

  adiciona as alterações de todos os arquivos treacked ou untracked

  f. git add -u

  atualiza os arquivos monitorados

  g. git config -l

  lista todas as variáveis setadas no arquivo de configuração e seus valores

  h. git mv a.txt b.txt

  renomeia o arquivo a.txt para b.txt

  i. git reset --hard

  reseta o índece e a ávore de trabalho, descartando todas as alterações até o último commit.

  j. git log -27

  mostra o log dos últimos 27 commits' 

3. O fluxo “clássico” de interação com o Git é algo como “alterar um ou mais arquivos”, “acrescentar essas mudanças para serem contemplados no próximo commit” e, finalmente, executar um “commit”. Quais os comandos necessários para realizar os dois últimos “passos” desse fluxo?

git add e git commit

4. Qual o comando deve ser executado para identificar o que foi alterado desde o último “commit”?

git diff

5. Em um dado repositório, arquivos simplesmente copiados para lá, ou seja, _untracked_, podem ser exibidos/identificados com que comando?

git status

6. Qual o comando para efetuar um _commit_?

git commit

7. Qual o comando que devemos empregar para descartar mudanças ocorridas no arquivo teste.txt, por exemplo?

git restore teste.txt

8. O que deve ser feito para que um determinado diretório do seu repositório seja ignorado pelo Git? Faça uma busca por **.gitignore**.

Caso o .gitignore não exista na raiz do projeto, deve primeiro cria-lo e então adicionar o nome do diretórito dentro dele.

9. O que acontece se o seu repositório local for acidentalmente removido?

Caso esse repositório exista remotamente pode-se recuperar os arquivos até o último git push, caso o contrario tudo será perdido

10. Como clonar um repositório remoto?

com o comando git clone informando uma URL remota

11. Em alguns cenários **git log** pode produzir extensos resultados. Se houver interesse em visualizar o histórico de um repositório, onde cada mudança é fornecida exatamente em uma única linha, qual o comando que deve ser empregado?

git log --pretty=oneline

12. Em qual arquivo o Git armazena informações de configuração empregadas por usuário?

.gitconfig

13. Qual o comando para criar um repositório local?

git init

14. Qual o nome do diretório criado pelo Git quando se executa o comando **git init**?

.git

15. Qual o comando para adicionar todos os arquivos modificados? (Aqueles para os quais **git status** identificam como **modified**?)

git add -u

16. O Git faz uso do valor de hash conhecido por SHA1. O que isto significa? Qual o propósito? O que é SHA1?

Siginifica que o git usa uma criptografia, chamada SHA1 com o propósito de garantir a integridade dos dados e segurança. É um tipo de criptografia com função hash criptográfica.

17. Qual a palavra para indicar o último _commit_ em vez do valor de hash SHA1 correspondente?

HEAD

18. Quando se cria dois arquivos usando um editor de texto qualquer e, na sequência, executamos o comando **git add -u**, os dois arquivos criados passam de _untracked_ para _new file_?

Não.

19. Qual o efeito da execução dos dois comandos abaixo, nesta ordem, em um dado repositório?
**git reset --soft HEAD~1**
**git reset --hard**

O primeiro comando irá remover o último commit da branch atual e os arquivos que foram alterado permanecerão na árvore de trabalho, quando o segundo comando fór executado todas as alteração que não foram commitadas serão perdidas e não ficarão na árvore de trabalho.

20. Após o emprego de um ambiente integrado de desenvolvimento (IDE), é comum a criação de arquivos e diretórios. Qual o comando que podemos empregar para remover arquivos e diretórios _untracked_?

git clean -f -d

21. Qual o nome do arquivo no qual podemos inserir a indicação para o Git de arquivos e diretórios a serem ignorados?

.gitignore

22. Quando se cria o arquivo _MinhaClasse.class_ em um dado diretório e desejamos que arquivos com a extensão .class, como neste caso, sejam ignorados por todos os membros de uma equipe que estão contribuindo com um dado projeto, como devemos proceder?

devemos adicionar a extensão '.class' dentro do arquivo .gitignore

23. jQuery é uma famosa biblioteca em JavaScript. Consulte detalhes em [jQuery](http://jquery.com). O repositório correspondente encontra-se em [gitRep](https://github.com/jquery/jquery.git). Faça o clone deste repositório.
24. No repositório **jqueryrepo**, criado no passo anterior, qual o efeito do comando
**git shortlog -sne**?

É exibido  uma lista contendo a quantidade de commits por autor

25. No repositório **jqueryrepo**, qual o efeito de **git remote -v**?

É exibido o a URL do repositorio remoto

26. Um repositório Git pode ser etiquetado ao longo do tempo. Ou seja, _commits_ específicos podem ser “marcados” ou “etiquetados” para facilitar referências posteriores. Para listar todas as “etiquetas” (_tags_) estabelecidas para um dado repositório, qual comando deve ser executado?

git tag

27. Caso um dato repositório retorne muitas “marcas” ou “etiquetas” para o comando **git tag**, como retornar apenas aquelas que atendem a determinado padrão, por exemplo, iniciadas por 2.0?

git tag -l "2.0"

28. Qual o efeito do comando **git tag -a 3.4-gold -m “minha versão ouro”**?

cria uma tag chamada 3.4-gold para o commit

29. Após executado o comando acima, qual o efeito de **git show 3.4-gold**?

Exibe as informações da tag

30. O que o comando **git push origin 3.4-gold** teria como efeito?

Atualizaria o repositoria local e remoto com a tag 

31. Após executar um commit, qual o efeito de **git commit --amend**?

Adiciona as alterações no último commit

32. Após executar **git add x.txt**, qual o efeito de **git reset HEAD x.txt**?

As alterações feitas no arquivo não irão ser commitadas

33. Após alterar o conteúdo de um arquivo committed em passo anterior, qual o efeito do comando **git checkout -- a.txt**?

Nenhum

34. Qual a diferença entre os comandos **git reset HEAD a.txt** e **git checkout -- a.txt**?

O primeiro restaura o HEAD para o estado do indice do arquivo e o segundo restaura o arquivo da arvore de trabalho

35. Veja como interpretar o resultado de git diff [aqui](https://medium.com/therobinkim/how-to-read-a-git-diff-6c87a9dc47c5). Execute, em um dos seus projetos, o comando **git diff HEAD~1 HEAD** e certifique-se de que entende o resultado apresentado.



INSTRUÇÕES:

1. No seu repositório pessoal, criar a pasta aula04.
2. Commitar este arquivo respondido nesta pasta.
3. A data limite para concluir esta tarefa é dia 07/06/2021, as 23h59min.











</DIV/>
