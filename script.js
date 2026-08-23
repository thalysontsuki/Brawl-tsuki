document.getElementById('startBtn').addEventListener('click', function() {
    alert('🎮 Jogo iniciado! Divirta-se!');
    this.textContent = 'Jogando...';
    this.disabled = true;
});