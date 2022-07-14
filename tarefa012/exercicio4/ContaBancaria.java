package exercicio4;

import java.util.Scanner;

public class ContaBancaria {
    private Double saldo = 0.0;
    private static Scanner sc = new Scanner(System.in);


    public void sacar(double valor) throws SaldoInsuficienteException {
        if(this.saldo < valor){
            throw new SaldoInsuficienteException("saldo insifuciente para saque!");
        }
        this.saldo = this.saldo - valor;
        return;
    }

    public void depositar(double valor) {
        this.saldo = this.saldo + valor;
        return;
    }

    public static void main(String[] args) {

        ContaBancaria conta = new ContaBancaria();

        try {
            System.out.println("deposite: ");
            Double deposito = sc.nextDouble();
            conta.depositar(deposito);
            System.out.println("saque: ");
            Double saque = sc.nextDouble();
            conta.sacar(saque);
            System.out.println("sucesso!!!");
        } catch (Exception e) {
            System.out.println(e);
        }

    }
}
