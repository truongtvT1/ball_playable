window.perfNow = ( !window.performance || !window.performance.now || !window.performance.timing ) ? Date.now : function() {
    return window.performance.now();
};

window.lunaStartup = {
    STARTUP: document.location.search.toLowerCase().indexOf( 'startup' ) >= 0,
    // Whole startup journey ( window.lunaStartup.logStartupEvent usages ):
    timestamps: {
        'luna:startup:htmlInitializationTimestamp': 0, // html loading started
        'DOMContentLoaded': 0, // html loading finished ( network related ) + Brotli/Base64/Base122 decompression
        'luna:build': 0,
        'luna:start': 0,
        'luna:starting': 0,
        'luna:startup:bundlesLoad': 0, // Bundles loading started
        'luna:startup:loadSimpleAssetsAsync': 0, // ProjectSettings, texture, shader, mesh, video, sound, animationClip, blendTree, textAsset, urpAsset, audioMixer, physicsMaterial3d/2d, audioMixerSnapshot
        'luna:startup:shaderReady': 0, // Shader Compilation
        'luna:startup:loadComplexAssetsAsync': 0, // Cubemap, material, sprite, font, animatorController, animatorOverrideController
        'luna:startup:loadPrefabsAsync': 0, // Prefabs deserializations
        'luna:startup:loadScenesAsync': 0, // Scene assets deserialization. Final step of bundles loading
        'luna:startup:luna:started': 0, // Engine and scene are fully loaded and started (Load scene, invokeCallbacks (awake everything), call tick(update + renderFrame)
        'frame': 0, // First frame rendered on the screen
    },
    measuredTime: {
        'decompressArrayBuffer': 0, // time for unbrotli + unpack base64/122
        'decompressString': 0, // time for unbrotli + unpack base64/122 + decode utf-8
    },
    // Prepare and cache timer function
    now: window.perfNow,
    logStartupEvent: function( event ) {
        const now = this.now();
        this.timestamps[ event ] = now;
    },

    notifyLoadingComplete: function() {
        if ( this.STARTUP ) {
            const totalTime = this.toSeconds( this.timestamps.frame - this.timestamps[ 'luna:startup:htmlInitializationTimestamp' ] );
            const avgStartupTimeInfo = this.getAverageStartupInfo( totalTime );
            // eslint-disable-next-line
            window.alert( this.userFriendlyReport( totalTime.toFixed( 3 ), avgStartupTimeInfo.startupCount,  avgStartupTimeInfo.avgStartupTime ) );
        }
    },

    getAverageStartupInfo: function( totalTime ) {
        const localStorage = window.localStorage;
        const savedBuildID = localStorage.getItem( 'buildID' );
        const startupInfoJson = localStorage.getItem( 'avgInfo' );
        let startupInfo = JSON.parse( startupInfoJson );
        const currentBuildID = Deserializers.buildID;
        if ( currentBuildID !== savedBuildID ) {
            startupInfo = { startupCount: 0, startupTimesSum: 0 };
            localStorage.setItem( 'buildID', currentBuildID );
        }

        const startupTimesSum = startupInfo.startupTimesSum + totalTime;
        const startupCount = startupInfo.startupCount + 1;
        const avgStartupTime = ( startupTimesSum / startupCount ).toFixed( 3 );
        localStorage.setItem( 'avgInfo', JSON.stringify( { startupCount: startupCount, startupTimesSum: startupTimesSum } ) );
        return { startupCount: startupCount, avgStartupTime: avgStartupTime };
    },

    toSeconds( value ) {
        return ( value / 1000.0 );
    },

    toFormattedSeconds( value ) {
        return this.toSeconds( value ).toFixed( 3 );
    },

    userFriendlyReport: function( totalTime, startupCount, avgStartupTime ) {
        const targetPlatform = window.$environment.targetPlatform;
        let result = `Total (${targetPlatform}): ${totalTime}s\n`;
        result += `Average total (${startupCount} startups): ${avgStartupTime}s\n`;

        // Compression might not be applied
        const decompressTime = this.measuredTime.decompressArrayBuffer && this.measuredTime.decompressString ? this.toFormattedSeconds( this.measuredTime.decompressArrayBuffer + this.measuredTime.decompressString ) : 0;
        const loadingTime = this.toFormattedSeconds( this.timestamps[ 'luna:build' ] - this.timestamps[ 'luna:startup:htmlInitializationTimestamp' ] - decompressTime );
        result += `${loadingTime}s - Loading from network\n`;
        result += `${decompressTime}s - Decompressions\n`;

        const simpleAssetsTime = this.toFormattedSeconds( this.timestamps[ 'luna:startup:loadSimpleAssetsAsync' ] - this.timestamps[ 'luna:startup:bundlesLoad' ] );
        result += `${simpleAssetsTime}s - Load: Textures, shaders, meshes, sounds, animations\n`;

        const shaderReadyTime = this.toFormattedSeconds( this.timestamps[ 'luna:startup:shaderReady' ] - this.timestamps[ 'luna:startup:loadSimpleAssetsAsync' ] );
        result += `${shaderReadyTime}s - Shaders compilation\n`;

        const complexAssetsTime = this.toFormattedSeconds( this.timestamps[ 'luna:startup:loadComplexAssetsAsync' ] - this.timestamps[ 'luna:startup:shaderReady' ] );
        result += `${complexAssetsTime}s - Load: Cubemaps, materials, sprites, fonts, animators\n`;

        const prefabsTime = this.toFormattedSeconds( this.timestamps[ 'luna:startup:loadPrefabsAsync' ] - this.timestamps[ 'luna:startup:loadComplexAssetsAsync' ] );
        result += `${prefabsTime}s - Load: Prefabs\n`;

        const sceneAssetsTime = this.toFormattedSeconds( this.timestamps[ 'luna:startup:loadScenesAsync' ] - this.timestamps[ 'luna:startup:loadPrefabsAsync' ] );
        result += `${sceneAssetsTime}s - Load: SceneData\n`;

        const initialSceneTime = this.toFormattedSeconds( this.timestamps[ 'luna:started' ] - this.timestamps[ 'luna:startup:loadScenesAsync' ] );
        result += `${initialSceneTime}s - Scene Loading and Awake\n`;

        if ( targetPlatform === 'develop' ) {
            result += 'For "develop" platform, build optimisations are not applied. Check final result on actual platform build on devices.\n';
        }
        result += 'Make sure you\'ve used all optimisation tools: use Runtime Analysis, exclude unused Shaders, disable "Auto Instantiate Prefabs", or downgrade Base122 to Base64\n';

        return result;
    },
    /**
     * Prints delta for all loged events
     */
    debugReport: function() {
        const keys = Object.keys( this.timestamps );
        const values = Object.values( this.timestamps );
        const totalTime = this.toFormattedSeconds( values[ values.length - 1 ] - values[ 0 ] );
        let result = `Total: ${totalTime} seconds\n\n`;
        for ( let i = 1; i < values.length; i++ ) {
            const dT = this.toFormattedSeconds( values[ i ] - values[ i - 1 ] );
            result += `${dT} sec : ${keys[ i ]}\n`;
        }
        return result;
    },
};

// Log initial time of HTML loading
window.lunaStartup.logStartupEvent( 'luna:startup:htmlInitializationTimestamp' );

window.addEventListener( 'DOMContentLoaded', () => {
    window.lunaStartup.logStartupEvent( 'DOMContentLoaded' );
    Bridge || Bridge.ready( () => {
        console.log( 'Bridge.ready' );
    } );
} );

window.addEventListener( 'luna:build', () => {
    window.lunaStartup.logStartupEvent( 'luna:build' );
} );

window.addEventListener( 'luna:start', () => {
    window.lunaStartup.logStartupEvent( 'luna:start' );
} );

window.addEventListener( 'luna:starting', () => {
    window.lunaStartup.logStartupEvent( 'luna:starting' );
} );

window.addEventListener( 'luna:startup:bundlesLoad', () => {
    window.lunaStartup.logStartupEvent( 'luna:startup:bundlesLoad' );
} );

window.addEventListener( 'luna:startup:loadSimpleAssetsAsync', () => {
    window.lunaStartup.logStartupEvent( 'luna:startup:loadSimpleAssetsAsync' );
} );

window.addEventListener( 'luna:startup:shaderReady', () => {
    window.lunaStartup.logStartupEvent( 'luna:startup:shaderReady' );
} );

window.addEventListener( 'luna:startup:loadComplexAssetsAsync', () => {
    window.lunaStartup.logStartupEvent( 'luna:startup:loadComplexAssetsAsync' );
} );

window.addEventListener( 'luna:startup:loadPrefabsAsync', () => {
    window.lunaStartup.logStartupEvent( 'luna:startup:loadPrefabsAsync' );
} );

window.addEventListener( 'luna:startup:loadScenesAsync', () => {
    window.lunaStartup.logStartupEvent( 'luna:startup:loadScenesAsync' );
} );

window.addEventListener( 'luna:started', () => {
    window.lunaStartup.logStartupEvent( 'luna:started' );
    const app = pc.Application.getApplication();
    // for backward compatibility, in our Playable tests we have older version of Application events,
    // where we patched application itself with events compatibility
    const events = app.events || app;
    events.once( 'postrender', () => {
        window.lunaStartup.logStartupEvent( 'frame' );

        // frame won't be rendered until requestAnimationFrame callback is finished,
        // so let's wait for next frame to show alert
        events.once( 'prerender', () => {
            window.lunaStartup.notifyLoadingComplete();
        }, this );
    }, this );
} );
