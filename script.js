document.addEventListener("DOMContentLoaded", () => {

    // Crear el canvas Hydra dentro de la sección #inicio
    const inicio = document.getElementById('inicio');
    const hydraCanvas = document.createElement('canvas');
    inicio.appendChild(hydraCanvas);

    // Inicializar Hydra
    const hydra = new Hydra({
        canvas: hydraCanvas,
        detectAudio: false
    });

    // Lista de visuales
    const visuales = [
        // 3️⃣ PULSOS ORGÁNICOS (más envolvente, con sensación biológica)
        () => {
            noise(3, 0.3)
                .color(1, 0.5, 0.8)
                .modulate(osc(2, 0.2, 2))
                .diff(osc(3).kaleid(4))
                .scale(1.2)
                .out();
        }
    ];

    // Elegir una visual aleatoriamente
    const randomIndex = Math.floor(Math.random() * visuales.length);

    // Ejecutar visual
    visuales[randomIndex]();
});