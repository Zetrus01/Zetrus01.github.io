
// PDF.js alapkonfiguráció
const url = window.pdfUrl;
let pdfDoc = null,
    pageNum = 1;

// PDF betöltése
pdfjsLib.getDocument(url).promise.then(pdfDoc_ => {
    pdfDoc = pdfDoc_;
    document.getElementById('total-pages').textContent = pdfDoc.numPages; // Teljes oldalszám
    renderPage();
});

// Oldalak megjelenítése
function renderPage() {
    const canvas1 = document.getElementById('pdf-canvas-1');
    const canvas2 = document.getElementById('pdf-canvas-2');
    const ctx1 = canvas1.getContext('2d');
    const ctx2 = canvas2.getContext('2d');

    // Dinamikusan számítjuk ki a skálát a képernyő méretétől függően
    const scale = window.innerWidth < 768 ? 1.0 : 1.6; // Kisebb képernyőkön kisebb skálázás

    // Első oldal renderelése
    pdfDoc.getPage(pageNum).then(page => {
        const viewport = page.getViewport({ scale: scale });
        canvas1.height = viewport.height;
        canvas1.width = viewport.width;
        page.render({ canvasContext: ctx1, viewport: viewport });

        // Oldalszám frissítése
        document.getElementById('current-page').textContent = pageNum;
    });

    // Ha a képernyő szélessége nagyobb, a második oldal is megjelenik
    if (window.innerWidth >= 768 && pageNum + 1 <= pdfDoc.numPages) {
        pdfDoc.getPage(pageNum + 1).then(page => {
            const viewport = page.getViewport({ scale: scale });
            canvas2.height = viewport.height;
            canvas2.width = viewport.width;
            page.render({ canvasContext: ctx2, viewport: viewport });
        });
    } else {
        // Töröljük a második vásznat, ha nem szükséges
        ctx2.clearRect(0, 0, canvas2.width, canvas2.height);
    }
}

// Navigáció
document.getElementById('prev-page').addEventListener('click', () => {
    if (pageNum <= 1) return; // Ne engedje, hogy az 1-nél kisebb oldalra lépjen
    pageNum -= window.innerWidth < 768 ? 1 : 2; // Kisebb képernyőn csak egy oldalt lépünk
    renderPage();
});

document.getElementById('next-page').addEventListener('click', () => {
    if (window.innerWidth < 768 && pageNum + 1 > pdfDoc.numPages) return; // Kisebb képernyőn egy oldal után ne lépjen
    if (pageNum + 2 > pdfDoc.numPages) return; // Ne engedje, hogy a létező oldalak után lépjen
    pageNum += window.innerWidth < 768 ? 1 : 2; // Kisebb képernyőn csak egy oldalt lépünk
    renderPage();
});

