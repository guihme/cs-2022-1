package exercicio2;

import java.util.InputMismatchException;
import java.util.Scanner;

public class Vetor {

    private static Scanner sc = new Scanner(System.in);
    
    public static void main(String[] args) {

       int vetor[] = new int[10];
       
       try {
        int i = 0;
        do {
            
            int valor = sc.nextInt();
            vetor[i] = valor;
            i++;
        } while (true);
        

       } catch (Exception e) {
        if(e instanceof ArrayIndexOutOfBoundsException){
           System.out.println("Foi informado mais que 10 valores!");
           return;
        }
        if (e instanceof InputMismatchException) {
            System.out.println("Foi informado um valor que não é inteiro");
            return;
        }
        System.out.println(e);
       }
        
    }
}

