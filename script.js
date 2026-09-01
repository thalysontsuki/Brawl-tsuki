// Script simples para abrir o modal e popular os dados
document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('productModal');
  const modalBackdrop = document.getElementById('modalBackdrop');
  const modalClose = document.getElementById('modalClose');

  const modalImage = document.getElementById('modalImage');
  const modalThumbs = document.getElementById('modalThumbs');
  const modalTitle = document.getElementById('modalTitle');
  const modalPrice = document.getElementById('modalPrice');
  const modalDesc = document.getElementById('modalDesc');

  const qtyInput = document.getElementById('qtyInput');
  const qtyPlus = document.getElementById('qtyPlus');
  const qtyMinus = document.getElementById('qtyMinus');

  function openModalFromCard(card) {
    const name = card.dataset.name;
    const price = parseFloat(card.dataset.price).toFixed(2).replace('.',',');
    const img = card.dataset.img;
    const desc = card.dataset.desc || '';

    modalTitle.textContent = name;
    modalPrice.textContent = `R$ ${price}`;
    modalDesc.textContent = desc;
    modalImage.src = img;

    // thumbnails (exemplo com variações de tamanho para simular imagens diferentes)
    modalThumbs.innerHTML = '';
    const thumbs = [img,
      img.replace('800x600','400x300'),
      img.replace('800x600','600x450')];

    thumbs.forEach((t,i)=>{
      const im = document.createElement('img');
      im.src = t;
      if(i===0) im.classList.add('active');
      im.addEventListener('click', ()=> {
        modalImage.src = t;
        modalThumbs.querySelectorAll('img').forEach(x=>x.classList.remove('active'));
        im.classList.add('active');
      });
      modalThumbs.appendChild(im);
    });

    // abrir modal
    modal.setAttribute('aria-hidden','false');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modal.setAttribute('aria-hidden','true');
    document.body.style.overflow = '';
  }

  // eventos de abrir
  document.querySelectorAll('.product-card .view-product').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const card = e.currentTarget.closest('.product-card');
      openModalFromCard(card);
    });
  });

  modalBackdrop.addEventListener('click', closeModal);
  modalClose.addEventListener('click', closeModal);
  document.addEventListener('keydown', (e) => {
    if(e.key === 'Escape') closeModal();
  });

  // quantidade
  qtyPlus.addEventListener('click', ()=> qtyInput.value = Math.max(1, parseInt(qtyInput.value||1)+1));
  qtyMinus.addEventListener('click', ()=> qtyInput.value = Math.max(1, parseInt(qtyInput.value||1)-1));

  // ações (substitua por integração com seu carrinho/backend)
  document.getElementById('addCart').addEventListener('click', ()=> {
    const item = {
      name: modalTitle.textContent,
      price: modalPrice.textContent,
      color: document.getElementById('optionColor').value,
      size: document.getElementById('optionSize').value,
      qty: parseInt(qtyInput.value||1)
    };
    console.log('Adicionar ao carrinho:', item);
    alert(`${item.qty}x ${item.name} adicionados ao carrinho.`);
    closeModal();
  });

  document.getElementById('buyNow').addEventListener('click', ()=> {
    alert('Redirecionando para pagamento (exemplo).');
    closeModal();
  });
});
