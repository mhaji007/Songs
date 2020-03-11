// Action creator
export const selectSong = (song) => {
    // Return an action
    // In general, type is required while payload is not mandatory. 
    return {
        type:'SONG_SELECTED',
        payload:song

    };
};

