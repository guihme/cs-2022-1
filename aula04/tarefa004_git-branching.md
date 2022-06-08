### Tarefa 004: Git Branching - 03/06/2021

1. Qual o nome do branch padrão do Git?

master ou main

2. O que o comando **<code>git branch nome</code>** realiza?

cria uma branch com o nome "nome"

3. Como criar um branch a partir de um commit específico?

git branch -b informando o nome do branch e o id do commit

4. Em um repositório, qual o efeito do comando **<code>git checkout -b bugfix/234</code>**?

cria e muda para a branch bugfix/234

5. Qual o comando para se alternar para um branch de nome **experimento2**?

git checkout experimento2

6. Em um repositório com dois branches, **b1** e **b2**, onde b1 é o corrente, qual o efeito do comando **<code>git branch</code>**?

lista todas os branchs b1 e b2 e idenfica b1 indicando que o branch atual

7. O que o comando **<code>git checkout -b</code>** nome faz?

cria uma nova branch e muda para ela.

8. Qual a função do <code>**comando git branch -d teste</code>**?

deleta o branch teste

9. Durante o desenvolvimento de um software é comum, por exemplo, utilizar um novo recurso por meio de experimentação. Talvez uma nova tecnologia, uma nova biblioteca que pode ser útil ao que está em desenvolvimento, ou até mesmo uma nova versão de um produto já empregado. Para que o uso deste novo recurso não interfira com o que é considerado pronto, um branch pode ser criado para a experimentação. Código que for criado para a experimentação existirá apenas no branch criado. Se eventualmente o experimento demonstrar um resultado satisfatório, as alterações realizadas no branch poderão ser incorporadas no que é considerado pronto, ou seja, no branch principal (master). Esta última ação é conhecida por merge. Neste item, crie uma sequência de comandos que simula um caso simples de criação e uso seguido de merge empregando um branch para ilustrar uma experimentação conforme acima. A sequência deve incluir, obrigatoriamente: (a) criação de um ou mais branches; (b) chaveamento para pelo menos dois branches e (c) merge.

git pull
git checkout -b 'hot-fix'
git add .
git commit -m "fix(bug) a bug-fix"
git push
git checkout main
git pull
git merge hot-fix
git push

INSTRUÇÕES:

1. No seu repositório pessoal, criar a pasta aula04.
2. Commitar este arquivo respondido nesta pasta.
3. A data limite para concluir esta tarefa é dia 07/06/2021, as 23h59min.

</DIV/>
