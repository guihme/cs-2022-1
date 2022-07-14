package exercicio3;

import java.util.Scanner;

public class Login {
    private String user, password;
    private static Scanner sc = new Scanner(System.in);

    public Login(String user, String password) {
        this.user = user;
        this.password = password;
    }

    public boolean doLogin(String user, String pass) throws LoginInvalidoException {

        if (user.equals(this.user) || pass.equals(this.password)) {
            return true;
        }
        throw new LoginInvalidoException("UnAuthorized!");
    }

    public static void main(String[] args) {

        Login login = new Login("user", "truePass");

        try {

            String user = sc.nextLine();
            String password = sc.nextLine();
            System.out.println(login.doLogin(user, password));

        } catch (Exception e) {
            System.out.println(e);
        }

    }
}
