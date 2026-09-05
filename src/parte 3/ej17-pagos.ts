/**
 * EJERCICIO 17 - Sistema de pagos
 * ---------------------------------------------------------------------------
 * `procesarPago` no debe saber qué tipo concreto de MetodoPago está
 * utilizando: solo le importa que cumpla la interface.
 */
export interface MetodoPago {
    pagar(monto: number): void;
}

export class TarjetaCredito implements MetodoPago {
    pagar(monto: number): void {
        console.log(`Pagando ${monto} con tarjeta de crédito`);
    
        // TODO: informar el pago por consola (console.log), mencionando el
        // monto. Cada método de pago debe loguear un mensaje distinto que
        // lo identifique (por ejemplo, mencionando "tarjeta").
    }
}

export class Transferencia implements MetodoPago {
    pagar(monto: number): void {
        console.log(`Pagando ${monto} con transferencia bancaria`);
        // TODO: idem, mencionando "transferencia"
    
    }
}

export class MercadoPago implements MetodoPago {
    pagar(monto: number): void {
        console.log(`Pagando ${monto} con MercadoPago`);
    }
}

export class Efectivo implements MetodoPago {
    pagar(monto: number): void {
        console.log(`Pagando ${monto} en efectivo`);
    }
}

export function procesarPago(metodo: MetodoPago, monto: number): void {
    metodo.pagar(monto);
    console.log("Procesando pago...");
}
