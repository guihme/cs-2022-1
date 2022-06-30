#include <stdio.h>

void main() {
    float saldo;
    
    printf("saldo: ");
    scanf("%f", &saldo);
    
    printf("saldo reajustado = %.2f", saldo * 1.15);
}