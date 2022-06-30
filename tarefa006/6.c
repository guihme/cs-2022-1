#include <stdio.h>

void main() {
    int numero;
    
    printf("numero: ");
    scanf("%d", &numero);


    printf("antecessor: %d", numero - 1);
    printf("\nsucessor: %d", numero + 1);
}