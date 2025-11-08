import { keys } from "./keys.js";

const pianoKeysContainer = document.querySelector(".piano-keys");

document.addEventListener("DOMContentLoaded", () => {
    keys.forEach((key) => createPianoKey(key));
});

const createPianoKey = (key) => {
    const { note, keyboard, IsBlack, specialKey } = key;

    const li = document.createElement("li");
    li.className = `key ${IsBlack ? "black" : "white"}`;

    const audioName = specialKey || keyboard;
    li.dataset.audioName = audioName;
    li.innerHTML = `
        <div>${note}</div>
        <span>${keyboard}</span>
    `;
    li.textContent = pianoKeysContainer.appendChild(li);
    AllAudioName.push(audioName);
};
