package exercicio1;


import java.util.InputMismatchException;
import java.util.Scanner;

public class Divisao {

    private static Scanner sc = new Scanner(System.in);

    public static int divide(int dividendo, int divisor) throws ArithmeticException{

        if(divisor == 0)
            throw new ArithmeticException("O divisor deve ser diferente de zero");
        else
            return dividendo/divisor;
    }

    public static void main (String args[]) {
        try{
            System.out.println("Informe o valor do dividendo: ");
            int dividendo = sc.nextInt();
            System.out.println("Informe o valor do divisor: ");
            int divisor = sc.nextInt();

            System.out.println("Resultado: " + divide(dividendo, divisor)); 

        } catch (Exception e) {
            if(e instanceof InputMismatchException){
                System.out.println(e + ": o valor informado não é uma string.");
                return;
            }
            System.out.println(e);
        }

    }

}
