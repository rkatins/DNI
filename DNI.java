package Array;

import java.util.Scanner;

public class DNI {
	static Scanner sc = new Scanner(System.in);
	static String[] letras = {"T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E"};
	
	public static void main(String[] args) {
		int numeroDNI;
		
		System.out.println("Dime numero de DNI sin letra");
		numeroDNI = sc.nextInt();sc.nextLine();
		
		System.out.println(obtenerLetra(numeroDNI));
	}
	
	public static String obtenerLetra(int numeroDNI) {
		int num23;
		
		num23 = numeroDNI % 23;
		
		return "\nNumero + letra: " + numeroDNI + letras[num23];
	}

}
