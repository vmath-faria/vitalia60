
    /* -------------------------------------------------------------
       1. CONTROLE DE TAMANHO DE FONTE (ACESSIBILIDADE - WCAG 2.1)
       ------------------------------------------------------------- */
    let currentFontSizePx = 18; // Fonte padrão de 18px para público sênior

    function changeFontSize(step) {
      currentFontSizePx += step * 2;
      // Trava de segurança entre 14px e 26px
      if (currentFontSizePx < 14) currentFontSizePx = 14;
      if (currentFontSizePx > 26) currentFontSizePx = 26;
      document.documentElement.style.setProperty('--base-font-size', currentFontSizePx + 'px');
    }

    function resetFontSize() {
      currentFontSizePx = 18;
      document.documentElement.style.setProperty('--base-font-size', '18px');
    }

    /* -------------------------------------------------------------
       2. SIMULADOR DA EMBALAGEM DISCRETA (PRIMEIRA DOBRA)
       ------------------------------------------------------------- */
    function switchPackageView(view) {
      const viewProduto = document.getElementById('view-produto');
      const viewEmbalagem = document.getElementById('view-embalagem');
      const btnProduto = document.getElementById('btn-tab-produto');
      const btnEmbalagem = document.getElementById('btn-tab-embalagem');

      if (view === 'embalagem') {
        viewProduto.classList.add('hidden');
        viewEmbalagem.classList.remove('hidden');

        btnEmbalagem.classList.add('bg-white', 'text-[#9E2A2B]', 'shadow-sm');
        btnEmbalagem.classList.remove('text-[#5C4E4C]');

        btnProduto.classList.remove('bg-white', 'text-[#9E2A2B]', 'shadow-sm');
        btnProduto.classList.add('text-[#5C4E4C]');
      } else {
        viewEmbalagem.classList.add('hidden');
        viewProduto.classList.remove('hidden');

        btnProduto.classList.add('bg-white', 'text-[#9E2A2B]', 'shadow-sm');
        btnProduto.classList.remove('text-[#5C4E4C]');

        btnEmbalagem.classList.remove('bg-white', 'text-[#9E2A2B]', 'shadow-sm');
        btnEmbalagem.classList.add('text-[#5C4E4C]');
      }
    }

    /* -------------------------------------------------------------
       4. SIMULADOR DE ATENDIMENTO HUMANIZADO (WHATSAPP DRAWER)
       ------------------------------------------------------------- */
    function openWhatsAppDrawer() {
      document.getElementById('whatsapp-drawer').classList.remove('hidden');
    }

    function closeWhatsAppDrawer() {
      document.getElementById('whatsapp-drawer').classList.add('hidden');
    }

    function sendSimulatedMessage(text) {
      const container = document.getElementById('chat-messages');
      
      // Mensagem do usuário
      const userMsg = document.createElement('div');
      userMsg.className = 'flex items-end justify-end';
      userMsg.innerHTML = `
        <div class="bg-[#5C765E] text-white p-3 rounded-2xl rounded-tr-none max-w-[80%] text-sm shadow-sm space-y-1">
          <p>${text}</p>
          <p class="text-[10px] opacity-80 text-right">Agora</p>
        </div>
      `;
      container.appendChild(userMsg);
      container.scrollTop = container.scrollHeight;

      // Resposta simulada paciente do atendente humano
      setTimeout(() => {
        const replyMsg = document.createElement('div');
        replyMsg.className = 'flex items-start gap-2';
        
        let responseText = "Com certeza! Nossos pedidos chegam em caixa parda 100% neutra, sem qualquer menção à loja. Posso lhe ajudar a concluir a compra?";
        if (text.includes('ressecamento')) {
          responseText = "Para o ressecamento natural da maturidade, recomendamos a nossa linha com Ácido Hialurônico e pH neutro 4.5. É super delicado e hipoalergênico.";
        } else if (text.includes('ajuda')) {
          responseText = "Claro! Posso gerar o código do Pix ou o boleto para você por aqui mesmo com toda a tranquilidade e segurança.";
        }

        replyMsg.innerHTML = `
          <div class="bg-white p-3 rounded-2xl rounded-tl-none border border-[#E2D7CB] max-w-[85%] text-sm text-[#2D2421] shadow-sm space-y-1">
            <p class="font-bold text-[#9E2A2B]">Dra. Carla</p>
            <p>${responseText}</p>
            <p class="text-[10px] text-gray-400 text-right">Agora</p>
          </div>
        `;
        container.appendChild(replyMsg);
        container.scrollTop = container.scrollHeight;
      }, 1000);
    }

    function handleUserChat() {
      const input = document.getElementById('chat-input');
      if (input.value.trim() !== "") {
        sendSimulatedMessage(input.value);
        input.value = "";
      }
    }

    /* -------------------------------------------------------------
       5. MODAL DE CATÁLOGO & CARRINHO
       ------------------------------------------------------------- */
    function openCatalogModal(categoryName) {
      if(categoryName) {
        document.getElementById('catalog-title').innerText = categoryName;
      }
      document.getElementById('catalog-modal').classList.remove('hidden');
    }

    function closeCatalogModal() {
      document.getElementById('catalog-modal').classList.add('hidden');
    }

    function toggleCartDrawer() {
      const cart = document.getElementById('cart-drawer');
      cart.classList.toggle('hidden');
    }

    function addToCart(itemName, price) {
      alert(`O item "${itemName}" foi adicionado com sucesso ao seu carrinho discreto!`);
      closeCatalogModal();
      toggleCartDrawer();
    }

    /* -------------------------------------------------------------
       6. SIMULADOR DE BUSCA POR VOZ
       ------------------------------------------------------------- */
    function simulateVoiceSearch() {
      const input = document.getElementById('search-input');
      input.value = "Ouvindo... (fale agora)";
      input.classList.add('bg-red-50', 'border-red-400');
      
      setTimeout(() => {
        input.value = "gel hidratante suave para ressecamento";
        input.classList.remove('bg-red-50', 'border-red-400');
        openCatalogModal('Resultado da Busca por Voz');
      }, 2000);
    }

    function handleSearch(e) {
      e.preventDefault();
      const val = document.getElementById('search-input').value;
      openCatalogModal(val ? `Busca: "${val}"` : 'Linha Afeto & Conexão 60+');
    }