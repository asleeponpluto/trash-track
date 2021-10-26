import { writable } from 'svelte/store';

export const coordArray = writable([]);
export const clickedCoords = writable({lat: null, lng: null});
