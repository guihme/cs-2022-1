#include <stdio.h>

//clean buffer for scanf
void flush_in(){
    int ch;
    while( (ch = fgetc(stdin)) != EOF && ch != '\n' ){}
}

void main() {
    float salrioMinimo, salarioFuncionario;
    
    printf("valor do salario minimo: ");
    scanf("%f", &salrioMinimo);
    
    flush_in();

    printf("valor do salario do funcionario: ");
    scanf("%f", &salarioFuncionario);
    
    flush_in();

    printf("%.1fSM=R$%.2f", salarioFuncionario/salrioMinimo, salarioFuncionario);
   
}