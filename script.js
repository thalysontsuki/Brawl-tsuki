document.addEventListener('DOMContentLoaded', function() {
    const playBtn = document.getElementById('playBtn');
    if (playBtn) {
        playBtn.addEventListener('click', function() {
            alert('🎮 Jogo iniciado! Divirta-se!');
            this.textContent = 'Jogando...';
            this.disabled = true;
        });
    }
});