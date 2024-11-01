
let empleados = [];


function Empleado(nombre, apellido, fechaNacimiento, cargo) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.fechaNacimiento = fechaNacimiento;
    this.cargo = cargo;
}


function agregarEmpleado() {

    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const fechaNacimiento = document.getElementById('fechaNacimiento').value;
    const cargo = document.getElementById('cargo').value;


    const empleado = new Empleado(nombre, apellido, fechaNacimiento, cargo);


    empleados.push(empleado);


    document.getElementById('nombre').value = '';
    document.getElementById('apellido').value = '';
    document.getElementById('fechaNacimiento').value = '';
    document.getElementById('cargo').value = '';

    alert('Empleado agregado exitosamente.');
}


function listarEmpleados() {
    let mensaje = 'Lista de Empleados:\n\n';
    
    
    empleados.forEach((empleado, index) => {
        mensaje += `Empleado ${index + 1}:\n`;
        
        for (let propiedad in empleado) {
            mensaje += `${propiedad}: ${empleado[propiedad]}\n`;
        }
        mensaje += '\n';
    });
    
    alert(mensaje);
}
