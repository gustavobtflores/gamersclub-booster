export const tocarSomFimWarmup = ( () => {
  let played = false;

  return distance => {
    if ( !played ) {
      chrome.storage.sync.get( [ 'somFimWarmup', 'somFimWarmupTempo', 'customSomFimWarmup', 'volume' ], function ( result ) {
        const tempo = result.somFimWarmupTempo || 60;
        if ( !result.somFimWarmup || distance > tempo ) { return false; }

        const som = result.somFimWarmup === 'custom' ? result.customSomFimWarmup : result.somFimWarmup;
        const audio = new Audio( som );
        const volume = result.volume || 50;
        audio.volume = volume / 100;
        audio.play();
        played = true;
      } );
    }
  };
} )();
