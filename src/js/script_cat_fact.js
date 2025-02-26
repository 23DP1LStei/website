async function getCatFact() {
    try {
        const response = await fetch('https://catfact.ninja/fact');
        const data = await response.json();
        document.getElementById('fact').innerText = data.fact;
    } catch (error) {
        document.getElementById('fact').innerText = 'Neizdevās ielādēt faktu. Vēlāk mēģiniet vēlreiz.';
    }
}
window.onload = getCatFact;