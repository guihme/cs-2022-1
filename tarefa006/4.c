#include <stdio.h>

//clean buffer for scanf
void flush_in(){
    int ch;
    while( (ch = fgetc(stdin)) != EOF && ch != '\n' ){}
}

void main() {
    int codigoPeca1, qtdPeca1, codigoPeca2, qtdPeca2;
    float porcentagem, valorPeca1, valorPeca2;
    
    printf("%% do IPI (decimal): ");
    scanf("%f", &porcentagem);
    
    flush_in();

    printf("codigo da peça 1: ");
    scanf("%d", &codigoPeca1);
    
    flush_in();

    printf("valor da peça 1: ");
    scanf("%f", &valorPeca1);
    
    flush_in();
    
    printf("quantidade peça 1: ");
    scanf("%d", &qtdPeca1);
    
    flush_in();
    
    printf("codigo da peça 2: ");
    scanf("%d", &codigoPeca2);
    
    flush_in();

    printf("valor da peça 2: ");
    scanf("%f", &valorPeca2);
    
    flush_in();
    
    printf("quantidade peça 2: ");
    scanf("%d", &qtdPeca2);
    
    printf("valor total: %.2f", ((qtdPeca1 * valorPeca1) + (qtdPeca2 * valorPeca2)) * ( porcentagem / 100 + 1));
    
}