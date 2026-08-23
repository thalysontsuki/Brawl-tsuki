document.addEventListener('DOMContentLoaded', function() {
    const button = document.querySelector('.button');
    if (button) {
        button.addEventListener('click', function(e) {
            if (this.textContent.includes('Jogar')) {
                e.preventDefault();
                alert('🎮 Jogo iniciado! Divirta-se!');
                this.textContent = 'Jogando...';
                this.disabled = true;
            }
        });
    }
});