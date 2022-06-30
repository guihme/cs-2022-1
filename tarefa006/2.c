#include <stdio.h>

void main() {
    float primeiraMedia = (8 + 9 + 7) / 3;
    float segundaMedia = (4 + 5 + 6) / 3;
    float somaDasMedias = primeiraMedia + segundaMedia;
    float mediaDaPrimeiraComSegunda = (primeiraMedia + segundaMedia) / 2;
    
    
    printf(" A media aritmetica dos numeros 8, 9 e 7 é: %.2f\n", primeiraMedia);
    printf(" A media aritmetica dos numeros 4, 5 e 6 é: %.2f\n", segundaMedia);
    printf(" A soma das duas médias é: %.2f\n", somaDasMedias);
    printf(" A media das medias é: %.2f", mediaDaPrimeiraComSegunda);
}