package Array;

import java.util.Scanner;

public class DNI_noArray {
	static Scanner sc = new Scanner(System.in);
	
	public static void main(String[] args) {
		String letra = "TRWAGMYFPDXBNJZSQVHLCKE";
		int numero;
		int num23;
				
		System.out.println("Ingrese el numero de DNI sin letra:");
		numero = sc.nextInt();sc.nextLine();
		num23 = numero % 23;
		
		System.out.println("\n");
		System.out.println("letra: " + letra.charAt(num23));
		System.out.println("numero + letra: " + numero + letra.charAt(num23));
	}
}
