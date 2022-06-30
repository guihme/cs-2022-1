#include <stdio.h>

void main() {
    int anos, meses, dias;

    printf("anos: ");
    scanf("%d", &anos);

    printf("meses: ");
    scanf("%d", &meses);

    printf("dias: ");
    scanf("%d", &dias);

    printf("%d ano(s), %d mes(es) e %d dia(s) = %d dia(s)", anos, meses, dias, (365 * anos) + (30 * meses) + dias);
}