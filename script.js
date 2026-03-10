const articoli = [
    // --- CATEGORIA: GIARDINO ---
    {
        id:'robot-tagliaerba',
        categoria: 'giardino',
        tipo: 'singolo',
        titolo: "Il Robot che ha ridato valore ai miei weekend",
        voto: "9.9/10",
        copertina: "https://m.media-amazon.com/images/I/61WoTyirU-L._AC_SL1500_.jpg",
        storia: "Passare il sabato a tagliare l'erba era diventato un lavoro. Questo robot Worx Landroid ha cambiato tutto: ora il mio prato è sempre perfetto, come un campo da golf.",
        esperienza: "La tecnologia AI gli permette di muoversi in spazi stretti dove altri robot falliscono. Si controlla via App e torna alla base se piove. Un investimento che si ripaga in tempo libero. Batteria 20V Area di Taglio 1.300mq senza filo perimetrale",
        link_principale: "https://amzn.to/3NsC3Df", 
        correlati: [
            { nome: "Lame di ricambio (Set 12)", link: "https://amzn.to/46RKMFI" },
            { nome: "Garage protettivo", link: "https://amzn.to/46RKMFI" }
        ],
        faq: [{ q: "Va bene per pendenze?", a: "Sì, gestisce salite fino al 35% senza problemi." }]
    },
    {
        id:'kit-bbq',
        categoria: 'giardino',
        tipo: 'guida',
        titolo: "Kit Barbecue 2026: 3 Must-Have per grigliate da Pro",
        storia: "La primavera chiama la brace. Ho selezionato i tre strumenti che trasformano una cena normale in un evento gourmet.",
        prodotti: [
            { nome: "Termometro Wireless Meater", desc: "Controlli la cottura della carne dallo smartphone.", link: "https://amzn.to/4uj19VC", img: "https://m.media-amazon.com/images/I/61C9DAvebML._AC_SL1000_.jpg" },
            { nome: "Ciminiera di Accensione Rapidfire", desc: "Carbonella pronta in 15 minuti senza sforzo.", link: "https://amzn.to/47jm6Ga", img: "https://m.media-amazon.com/images/I/81hFML-GdLL._AC_SL1500_.jpg" },
            { nome: "Kit Utensili in Acciaio Inox", link: "https://amzn.to/4sw57sn", img: "https://m.media-amazon.com/images/I/815UI4q-nxL._AC_SL1500_.jpg" }
        ],
        faq: [{ q: "Il termometro va bene per il forno?", a: "Sì, resiste fino a 275°C." }]
    },

    
    // --- CUCINA---

    {
        id: 'friggitrice-aria-cosori',
        categoria: 'cucina',
        tipo: 'singolo',
        titolo: "La Friggitrice ad Aria che ha mandato in pensione il mio forno",
        voto: "9.9/10",
        copertina: "https://m.media-amazon.com/images/I/71xZ5LUNIrL._AC_SX679_.jpg",
        storia: "Ero scettica, ma la Cosori TurboBlaze è diventata l'elettrodomestico più usato in casa. Patatine croccanti e pollo succoso in metà tempo.",
        esperienza: "Capienza da 6L (perfetta per una famiglia), 9 funzioni preimpostate e una facilità di pulizia imbattibile. È silenziosissima rispetto ai modelli economici.",
        link_principale: "https://amzn.to/4upUKZ8", 
        correlati: [
            { nome: "3 Accessori Friggitrice ad Aria in Silicone", link: "https://amzn.to/4uhWP98" },
            { nome: "Spray nebulizzatore olio Acciaio INOX", link: "https://amzn.to/3MTZNA9" }
        ],
        faq: [{ q: "Si può lavare in lavastoviglie?", a: "Sì, sia il cestello che la griglia sono antiaderenti e lavabili in lavastoviglie." }]
    },

    // --- CATEGORIA: UFFICIO ---
    {
        id: 'niimbot-b21',
        categoria: 'ufficio',
        tipo: 'singolo',
        titolo: "L'etichettatrice vintage che trasforma il disordine in design",
        voto: "9.2/10",
        copertina: "https://m.media-amazon.com/images/I/717E-LiZWjL._AC_SX679_.jpg",
        storia: "Ho sempre sognato una dispensa perfetta come quelle che si vedono online. Questa NIIMBOT B21 Pro non è solo un attrezzo, è un oggetto d'arredo. Mi ha permesso di etichettare ogni barattolo e faldone con uno stile unico, senza mai usare una goccia d'inchiostro.",
        esperienza: "La qualità di stampa a 300DPI è nitidissima (molto meglio delle etichettatrici economiche). Si collega al telefono via Bluetooth e l'app è piena di icone e font bellissimi. È termica, quindi niente ricariche costose di inchiostro, ed è ricaricabile. Perfetta per la cucina, l'ufficio o per chi ha una piccola attività.",
        link_principale: "https://amzn.to/3LdIrgH",
        correlati: [
            { nome: "Rotolo Etichette Trasparenti", link: "https://amzn.to/3NqnZdu" },
            { nome: "Etichette colorate (3 rotoli)", link: "https://amzn.to/3NqnZdu" }
        ],
        faq: [{ q: "Funziona con iPhone e Android?", a: "Assolutamente sì, l'app Niimbot è gratuita e molto intuitiva per entrambi i sistemi." }]
    },

    // --- CATEGORIA: PULIZIE ---
    {
        id: 'tineco-s5',
        categoria: 'pulizie',
        tipo: 'singolo',
        titolo: "Ho smesso di passare il mocio: la rivoluzione Tineco",
        voto: "9.7/10",
        copertina: "https://m.media-amazon.com/images/I/71WjyC+l5GL._AC_SL1500_.jpg",
        storia: "Aspirare e lavare contemporaneamente? Pensavo fosse un mito. Tineco Floor One S5 ha dimezzato i miei tempi di pulizia.",
        esperienza: "Aspira i liquidi, lava le macchie ostinate e si pulisce da solo sulla base. Ideale per chi ha bambini o animali in casa.",
        link_principale: "https://amzn.to/4ujuuiL",
        correlati: [
            { nome: "Detergente Multi-superficie", link: "https://amzn.to/46O5VR6" },
            { nome: "Rullo di ricambio", link: "https://amzn.to/46O5VR6" }
        ],
        faq: [{ q: "Lascia aloni?", a: "No, grazie al sistema a flusso d'acqua costante il pavimento asciuga subito." }]
    },

    // --- CATEGORIA: CASA ---
    {
        id:'top-3lampade',
        categoria: 'casa',
         tipo: 'guida',
        titolo: "Top 3 lampade",
        storia: "Ecco come ho dato luce alla mia casa. Ho selezionato tre stili che trasformano una stanza.",
        prodotti: [
            { nome: "Lampada Scalda Candela", desc: "Può essere utilizzata anche come una raffinata lampada profumata per la casa.", link: "https://amzn.to/4t0gqtX", img: "https://m.media-amazon.com/images/I/51ZOczeG8+L._AC_SX679_.jpg" },
            { nome: "Lampada A Mosaico", desc: "L'uso della malta per combinare le pietre del mosaico esalta il fascino estetico di ogni lampada e ne rafforza l'integrità strutturale.", link: "https://amzn.to/4rgJETR", img: "https://m.media-amazon.com/images/I/81iC73FmnUL._AC_SX679_.jpg" },
            { nome: "Lampada A Fungo", desc: "La lampada di design senza fili può essere ricaricata tramite un cavo USB-C ed è adatta come lampada da tavolo a LED all'aperto o come accessorio di stile all'interno.", link: "https://amzn.to/4jYikr1", img: "https://m.media-amazon.com/images/I/81TZzlGFNnL._AC_SL1500_.jpg" }
        ],
        faq: [{ q: "Va bene per tutte le candele?", a: "Sì, scalda qualsiasi candela in bicchiere fino a 14 cm di altezza." }]
    },
    {
        id:'led-cob',
        categoria: 'casa',
         tipo: 'guida',
        titolo: "Le mie strisce Led Cob",
        storia: "È rispettoso dell'ambiente e non contiene radiazioni infrarosse, mercurio, piombo o altri metalli pesanti.",
        prodotti: [
            { nome: "LED COB MULTICOLOR", desc: "La luce è senza abbagliamento, luce morbida, senza mercurio, senza raggi UV e sicura per gli occhi.", link: "https://amzn.to/4pUb3cT", img: "https://m.media-amazon.com/images/I/61nDrTIOZcL._AC_SX679_.jpg" },
            { nome: "LED COB GIALLE", desc: "La striscia led COB è dotata di nastro autoadesivo sul retro. Senza mercurio e raggi UV.", link: "https://amzn.to/4bRmcIa", img: "https://m.media-amazon.com/images/I/61ATzPlqQKL._AC_SX679_.jpg" }
        ],
        faq: [{ q: "Può essere tagliato a misura?", a: "Si è possibile." }]
    },
    {
        id:'modern',
        categoria: 'casa',
         tipo: 'guida',
        titolo: "Top 3 Modern",
        storia: "Per tutta la casa.",
        prodotti: [
            { nome: "Vaso Ciambella", desc: "Il design semplice si adatta perfettamente a qualsiasi arredamento, che si tratti di boho, Skandi o moderno.", link: "https://amzn.to/3LKNtBB", img: "https://m.media-amazon.com/images/I/71y0wKJHZ0L._AC_SX679_.jpg" },
            { nome: "Vassoio Marmo Naturale", desc: "Ideale come piatto da portata, portagioie, decorazione o pratico aiutante in cucina, soggiorno, bagno o ufficio.", link: "https://amzn.to/3LBXvF8", img: "https://m.media-amazon.com/images/I/61bUujb9-HL._AC_SX679_.jpg" },
            { nome: "Specchio Irregolare", desc: "Ideale come piatto da portata, portagioie, decorazione o pratico aiutante in cucina, soggiorno, bagno o ufficio.", link: "https://amzn.to/3NC5QsY", img: "https://m.media-amazon.com/images/I/612bIufv+GL._AC_SX679_.jpg" }
        ],
        faq: [{ q: "Quanto è grande lo specchio?", a: "Con dimensioni di 56,5x78 cm (lo spessore della cornice dello specchio è di 3 cm.), lo specchio è perfetto per un'ampia gamma di spazi come bagni, soggiorni e corridoi." }]
    },

    // --- CATEGORIA: AUTO ---
    {
        id:'emergenza-auto',
        categoria: 'auto',
        tipo: 'guida',
        titolo: "Emergenza in Auto: I 2 gadget che ti salvano la vita",
        storia: "Non aspettare di rimanere a piedi di notte. Questi due oggetti devono stare in ogni bagagliaio.",
        prodotti: [
            { nome: "Avviatore Portatile NOCO Boost", desc: "Fa ripartire l'auto in 10 secondi senza cavi.", link: "https://amzn.to/4uiqcYY", img: "https://m.media-amazon.com/images/I/71xLu4VJhcL._AC_SL1500_.jpg" },
            { nome: "Compressore Xiaomi 2", desc: "Gonfia gomme, bici e palloni ovunque.", link: "https://amzn.to/4b0noYY", img: "https://m.media-amazon.com/images/I/51A87ILEaCL._AC_SL1000_.jpg" }
        ],
        faq: [{ q: "Il compressore è rumoroso?", a: "Circa come un phon, molto sopportabile." }]
    },

    // --- CATEGORIA: MODA ---
    {
        id:'sneaker-veja',
        categoria: 'moda',
        tipo: 'singolo',
        titolo: "Le Sneaker bianche definitive per la Primavera",
        voto: "9.2/10",
        copertina: "https://m.media-amazon.com/images/I/410+K83BbUL._AC_SX625_.jpg",
        storia: "Cercavo una scarpa elegante ma comoda per i weekend fuori porta. Queste sneaker in pelle vegana sono la risposta.",
        esperienza: "Si puliscono con un panno, sono leggerissime e si abbinano a tutto: dal jeans all'abito formale. Un must-have 2026.",
        link_principale: "https://amzn.to/4betYdc",
        correlati: [
            { nome: "Kit Pulizia Scarpe", link: "https://amzn.to/3MOAMGw" },
            { nome: "Calze in cotone biologico", link: "https://amzn.to/4cGWbvP" }
        ],
        faq: [{ q: "Vestono giusto?", a: "Sì, consiglio di prendere la taglia abituale." }]
    }
    // Aggiungi altri articoli seguendo questo schema per arrivare a 20!
];

function toggleFaq(pIdx, fIdx) {
    const el = document.getElementById(`faq-${pIdx}-${fIdx}`);
    if (el) el.classList.toggle('active');
}

function generaMenu() {
    const nav = document.getElementById('menu-categorie');
    const categorie = ['tutti', ...new Set(articoli.map(a => a.categoria))];
    nav.innerHTML = categorie.map(cat => `
        <button onclick="filter('${cat}')" class="hover:text-black shrink-0 transition-all uppercase">
            ${cat === 'tutti' ? 'Home' : cat}
        </button>
    `).join('');
}

function renderContent(filtro = 'tutti') {
    const main = document.getElementById('content-main');
    const filtered = filtro === 'tutti' ? articoli : articoli.filter(a => a.categoria === filtro);
    const oggi = new Date().toLocaleDateString('it-IT');

    main.innerHTML = filtered.map((a, pIdx) => {
        const faqHtml = a.faq ? `
            <div class="mt-8 bg-white border border-gray-100 p-6 rounded-2xl">
                <p class="text-[10px] font-black uppercase tracking-widest mb-4 italic text-gray-400">Dettagli Utili</p>
                ${a.faq.map((f, fIdx) => `
                    <div class="mb-4 faq-item" id="faq-${pIdx}-${fIdx}" onclick="toggleFaq(${pIdx}, ${fIdx})">
                        <p class="text-sm font-bold text-black cursor-pointer flex justify-between italic">${f.q} <span>▼</span></p>
                        <p class="faq-answer text-xs text-gray-500 mt-2 leading-relaxed">${f.a}</p>
                    </div>
                `).join('')}
            </div>` : '';

        if (a.tipo === 'guida') {
            return `
                <article id="${a.id}">
                    <span class="text-[10px] font-black uppercase tracking-widest text-amber-600 mb-4 block">${a.categoria}</span>
                    <h2 class="text-3xl serif leading-tight mb-8">${a.titolo}</h2>
                    <div class="bg-gray-50 p-6 rounded-2xl mb-8 border-l-4 border-black italic serif text-xl italic">"${a.storia}"</div>
                    <div class="space-y-4">
                        ${a.prodotti.map(p => `
                            <div class="border border-gray-100 p-4 rounded-xl flex items-center space-x-4 bg-white hover:shadow-md transition-shadow">
                                <img src="${p.img}" class="w-20 h-20 object-contain mix-blend-multiply">
                                <div class="flex-1">
                                    <h4 class="font-bold text-sm">${p.nome}</h4>
                                    <p class="text-[11px] text-gray-500 mb-2">${p.desc || ''}</p>
                                    <a href="${p.link}" target="_blank" rel="nofollow" class="inline-block text-[9px] bg-black text-white px-3 py-1 rounded font-bold uppercase">Vedi su Amazon</a>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                    ${faqHtml}
                </article>`;
        } else {
            return `
                <article id="${a.id}">
                    <div class="flex justify-between items-center mb-6">
                        <span class="text-[10px] font-black uppercase tracking-widest text-amber-600">${a.categoria}</span>
                        <span class="voto-badge italic tracking-tighter">VALUTAZIONE: ${a.voto}</span>
                    </div>
                    <h2 class="text-3xl serif leading-tight mb-8">${a.titolo}</h2>
                    <img src="${a.copertina}" class="w-full h-64 object-contain rounded-2xl mb-8 mix-blend-multiply">
                    <div class="bg-gray-50 p-6 rounded-2xl mb-8 border-l-4 border-black italic serif text-xl">"${a.storia}"</div>
                    <p class="text-gray-600 leading-relaxed mb-10 text-[15px]">${a.esperienza}</p>
                    <div class="p-8 border-2 border-black rounded-3xl bg-white text-center">
                        <a href="${a.link_principale}" target="_blank" rel="nofollow" class="btn-amazon">VEDI PREZZO E DISPONIBILITÀ</a>
                        <p class="text-[8px] text-gray-400 mt-4 uppercase tracking-tighter">*Prezzo rilevato il ${oggi} - Soggetto a modifiche</p>
                    </div>
                    <div class="correlati-box">
                        <p class="text-[10px] font-black uppercase tracking-widest mb-4 text-gray-400 italic underline">Spesso acquistati insieme</p>
                        ${a.correlati.map(c => `
                            <div class="flex justify-between items-center py-2 border-b border-gray-100 last:border-0">
                                <span class="text-xs font-bold text-gray-600">${c.nome}</span>
                                <a href="${c.link}" target="_blank" rel="nofollow" class="text-[9px] bg-gray-200 px-2 py-1 rounded font-black">LINK</a>
                            </div>
                        `).join('')}
                    </div>
                    ${faqHtml}
                </article>`;
        }
    }).join('');
}

function filter(cat) {
    const url = new URL(window.location);
    cat === 'tutti' ? url.searchParams.delete('cat') : url.searchParams.set('cat', cat);
    window.history.pushState({}, '', url);
    renderContent(cat);
    window.scrollTo({top: 0, behavior: 'smooth'});
}

window.addEventListener('popstate', () => {
    const params = new URLSearchParams(window.location.search);
    renderContent(params.get('cat') || 'tutti');
});

document.addEventListener('DOMContentLoaded', () => {
    generaMenu();
    const params = new URLSearchParams(window.location.search);
    renderContent(params.get('cat') || 'tutti');
});