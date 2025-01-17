export const tocarSomFimWarmup = ( () => {
  let played = false;

  return () => {
    if ( !played ) {
      played = true;

      chrome.storage.sync.get( [ 'somFimWarmup', 'customSomFimWarmup', 'volume' ], function ( result ) {
        const som = result.somFimWarmup === 'custom' ? result.customSomFimWarmup : result.somFimWarmup;
        const audio = new Audio( som );
        const volume = result.volume || 100;
        audio.volume = volume / 100;
        audio.play();
      } );
    }
  };
} )();
