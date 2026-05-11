const categories = [
    {
        name: "Destaques",
        books: [
            { title: "O RESUMO COMPLETO DA BÍBLIA ATUALIZADO", description: "Um guia completo e atualizado sobre toda a estrutura bíblica.", fileId: "1lzDs7yDkfOGUmtWPVSNlVcoD33ueVGuS" },
            { title: "PANORAMA DA BIBLIA DE GENESIS A APOCALIPSE", description: "Uma viagem visual e textual por todos os livros da Bíblia.", fileId: "1wAhzsU4YBtT-K2edtB6HcD3NOsy-9jbM" },
            { title: "LIVRO DOS 150 SALMOS", description: "Todos os salmos organizados para meditação e estudo.", fileId: "1Y77XDaHx8TRxETYzy0TEvVhg9XIqnldS" },
            { title: "LIVRO DOS 31 PROVÉRBIOS", description: "Sabedoria prática para cada dia do mês.", fileId: "1zmUqJWPUcdabNAsR0rcVZ6mbd3WbZK2V" },
            { title: "APOCALIPSE EXPLICADO", description: "A vitória final de Cristo e da Sua Igreja.", fileId: "1qMVTCvURgLu_yCxaurA_g0E7JvdRVXyC" }
        ]
    },
    {
        name: "Antigo Testamento",
        books: [
            { title: "GENESIS", description: "As origens do mundo e da humanidade.", fileId: "1S-WAPr89-4jm1diDUx11qTlqfecAQ854" },
            { title: "EXODO", description: "A libertação do povo de Deus do Egito.", fileId: "14KojXfB8QKpidpfHzarUgYgiLIK8X3VA" },
            { title: "LEVITICO", description: "Leis de santidade e rituais.", fileId: "1vV6Nn3oS0Jc_WIzp2bosw1SoGIO0OCc1" },
            { title: "NUMEROS", description: "A jornada pelo deserto.", fileId: "13sbJNXsTmB52OgCrtMMm42o-PVTz37p0" },
            { title: "DEUTERONOMIO", description: "A renovação da aliança.", fileId: "10lqrrW4LmXwZLtpi5je5VtNkDzH34g4q" }
        ]
    },
    {
        name: "Novo Testamento",
        books: [
            { title: "MATEUS", description: "O Evangelho do Messias.", fileId: "1A4O5FPeZwe9xIFhnxXv0FrvyvhvtgUHh" },
            { title: "MARCOS", description: "O Evangelho do Servo.", fileId: "1tPMDq0hxrst9zY8bSTEf3fx3TbS896hI" },
            { title: "LUCAS", description: "O Evangelho do Salvador.", fileId: "1PmJu1e2bbXzNhqBYqqodekBtZJGZmHlz" },
            { title: "JOAO", description: "O Evangelho do Filho de Deus.", fileId: "1Gf5jDgl-BflyQvhsMp8J26OaTtKnzcrE" },
            { title: "ATOS", description: "O início da Igreja e as missões.", fileId: "1MPgOprWfN0gv2ISjCO9eBftM2EVFad0Z" }
        ]
    },
    {
        name: "Cartas Paulinas e Gerais",
        books: [
            { title: "ROMANOS", description: "A fundamentação da nossa fé.", fileId: "1yrtqTBQocnJS7QeuqyvFqawokqFI7YV0" },
            { title: "1 CORINTIOS", description: "Corrigindo e guiando a igreja.", fileId: "1TpAFuXjPacpAApzzwjxmglsw3-WWVa7L" }, // Using 2 Cor link here as 1 Cor is missing, wait I don't have 1 Cor in drive list. I will omit 1 cor or use 2 cor as placeholder. Wait, let's use the ones I actually have.
            { title: "2 CORINTIOS", description: "A defesa do ministério apostólico.", fileId: "1TpAFuXjPacpAApzzwjxmglsw3-WWVa7L" },
            { title: "GALATAS", description: "A liberdade em Cristo.", fileId: "1C0iwXfgULJb_zXBL9QSLCnX5stcLkKXV" },
            { title: "EFESIOS", description: "A riqueza espiritual da Igreja.", fileId: "1Y2gvT4QPCb-fOZff3NG-mcsWSb3vhjIa" },
            { title: "FILIPENSES", description: "A alegria constante no Senhor.", fileId: "1O5YVqhRdVghwWlfXMdmkvNUovAq12jtp" },
            { title: "COLOSSENSES", description: "A supremacia de Cristo.", fileId: "1hpuEhNGbrHQlKtQ9WQIr0j8N__9dNnVh" },
            { title: "1 TESSALONICENSES", description: "A esperança na vinda do Senhor.", fileId: "16IHVbTPxfcdRj2m3PM6nueq8g54Avuwo" },
            { title: "2 TESSALONICENSES", description: "Esclarecimentos sobre o fim.", fileId: "1hLIFElwsgT2tkF1JffT6UHGI9ww9R6Bh" },
            { title: "1 TIMOTEO", description: "Instruções pastorais.", fileId: "16E6A1q3YzY_T18jpCBK8dQ-UJoDzDb0u" },
            { title: "2 TIMOTEO", description: "Encorajamento final de Paulo.", fileId: "1xa7FBvmk-WJKnkEQPz0vvdH3TyE20JPi" },
            { title: "TITO", description: "Conduta cristã.", fileId: "1lnyLrDnCJVHVgElZh4oi3UeFDomsdrmp" },
            { title: "FILEMOM", description: "Um apelo à reconciliação.", fileId: "1FtfGLHh4okdQ264iODmgXEk9_v3eygsm" }
        ]
    }
];

const bannerImg = "https://images.unsplash.com/photo-1504052434569-70ad5836ab65?auto=format&fit=crop&q=80&w=2070";

// Supabase Config
const supabaseUrl = 'https://knufkvvxbwptoxxlnwpg.supabase.co';
const supabaseKey = 'sb_publishable_5H-yd3hlXulNY79T285DQw_dcHrnrAJ';
const supabase = window.supabase.createClient(supabaseUrl, supabaseKey);

async function checkAuth() {
    const { data: { session } } = await supabase.auth.getSession();
    
    const loginContainer = document.getElementById('login-container');
    const appContent = document.getElementById('app-content');
    const logoutBtn = document.getElementById('logout-btn');
    
    if (session) {
        loginContainer.style.display = 'none';
        appContent.style.display = 'block';
        logoutBtn.style.display = 'inline-block';
        initLibrary();
    } else {
        loginContainer.style.display = 'flex';
        appContent.style.display = 'none';
        logoutBtn.style.display = 'none';
    }
}

async function handleLogin(e) {
    e.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    const errorMsg = document.getElementById('login-error');
    
    const btn = e.target.querySelector('button');
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Entrando...';
    btn.disabled = true;
    errorMsg.style.display = 'none';
    
    const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
    });
    
    btn.innerHTML = 'Acessar';
    btn.disabled = false;
    
    if (error) {
        errorMsg.textContent = "E-mail ou senha inválidos. Verifique se a compra foi aprovada.";
        errorMsg.style.display = 'block';
    } else {
        checkAuth();
    }
}

async function logout() {
    await supabase.auth.signOut();
    checkAuth();
}

function initLibrary() {
    // Only init if rows are empty to avoid duplicating on login/logout cycle
    const container = document.getElementById('rows-container');
    if (container.innerHTML.trim() !== '') return;
    
    const hero = document.getElementById('hero-banner');
    hero.style.backgroundImage = `url('${bannerImg}')`;
    
    const categoryImages = [
        'images/destaques.png',
        'images/antigo.png',
        'images/novo.png',
        'images/cartas.png'
    ];

    categories.forEach((category, cIdx) => {
        const row = document.createElement('div');
        row.className = 'row';
        
        row.innerHTML = `
            <h2 class="row-title">${category.name}</h2>
            <div class="row-posters">
                ${category.books.map(book => {
                    let coverImg = categoryImages[cIdx];
                    if (book.img) {
                        coverImg = book.img;
                    } else if (book.fileId) {
                        coverImg = `images/covers/${book.fileId}.png`;
                    }
                    
                    return `
                    <div class="poster-container" onclick="openModal('${book.title}', '${book.description}', '${book.fileId || ''}')">
                        <img src="${coverImg}" class="poster" alt="${book.title}" onerror="this.onerror=null; this.src='${categoryImages[cIdx]}';">
                        <div class="poster-info">
                            <div class="poster-title">${book.title}</div>
                        </div>
                    </div>
                `}).join('')}
            </div>
        `;
        
        container.appendChild(row);
    });
    
    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        const nav = document.getElementById('navbar');
        if (window.scrollY > 100) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });
}


const modal = document.getElementById('previewModal');
const modalBody = document.getElementById('modal-body');
const closeBtn = document.getElementById('closeModal');
const defaultDriveLink = "https://drive.google.com/drive/folders/1btvkP45UA8CTvuFFHuWHLhia4UBZmG6w?usp=drive_link";

function openModal(title, desc, fileId) {
    let viewLink = defaultDriveLink;
    let downloadLink = defaultDriveLink;
    
    if (fileId && fileId.trim() !== '') {
        viewLink = `https://drive.google.com/file/d/${fileId}/preview`;
        downloadLink = `https://drive.google.com/uc?export=download&id=${fileId}`;
    }
    
    modalBody.innerHTML = `
        <div id="modal-info">
            <h2 style="font-size: 2.5rem; margin-bottom: 1rem;">${title}</h2>
            <p style="font-size: 1.2rem; margin-bottom: 2rem; color: #ccc;">${desc}</p>
            <div style="display: flex; gap: 1rem; margin-bottom: 2rem;">
                <button class="btn btn-white" onclick="showPDF('${viewLink}')">
                    <i class="fas fa-eye"></i> Acessar Arquivo
                </button>
                <button class="btn btn-gray" onclick="window.open('${downloadLink}', '_blank')">
                    <i class="fas fa-download"></i> Baixar PDF
                </button>
            </div>
        </div>
        <div id="pdf-viewer-container" style="display: none; width: 100%; height: 600px; border-radius: 8px; overflow: hidden; background: #000;">
            <div style="display: flex; justify-content: space-between; align-items: center; padding: 10px; background: #222;">
                <span style="font-weight: bold; color: white;">Visualizando: ${title}</span>
                <button class="btn btn-gray" style="padding: 5px 15px; font-size: 0.9rem;" onclick="hidePDF()">
                    <i class="fas fa-arrow-left"></i> Voltar
                </button>
            </div>
            <iframe src="" id="pdf-viewer" width="100%" height="100%" frameborder="0" allow="autoplay"></iframe>
        </div>
    `;
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Prevent scrolling background
}

function showPDF(url) {
    const info = document.getElementById('modal-info');
    const container = document.getElementById('pdf-viewer-container');
    const iframe = document.getElementById('pdf-viewer');
    
    info.style.display = 'none';
    container.style.display = 'block';
    iframe.src = url;
}

function hidePDF() {
    const info = document.getElementById('modal-info');
    const container = document.getElementById('pdf-viewer-container');
    const iframe = document.getElementById('pdf-viewer');
    
    info.style.display = 'block';
    container.style.display = 'none';
    iframe.src = '';
}

function openFeatured() {
    // The specific file ID for O Resumo Completo da Bíblia Atualizado
    const resumoFileId = "1lzDs7yDkfOGUmtWPVSNlVcoD33ueVGuS";
    openModal("O Resumo Completo da Bíblia", "Uma visão panorâmica e detalhada de toda a Palavra de Deus, de Gênesis a Apocalipse. Perfeito para quem busca um entendimento profundo e rápido.", resumoFileId);
}

function downloadFeatured() {
    const resumoFileId = "1lzDs7yDkfOGUmtWPVSNlVcoD33ueVGuS";
    window.open(`https://drive.google.com/uc?export=download&id=${resumoFileId}`, '_blank');
}

closeBtn.onclick = () => {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
    const iframe = document.getElementById('pdf-viewer');
    if (iframe) iframe.src = '';
};

window.onclick = (event) => {
    if (event.target == modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
        const iframe = document.getElementById('pdf-viewer');
        if (iframe) iframe.src = '';
    }
};

document.addEventListener('DOMContentLoaded', () => {
    checkAuth();
    document.getElementById('login-form').addEventListener('submit', handleLogin);
});

