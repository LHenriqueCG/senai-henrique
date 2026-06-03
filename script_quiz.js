const DATA = [
  // ══ AULA 01 ══
  {
    section: 0,
    questions: [
     {
        q: "Qual é o maior planeta do Sistema Solar?",
        opts: ["Terra", "Marte", "Júpiter", "Saturno"],
        answer: 2
      },
      {
        q: "Em qual continente fica localizado o Egito?",
        opts: ["África", "Ásia", "Europa", "América do Sul"],
        answer: 0
      },
      {
        q: "Qual destas substâncias é conhecida pela fórmula química H2O?",
        opts: ["Oxigênio", "Água", "Álcool", "Sal de cozinha"],
        answer: 1
      },
      {
        q: "Quantos meses do ano têm exatamente 30 dias?",
        opts: ["4 meses", "5 meses", "6 meses", "7 meses"],
        answer: 0
      },
      {
        q: "Quem é o autor da famosa pintura 'Mona Lisa'?",
        opts: [
          "Vincent van Gogh",
          "Pablo Picasso",
          "Leonardo da Vinci",
          "Michelangelo"
        ],
        answer: 2
      }
    ]
  },

  // ══ AULA 02 ══
  {
    section: 1,
    questions: [
{
        q: "Se o ontem de amanhã é sexta-feira, que dia é hoje?",
        opts: ["Quinta-feira", "Sexta-feira", "Sábado", "Quarta-feira"],
        answer: 1
      },
      {
        q: "Um pai tem 4 filhas, e cada filha tem exatamente um irmão. Quantos filhos esse pai tem no total?",
        opts: ["8 filhos", "5 filhos", "4 filhos", "9 filhos"],
        answer: 1
      },
      {
        q: "Alguns meses têm 31 dias, outros têm 30. Quantos meses têm 28 dias?",
        opts: ["Apenas 1 (Fevereiro)", "Nenhum", "Todos os 12 meses", "Apenas 2 meses"],
        answer: 2
      },
      {
        q: "Se três gatos pegam três ratos em três minutos, quanto tempo leva para cem gatos pegarem cem ratos?",
        opts: ["100 minutos", "30 minutos", "3 minutos", "1 minuto"],
        answer: 2
      },
      {
        q: "Complete a sequência lógica: 2, 4, 8, 16, 32, ... Qual é o próximo número?",
        opts: ["40", "48", "64", "50"],
        answer: 2
      }
    ]
  },
  // ══ AULA 03 ══
  {
    section: 2,
    questions: [
   {
        q: "Qual palavra-chave introduzida no ES6 é usada para declarar uma variável cujo valor NÃO pode ser reatribuído (constante)?",
        opts: ["var", "let", "const", "define"],
        answer: 2
      },
      {
        q: "Como escrevemos a mensagem \"Olá Mundo\" em um alerta pop-up na tela usando JavaScript?",
        opts: [
          "alert(\"Olá Mundo\");",
          "msg(\"Olá Mundo\");",
          "console.log(\"Olá Mundo\");",
          "print(\"Olá Mundo\");"
        ],
        answer: 0
      },
      {
        q: "Qual comando é utilizado pelos desenvolvedores para exibir mensagens ou debugar valores diretamente no console do navegador?",
        opts: ["window.alert()", "document.write()", "console.log()", "terminal.print()"],
        answer: 2
      },
      {
        q: "Qual operador de comparação é utilizado para verificar se dois valores são estritamente iguais (mesmo valor E mesmo tipo)?",
        opts: ["=", "==", "===", "!="],
        answer: 2
      },
      {
        q: "Como se chama a estrutura condicional utilizada para executar um bloco de código APENAS se uma determinada condição for verdadeira?",
        opts: ["for", "if", "while", "switch"],
        answer: 1
      },
      {
        q: "Qual símbolo é utilizado para fazer comentários de uma única linha no código JavaScript?",
        opts: ["#", "", "/* */", "//"],
        answer: 3
      },
      {
        q: "Qual das seguintes alternativas representa a forma correta de declarar uma função simples em JavaScript?",
        opts: [
          "function minhaFuncao() { }",
          "void minhaFuncao() { }",
          "new function minhaFuncao() { }",
          "def minhaFuncao():"
        ],
        answer: 0
      },
      {
        q: "Como representamos uma Array (lista organizada de elementos) na sintaxe do JavaScript?",
        opts: [
          "let lista = {1, 2, 3};",
          "let lista = [1, 2, 3];",
          "let lista = (1, 2, 3);",
          "let lista = \"1, 2, 3\";"
        ],
        answer: 1
      },
      {
        q: "Qual método do objeto 'document' é comumente usado para selecionar um elemento do HTML baseado estritamente no seu atributo ID?",
        opts: [
          "document.querySelector('.id')",
          "document.getElementByClass()",
          "document.getElementById()",
          "document.selectId()"
        ],
        answer: 2
      },
      {
        q: "Qual das opções a seguir é uma estrutura de repetição (loop) usada para executar um bloco de código várias vezes enquanto uma condição for verdadeira?",
        opts: ["if", "switch", "while", "function"],
        answer: 2
      }
    ]
  },

  // ══ AULA 04 ══
  {
    section: 3,
    questions: [
      {
        q: "O que é Virtualização no contexto computacional?",
        opts: [
          "O processo de comprimir arquivos para economizar espaço em disco",
          "Uma técnica de programação para criar interfaces visuais responsivas",
          "A criação de uma versão virtual de algo (hardware, SO ou rede), permitindo rodar múltiplos ambientes isolados em uma única máquina física",
          "Um método de criptografia para proteger dados em trânsito"
        ],
        answer: 2
      },
      {
        q: "Qual é uma diferença fundamental entre uma Máquina Virtual (VM) e um Container Docker?",
        opts: [
          "A VM usa menos recursos e inicializa em segundos; o Container demora minutos",
          "A VM inclui um sistema operacional próprio e tem tamanho em gigabytes; o Container compartilha o kernel do SO hospedeiro e tem tamanho em megabytes",
          "O Container exige hardware dedicado; a VM pode rodar em qualquer máquina",
          "A VM é gratuita e open-source; o Container é uma tecnologia proprietária e paga"
        ],
        answer: 1
      },
      {
        q: "O que é uma IMAGEM (Image) no Docker?",
        opts: [
          "Uma captura de tela do ambiente de desenvolvimento para fins de documentação",
          "Um container que já está em execução e respondendo a requisições",
          "Um modelo somente leitura com todas as instruções para criar um container — como uma 'receita de bolo'",
          "O arquivo de configuração que define variáveis de ambiente do projeto"
        ],
        answer: 2
      },
      {
        q: "O que é um CONTAINER no Docker?",
        opts: [
          "O arquivo de texto com instruções para construir uma imagem personalizada",
          "Uma instância em execução de uma imagem — você pode ter vários containers rodando a partir da mesma imagem",
          "O repositório público onde imagens Docker são armazenadas e compartilhadas",
          "Um tipo especial de máquina virtual com acesso a recursos de hardware"
        ],
        answer: 1
      },
      {
        q: "Qual é a função de um DOCKERFILE?",
        opts: [
          "Gerenciar múltiplos containers e definir como eles se comunicam",
          "Armazenar credenciais de acesso ao Docker Hub de forma segura",
          "Arquivo de texto com instruções para construir uma imagem personalizada — como um script de configuração do ambiente",
          "Registrar logs de execução dos containers em produção"
        ],
        answer: 2
      },
      {
        q: "O que é o DOCKER HUB?",
        opts: [
          "A interface gráfica local para gerenciar containers no Windows",
          "Um repositório público de imagens Docker — como o GitHub, mas para imagens",
          "O daemon responsável por executar containers no sistema operacional",
          "Uma ferramenta para orquestrar múltiplos containers em produção"
        ],
        answer: 1
      },
      {
        q: "O que faz a flag '-d' no comando 'docker run -d -p 80:80 nginx'?",
        opts: [
          "Define o nome do container como 'detached'",
          "Desativa o modo de segurança do container",
          "Roda o container em modo Detached (background), sem travar o terminal",
          "Deleta automaticamente o container após ele ser encerrado"
        ],
        answer: 2
      },
      {
        q: "No comando 'docker run -d -p 80:80 nginx', o que significa '-p 80:80'?",
        opts: [
          "Define a quantidade máxima de processos simultâneos como 80",
          "Mapeia a porta 80 do container para a porta 80 do computador hospedeiro (port mapping)",
          "Conecta o container à rede local na faixa 80.80.x.x",
          "Especifica que o container deve usar 80 MB de memória RAM"
        ],
        answer: 1
      },
      {
        q: "Como verificar se o Docker está corretamente instalado no computador?",
        opts: [
          "Abrir o gerenciador de tarefas e verificar se o processo 'docker.exe' está ativo",
          "Reiniciar o computador e aguardar a mensagem de confirmação do Docker",
          "Executar o comando 'docker --version' no terminal e verificar se exibe a versão instalada",
          "Acessar o Painel de Controle e verificar em 'Programas Instalados'"
        ],
        answer: 2
      },
      {
        q: "Qual é a principal vantagem do Docker em relação a instalar as ferramentas diretamente no computador?",
        opts: [
          "O Docker aumenta a velocidade de processamento do computador em até 10x",
          "O Docker elimina a necessidade de aprender comandos de terminal",
          "O Docker garante portabilidade e isolamento do ambiente, evitando conflitos de versão e facilitando o onboarding de novos desenvolvedores",
          "O Docker permite programar sem conexão com a internet"
        ],
        answer: 2
      }
    ]
  }
];

// ── State ──
const state = { answers: [{}, {}, {}, {}], checked: [false, false, false, false] };

// ── Render questions ──
function renderAll() {
  DATA.forEach(({ section, questions }) => {
    const container = document.getElementById(`questions-${section}`);
    container.innerHTML = '';
    questions.forEach((q, qi) => {
      const letters = ['A','B','C','D'];
      const card = document.createElement('div');
      card.className = 'question-card';
      card.id = `card-${section}-${qi}`;
      card.innerHTML = `
        <div class="q-header">
          <div class="q-number">${qi + 1}</div>
          <div class="q-text">${q.q}</div>
        </div>
        <div class="options" id="opts-${section}-${qi}">
          ${q.opts.map((o, oi) => `
            <div class="option" id="opt-${section}-${qi}-${oi}" onclick="selectOption(${section}, ${qi}, ${oi})">
              <div class="option-letter">${letters[oi]}</div>
              <span>${o}</span>
            </div>
          `).join('')}
        </div>
        <div class="feedback-msg" id="fb-${section}-${qi}"></div>
      `;
      container.appendChild(card);
    });
  });
  renderGabarito();
}

function selectOption(sec, qi, oi) {
  if (state.checked[sec]) return;
  state.answers[sec][qi] = oi;
  // Update UI
  const opts = document.getElementById(`opts-${sec}-${qi}`).querySelectorAll('.option');
  opts.forEach((el, idx) => {
    el.classList.toggle('selected', idx === oi);
  });
  updateProgress(sec);
}

function updateProgress(sec) {
  const answered = Object.keys(state.answers[sec]).length;
  const pct = (answered / 10) * 100;
  document.getElementById(`prog-${sec}`).style.width = pct + '%';
}

function checkSection(sec) {
  if (state.checked[sec]) return;
  let score = 0;
  const questions = DATA[sec].questions;
  questions.forEach((q, qi) => {
    const chosen = state.answers[sec][qi];
    const fb = document.getElementById(`fb-${sec}-${qi}`);
    if (chosen === undefined) {
      // not answered
      const opts = document.getElementById(`opts-${sec}-${qi}`).querySelectorAll('.option');
      opts[q.answer].classList.add('correct');
      fb.className = 'feedback-msg show err';
      fb.innerHTML = '⚠️ Não respondida. A alternativa correta está destacada em verde.';
      return;
    }
    const opts = document.getElementById(`opts-${sec}-${qi}`).querySelectorAll('.option');
    if (chosen === q.answer) {
      opts[chosen].classList.remove('selected');
      opts[chosen].classList.add('correct');
      fb.className = 'feedback-msg show ok';
      fb.innerHTML = '✅ Correto!';
      score++;
    } else {
      opts[chosen].classList.remove('selected');
      opts[chosen].classList.add('wrong');
      opts[q.answer].classList.add('correct');
      fb.className = 'feedback-msg show err';
      fb.innerHTML = `❌ Incorreto. A resposta correta é a alternativa <strong>${['A','B','C','D'][q.answer]}</strong>.`;
    }
  });
  state.checked[sec] = true;
  document.getElementById(`scoreVal-${sec}`).innerHTML = `${score} <span>/ 10</span>`;
  document.getElementById(`prog-${sec}`).style.width = '100%';
}

function resetSection(sec) {
  state.answers[sec] = {};
  state.checked[sec] = false;
  document.getElementById(`scoreVal-${sec}`).innerHTML = `— <span>/ 10</span>`;
  document.getElementById(`prog-${sec}`).style.width = '0%';
  DATA[sec].questions.forEach((_, qi) => {
    const opts = document.getElementById(`opts-${sec}-${qi}`).querySelectorAll('.option');
    opts.forEach(o => { o.classList.remove('selected','correct','wrong'); });
    const fb = document.getElementById(`fb-${sec}-${qi}`);
    fb.className = 'feedback-msg';
    fb.innerHTML = '';
  });
}

// ── Tabs ──
function showTab(idx) {
  document.querySelectorAll('.section').forEach((s, i) => s.classList.toggle('active', i === idx));
  document.querySelectorAll('.tab-btn').forEach((b, i) => b.classList.toggle('active', i === idx));
}

// ── Gabarito for guide tab ──
function renderGabarito() {
  const container = document.getElementById('gabarito-list');
  const labels = ['Aula 01 — Iniciação à TI','Aula 02 — Arquivos & Ética','Aula 03 — Git & Projetos','Aula 04 — Docker'];
  const letters = ['A','B','C','D'];
  container.innerHTML = DATA.map(({ section, questions }) => `
    <div style="background:white;border:1px solid var(--border);border-radius:var(--radius);margin-bottom:20px;overflow:hidden">
      <div style="background:var(--blue-deep);color:white;padding:14px 20px;font-family:'Syne',sans-serif;font-weight:700;font-size:14px">
        ${labels[section]}
      </div>
      <div style="padding:18px 20px">
        ${questions.map((q, qi) => `
          <div style="display:flex;align-items:flex-start;gap:14px;padding:10px 0;border-bottom:1px solid var(--border);${qi===questions.length-1?'border-bottom:none':''}">
            <span style="flex-shrink:0;font-family:'Syne',sans-serif;font-weight:700;font-size:12px;color:var(--text-light);min-width:24px">Q${qi+1}</span>
            <div style="flex:1">
              <div style="font-size:13px;margin-bottom:6px;line-height:1.4">${q.q}</div>
              <div style="display:flex;flex-wrap:wrap;gap:6px">
                ${q.opts.map((o, oi) => `
                  <span style="padding:4px 10px;border-radius:6px;font-size:11.5px;border:1px solid;
                    ${oi===q.answer ? 'background:rgba(0,201,167,0.1);border-color:rgba(0,201,167,0.4);color:#007A63;font-weight:600' : 'background:var(--bg);border-color:var(--border);color:var(--text-light)'}">
                    <strong>${letters[oi]}.</strong> ${o}
                  </span>
                `).join('')}
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');
}

renderAll();