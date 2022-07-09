export async function getData() {
    const data = await fetch(
        "https://raw.githubusercontent.com/GilBrou/KasaProject/master/public/data.json"
    );
    return data.json();
}
